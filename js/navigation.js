var $jQuery = $;
$jQuery(document).ready(function(){

	function setTabIndexForMobileTablet() {
		if ($jQuery(window).width() < 767) {
			$jQuery('.est-login').attr('tabindex', '1');
			$jQuery('.est-search').attr('tabindex', '2');
			$jQuery('.est-tablet-menu-title').attr('tabindex', '2');
			$jQuery('.est-find-branch').attr('tabindex', '3');
			$jQuery('.est-help-support').attr('tabindex', '4');
			$jQuery('.est-tablet-menu-title').attr('aria-expanded','false');
		} else if ($jQuery(window).width() < 1025) {
			$jQuery('.est-tablet-menu-title').attr('tabindex', '5');
		} else {

		}
	}

	setTabIndexForMobileTablet()

	searchBox.init();

	loginBtn.init();

	mainMenu.init();

	var exclude_div = $jQuery(".account-wrapper");

	$jQuery(".account-panel").click(function(e){
		if(e.target.id != exclude_div.attr('id') && !exclude_div.has(e.target).length)
			$jQuery("#est-account-panel").removeClass('active');
		$jQuery("#est-account-panel").addClass('inactive');
	});

	jQuery(document).on('keyup',function(evt) {
		if (evt.keyCode == 27) {
			$jQuery('.level-2-pannel').removeClass('active');
			$jQuery('.level-2-pannel').removeClass('menu-open');
			$jQuery('.level-1-li').attr('aria-expanded','false');
			$jQuery('.l2-label').attr('aria-expanded','false');
			$jQuery('.s-point').removeClass('list-u');
		}
	});

	if ($jQuery(window).width() < 768) {
		//$jQuery('.level-1-li').removeAttr('tabindex');
		$jQuery('.s-point').removeAttr('tabindex');
		//$jQuery('.a-point').attr('tabindex','6');

	}

});

var searchBox = {};

searchBox.toggleSearchPanel = function() {

	if(mainMenu.editMode) {
		return;
	}

	if(searchBox.$searchPanel.hasClass('active')) {
		searchBox.hideSearchPanel();
	} else {
		searchBox.showSearchPanel();
	}
}

searchBox.showSearchPanel = function() {

	mainMenu.hideMenuOnTabMobile();
	loginBtn.hideAccountPanel();

	searchBox.$searchPanel.addClass('active');
	searchBox.$searchButton.addClass('active');
	searchBox.$serchInput.focus();
	if ($jQuery(window).width() < 767) {
		mainMenu.$body.addClass('overflow-hidden');
		$jQuery('header.header.brace.site').removeClass('ios-class-close');
		$jQuery('header.header.brace.site').addClass('ios-class');
		$jQuery("html").css({"overflow" :"hidden", "height": "100%"});
		$jQuery("body").css({"overflow" :"hidden", "height": "100%"});
	}
}

searchBox.hideSearchPanel = function() {
	searchBox.$searchPanel.removeClass('active');
	searchBox.$searchButton.removeClass('active');
	searchBox.$serchInput.val("");
	if ($jQuery(window).width() < 767) {
		mainMenu.$body.removeClass('overflow-hidden');
		$jQuery('header.header.brace.site').removeClass('ios-class');
		$jQuery('header.header.brace.site').addClass('ios-class-close');
		$jQuery("html").css({"overflow" :"", "height": ""});
		$jQuery("body").css({"overflow" :"", "height": ""});
	}
}

searchBox.bindMouseClicks = function() {
	searchBox.$searchButton.click(this.toggleSearchPanel);
	searchBox.$searchPanel.click(this.hideSearchPanel);
	searchBox.$searchPanel.find('.close-search-panel').click(this.hideSearchPanel);
	searchBox.$searchPanel.find('.search-section').click(function(e){e.stopPropagation();});
}

searchBox.openModalOnTab = function() {
	if (searchBox.$searchButton) {
		searchBox.$searchButton.keypress(function(event) {
			var keycode = event.keyCode || event.which;
			if (keycode == '13') {
				if (searchBox.$searchPanel.hasClass('active')) {
					searchBox.hideSearchPanel();
				} else {
					searchBox.showSearchPanel();
				}
			}
		});
	}
}

searchBox.closeModalOnTab = function() {
	if (searchBox.$closeButton) {
		searchBox.$closeButton.keypress(function(event) {
			var keycode = event.keyCode || event.which;
			if (keycode == '13') {
				searchBox.hideSearchPanel();
			}
		});
	}
}

searchBox.init = function() {

	searchBox.$searchButton = $jQuery('#est-search-btn');
	searchBox.$searchPanel = $jQuery('#est-search-panel');
	searchBox.$serchInput = $jQuery('#est-search-text');
	searchBox.$closeButton = $jQuery('#close-serach-btn');
	searchBox.bindMouseClicks();
	searchBox.openModalOnTab();
	searchBox.closeModalOnTab();
	//searchBox.bindAutocomplete();
}

var loginBtn = {};

loginBtn.showAccountPanel = function() {

	if(mainMenu.editMode) {
		return;
	}
	searchBox.hideSearchPanel();
	mainMenu.hideMenuOnTabMobile();

	loginBtn.$accountPanel.addClass('active');
	loginBtn.$accountButton.addClass('active');
	loginBtn.$loginPanel.focus();
	if ($jQuery(window).width() < 767) {
		$jQuery("html").css({"overflow" :"hidden", "height": "100%"});
		$jQuery("body").css({"overflow" :"hidden", "height": "100%"});
	}
}

loginBtn.hideAccountPanel = function() {
	loginBtn.$accountPanel.removeClass('active');
	loginBtn.$accountButton.removeClass('active');
	loginBtn.$accountPanel.addClass('inactive');
	$jQuery('html, body').animate({scrollTop: $jQuery('#est-nav-container').offset().top}, 1000);
	if ($jQuery(window).width() < 767) {
		$jQuery("html").css({"overflow" :"", "height": ""});
		$jQuery("body").css({"overflow" :"", "height": ""});
	}
}

loginBtn.bindLoginClicks = function() {
	loginBtn.$accountButton.click(this.showAccountPanel);
	loginBtn.$accountPanel.click(this.hideAccountPanel);
	loginBtn.$accountPanel.find('.close-panel').click(this.hideAccountPanel);
	loginBtn.$accountPanel.find('.account-wrapper').click(function(e){e.stopPropagation();});
}
loginBtn.bindKeyPress = function(){
	loginBtn.$closeButton.keypress(function(event) {
		var keycode = event.keyCode || event.which;
		if (keycode == '13') {
			loginBtn.hideAccountPanel();
		}
	});

}

loginBtn.init = function() {
	loginBtn.$accountButton = $jQuery('.est-login');
	loginBtn.$accountPanel = $jQuery('#est-account-panel');
	loginBtn.$closeButton = $jQuery('.close-login');
	loginBtn.$loginPanel = $jQuery('#account-wrapper');
	loginBtn.bindLoginClicks();
	loginBtn.bindKeyPress();
}

var mainMenu = {};

mainMenu.init = function() {

	mainMenu.$body = $jQuery("body");
	mainMenu.$menuBtn = $jQuery("#est-menu-button");
	mainMenu.$menuTitle = $jQuery(".est-tablet-menu-title");
	mainMenu.$mobileOverlay = $jQuery(".est-mobile-overlay");
	mainMenu.$menuDropdown = $jQuery("#est-nav-container nav .est-row");
	mainMenu.$menuDropdownMobile = $jQuery("#est-nav-container nav .mobile-level-overlay");
	mainMenu.$onlyMobile = mainMenu.$menuDropdownMobile.find(".only-mobile");
	mainMenu.$levelOneUl = $jQuery('#est-nav-container nav .nav-level-1');
	mainMenu.$mobileOverlayButtons = $jQuery("#est-mobile-overlay");
	mainMenu.$levelOneLi = $jQuery('ul#est-menu > .level-1-li');
	mainMenu.$levelTwoLi = $jQuery('#est-menu .level-2-container > ul > li');
	mainMenu.setWindowWidth();
	$jQuery(window).on('resize', this.setWindowWidth);
	mainMenu.setEditMode();
	mainMenu.bindEvents();
	initAimScript();

}

mainMenu.setEditMode = function() {
	if(editMode) {
		if(editMode == "true") {
			mainMenu.editMode = true;
		} else {
			mainMenu.editMode = false;
		}
	} else {
		mainMenu.editMode = false;
	}
}

mainMenu.setWindowWidth = function() {
	mainMenu.windowWidth = $jQuery(window).width();
}

mainMenu.bindEvents = function() {

	mainMenu.$menuBtn.click(this.toggleMenuOnTabMobile);

	mainMenu.setOverlayHeight();

	if(!mainMenu.editMode) {
		mainMenu.bindDesktopLevelOneEvents();
		mainMenu.bindDesktopLevelTwoEvents();
		mainMenu.bindLevelOneKeypressEvent();
		mainMenu.bindDesktopLevelTwoKeypressEvent();
	}

	mainMenu.bindTabletLevelOneEvents();
	mainMenu.bindTabletLevelTwoEvents();
	mainMenu.bindTabletLevelOneKeypressEvents();
	mainMenu.bindTabletLevelTwoKeypressEvents();

	mainMenu.bindMobileLevelOneEvents();
	mainMenu.bindMobileLevelTwoEvents();
	mainMenu.bindMobileLevelOneKeypressEvent();
	mainMenu.bindMobileLevelTwoKeypressEvent();

	mainMenu.bindLevelThreeLinkEvents();

	mainMenu.initalizeMenuForTabMobile();
}

mainMenu.toggleMenuOnTabMobile = function(e) {

	if(mainMenu.isTablet() || mainMenu.isMobile()) {

		if(mainMenu.$menuBtn.hasClass("active")) {
			mainMenu.hideMenuOnTabMobile();
		} else {
			searchBox.hideSearchPanel();
			loginBtn.hideAccountPanel();
			mainMenu.showMenuOnTabMobile();
		}
	}
}

mainMenu.initalizeMenuForTabMobile = function() {
	if(mainMenu.isMobile()) {
		mainMenu.$mobileOverlay.appendTo("#est-mobile-overlay");
	}
	if (mainMenu.isTablet() || mainMenu.isMobile()) {
		mainMenu.$onlyMobile.insertBefore('#est-menu > li.more-tab');
	}
}

mainMenu.setOverlayHeight = function() {

	var $levelTwoPanel = $jQuery(".level-2-pannel");
	if(mainMenu.isDesktop()) {
		$levelTwoPanel.height(mainMenu.$body.height() - 161);
	} else if(mainMenu.isTablet()) {
		$levelTwoPanel.height(mainMenu.$body.height() - 90);
	} else if(mainMenu.isMobile()){
		$levelTwoPanel.height(mainMenu.$body.height() - 82);
	}
}

mainMenu.hideMenuOnTabMobile = function() {

	//TODO refactor to move these calls to each level reset sub functions
	$jQuery('.est-tablet-menu-title').attr('aria-expanded','false');
	mainMenu.$menuBtn.removeClass("active");
	mainMenu.$menuTitle.removeClass("active");
	mainMenu.$mobileOverlay.removeClass("active");
	mainMenu.$menuDropdown.removeClass("active");
	mainMenu.$menuDropdownMobile.removeClass("active");

	mainMenu.$menuDropdownMobile.find('.nav-level-1').children().removeClass("active").removeClass("inactive");
	mainMenu.$menuDropdownMobile.find('.level-2-pannel').removeClass("active");
	mainMenu.$menuDropdownMobile.find('.level-2-container > ul').height("auto").children().removeClass("active").removeClass("inactive");
	mainMenu.$menuDropdownMobile.find('.level-3-container').removeClass("active");
	mainMenu.resetMoreElementsOnTablet();
	mainMenu.resetMoreElementsOnMobile();
	mainMenu.$mobileOverlayButtons.removeClass("inactive");

	mainMenu.$menuDropdownMobile.find('.level-2-pannel').removeClass('hide-for-level-3');
}

mainMenu.showMenuOnTabMobile = function() {

	//TODO Refactor to check if we need to add active to so many elements
	$jQuery('.est-tablet-menu-title').attr('aria-expanded','true');
	mainMenu.$menuBtn.addClass("active");
	mainMenu.$menuTitle.addClass("active");
	mainMenu.$mobileOverlay.addClass("active");
	mainMenu.$menuDropdown.addClass("active");
	mainMenu.$menuDropdownMobile.addClass("active");
	mainMenu.$menuDropdownMobile.height(mainMenu.$body.height());
}

mainMenu.bindLevelOneKeypressEvent = function() {
	if (mainMenu.$levelOneLi) {
		mainMenu.$levelOneLi.keypress(function(event) {
			var keycode = event.keyCode || event.which;
			if (keycode == '13') {
				if(mainMenu.isDesktop()) {

					mainMenu.closeAllDesktopLevelTwoPanel();
					$jQuery(this).attr("aria-expanded","true");

					$jQuery(this).find('.level-2-pannel').addClass('active');
					mainMenu.setLevelThreeOffsetDesktop($jQuery(this));
					$jQuery(this).find('.level-2-li:first .l2-label').addClass('active');
					$jQuery(this).find('.level-2-li:first .level-3-container').addClass('active');
					$jQuery(this).find('.s-point').addClass('list-u');
					$jQuery(this).find('.level-2-li:first .l2-label').attr("aria-expanded","true");
					//$jQuery(this).find('.level-2-li:first .l2-label').focus();
				}
			}
		});
	}
}

mainMenu.bindDesktopLevelTwoKeypressEvent = function() {
	$jQuery('#est-menu .level-2-container .l2-label').keypress(function(event){
		var keycode = event.keyCode || event.which;
		if (keycode == '13') {
			if(mainMenu.isDesktop()) {
				event.stopPropagation();
				mainMenu.deactivateLevelThree($jQuery(this).parent());
				mainMenu.activateLevelThree($jQuery(this).parent());
				$jQuery(this).focus();
			}
		}
	});
}

mainMenu.bindDesktopLevelOneEvents = function() {
	mainMenu.$levelOneLi.hover(mainMenu.openDesktopLevelOnePanel,mainMenu.closeDesktopLevelOnePanel);
}

mainMenu.openDesktopLevelOnePanel = function() {
	if(mainMenu.isDesktop()) {

		$jQuery('.level-2-pannel').removeClass('menu-open');

		$(this).delay(300).queue(function() {

			$jQuery(this).find('.level-2-pannel').addClass('active');
			$jQuery(this).attr('aria-expanded','true');
			mainMenu.setLevelThreeOffsetDesktop($jQuery(this));
			$jQuery(this).find('.level-2-li:first .l2-label').addClass('active');
			$jQuery(this).find('.level-2-li:first .l2-label').attr("aria-expanded","true");
			$jQuery(this).find('.level-2-li:first .level-3-container').addClass('active');
			$jQuery(this).find('.s-point').addClass('list-u');
			$jQuery(this).find('.level-2-pannel').addClass('menu-open');

			$(this).dequeue();

		});

	}
}

mainMenu.closeDesktopLevelOnePanel = function() {
	if(mainMenu.isDesktop()) {

		if ($(".menu-open")[0]){

			$(this).delay(300).queue(function() {

				$jQuery(this).attr('aria-expanded','false');
				$jQuery(this).find('.s-point').removeClass('list-u');
				$jQuery(this).find('.level-2-pannel').removeClass('active');
				$jQuery(this).find('.level-2-li:first .l2-label').attr('aria-expanded','false');
				$jQuery('.level-2-pannel').removeClass('menu-open');

				$(this).dequeue();

			});

		} else {

			$(this).dequeue();

			$jQuery(this).attr('aria-expanded','false');
			$jQuery(this).find('.s-point').removeClass('list-u');
			$jQuery(this).find('.level-2-pannel').removeClass('active');
			$jQuery(this).find('.level-2-li:first .l2-label').attr('aria-expanded','false');

		}
	}
}

mainMenu.closeAllDesktopLevelTwoPanel = function() {
	if(mainMenu.isDesktop()) {
		mainMenu.$levelOneLi.each(function(){
			$jQuery(this).attr("aria-expanded","false");
			$jQuery(this).find('.level-2-pannel').removeClass('active');

		})
	}
}

mainMenu.bindDesktopLevelTwoEvents = function() {

	$jQuery('.level-2-wrapper').mouseleave(function() {
		if(mainMenu.isDesktop()) {

			$(this).delay(300).queue(function() {

				$jQuery('.s-point').removeClass('list-u');

				$jQuery('.level-3-container').removeClass('active');
				$jQuery('.level-2-container > ul > li > .l2-label').removeClass('active');
				$jQuery('.level-2-pannel').removeClass('active');

				$(this).dequeue();

			});

		}
	});

	$jQuery('.tool-l3-la-style').mouseleave(function() {
		if(mainMenu.isDesktop()) {
			$jQuery(this).closest('.level-2-pannel').removeClass('active');
		}
	});

}

mainMenu.activateLevelThree =  function(row) {
	if(mainMenu.isDesktop()) {
		$jQuery(row).closest('ul').find('.level-3-container').removeClass('active');
		$jQuery(row).find('.level-3-container').addClass('active');
		$jQuery('.l2-label').attr('aria-expanded','false');
		$jQuery(row).find('.l2-label').attr('aria-expanded','true');
		$jQuery(row).find('.l2-label').addClass('active');
	}
}

mainMenu.deactivateLevelThree =  function() {
	if(mainMenu.isDesktop()) {
		$jQuery('.l2-label').attr('aria-expanded','false');
		$jQuery('.level-3-container').removeClass('active');
		$jQuery('.level-2-container > ul > li > .l2-label').removeClass('active');
	}
}

mainMenu.setLevelThreeOffsetDesktop = function($levelOneli) {

	if(mainMenu.windowWidth > 1023) {
		$levelOneli.find('.level-3-container').each(function() {
			var $el = $jQuery(this);
			var $ul = $el.closest('ul');
			$el.css("margin-top", ($ul.offset().top - $el.parent().offset().top) + "px");
			var maxHeight = mainMenu.getMaxHeightDesktopForLevelThree($ul);
			$el.height(maxHeight);
			//		$ul.height(maxHeight);
		});
	}
}

mainMenu.bindTabletLevelOneEvents = function() {

	$jQuery("#est-menu li.level-1-li").click(function() {

		if(mainMenu.isTablet()) {

			if($jQuery(this).hasClass("active")) {
				$jQuery(this).removeClass("active");
				$jQuery(this).attr('aria-expanded','false');
				$jQuery(this).find(".level-2-pannel").removeClass("active");
				$jQuery(this).siblings().removeClass("inactive");

				$jQuery(this).find(".level-2-container > ul").height("auto");
				var $level2li = $jQuery(this).find(".level-2-container > ul > li");
				$level2li.removeClass("active");
				$level2li.removeClass("inactive");
				$jQuery(this).find(".level-3-container").removeClass("active");
				$jQuery(this).find(".s-point").removeClass("active");

			} else {
				$jQuery(this).addClass("active");
				$jQuery(this).attr('aria-expanded','true');
				$jQuery(this).find(".level-2-pannel").addClass("active");
				$jQuery(this).siblings().addClass("inactive");
				mainMenu.resetMoreElementsOnTablet();
				$jQuery(this).find(".s-point").addClass("active");
			}
		}
	});
}

mainMenu.bindTabletLevelOneKeypressEvents = function() {

	if(mainMenu.isTablet()) {

		if ($jQuery("#est-menu li.level-1-li")) {
			$jQuery("#est-menu li.level-1-li").keypress(function (event) {
				var keycode = event.keyCode || event.which;
				if (keycode == '13') {

					if ($(".level-2-pannel").hasClass("hide-for-level-3") || $(".level-2-pannel").hasClass("level-2-open")) {

					} else {

						if ($jQuery(this).hasClass("active")) {
							$jQuery(this).removeClass("active");
							$jQuery(this).attr('aria-expanded','false');
							$jQuery(this).find(".level-2-pannel").removeClass("active");
							$jQuery(this).siblings().removeClass("inactive");
							$jQuery(this).children(":first").find('.nav-sr-only').text(',contains a sub menu');

							$jQuery(this).find(".level-2-container > ul").height("auto");
							var $level2li = $jQuery(this).find(".level-2-container > ul > li");
							$level2li.removeClass("active");
							$level2li.removeClass("inactive");
							$jQuery(this).find(".level-3-container").removeClass("active");
							$jQuery(this).find(".s-point").removeClass("active");

						} else {
							$jQuery(this).addClass("active");
							$jQuery(this).children(":first").find('.nav-sr-only').text(',contains a sub menu. Press the enter key to return to the previous menu.');
							$jQuery(this).attr('aria-expanded','true');
							$jQuery(this).find(".level-2-pannel").addClass("active");
							$jQuery(this).siblings().addClass("inactive");
							mainMenu.resetMoreElementsOnTablet();
							$jQuery(this).find(".s-point").addClass("active");
						}

					}

					$jQuery('.level-2-pannel').removeClass('level-2-open');

				}
			});
		}
	}
}

mainMenu.bindTabletLevelTwoEvents = function() {
	$jQuery('#est-menu .level-2-container > ul > li').click(function(e){

		e.stopPropagation();
		if(mainMenu.isTablet()) {
			if($jQuery(this).parent().hasClass("only-mobile")) {
				if($jQuery(this).hasClass("active")) {
				} else {
					$jQuery(this).siblings().each(function(){
						$jQuery(this).removeClass('active');
						$jQuery(this).addClass('inactive-grey');
						$jQuery(this).find('.level-3-container').removeClass('active');
					});
					$jQuery(this).parent().parent().find(".level-1-li").addClass("inactive-grey");
					mainMenu.$onlyMobile.find('.level-2-li').removeClass('active');
					mainMenu.$onlyMobile.find('.level-2-li').addClass('inactive-grey');

					$jQuery(this).removeClass('inactive-grey');
					$jQuery(this).addClass('active');
					$jQuery(this).parent().parent().find('.tool-l3-container-style').removeClass('active');
					$jQuery(this).find('.level-3-container').addClass('active');
				}

			} else {
				if($jQuery(this).hasClass('active')) {
				} else {
					$jQuery(this).removeClass('inactive');
					$jQuery(this).addClass('active');
					$jQuery(this).children(":first").attr('aria-expanded','true');
					$jQuery(this).find('.level-3-container').addClass('active');
					mainMenu.setTabletLevelTwoHeight($jQuery(this));
					$jQuery(this).siblings().each(function(){
						$jQuery(this).removeClass('active');
						$jQuery(this).children(":first").attr('aria-expanded','false');
						$jQuery(this).addClass('inactive');
						$jQuery(this).find('.level-3-container').removeClass('active');
					});
				}
			}
		}
	});
}

mainMenu.bindTabletLevelTwoKeypressEvents = function() {

	if(mainMenu.isTablet()) {

		if ($jQuery('#est-menu .level-2-container > ul > li')) {
			$jQuery('#est-menu .level-2-container > ul > li').keypress(function (event) {
				var keycode = event.keyCode || event.which;
				if (keycode == '13') {

					if($jQuery(this).hasClass('active')) {

					} else {
						$jQuery(this).siblings().each(function(){
							$jQuery(this).removeClass('active');
							$jQuery(this).children(":first").attr('aria-expanded','false');
							$jQuery(this).addClass('inactive');
							$jQuery(this).find('.level-3-container').removeClass('active');
						});
						$jQuery(this).removeClass('inactive');
						$jQuery(this).addClass('active');
						$jQuery(this).children(":first").attr('aria-expanded','true');
						$jQuery(this).find('.level-3-container').addClass('active');
						mainMenu.setTabletLevelTwoHeight($jQuery(this));
						$jQuery(this).closest('.level-2-pannel').addClass('level-2-open');
						$jQuery(this).children(":first").focus();
					}
				}
			});
		}
	}
}

mainMenu.resetMoreElementsOnTablet = function() {

	mainMenu.$levelOneUl.find(".only-mobile").children().each(function(){
		$jQuery(this).removeClass('active');
		$jQuery(this).removeClass('inactive-grey');
		$jQuery(this).find(".level-3-container").removeClass("active");
	})
	mainMenu.$levelOneUl.find(".level-1-li").removeClass("inactive-grey");
}

mainMenu.resetMoreElementsOnMobile = function() {

	mainMenu.$levelOneUl.find(".only-mobile").children().each(function(){
		$jQuery(this).removeClass('active');
		$jQuery(this).removeClass('inactive');
		$jQuery(this).find(".level-3-container").removeClass("active");
	})
	mainMenu.$levelOneUl.find(".level-1-li").removeClass("inactive");
}

mainMenu.bindMobileLevelOneEvents = function() {

	$jQuery("#est-menu li.level-1-li").click(function() {
		if(mainMenu.isMobile()) {

			if($jQuery(this).hasClass("active")) {
				//Level two was already active for current elem
				$jQuery(this).removeClass("active");
				$jQuery(this).find(".level-2-pannel").removeClass("active");
				$jQuery(this).siblings().removeClass("inactive");
				mainMenu.$mobileOverlayButtons.removeClass("inactive");
				$jQuery(this).find(".s-point").removeClass("active");
			} else {
				$jQuery(this).addClass("active");

				$jQuery(this).find(".level-2-pannel").addClass("active");
				$jQuery(this).siblings().addClass("inactive");
				mainMenu.$mobileOverlayButtons.addClass("inactive");
				$jQuery(this).find(".s-point").addClass("active");
			}
		}
	});
}

mainMenu.bindMobileLevelOneKeypressEvent = function() {

	if (mainMenu.$levelOneLi) {
		mainMenu.$levelOneLi.keypress(function(event) {
			var keycode = event.keyCode || event.which;
			if (keycode == '13') {
				if(mainMenu.isMobile()) {

					if ($(".level-2-pannel").hasClass("hide-for-level-3") || $(".level-2-pannel").hasClass("level-2-open")) {

					} else {

						if ($jQuery(this).hasClass("active")) {
							//Level two was already active for current elem
							$jQuery(this).removeClass("active");
							$jQuery(this).children(":first").find('.nav-sr-only').text(',contains a sub menu');
							$jQuery(this).attr('aria-expanded','false');
							$jQuery(this).find(".level-2-pannel").removeClass("active");
							$jQuery(this).siblings().removeClass("inactive");
							mainMenu.$mobileOverlayButtons.removeClass("inactive");
							$jQuery(this).find(".s-point").removeClass("active");
						} else {
							$jQuery(this).addClass("active");
							$jQuery(this).children(":first").find('.nav-sr-only').text(',contains a sub menu. Press the enter key to return to the previous menu.');
							$jQuery(this).attr('aria-expanded','true');
							$jQuery(this).find(".level-2-pannel").addClass("active");
							$jQuery(this).siblings().addClass("inactive");
							mainMenu.$mobileOverlayButtons.addClass("inactive");
							$jQuery(this).find(".s-point").addClass("active");
						}

					}

					$jQuery('.level-2-pannel').removeClass('level-2-open');
				}
			}
		});
	}
}

mainMenu.bindMobileLevelTwoKeypressEvent = function() {

	if (mainMenu.$levelTwoLi) {
		mainMenu.$levelTwoLi.keypress(function(event) {
			var keycode = event.keyCode || event.which;
			if (keycode == '13') {
				if(mainMenu.isMobile()) {

					if($jQuery(this).parent().hasClass("only-mobile")) {

						if($jQuery(this).hasClass('active')) {
							$jQuery(this).addClass('inactive');
							$jQuery(this).removeClass('active');
							$jQuery(this).find('.level-3-container').removeClass('active');
							$jQuery(this).closest('.level-2-pannel').removeClass('hide-for-level-3');
							$jQuery(this).siblings().each(function(){
								/*$jQuery(this).removeClass('inactive');*/
								$jQuery(this).siblings().removeClass('inactive');
							});
						} else {
							$jQuery(this).removeClass('inactive');
							$jQuery(this).addClass('active');
							$jQuery(this).find('.level-3-container').addClass('active');
							$jQuery(this).closest('.level-2-pannel').addClass('hide-for-level-3');
							$jQuery(this).siblings().each(function(){
								$jQuery(this).removeClass('active');
								$jQuery(this).addClass('inactive');
								$jQuery(this).find('.level-3-container').removeClass('active');
							});
							$jQuery(this).parent().parent().find(".level-1-li").addClass("inactive");
							mainMenu.$mobileOverlayButtons.addClass("inactive");
						}

					} else {

						if($jQuery(this).hasClass('active')) {

							$jQuery(this).addClass('inactive');
							$jQuery(this).removeClass('active');
							$jQuery(this).children(":first").find('.nav-sr-only').text(',contains a sub menu');
							$jQuery(this).children(":first").attr('aria-expanded','false');
							$jQuery(this).find('.level-3-container').removeClass('active');
							$jQuery(this).closest('.level-2-pannel').removeClass('hide-for-level-3');
							$jQuery(this).closest('.level-2-pannel').addClass('level-2-open');
							$jQuery(this).siblings().each(function(){
								/*$jQuery(this).removeClass('inactive');*/
								$jQuery(this).siblings().removeClass('inactive');
							});
						} else {
							$jQuery(this).removeClass('inactive');
							$jQuery(this).addClass('active');
							$jQuery(this).children(":first").find('.nav-sr-only').text(',contains a sub menu. Press the enter key to return to the previous menu.');
							$jQuery(this).children(":first").attr('aria-expanded','true');
							$jQuery(this).find('.level-3-container').addClass('active');
							$jQuery(this).closest('.level-2-pannel').addClass('hide-for-level-3');
							$jQuery(this).siblings().each(function(){
								$jQuery(this).removeClass('active');
								$jQuery(this).addClass('inactive');
								$jQuery(this).find('.level-3-container').removeClass('active');
							});
						}
					}

				}
			}
		});
	}
}

mainMenu.bindMobileLevelTwoEvents = function() {

	$jQuery('#est-menu .level-2-container > ul > li.level-2-li').click(function(e) {
		e.stopPropagation();
		if(mainMenu.isMobile()) {

			if($jQuery(this).parent().hasClass("only-mobile")) {

				if($jQuery(this).hasClass("active")) {
					$jQuery(this).removeClass('active');
					$jQuery(this).find('.level-3-container').removeClass('active');
					$jQuery(this).siblings().each(function(){
						$jQuery(this).removeClass('inactive');
					});
					mainMenu.$onlyMobile.find('.level-2-li').removeClass('inactive');
					$jQuery(this).parent().parent().find(".level-1-li").removeClass("inactive");
					mainMenu.$mobileOverlayButtons.removeClass("inactive");

				} else {
					mainMenu.$onlyMobile.find('.level-2-li').addClass('inactive');
					$jQuery(this).removeClass('inactive');
					$jQuery(this).addClass('active');
					$jQuery(this).find('.level-3-container').addClass('active');
					$jQuery(this).siblings().each(function(){
						$jQuery(this).removeClass('active');
						$jQuery(this).addClass('inactive');
					});
					$jQuery(this).parent().parent().find(".level-1-li").addClass("inactive");
					mainMenu.$mobileOverlayButtons.addClass("inactive");
				}

			} else {

				if($jQuery(this).hasClass('active')) {

					$jQuery(this).addClass('inactive');
					$jQuery(this).removeClass('active');
					$jQuery(this).find('.level-3-container').removeClass('active');
					$jQuery(this).closest('.level-2-pannel').removeClass('hide-for-level-3');
					$jQuery(this).siblings().each(function(){
						/*$jQuery(this).removeClass('inactive');*/
						$jQuery(this).siblings().removeClass('inactive');
					});
				} else {
					$jQuery(this).removeClass('inactive');
					$jQuery(this).addClass('active');
					$jQuery(this).find('.level-3-container').addClass('active');
					$jQuery(this).closest('.level-2-pannel').addClass('hide-for-level-3');
					$jQuery(this).siblings().each(function(){
						$jQuery(this).removeClass('active');
						$jQuery(this).addClass('inactive');
						$jQuery(this).find('.level-3-container').removeClass('active');
					});
				}
			}
		}
	});
}

mainMenu.bindLevelThreeLinkEvents = function() {
	$jQuery('.level-3-container').click(function(e) {
		e.stopPropagation();
	});
}

mainMenu.getMaxHeightDesktopForLevelThree = function($ul) {
	var maxHeight = 0;
	$ul.find('.level-3-container').each(function(){
		if ($jQuery(this).height() > maxHeight) {
			maxHeight = $jQuery(this).height();
		}
	});
	return maxHeight;
}

mainMenu.setTabletLevelTwoHeight = function($li) {

	var $ul = $li.parent();
	$ul.height("auto");
	var reqHt = $li.find('.level-3-container').height() - $li.closest('.level-1-li').height();
	if($ul.height() < reqHt) {
		$ul.height(reqHt);
	}
}

mainMenu.isDesktop = function() {
	if(mainMenu.windowWidth > 1023)
		return true;
	else
		return false;
}


mainMenu.isTablet = function() {
	if(mainMenu.windowWidth < 1024 && mainMenu.windowWidth > 767)
		return true;
	else
		return false;
}

mainMenu.isMobile = function() {
	if(mainMenu.windowWidth < 768)
		return true;
	else
		return false;
}

function initAimScript() {
	$jQuery(".level-2-container > ul").each(function() {
		$jQuery(this).menuAim({
			activate: activateSubmenu,
			deactivate: deactivateSubmenu
		});

	});
}

function activateSubmenu(row) {
	mainMenu.activateLevelThree(row);
}

function deactivateSubmenu(row) {
	mainMenu.deactivateLevelThree(row);
}