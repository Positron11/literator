// elements
const page = document.getElementById("page");
const main = document.getElementById("main");

const navbar = document.getElementById("navbar");
const navbarMenu = document.getElementById("navbar_menu");
const navbarMenuWrapper = document.getElementById("navbar_menu_wrapper");
const mobileNavbarMenuButton = document.getElementById("mobile_navbar_menu_button");

const bulletin = document.getElementById("bulletin");
const bulletinWrapper = document.getElementById("bulletin_wrapper");
const bulletinContent = document.getElementById("bulletin_content");

const bulletinCloseButton = document.getElementById("bulletin_close_button");
const mobileBulletinButton = document.getElementById("mobile_bulletin_button");


// briefly freeze navbar transitions
freezeTransitions(navbar);
// initialization
commonHandlers();
calculateNavbarMenuHeight();


// navbar sticky control
const stickyObserver = new IntersectionObserver(([e]) => e.target.classList.toggle('is-sticky', e.intersectionRatio < 1), {threshold: [1]});
stickyObserver.observe(navbar);

// window event listeners
window.addEventListener("scroll", () => {commonHandlers();});
window.addEventListener("resize", () => {
	commonHandlers();
	calculateNavbarMenuHeight();
	freezeTransitions(bulletinWrapper);
});

// bulletin scroll event listeners
bulletinContent.addEventListener("scroll", () => {bulletinScrollStatus(bulletinContent);});


// toggle mobile navbar menu
mobileNavbarMenuButton.addEventListener("click", () => {navbar.classList.toggle("menu-open");});

// toggle mobile bulletin
mobileBulletinButton.addEventListener("click", () => {bulletinWrapper.classList.add("show");});
bulletinCloseButton.addEventListener("click", () => {bulletinWrapper.classList.remove("show");});
bulletinWrapper.addEventListener("click", () => {bulletinWrapper.classList.remove("show");});
bulletin.addEventListener("click", (ev) => {ev.stopPropagation();});


// briefly freeze element transitions
function freezeTransitions(element) {
	element.style.transition = "none";
	setTimeout(() => element.style.transition = null, 100);
}

// calculate menu wrapper content height
function calculateNavbarMenuHeight() {
	navbarMenuWrapper.style.setProperty("--mobile-menu-height",  String(navbarMenu.clientHeight) + "px");
}

// dynamic bulletin height
function resizeBulletin() {
	if (window.innerWidth > 1450) {
		stopAtMainEnd = Math.max(0, window.innerHeight - main.getBoundingClientRect().bottom);
		distanceFromTop = window.innerHeight - (navbar.getBoundingClientRect().bottom + 120);
		bulletin.style.maxHeight = String(distanceFromTop - stopAtMainEnd) + "px";
	} else {bulletin.style.maxHeight = null;}
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