var KeyValuePair = require("../../models/keyvaluepair");
var json2xml = require("json2xml");

var exports = module.exports;

exports.getAllKeyValues = function(req, res){
  res.json(KeyValuePair.list());
}
exports.addKeyValuePair = function(req, res){
  KeyValuePair.save(req.body.key, req.body.val);
  res.end("Added");
}
exports.delAllKeyValues = function(req, res){
  KeyValuePair.clear();
  res.end("Deleted all Key Values");
}
exports.getAllKeyValuesAsXml = function(req, res){
  var jsonKeyValuePairs = KeyValuePair.list();
  res.set('Content-Type', 'text/xml');
  res.send(json2xml({keyValueDataStore: jsonKeyValuePairs}));
}
exports.delKeyValuePair = function(req, res){
  KeyValuePair.remove(req.params.key);
  res.end("Deleted key value: " + req.params.key);
}
