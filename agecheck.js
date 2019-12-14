function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function setCookie(cname, cvalue, exdays) {
    console.log("Setting cookies");
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
var formsubmit = function (e) {
    e.preventDefault();
    const date = document.getElementById("date").value;
    const month = document.getElementById("month").value;
    const year = document.getElementById("year").value;
    var birthdate = new Date(year, month - 1, date, 0, 0, 0, 0);
    var today = new Date();
    var age = new Date(today - birthdate);
    age = age.getUTCFullYear() - 1970;
    if (age >= 18) {
        setCookie("verified", "true", 1);
        document.location.replace("./index.html");
    }
    else {
        setCookie("verified", "", 0);
    }
}
document.getElementById('form').addEventListener('submit', formsubmit, false);