var list = []; // array list with items of list
var toDoList = document.getElementById('todo-list'); //add element from document with list 
var btnAdd = document.getElementById('btn-add'); // find add button 
var btnDelete = document.getElementById('btn-delete'); // find delete button
var textboxEntry = document.getElementById('new-entry'); // find entry text form
var entry = ""; // string for entry text

function addEntry(entry){ //add text to array list
		list[list.length] = entry; 
}

function clickAdd(event){ //click listener on "add" button
	var btn = event.target; 
	if(textboxEntry.value != ""){ //if value has characters, do:
		addEntry(textboxEntry.value); //add entry into list array
		var item = document.createElement("li"); // create new element 
		var itemText = document.createTextNode(list[list.length-1]);//set text 
		item.appendChild(itemText); //place text to element
		toDoList.appendChild(item); // add elemnt into document
		textboxEntry.value = ""; // clear entry text form
	}
}

function clickDelete(event){ //click listener on delete button
	var btn = event.target;
	var counter = -1; // counter to help find right list index
	for (var x of toDoList.childNodes) { //find every child of <ul>
		counter++ 
		if(x.getAttribute('class') != null){ // if child has class
			console.log(counter); //prints index of deleted item
			list[counter]=null; //set null at marked item
			clearList(); // clear every null in array list
			counter--; // decrease counter to check list again
		}

	}
	refresh(); // refresh view of items
}

function clearList(){ // clear null values from list array
	for(i=0; i<list.length; i++){ 
		if(list[i] == null){ 
			list.splice(i, 1);
		}
	}
}

function clickMark(event){ //click listener for list items
	var btn = event.target;
	if(btn.getAttribute('class') == null){ //if list item isnt marked, mark it
		btn.setAttribute('class', 'marked');
	}
	else {btn.removeAttribute("class"); // if list item is marked, unmark it
	}
}

// function pressEnter(){

// }

function refresh(){ //refresh list items in document
	while(toDoList.firstChild){ //while are there any child, delete them 
		toDoList.removeChild(toDoList.firstChild);
	}

	for(j=0; j<list.length; j++){ //create new elements
		var item = document.createElement("li");
		var itemText = document.createTextNode(list[j]);
		item.appendChild(itemText);
		toDoList.appendChild(item);
	}
}


window.onload = function(){ // initial function
	for (i=0; i<list.length; i++){ 
		var item = document.createElement("li"); // create <li> element
		var itemText = document.createTextNode(list[i]); // create variable with text for this element, read from array list
		item.appendChild(itemText); // add text to element
		toDoList.appendChild(item); // add elemnt into document
	}
	btnAdd.addEventListener('click', clickAdd); // add event listeners to buttons
	btnDelete.addEventListener('click', clickDelete);
	toDoList.addEventListener('click', clickMark);
	// textboxEntry.addEventListener('keypress', pressEnter);
}



