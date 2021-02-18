import { EventBus } from './event-bus'
import { BlockInterface, MetaInterface, Prop } from "../types/core";

import { isEqual } from "../utils/isEqual";
import { makePropsProxy } from "../utils/proxyProps";

export default abstract class Block implements BlockInterface {

  static EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_RENDER: "flow:render",
    FLOW_CDU: "flow:component-did-update",
  };
  _element:  HTMLElement
  _meta: MetaInterface
  _children: Array<Block | string>
  
	private eventBus: () => EventBus;
	className: string
  props: any
  state: {}

  constructor(
    tagName: string = "div",
    props:any = {},
    className: string,
    ) {
		const eventBus = new EventBus()
    this._meta = {
      tagName,
      props,
			className
    };
		this.props = makePropsProxy(props);
		this.state = this.state || {};
		this.className = className

    this.eventBus = () => eventBus;
    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this.render.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
  }

  _createResources() {
    const { tagName } = this._meta;
    this._element = this._createDocumentElement(tagName);
  }

  init() {
    this._createResources();
  }

  _componentDidMount(oldProps: Prop) {
    this.componentDidMount(oldProps);
  }

  componentDidMount(oldProps: Prop): void {
		console.log(oldProps);

	}
  _componentDidUpdate(oldProps: Prop, newProps: Prop) {
		const response = this.componentDidUpdate(oldProps, newProps);
		if(response){
			Object.assign(oldProps, newProps);
			this.eventBus().emit(Block.EVENTS.FLOW_RENDER)
		}
  }

  componentDidUpdate(oldProps: Prop, newProps: Prop) {
      return isEqual(oldProps, newProps)
  }

  setProps = (nextProps: object) => {
    if (!nextProps) {
      return;
    }
		this.eventBus().emit(Block.EVENTS.FLOW_CDU, this.props, nextProps)
  };

  setState = (nextState: object) => {
    if (!nextState) {
      return;
    }
		this.eventBus().emit(Block.EVENTS.FLOW_CDU, this.state, nextState)
  };
  setAttributes(attributes: any){
      const currentElement = this.getContent()
      Object.keys(attributes).forEach((key: string)=>{
        const value: string = attributes ? attributes[key] : ''
        currentElement.setAttribute(key, value)
      })
    
  }
  get element() {
    return this._element;
  }
  get children() {
    return this._children;
  }
  set child(items: Array<Block | string>) {
    this._children = items
  }

  // _render() {
	// const block = this.render();
  //   this._element.innerHTML = block
  // }
  render(passedChildren?:Array<string>):any {
    if (passedChildren) {
      passedChildren?.forEach(child => {
        this._element.innerHTML = child
      });
    }else{
     const content =  this.getChildrenArray()
     content.forEach(child => {
       if(typeof child === 'string'){
         this._element.innerHTML = child
        }else{
         this._element.appendChild(child?.toHtml().outerHTML)
       }
      });
    }
  }

  toHtml(): any{}

  getContent() {
    return this.element;
  }
  getChildrenArray() {
    return this.children;
  }

  getState() {
    return this.state;
  }

  _createDocumentElement(tagName: string) {
		const content = document.createElement(tagName);
		if(this.className){
			content.setAttribute("class", this.className);
		}
    return content
	}
  show() {
		if (this.element) this.element.style.display = 'block'
  }
  hide() {
		if (this.element) this.element.style.display = 'none'
  }
}
