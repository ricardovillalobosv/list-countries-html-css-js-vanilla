const addAttributes = (element, attrObj) => {
  for (let attr in attrObj) {
    if (attrObj.hasOwnProperty(attr)) element.setAttribute(attr, attrObj[attr]);
  }
};

const createCustomElement = (element, attributes, children) => {
  let customElement = document.createElement(element);
  // console.log(children);
  if (children !== undefined) {
    children.forEach((el) => {
      if (el.nodeType) {
        if (el.nodeType === 1 || el.nodeType === 11)
          customElement.appendChild(el);
      } else {
        customElement.innerHTML += el;
      }
    });
  }
  addAttributes(customElement, attributes);
  return customElement;
};
