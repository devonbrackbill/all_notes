# All Notes

<!-- ![Ancient books](img/chris-lawton-zvKx6ixUhWQ-unsplash.jpg) -->

<div id="main-toc"></div>

<script>
document.addEventListener('DOMContentLoaded', function() {
    var sidebar = document.querySelector('.bd-sidebar');
    var mainToc = document.getElementById('main-toc');
    if (sidebar && mainToc) {
        var sidebarNav = sidebar.querySelector('nav');
        if (sidebarNav) {
            mainToc.innerHTML = sidebarNav.innerHTML;
            mainToc.querySelector('.bd-links').classList.remove('bd-links');
        }
    }
});
</script>

<style>
#main-toc {
    max-width: 100%;
    margin: 0 auto;
}
#main-toc ul {
    list-style-type: none;
    padding-left: 1rem;
}
#main-toc > ul {
    padding-left: 0;
}
#main-toc li {
    margin-bottom: 0.5rem;
}
#main-toc .nav-link {
    display: inline-block;
    padding: 0.25rem 0;
    font-size: 1rem;
    color: #0366d6;
    text-decoration: none;
}
#main-toc .nav-link:hover {
    text-decoration: underline;
}
#main-toc .nav-link.active {
    font-weight: bold;
}
</style>
