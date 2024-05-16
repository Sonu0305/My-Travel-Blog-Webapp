
function displayWelcomeMessage() {
    alert("Welcome to My Travel Blog Web App!");
}

function search() {
    var searchTerm = document.getElementById("searchInput").value.toLowerCase().trim();

    var searchMapping = {
        "about": "About.html",
        "travel": "Travel.html",
        "eat": "Eat.html",
        "relax": "Relax.html",
        "videos": "Videos.html",
        "contact": "Contact.html"
    };

    if (searchMapping.hasOwnProperty(searchTerm)) {
        var targetUrl = searchMapping[searchTerm];
        window.location.href = targetUrl; 
    } else {
        alert("Sorry, no results found for '" + searchTerm + "'. Please try again.");
    }
}

document.getElementById("searchInput").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        search(); 
    }
});
window.onload = displayWelcomeMessage;
