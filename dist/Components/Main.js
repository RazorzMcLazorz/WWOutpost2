"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_dom_1 = require("react-dom");
class MainMenu extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.state = {};
    }
    render() {
        return (react_1.default.createElement("div", null, "Hey i worked"));
    }
}
// const mapStateToProps = (state) => {
//     return state
// }
// MainMenu = connect(mapStateToProps, actions)(MainMenu);
react_dom_1.render(react_1.default.createElement(MainMenu), document.getElementById('example'));
