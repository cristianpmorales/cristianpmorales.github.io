$(document).ready(function(){


// *****************************************Javascript for student list***************************************************************************************************

//inout for student Name
//Save the student name in an array
//spit out studen name from a list


//created the array
var studentList = [];
var error = document.querySelector('.message');
//Teacher inputs the name
$('button').eq(0).on('click',function(){
 //get values out of inputs
	var studentName = $('input').eq(0).val()
	console.log(studentName);
	//if the results do not have a nuber in the string save to the array
	if (result = /^[A-Za-z]+$/.test(studentName)){
		//Saves and pushes names to array
		error.innerHTML = "Student name has been saved"
		studentList.push(studentName)
		console.log(studentList)
		console.log(result); // true
		//else return an error error
	}else{
		error.innerHTML = "Please enter a valid name";
		console.log ("nope")
		}
	//studentName= $(this).val('')
	//clears the input box after it is clicked
	document.getElementById('studentIputBox').value=''
});


$('button').eq(1).on('click',function(){

	studentList.forEach(function (el) {
				$('ul').append('<li>'+el+'</li>')
	})
});

// *****************************************Javascript for student list***************************************************************************************************



});//$(document).ready(function(){
