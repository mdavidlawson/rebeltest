$(document).ready(function() {
  // buttons
  $("#addbtn").click(onAddClick);
  $("#removeselectedbtn").click(onRemoveSelectedClick);
  $("#clearbtn").click(onClearClick);
  $("#sortbynamebtn").click(onSortByNameClick);
  $("#sortbyvaluebtn").click(onSortByValueClick);

  //lists
  $(".list-group input").click(onListClick);
  loadKeyValueList(false, false);
});
function loadKeyValueList(sortByName, sortByValue){
  $.getJSON("/api/keyvaluestore", function(keyvaluestore){
    clearLocalKeyValueList();
    if (sortByValue) {
      var sortable = [];
      for(key in keyvaluestore){
        sortable.push([key, keyvaluestore[key]]);
      }
      sortable.sort(function(a, b){
        return a[1].toLowerCase()>b[1].toLowerCase();
      });
      for (sortedValue in sortable){
        addKeyValueToList(sortable[sortedValue][0], sortable[sortedValue][1]);
      }
      return;
    }

    var keys = Object.keys(keyvaluestore);
    if (sortByName){
      keys.sort(function(k1, k2){
        return k1.toLowerCase() > k2.toLowerCase();
      });
    }
    for(index in keys){
      var key = keys[index];
      addKeyValueToList(key, keyvaluestore[key]);
    }
  });
}
function addKeyValueToList(key, value){
  var listItem = key+"="+value;
  $("#keyvalueoutput>input").filter(function(){
    return this.value == "";
  }).first().val(listItem);
}
function clearLocalKeyValueList(){
  $("#keyvalueoutput>input").val("");
}
function getSelectedValue($listGroup){
  return $listGroup.find(".active").val();
}
function clearSelectedValue($listGroup){
  $listGroup.find(".active").val("");
}

function convertToJSON(keyValueSelection){
  var keyValueSplit = keyValueSelection.split("=");
  return {
    key:keyValueSplit[0].trim(),
    val:keyValueSplit[1].trim()
  };
}

// Frontend event handlers
function onAddClick(e){
  var $form = $("#keyvalueform");
  if(!$form[0].checkValidity || $form[0].checkValidity()){
    var keyValueSelection = getSelectedValue($("#keyvalueinput"));
    $.post("/api/keyvaluestore/keyvalue", convertToJSON(keyValueSelection)).done(function(resp){
      loadKeyValueList($("#sortbynamebtn").hasClass("active"), $("#sortbyvaluebtn").hasClass("active"));
    });
  }
}
function onListClick(e){
  e.preventDefault()

  $that = $(this);

  $that.parent().find('input').removeClass('active');
  $that.addClass('active');
}

function onRemoveSelectedClick(){
  console.log("Removing");
  var keyValueSelection = getSelectedValue($("#keyvalueoutput"));
  var key = convertToJSON(keyValueSelection)["key"];
  $.ajax({
    url: "/api/keyvaluestore/keyvalue/key/" + key,
    type: 'DELETE'
  }).done(function(resp){
    loadKeyValueList($("#sortbynamebtn").hasClass("active"), $("#sortbyvaluebtn").hasClass("active"));
  });

  // For better usability, in case the user is intending to use this to clear the left hand input, also clear the selected element to add
  clearSelectedValue($("#keyvalueinput"));

}
function onClearClick(){
  console.log("Clearing");
  $.ajax({
    url: "/api/keyvaluestore",
    type: 'DELETE'
  }).done(function(resp){
    loadKeyValueList($("#sortbynamebtn").hasClass("active"), $("#sortbyvaluebtn").hasClass("active"));
  });

  // in case the user also intends on clearing the left hand input:
  $("#keyvalueinput>input").val("");
}
function onSortByNameClick(){
  console.log("Sorting by name");
  $(this).toggleClass("active");
  if(!$(this).hasClass("active")) {
    return;
  }
  $("#sortbyvaluebtn").removeClass("active");
  loadKeyValueList(true, false);
}
function onSortByValueClick(){
  console.log("Sorting by value");
  $(this).toggleClass("active");
  if(!$(this).hasClass("active")) {
    return;
  }
  $("#sortbynamebtn").removeClass("active");
  loadKeyValueList(false, true);
}
