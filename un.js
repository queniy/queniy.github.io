const value = localStorage.getItem("a");
if (!value) {
        let username = localStorage.getItem("rusername");
         document.getElementById("Username").innerHTML = username;
} else {
        document.getElementById("Username").innerHTML = "anonymous";
}}
