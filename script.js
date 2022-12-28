var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelector("li");
var listLi = document.querySelectorAll("li");

function inputLength() {
	return input.value.length;
}

function deleteItem(item) {
	item.parentElement.remove();
}

function createDeleleteButton() {
	var deletebtn = document.createElement("button");
	deletebtn.textContent = "Delete";
	deletebtn.addEventListener("click", function(){
		deletebtn.parentElement.remove();
	})
	return deletebtn;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	scratchItem(li);
	li.append(createDeleleteButton());
	ul.appendChild(li);
	input.value = "";
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function scratchItem (item) {
	item.addEventListener("click", function () {
		item.classList.toggle("done");
	})
}

input.addEventListener("keypress", addListAfterKeypress);
button.addEventListener("click", function  () {
	if (inputLength() > 0) {
		createListElement();	
	} 
})

listLi.forEach(function(item) {
	scratchItem(item);
	item.append(createDeleleteButton());
})