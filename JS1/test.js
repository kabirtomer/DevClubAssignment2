var i;



var entries = document.getElementsByClassName("entry");
for (i = 0; i < entries.length; i++) {
	temp=entries[i];
    var span = document.createElement("SPAN");
    span.className = "close_button";
    entries[i].appendChild(span);
    var txt = document.createTextNode("x");
    span.appendChild(txt);
    temp.onclick=function(){this.classList.toggle('ticked')};
}
// Activate all close buttons

var y = document.getElementsByClassName('close_button'); 
for(i=0;i<y.length;i++){
	y[i].onclick = function(){this.parentElement.style.display = "none"}; //Why can't I make a seperate function to do this? Why doesnt it work? 
}


