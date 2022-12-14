"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const api_1 = __importDefault(require("./api"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = process.env.PORT || 4000;
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "eShop - Catalog HTTP API",
            version: "0.1.0",
            description: "The Catalog service HTTP API. THis is a Data-Driven/CRUD sample.",
            license: {
                name: "MIT",
                url: "https://spdx.org/licenses/MIT.html",
            },
        },
        servers: [
            {
                url: "http://localhost:3000/",
            },
        ],
    },
    apis: ["./api.js"],
};
const specs = (0, swagger_jsdoc_1.default)(options);
app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(specs));
app.use((0, cors_1.default)());
app.use(api_1.default);
app.use("/api", express_1.default.static('public'));
app.get('/', (req, res) => {
    res.send('Hello World 2!');
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
//# sourceMappingURL=index.js.map