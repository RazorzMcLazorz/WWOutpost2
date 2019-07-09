"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const port = process.env.PORT || 3000;
const app = express_1.default();
app.use(express_1.default.static(__dirname + '/dist/'));
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});
app.listen(port);
console.log("server started");
