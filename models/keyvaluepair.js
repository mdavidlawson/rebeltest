var fs = require("fs");
var rebelteststorepath = process.env.LIST_STORAGE;
if (!rebelteststorepath) {
  throw Error("Cannot run application without LIST_STORAGE environment variable being set. Please set this environment variable.");
}
var exports = module.exports;


exports.list = function(){
  if (!fs.existsSync(rebelteststorepath)) {
    return {};
  }
  var keyValuePairs = JSON.parse(fs.readFileSync(rebelteststorepath, 'utf8'));;
  if (!keyValuePairs) {
    return {};
  }
  return keyValuePairs;
}

exports.save = function(k, v){

  return new Promise(function(resolve, reject){
    var newList = exports.list();
    if (newList[k]){
      console.log("Cannot add duplicate value");
      return;
    }
    newList[k] = v;
    fs.writeFile(rebelteststorepath, JSON.stringify(newList), function(err){
      if (err){
        reject(err);
      }
      resolve();
    });
  });
}

exports.clear = function(){
  return new Promise(function(resolve, reject){
    if (!fs.existsSync(rebelteststorepath)) {
      return;
    }
    fs.unlink(rebelteststorepath, function(err){
      if(err){
        reject(err);
      }
      resolve();
    });
  });
}
exports.remove = function(k){
  return new Promise(function(resolve, reject){
    var newList = exports.list();
    if(!newList[k]){
      return;
    }
    delete newList[k];
    fs.writeFile(rebelteststorepath, JSON.stringify(newList), function(err){
      if(err){
        reject(err);
      }
      resolve();
    });
  });
}
