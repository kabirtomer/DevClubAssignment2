



var list = document.getElementsByClassName("entry");
function add_properties(entries,ini_index) {
	var i;
	for (i = ini_index; i < entries.length; i++) {
		temp=entries[i];
	    var span = document.createElement("SPAN");
	    span.className = "close_button";
	    entries[i].appendChild(span);
	    var txt = document.createTextNode("x");
	    span.appendChild(txt);
	    temp.onclick=function(){this.classList.toggle('ticked')};
	    span.onclick = function(){this.parentElement.style.display = "none"};

	}
}
// Activate all close buttons
add_properties(list,0);



var add = document.querySelector("#input_row span");


add.onmousedown = function(){
	this.classList.toggle('dark_button');
}
add.onmouseup = function(){
	this.classList.toggle('dark_button');
}

add.onclick= function(){
	var input_value = (document.getElementsByTagName("input"))[0].value;
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
