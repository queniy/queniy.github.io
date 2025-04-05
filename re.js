document.addEventListener("DOMContentLoaded", ()=>{
        if (localStorage.getItem("a")) {alert("You are not logged In");window.location.href = "main.html";};})
const params = new URLSearchParams(window.location.search);
                    const value = params.get("a");
                    if (!value) {
                        let username = localStorage.getItem("rusername");
                        document.getElementById("Username").innerHTML = username;
                    } else {
                        document.getElementById("Username").innerHTML = "anonymous";
                    }
if (window.location.href == "index.html") {
        localStorage.deleteItem("a");
}
