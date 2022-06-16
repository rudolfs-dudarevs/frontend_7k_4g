export class BaseElement {
    constructor(tagName, className) {
        this.tagName = tagName;
        this.className = className;
        this.baseElement = this.createBaseElement();
    }

    createBaseElement() {
        const baseElement = document.createElement(this.tagName);
        baseElement.classList.add(this.className);

        return baseElement
    }

    addText(text) {
        this.baseElement.innerText = text;
    }

    render(container) {
        container.append(this.baseElement);
    }
}