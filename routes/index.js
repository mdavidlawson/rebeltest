var express = require("express");

// API Index
var api = require("./api");
var api_router = express.Router();

api_router.get("/keyvaluestore", api.keyvalue.getAllKeyValues);
api_router.get("/keyvaluestore/export/xml", api.keyvalue.getAllKeyValuesAsXml);
api_router.post("/keyvaluestore/keyvalue", api.keyvalue.addKeyValuePair);
api_router.delete("/keyvaluestore/keyvalue/key/:key", api.keyvalue.delKeyValuePair);
api_router.delete("/keyvaluestore", api.keyvalue.delAllKeyValues);

// View Index
var pages = require("./pages");
var view_router = express.Router();
view_router.get("/", pages.keyvaluemanager.init);

var exports = module.exports
exports.api = api_router;
exports.view = view_router;
