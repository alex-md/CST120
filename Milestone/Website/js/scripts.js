HomeImageColorShift();
HobbiesImageColorShift();
IncreaseViews();
/**
 * When you hover over the image, it will change to a random color, and when you stop hovering over the
 * image, it will change back to its original color.
 */
function HomeImageColorShift() {
	$(document).ready(() => {
		$('.home-img>img').hover(function() {
				$(this).css('filter',
					`hue-rotate(${Math.floor(Math.random() * 360)}deg)`);
			}, /* Making the image change back to their original color when you stop hovering over them. */
			function() {
				$(this).css('filter', 'hue-rotate(0deg)');
			});
	});
}
/**
 * When you hover over an image, it changes to a random color, and when you stop hovering over it, it
 * changes back to its original color.
 */
function HobbiesImageColorShift() {
	$(document).ready(() => {
		$('body > div > div > img:nth-child(n)').hover(function() {
				$(this).css('filter',
					`hue-rotate(${Math.floor(Math.random() * 360)}deg)`);
			}, /* Making the image change back to their original color when you stop hovering over them. */
			function() {
				$(this).css('filter', 'hue-rotate(0deg)');
			});
	});
}
/**
 * If the view-count is null/undefined, set it to 0. If it's not, get the view-count, increase it by 1,
 * set it to the new value, and display it on the page.
 */
function IncreaseViews() {
	if (localStorage.getItem('view-count') === null) { // If the view-count is null/undefined, set it to 0.
		localStorage.setItem('view-count', 0);
	}
	let viewCount = localStorage.getItem('view-count'); // Get the view-count.
	viewCount++; // Increase the view-count by 1 on each page load.
	localStorage.setItem('view-count', viewCount); // Set the view-count to the new value.
	$('#view-count').text(viewCount); // Set the view-count to the new value and display it on the page.
}