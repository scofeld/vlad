function top_search(){
	button=document.querySelector(".top_search");
	input=document.querySelector(".top .top_search_input");
	div=document.querySelector(".top_search_class");
	button.classList.toggle(".top_search_open");
	input.classList.toggle("top_search_input_open");
	input.focus();
}
function hidden_menu(){
	document.querySelector(".hidden_menu").classList.toggle("hidden_menu_open");
	document.querySelector(".top_menu").classList.toggle("top_menu_open");
}