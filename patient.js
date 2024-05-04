var input = document.getElementById("searchInput");
var dropdown = document.getElementById("searchDropdown");


input.addEventListener("focus", function() {
    dropdown.style.display = "block";
});


input.addEventListener("blur", function() {

    setTimeout(function() {
        dropdown.style.display = "none";
    }, 200);
});


dropdown.addEventListener("click", function(e) {
    if (e.target && e.target.classList.contains("search-dropdown-item")) {
        input.value = e.target.textContent;
        dropdown.style.display = "none";
    }
});

document.getElementById("dropdownDefaultButton").addEventListener("mouseover", function() {
    document.getElementById("dropdownDefaultButton").classList.add("show");
});


document.getElementById("dropdownDefaultButton").addEventListener("mouseleave", function() {
    document.getElementById("dropdownDefaultButton").classList.remove("show");
});