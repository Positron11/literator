// elements
const navbar = document.getElementById("navbar");
const main = document.getElementById("main");
const bulletin = document.getElementById("bulletin");
const bulletinContent = document.getElementById("bulletin_content");
const storyPreviewBackgrounds = document.querySelectorAll("#story_previews .story .background-image");


// initialization
resizeBulletin();
bulletinScrollStatus();

// get story preview background image brightness
Array.from(storyPreviewBackgrounds).forEach(background => {
	path = window.getComputedStyle(background, false).backgroundImage.slice(4, -1).replace(/"/g, "");
	getBrightness(path, (b) => {
		// define scales
		x0 = 0, x1 = 255;
		y0 = 0.1, y1 = 0.2;

		// map linear scale to ogarithmic scale
		y = Math.exp(((b-x0)/(x1-x0)) * (Math.log(y1) - Math.log(y0)) + Math.log(y0));
		
		// set opacity
		background.style.opacity = y;
	});
});


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


// get image brightness
function getBrightness(imageSrc, callback) {
	const img = document.createElement("img");
	img.src = imageSrc;
	img.crossOrigin = 'anonymous';
	img.style.display = "none";
	document.body.appendChild(img);
	let colorSum = 0;

	img.onload = function() {
		const canvas = document.createElement("canvas");
		canvas.width = this.width;
		canvas.height = this.height;
		const ctx = canvas.getContext("2d");
		ctx.drawImage(this, 0, 0);
  
		const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
		const data = imageData.data;
		let r, g, b, avg;
  
		for(let x=0, len=data.length; x<len; x+=4) {
			r = data[x];
			g = data[x+1];
			b = data[x+2];
			avg = Math.floor((r+g+b) / 3);
			colorSum += avg;
		}
  
		const brightness = Math.floor(colorSum / (this.width * this.height));
		callback(brightness);
	}
};