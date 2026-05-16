// Populate elements with current year and document last modified date
document.addEventListener('DOMContentLoaded', function () {
	var yearEl = document.getElementById('currentyear');
	if (yearEl) {
		yearEl.textContent = new Date().getFullYear();
	}

	var modEl = document.getElementById('lastModified');
	if (modEl) {
		// document.lastModified returns a string; show it directly
		modEl.textContent = document.lastModified;
	}
});
