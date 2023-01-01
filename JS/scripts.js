// elements
const navbar = document.getElementById("navbar")
const sidebar = document.getElementById("sidebar")
const sidebarContent = document.getElementById("sidebar_content")

// initialization
resizeSidebar();
sidebarScrollIndicatorDisplay();

// navbar sticky control
const stickyObserver = new IntersectionObserver(([e]) => e.target.classList.toggle('is-sticky', e.intersectionRatio < 1), {threshold: [1]});
stickyObserver.observe(navbar)

// event listeners
window.addEventListener("scroll", () => {
	resizeSidebar();
	sidebarScrollIndicatorDisplay();
});
sidebarContent.addEventListener("scroll", () => {
	sidebarScrollIndicatorDisplay();
});

// navbar height
function resizeSidebar() {sidebar.style.maxHeight = String(window.innerHeight - (sidebar.getBoundingClientRect().top + 60)) + "px";}

// sidebar scroll indicator
function sidebarScrollIndicatorDisplay() {sidebarContent.classList.toggle("fully-scrolled", (sidebarContent.scrollHeight - sidebarContent.scrollTop) < sidebarContent.clientHeight + 5);}