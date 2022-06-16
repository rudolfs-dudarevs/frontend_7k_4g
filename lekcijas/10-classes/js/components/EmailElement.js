import { BaseElement } from "./BaseElement.js";

export class EmailElement extends BaseElement {
    constructor(email, className) {
        super("a", className);
        this.fromattedEmail = `mailto:${email}`;
        this.baseElement.href = this.fromattedEmail;
        this.addText(email);
    }
}