type vNodeType = {
  tagName: string;
  props: object;
  children: Array<Function | string>
}

export const createVNode = (tagName: string | Function, props = {}, ...children: any) => {
  if (typeof tagName === "function") {
    return tagName(props, children);
  }

  return {
    tagName,
    props,
    children: children.flat()
  };
};

export const createDOMNode = (vNode: vNodeType) => {
  if (typeof vNode === "string") {
    return document.createTextNode(vNode);
  }

  const { tagName, props, children } = vNode;

  const node = document.createElement(tagName);

  patchProps(node, {}, props);

  children.forEach((child: any) => {
    node.appendChild(createDOMNode(child));
  });

  return node;
};

export const mount = (node: Node, target: HTMLElement) => {
  target.replaceWith(node);
  return node;
};

export const patchNode = (node: ChildNode, vNode: vNodeType, nextVNode: vNodeType ) => {
  if (nextVNode === undefined) {
    node.remove();
    return;
  }

  if (typeof vNode === "string" || typeof nextVNode === "string") {
    if (vNode !== nextVNode) {
      const nextNode = createDOMNode(nextVNode);
      node.replaceWith(nextNode);
      return nextNode;
    }

    return node;
  }

  if (vNode.tagName !== nextVNode.tagName) {
    const nextNode = createDOMNode(nextVNode);
    node.replaceWith(nextNode);
    return nextNode;
  }

  patchProps(node, vNode.props, nextVNode.props);
  patchChildren(node, vNode.children, nextVNode.children);

  return node;
};

const patchProp = (node: any, key: string, value: string | unknown, nextValue: string | unknown) => {
  if (key.startsWith("on")) {
    const eventName = key.slice(2);

    node[eventName] = nextValue;

    if (!nextValue) {
      node.removeEventListener(eventName, listener);
    } else if (!value) {
      node.addEventListener(eventName, listener);
    }
    return;
  }

  if (nextValue == null || nextValue === false) {
    node.removeAttribute(key);
    return;
  }

  node.setAttribute(key, nextValue);
};

const patchProps = (node: Node, props: object | any, nextProps: object | any) => {
  const mergedProps = { ...props, ...nextProps };

  Object.keys(mergedProps).forEach((key) => {
    if (props[key] !== nextProps[key]) {
      patchProp(node, key, props[key], nextProps[key]);
    }
  });
};

const patchChildren = (parent: Node, vChildren: any, nextVChildren: any) => {
  parent.childNodes.forEach((childNode, i) => {
    patchNode(childNode, vChildren[i], nextVChildren[i]);
  });

  nextVChildren.slice(vChildren.length).forEach((vChild: vNodeType) => {
    parent.appendChild(createDOMNode(vChild));
  });
};

export const patch = (nextVNode: any, node: any) => {
  const vNode = node.v || recycleNode(node);

  node = patchNode(node, vNode, nextVNode);
  node.v = nextVNode;

  return node;
};

const TEXT_NODE_TYPE = 3;

const recycleNode = (node: Node) => {
  if (node.nodeType === TEXT_NODE_TYPE) {
    return node.nodeValue;
  }

  const tagName = node.nodeName.toLowerCase();
  const children = [].map.call(node.childNodes, recycleNode);

  return createVNode(tagName, {}, children);
};

function listener(this: any, event: Event) {
  return this[event.type](event);
}

// class Component {
//   constructor(props) {
//     this.props = props;
//     this.state = this.state || {};
//   }

//   setState(partialState) {
//     this.state = Object.assign({}, this.state, partialState);
//     updateInstance(this.__internalInstance);
//   }
// }
//   function updateInstance(internalInstance) {
//     const parentDom = internalInstance.dom.parentNode;
//     const element = internalInstance.element;
//     reconcile(parentDom, internalInstance, element);
//   }

const Didact = {
  patch,
  createVNode,
}

export default Didact;




