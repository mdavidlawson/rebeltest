var fs = require("fs");
var rebelteststorepath = "/tmp/rebelteststore.json";
var exports = module.exports;

exports.save = function(k, v){
  var newList = this.list();
  if (newList[k]){
    console.log("Cannot add duplicate value");
    return;
  }
  newList[k] = v;
  fs.writeFile(rebelteststorepath, JSON.stringify(newList), function(){console.log('Updated File')});
}

exports.list = function(){
  if (!fs.existsSync(rebelteststorepath)) {
    return {};
  }
  var keyValuePairs = require(rebelteststorepath);
  if (!keyValuePairs) {
    return {};
  }
  return keyValuePairs;
}

exports.clear = function(){
  fs.unlink(rebelteststorepath);
}
exports.remove = function(k){
  var newList = this.list();
  if(!newList[k]){
    return;
  }
  delete newList[k];
  fs.writeFile(rebelteststorepath, JSON.stringify(newList), function(){console.log('Updated File')});
}
