var KeyValuePair = require("../../models/keyvaluepair");
var json2xml = require("json2xml");

var exports = module.exports;

exports.getAllKeyValues = function(req, res){
  console.log(JSON.stringify(KeyValuePair.list()));
  res.json(KeyValuePair.list());
}
exports.addKeyValuePair = function(req, res){
  console.log("Adding: " + req.body.key + ": " + req.body.val);
  KeyValuePair.save(req.body.key, req.body.val).then(function(){
    res.end("Added");
  }, function(err){
    console.error(err);
    res.status(500).send(err.message);
  }).catch(function(err){
    console.error(err);
    res.status(500).send(err.message);
  });
}
exports.delAllKeyValues = function(req, res){
  KeyValuePair.clear().then(function(){
    res.end("Deleted all Key Values");
  }, function(err){
    console.error(err);
    res.status(500).send(err.message);
  }).catch(function(err){
    console.error(err);
    res.status(500).send(err.message);
  });
}
exports.getAllKeyValuesAsXml = function(req, res){
  var jsonKeyValuePairs = KeyValuePair.list();
  res.set('Content-Type', 'text/xml');
  res.send(json2xml({keyValueDataStore: jsonKeyValuePairs}));
}
exports.delKeyValuePair = function(req, res){
  KeyValuePair.remove(req.params.key).then(function(){
    res.end("Deleted key value: " + req.params.key);
  }, function(err){
    console.error(err);
    res.status(500).send(err.message);
  }).catch(function(err){
    console.error(err);
    res.status(500).send(err.message);
  });
}
