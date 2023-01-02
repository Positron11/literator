// elements
const page = document.getElementById("page");
const main = document.getElementById("main");

const navbar = document.getElementById("navbar");

const bulletin = document.getElementById("bulletin");
const bulletinContent = document.getElementById("bulletin_content");


// initialization
commonHandlers();


// window event listeners
window.addEventListener("scroll", () => {
	commonHandlers();
}); window.addEventListener("resize", () => {
	commonHandlers();
});

// navbar sticky control
const stickyObserver = new IntersectionObserver(([e]) => e.target.classList.toggle('is-sticky', e.intersectionRatio < 1), {threshold: [1]});
stickyObserver.observe(navbar);

// bulletin scroll event listeners
bulletinContent.addEventListener("scroll", () => {bulletinScrollStatus(bulletinContent);});


// dynamic bulletin height
function resizeBulletin() {
	stopAtMainEnd = Math.max(0, window.innerHeight - main.getBoundingClientRect().bottom);
	distanceFromTop = window.innerHeight - (navbar.getBoundingClientRect().bottom + 120);
	bulletin.style.maxHeight = String(distanceFromTop - stopAtMainEnd) + "px";
}

// sidebar scroll indicator
function bulletinScrollStatus() {
	bulletinContent.classList.toggle("fully-scrolled", (bulletinContent.scrollHeight - bulletinContent.scrollTop) < bulletinContent.clientHeight + 5);
}

// combine common handlers
function commonHandlers() {
	resizeBulletin();
	bulletinScrollStatus();
}