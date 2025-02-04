function openFilmmeny() {
	var dropdown = document.getElementById("filmmeny-dropdown");
	var selectedValue = dropdown.value;
	if (selectedValue) {
		window.location.href = selectedValue;
	}
}
