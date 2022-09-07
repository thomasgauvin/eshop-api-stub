"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const data_1 = __importDefault(require("./data"));
const router = express_1.default.Router();
/**
 * @openapi
 * /api/v1/Catalog/items:
 *   get:
 *     tags:
 *       - Catalog
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.get("/api/v1/Catalog/items", function (req, res) {
    setTimeout(() => {
        res.status(200).json(data_1.default);
    }, 5000);
});
/**
 * @openapi
 * /api/v1/Catalog/items:
 *   put:
 *     tags:
 *       - Catalog
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.put("/", function (req, res) {
    res.status(200).json("hello world");
});
/**
 * @openapi
 * /api/v1/Catalog/items:
 *   post:
 *     tags:
 *       - Catalog
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.post("/", function (req, res) {
    res.status(200).json("hello world");
});
/**
 * @openapi
 * /api/v1/Catalog/items/{id}:
 *   get:
 *     tags:
 *       - Catalog
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.get("/:id", function (req, res) {
    res.status(200).json("hello world");
});
/**
 * @openapi
 * /api/v1/Catalog/items/withname/{name}:
 *   get:
 *     tags:
 *       - Catalog
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.get("/withname/:name", function (req, res) {
    res.status(200).json("hello world");
});
/**
 * @openapi
 * /api/v1/Catalog/items/type/{catalogTypeId}/brand/{catalogBrandId}:
 *   get:
 *     tags:
 *       - Catalog
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.get("/withname/:id", function (req, res) {
    res.status(200).json("hello world");
});
/**
 * @openapi
 * /api/v1/Catalog/items/type/all/brand/{catalogBrandId}:
 *   get:
 *     tags:
 *       - Catalog
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.get("/withname/:id", function (req, res) {
    res.status(200).json("hello world");
});
/**
 * @openapi
 * /api/v1/Catalog/catalogtypes:
 *   get:
 *     tags:
 *       - Catalog
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.get("/withname/:id", function (req, res) {
    res.status(200).json("hello world");
});
/**
 * @openapi
 * /api/v1/Catalog/catalogbrands:
 *   get:
 *     tags:
 *       - Catalog
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.get("/withname/:id", function (req, res) {
    res.status(200).json("hello world");
});
/**
 * @openapi
 * /api/v1/Catalog/{id}:
 *   delete:
 *     tags:
 *       - Catalog
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.get("/withname/:id", function (req, res) {
    res.status(200).json("hello world");
});
router.get("/:id", function (req, res) {
    res.status(200).json("hello world");
});
router.post("/", function (req, res) {
    res.status(200).json("hello world");
});
router.put("/:id", function (req, res) {
    res.status(200).json("hello world");
});
router.delete("/:id", function (req, res) {
    res.status(200).json("hello world");
});
exports.default = router;
//# sourceMappingURL=api.js.map