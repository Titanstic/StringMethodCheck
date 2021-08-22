// keyboard input


function up(obj) {
    var x = document.getElementById(obj.id).innerHTML;
    document.getElementById("input").innerHTML += x;

}

function reset() {
    document.getElementById("input").innerHTML = "";
    document.getElementById("search").value = "";

}

function capslock() {
    console.log("hay capslock");
    document.getElementById("input").style.textTransform = "uppercase";
}

function lowerlock() {
    console.log("hay small letter");
    document.getElementById("input").style.textTransform = "lowercase";
}
// result

function charAt() {
    var x = document.getElementById("input").innerHTML;
    // console.log(x);
    var y = Number(document.getElementById("search").value);
    // console.log(y);
    if (x) {
        if (y) {
            window.alert(x.charAt(y));
            document.getElementById("search").value = "";
        } else {
            window.alert("Please Enter number");
        }
    } else {
        window.alert("Please input Keyboar");
    }
}

function charCodeAt() {
    var x = document.getElementById("input").innerHTML;
    var y = Number(document.getElementById("search").value);
    if (x) {
        if (y) {
            window.alert(x.charCodeAt(y));
            document.getElementById("search").value = "";
        } else {
            window.alert("Please Enter Number")
        }
    } else {
        window.alert("Please input keyboard");
    }
}

function upper() {
    var x = document.getElementById("input").innerHTML;
    if (x) {
        document.getElementById("search").value = "";
        window.alert(x.toUpperCase());
    } else {
        window.alert("Please input keyboard");
    }
}


function lower() {
    var x = document.getElementById("input").innerHTML;
    if (x) {
        document.getElementById("search").value = "";
        window.alert(x.toLowerCase());
    } else {
        window.alert("Please input keyboard");
    }
}

function trim() {
    var x = document.getElementById("input").innerHTML;
    if (x) {
        document.getElementById("search").value = "";
        window.alert(x.trim());
    } else {
        window.alert("Please input keyboard");
    }
}

function includes() {
    var x = document.getElementById("input").innerHTML;
    if (x) {
        var y = document.getElementById("search").value;
        if (y) {
            window.alert(x.includes(y));
            document.getElementById("search").value = "";
        } else {
            window.alert("Plaese enter value");
        }
    } else {
        window.alert("Please input keyboard");
    }
}

function index() {
    var x = document.getElementById("input").innerHTML;
    if (x) {
        var y = document.getElementById("search").value;
        if (y) {
            window.alert(x.indexOf(y));
            document.getElementById("search").value = "";
        } else {
            window.alert("Plaese enter value");
        }
    } else {
        window.alert("Please input keyboard");
    }
}

function last() {
    var x = document.getElementById("input").innerHTML;
    if (x) {
        var y = document.getElementById("search").value;
        if (y) {
            window.alert(x.lastIndexOf(y));
            document.getElementById("search").value = "";
        } else { window.alert("Please enter value") };
    } else { window.alert("Please input keyboard") }
}

function start() {
    var x = document.getElementById("input").innerHTML;
    if (x) {
        var y = document.getElementById("search").value;
        if (y) {
            window.alert(x.startsWith(y));
            document.getElementById("search").value = "";
        } else {
            window.alert("Please enter value");
        }
    } else {
        window.alert("Please input keyboard");
    }
}

function end() {
    var x = document.getElementById("input").innerHTML;
    if (x) {
        var y = document.getElementById("search").value;
        if (y) {
            window.alert(x.endsWith(y));
            document.getElementById("search").value = "";
        } else {
            window.alert("Please enter value");
        }
    } else {
        window.alert("Please input keyboard");
    }
}