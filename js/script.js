// Enable smooth scrolling when navigation links are clicked
document.addEventListener('DOMContentLoaded', function () {
    var anchors = document.querySelectorAll('nav a');
    anchors.forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            // Only handle in-page anchors
            var href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                var target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});