$(document).on("pagecreate","#pageone",function(){
  $('#submitButton').on("click", function(){
    submitText();
  });            
});            


function submitText() {
	var text = $('#textinput').val();
<<<<<<< HEAD
	alert("Finger guns");
=======
	alert(text);
>>>>>>> e3957b8714235e39cce442995ef93204fc38878c
}

function storeValue(key, value) {
	//add some code to store the key-value pair in persistant storage 
} fvgb