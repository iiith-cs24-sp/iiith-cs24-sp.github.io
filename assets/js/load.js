function loadPage() {
	let page = document.getElementById("main_content");
	page.innerHTML = "Loading...";
	// Go to content page
	fetch("./content/personal_info.html")
		.then(response => response.text())
		.then(data => {
			// The data is another HTML page
			// set the innerHTML of the body to the body of the data
			let newPage = new DOMParser().parseFromString(data, "text/html");
			console.log(newPage);
			document.body.innerHTML = newPage.body.innerHTML;
		});
}
