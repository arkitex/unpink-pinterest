(function() {
	//go away logo
	//var pinLogo = document.getElementById("Pinterest");
	//pinLogo.style.background = "transparent";
	//pinLogo.innerHTML = "Pinterest";

	//go away nag
	var nagDiv = document.getElementById("UnauthCallout");
	if (nagDiv) {
		nagDiv.style.display = "none";
	}

	// html from #F7F5F5
	var htmlTag = document.getElementsByTagName("html")[0]
	htmlTag.style.background = "url(http://subtlepatterns.com/patterns/tex2res2.png) repeat";

	//Header - #FAF7F7
	var header = document.getElementById("Header");
	header.style.background = "#F7F7FA";

	//CategoriesBar - #FAF7F7
	var categoriesBar = document.getElementById("CategoriesBar");
	categoriesBar.style.background = "#F7F7FA";

	//convo - from #F2F0F0
	var convo = document.getElementsByClassName("convo");
	for (var i = 0; i < convo.length; i++) {
		convo[i].style.background = "#F0F0F2";
	}
})()