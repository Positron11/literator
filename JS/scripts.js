// elements
const navbar = document.getElementById("navbar");
const main = document.getElementById("main");
const bulletin = document.getElementById("bulletin");
const bulletinContent = document.getElementById("bulletin_content");

// initialization
resizeBulletin();
bulletinScrollStatus();

// navbar sticky control
const stickyObserver = new IntersectionObserver(([e]) => e.target.classList.toggle('stuck', e.intersectionRatio < 1), {threshold: [1]});
stickyObserver.observe(navbar);

// window event listeners
window.addEventListener("scroll", () => {
	resizeBulletin();
	bulletinScrollStatus();
});
window.addEventListener("resize", () => {
	resizeBulletin()
	bulletinScrollStatus();
});

// bulletin scroll event listener
bulletinContent.addEventListener("scroll", () => {bulletinScrollStatus();});

// dynamic bulletin height
function resizeBulletin() {
	if (window.innerWidth > 10) {
		stopAtMainEnd = Math.max(0, window.innerHeight - main.getBoundingClientRect().bottom);
		distanceFromTop = window.innerHeight - (navbar.getBoundingClientRect().bottom);
		bulletin.style.maxHeight = String(distanceFromTop - stopAtMainEnd) + "px";
	} else {bulletin.style.maxHeight = null;}
}

// toggle mobile navbar menu
function toggleNavbarMenu() {
	navbar.classList.toggle("menu-open");
}

// sidebar scroll indicator
function bulletinScrollStatus() {
	bulletinContent.classList.toggle("fully-scrolled", (bulletinContent.scrollHeight - bulletinContent.scrollTop) < bulletinContent.clientHeight + 10);
}