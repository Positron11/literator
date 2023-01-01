// elements
const navbar = document.getElementById("navbar")
const sidebar = document.getElementById("sidebar")

// initialization
resizeSidebar();

// navbar sticky control
const stickyObserver = new IntersectionObserver(([e]) => e.target.classList.toggle('is-sticky', e.intersectionRatio < 1), {threshold: [1]});
stickyObserver.observe(navbar)

// event listeners
window.addEventListener("scroll", () => {resizeSidebar();});

// navbar height
function resizeSidebar() {sidebar.style.maxHeight = String(window.innerHeight - (sidebar.getBoundingClientRect().top + 160)) + "px";}