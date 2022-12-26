const navbar = document.getElementById("navbar")
const stickyObserver = new IntersectionObserver(([e]) => e.target.classList.toggle('is-sticky', e.intersectionRatio < 1), {threshold: [1]});
stickyObserver.observe(navbar)