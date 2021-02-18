export type EventCalback = (message: string) => void
export type Prop = {}

export abstract class EventBusAbstract {
	abstract on(event:string, callback: EventCalback): void;
	abstract off(event:string, callback: EventCalback): void;
	abstract emit(event:string, ...args: any): void;
}

export interface ListenersInterface {
		[key: string]: Array<any>
}
export abstract class TemplatorAbstract {
	_template: string
	abstract compile(ctx: object): any
}

export interface ToHtmlInterface {
	 (query: string, block: object): HTMLElement | null
}

export interface MetaInterface {
	tagName: string,
	props: object,
	className: string
}
export interface BlockInterface {
	_element: any;
	_meta: MetaInterface;
	className: string;
	props: object;
	_createResources():void
	_createDocumentElement(tagName: string):void
	_createResources():void
	_componentDidMount(oldProps: object):void
	_componentDidUpdate(oldProps: object, newProps: object):void
	toHtml():void
	_createDocumentElement(tagName: string): any
}

export type Nullable<T> = T | null
