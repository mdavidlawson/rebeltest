var fs = require("fs");
var rebelteststorepath = "/tmp/rebelteststore.json";
var exports = module.exports;

exports.save = function(k, v){
  var newList = this.list();
  newList.push({keyvaluepair:{key: k, value: v}});
  fs.writeFile(rebelteststorepath, JSON.stringify(newList), function(){console.log('Updated File')});
}

exports.list = function(){
  if (!fs.existsSync(rebelteststorepath)) {
    return [];
  }
  var keyValuePairs = require(rebelteststorepath);
  if (!keyValuePairs) {
    return [];
  }
  return keyValuePairs;
}

exports.clear = function(){
  fs.unlink(rebelteststorepath);
}
