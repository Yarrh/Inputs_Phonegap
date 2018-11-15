$(document).on("pagecreate","#pageone",function(){
  $('#submitButton').on("click", function(){
    submitText();
  });            
});            


function submitText() {
	var text = $('#textinput').val();
	alert("Finger guns");
}

function storeValue(key, value) {
	//add some code to store the key-value pair in persistant storage 
} fvgb