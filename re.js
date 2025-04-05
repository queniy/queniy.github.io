if (window.location.href == "Pages.html") {document.addEventListener("DOMContentLoaded", ()=>{
        if (localStorage.getItem("a")) {alert("You are not logged In");window.location.href = "main.html";};})
}
if (window.location.href == "Pages.html" || window.location.href == "Pages.html") {
const value = localStorage.getItem("a");
if (!value) {
        let username = localStorage.getItem("rusername");
         document.getElementById("Username").innerHTML = username;
} else {
        document.getElementById("Username").innerHTML = "anonymous";
}}
if (window.location.href == "") {
        localStorage.removeItem("a");
}
window.location.href = "https://mangahigh.com";
