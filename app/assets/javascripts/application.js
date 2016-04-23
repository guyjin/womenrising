// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require_tree .

$(document).ready(function () {

	$('.pageNav').on('click', function(e) {

		// if we're already on the homepage, don't fire the link.
		// this prevents a flicker as the page reloads and scrolls.  We just want the scroll.  :)
		if(window.location.pathname === '/'){
			e.preventDefault();
		}
		// going to store the target to scroll to.
		var m = $(this).attr('href');
		// check the pathname to see if we're scrolling to the top or not.
		// then  re-assign the target appropriately if necessary.
		if(wr.checkPath(m)){
			m = '.hero'
		} else {
			m = $(this).attr('href');
		}
		// Get rid of the 'active' class from current active link.
		$('.active').removeClass('active');
		// Add the 'active' class to the clicked link
		$(this).addClass('active');

		// browser sniffer has been deprecated.  Might need to work out a different solution if scrolling body is a problem
		// $(jQuery.browser.webkit ? "body": "html").animate({ scrollTop: $(m).offset().top }, 1000);
		$("body").animate({ scrollTop: $(m).offset().top }, 1000);

	})
	if ($("#user_mentor :selected").val(false)) {
		$("#mentor_info").hide();
	}
    $("#user_mentor").on("change", function(){
  		$("#mentor_info").toggle();
	});

  	if ($("#user_live_in_detroit :selected").val(true)) {
		$(".detroit_info").hide();
	}
    $("#user_live_in_detroit").on("change", function(){
  		$(".detroit_info").toggle();
	});
});

var wr = {
	checkPath: function(pathString) {
		console.log(pathString);
		// check if pathname matches the root path '/'
		if(pathString === '/'){
			return true;
		}
		return false
	}
}
