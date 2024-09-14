document.addEventListener("DOMContentLoaded", function() {
    var navItems = document.querySelectorAll('.bd-sidenav li, #main-toc li');
    navItems.forEach(function(item) {
        item.classList.add('active');
        var ul = item.querySelector('ul');
        if (ul) {
            ul.style.display = 'block';
        }
    });
});
