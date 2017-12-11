



var list = document.getElementsByClassName("entry");
function add_properties(entries,ini_index) {
	var i;
	for (i = ini_index; i < entries.length; i++) {
		temp=entries[i];
		var edit = document.createElement("SPAN");
		edit.className = "edit_button";
	    entries[i].appendChild(edit);
	    var txt = document.createTextNode("edit");
	    edit.appendChild(txt)
	    var span = document.createElement("SPAN");
	    span.className = "close_button";
	    entries[i].appendChild(span);
	    var txt = document.createTextNode("x");
	    span.appendChild(txt);
	    temp.onclick=function(){this.classList.toggle('ticked')};
	    span.onclick = function(){this.parentElement.style.display = "none"};
	    temp.onmouseover = function(){
	     	((this.getElementsByTagName('span'))[1]).style.opacity=1;
	    	((this.getElementsByTagName('span'))[0]).style.opacity=1;
	    }
		temp.onmouseout = function(){
	     	((this.getElementsByTagName('span'))[1]).style.opacity=0;
	    	((this.getElementsByTagName('span'))[0]).style.opacity=0;
	    }	   
	    edit.onclick =  scoper(edit);
	    	

	    
	}
}
// Activate all close buttons
add_properties(list,0);
function scoper(edit){
	return function(){
		edit.parentElement.classList.toggle('ticked');
	    	var add = document.querySelector("#input_row span");
			add.innerHTML="Done";
			(document.getElementsByTagName("input"))[0].value =edit.parentElement.childNodes[0].nodeValue;
			add.onclick= done_button_properties(add,edit);
	}
}

function done_button_properties(add,edit) {
	return function(){
	var input_value = (document.getElementsByTagName("input"))[0].value;
	if(input_value != ''){
		(document.getElementsByTagName("input"))[0].value ='';
        edit.parentElement.childNodes[0].nodeValue = input_value;
        add.onclick= function(){button_prop()};
        add.innerHTML="Add"


    }
}
}

var add = document.querySelector("#input_row span");


add.onmousedown = function(){
	this.classList.toggle('dark_button');
}
add.onmouseup = function(){
	this.classList.toggle('dark_button');
}

function button_prop(){
	var input_value = (document.getElementsByTagName("input"))[0].value;
	(document.getElementsByTagName("input"))[0].value ='';
	if(input_value != ''){
		var entry = document.createElement("div");
		entry.classList.toggle('entry');
        var content = document.createTextNode(input_value);
        entry.appendChild(content);
        document.getElementById("entry_box").appendChild(entry);
        var list = document.getElementsByClassName("entry");
        var ini_length=list.length;
        add_properties(list,ini_length-1);
    }
}

add.onclick= function(){button_prop()};

	
