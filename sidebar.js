function opennav(){
    document.getElementById('sidenav').style.width="100%"
}
function closenav(){
    document.getElementById('sidenav').style.width="0"
}

function openpage(){
  var x = document.getElementById("search").value
    if(x === "Men"){
        window.open("mencl.html");
    }
}