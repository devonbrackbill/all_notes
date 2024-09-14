function expandTOC() {
    console.log("Expanding TOC...");
    var navItems = document.querySelectorAll('.bd-sidenav li, #main-toc li');
    console.log("Found " + navItems.length + " navigation items");
    navItems.forEach(function(item, index) {
        console.log("Processing item " + index);
        item.classList.add('active');
        var ul = item.querySelector('ul');
        if (ul) {
            console.log("Found nested ul in item " + index);
            ul.style.display = 'block';
        }
    });
    console.log("TOC expansion complete");
}

// Try to run on DOMContentLoaded
document.addEventListener("DOMContentLoaded", expandTOC);

// Also try to run after a short delay, in case the TOC is loaded dynamically
setTimeout(expandTOC, 1000);

// Run again when the page is fully loaded
window.addEventListener('load', expandTOC);
