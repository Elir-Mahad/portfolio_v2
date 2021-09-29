$(function() {
	//---------------------------------------code for the project section is below

	$(".mainbox_m .searchsquid").hover(function() {
		$(".searchsquid_span").css("background-color", "#00abec");
	});

	$(".mainbox_m .flicks").hover(function() {
		$(".flicks_span").css("background-color", "#00abec");
	});

	$(".mainbox_m .cybercrime").hover(function() {
		$(".cybercrime_span").css("background-color", "#00abec");
	});

	$(".mainbox_m .anime").hover(function() {
		$(".anime_span").css("background-color", "#00abec");
	});

	$(".mainbox_m .creativeclone").hover(function() {
		$(".creativeclone_span").css("background-color", "#00abec");
	});

	// Search squid below

	let searchsquid = new Image();
	searchsquid.src = "Assets/searchsquid.png";

	$(".sitelist").on("click", ".searchsquid", function() {
		$(".words").empty();
		$(".words").append(`  

                                        <h3> Searchsquid  </h3>

                                        <p>
                                            This react app is a search engine. It pulls data from ‘Googleapi’, 
                                            and then outputs results that best match the users query.
                                        </p>

                                        <p class="madewith">Made with</p>

                                        <ul class="tools">
                                            <a class="tool up">Javascript <img src="Assets/javascript.png"> </a>
                                            <a class="tool down"> React <img src="Assets/react.png"> </a>
                                            <a class="tool up">API <img src="Assets/api.png"></a>
                                            <a class="tool down"> CSS3 <img src="Assets/ccs33.png">  </a>                                          
                                        </ul>

                                        <div class="links">
                                            <button><a href="https://elir-mahad.github.io/searchsquid/">Website<img src="Assets/internet.png"></a></button>
                                            <button><a href="https://github.com/Elir-Mahad/searchsquid">Github<img src="Assets/githublin.png"></a></button>
                                        </div>
                                        
                                    `);
		$(".main").attr(searchsquid);
	});

	// Flicks below

	let flicks = new Image();
	flicks.src = "Assets/flicks.png";

	$(".sitelist").on("click", ".flicks", function() {
		$(".words").empty();
		$(".words").append(`  

                                        <h3> Flicks  </h3>

                                        <p> This react app displays an up-to-date database of the most popular movies/shows based on the genre that you choose.
                                        </p>

                                        <p class="madewith">Made with</p>

                                        <ul class="tools">
                                            <a class="tool up">Javascript <img src="Assets/javascript.png"> </a>
                                            <a class="tool down"> React <img src="Assets/react.png"> </a>
                                            <a class="tool up">API <img src="Assets/api.png"></a>
                                            <a class="tool down"> CSS3 <img src="Assets/ccs33.png">  </a>                                          
                                        </ul>

                                        <div class="links">
                                            <button><a href="https://elir-mahad.github.io/flicks/">Website<img src="Assets/internet.png"></a></button>
                                            <button><a href="https://github.com/Elir-Mahad/flicks">Github<img src="Assets/githublin.png"></a></button>
                                        </div>
                                        
                                    `);
		$(".main").attr(flicks);
	});

	// Cybercrime below

	let cybercrime = new Image();
	cybercrime.src = "Assets/crime.png";

	$(".sitelist").on("click", ".cybercrime", function() {
		$(".words").empty();
		$(".words").append(`   

                                        <h3>Cyber Crimes </h3>

                                        <p> When websites get hacked, user data gets stolen. 
                                        Cyber Crimes maintains an up-to-date database of reported data breaches from all over the world.
                                        </p>

                                        <p class="madewith">Made with</p>

                                        <ul class="tools">
                                            <a class="tool bigger">HTML5 <img src="Assets/html.png"> </a>
                                            <a class="tool down">Sass <img src="Assets/sass.png"> </a>
                                            <a class="tool up"> CSS3 <img src="Assets/ccs33.png">  </a>
                                            <a class="tool down">API <img src="Assets/api.png"></a>
                                            <a class="tool up">Jquery <img src="Assets/jquery.png"> </a>
                                            <a class="tool down">Javascript <img src="Assets/javascript.png"> </a>
                                        </ul>

                                        <div class="links">
                                            <button><a href="https://elir-mahad.github.io/cybercrimes/">Website<img src="Assets/internet.png"></a></button>
                                            <button><a href="https://github.com/Elir-Mahad/cybercrimes">Github<img src="Assets/githublin.png"></a></button>
                                        </div>

                                    `);

		$(".main").attr(cybercrime);
	});

	// Hikiku below

	let Hikiku = new Image();
	Hikiku.src = "Assets/hikikuu.png";

	$(".sitelist").on("click", ".anime", function() {
		$(".words").empty();
		$(".words").append(`  

                                        <h3> Hikiku <span> ひきく </span> </h3>

                                        <p> This site is a database that contains the best anime movies/shows.
                                        Discover the most popular animes based on the genre that you choose.
                                        </p>

                                        <p class="madewith">Made with</p>

                                        <ul class="tools">
                                            <a class="tool bigger">HTML5 <img src="Assets/html.png"> </a>
                                            <a class="tool down"> CSS3 <img src="Assets/ccs33.png">  </a>
                                            <a class="tool up">API <img src="Assets/api.png"></a>
                                            <a class="tool down">Jquery <img src="Assets/jquery.png"> </a>
                                            <a class="tool up">Javascript <img src="Assets/javascript.png"> </a>
                                        </ul>

                                        <div class="links">
                                            <button><a href="https://elir-mahad.github.io/hikiku/">Website<img src="Assets/internet.png"></a></button>
                                            <button><a href="https://github.com/Elir-Mahad/hikiku">Github<img src="Assets/githublin.png"></a></button>
                                        </div>
                                        
                                    `);
		$(".main").attr(Hikiku);
	});

	// Creative clone below

	let creativeclone = new Image();
	creativeclone.src = "Assets/creativeclonenew.png";

	$(".sitelist").on("click", ".creativeclone", function() {
		$(".words").empty();
		$(".words").append(`   

                                        <h3> Creative Clone </h3>

                                        <p> Multi-page PSD conversion made using client brief and design files, 
                                        flexbox, and best accessibility practices.
                                        Responsive across devices. 
                                        </p>

                                        <p class="madewith">Made with</p>

                                        <ul class="tools">
                                            <a class="tool bigger">HTML5 <img src="Assets/html.png"> </a>
                                            <a class="tool down">Sass <img src="Assets/sass.png"> </a>
                                            <a class="tool up"> CSS3 <img src="Assets/ccs33.png">  </a>
                                        </ul>

                                        <div class="links">
                                            <button><a href="https://elir-mahad.github.io/creativeclone/">Website<img src="Assets/internet.png"></a></button>
                                            <button><a href="https://github.com/Elir-Mahad/creativeclone">Github<img src="Assets/githublin.png"></a></button>
                                        </div>

                                    `);

		$(".main").attr(creativeclone);
	});
});
