//JS for RazgrizWeb
function spinImg(id) {
    var obj = document.getElementById(id);
    if(obj.className.indexOf("animated tada") == -1) {
        obj.className += " animated tada";
        setTimeout(function() {
            obj.className = obj.className.replace(" animated tada", "");
        }, 600);
    }
}

function openSection(id) {
    var obj = document.getElementById(id);
    if(obj.className.indexOf("w3-show") == -1) {
        obj.className += " w3-show";
        obj.previousElementSibling.className = obj.previousElementSibling.className.replace(" w3-black", " w3-red");
    }
    else {
        obj.className = obj.className.replace(" w3-show", "");
        obj.previousElementSibling.className = obj.previousElementSibling.className.replace(" w3-red", " w3-black");
    }
}
