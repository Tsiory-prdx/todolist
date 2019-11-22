// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery3
//= require activestorage
//= require_tree .

$(document).ready(function() {
  $('[data-js-hide-link]').click(function(event){
    event.preventDefault(); 
    alert('You clicked the Hide link');	
  });
// 2.1 Tabulations
	function Tabulation() {
		// let liListContainer = document.getElementsByClassName('container')[1];
		// console.log(liListContainer);
		// let cards = liListContainer.querySelectorAll('.card');
		// console.log(cards);

		$list = $('.title');
		$taskList = $('.container .card');

		console.log($list);
		console.log($taskList);

			$list.eq(0).on('click', () => {
				$list.eq(0).attr('style', 'display: inline-block; border: 1px solid #b2bec3; padding: 2px; background-color: #b2bec3; border-color: #2d3436; border-radius: 5px 5px;')
				$list.eq(1).attr('style', 'display: inline-block; border: 1px solid #b2bec3; padding: 2px; background-color: #dfe6e9; border-color: #2d3436; border-radius: 5px 5px;')
				$list.eq(2).attr('style', 'display: inline-block; border: 1px solid #b2bec3; padding: 2px; background-color: #dfe6e9; border-color: #2d3436; border-radius: 5px 5px;')

				$taskList.eq(0).toggle('collapse');
				$taskList.eq(1).hide();
				$taskList.eq(2).hide();
			});

			$list.eq(1).on('click', () => {
				$list.eq(1).attr('style', 'display: inline-block; border: 1px solid #b2bec3; padding: 2px; background-color: #b2bec3; border-color: #2d3436; border-radius: 5px 5px;')
				$list.eq(2).attr('style', 'display: inline-block; border: 1px solid #b2bec3; padding: 2px; background-color: #dfe6e9; border-color: #2d3436; border-radius: 5px 5px;')
				$list.eq(0).attr('style', 'display: inline-block; border: 1px solid #b2bec3; padding: 2px; background-color: #dfe6e9; border-color: #2d3436; border-radius: 5px 5px;')

				$taskList.eq(1).toggle('collapse');
				$taskList.eq(2).hide();
				$taskList.eq(0).hide();
			});			

			$list.eq(2).on('click', () => {
				$list.eq(2).attr('style', 'display: inline-block; border: 1px solid #b2bec3; padding: 2px; background-color: #b2bec3; border-color: #2d3436; border-radius: 5px 5px;')
				$list.eq(0).attr('style', 'display: inline-block; border: 1px solid #b2bec3; padding: 2px; background-color: #dfe6e9; border-color: #2d3436; border-radius: 5px 5px;')
				$list.eq(1).attr('style', 'display: inline-block; border: 1px solid #b2bec3; padding: 2px; background-color: #dfe6e9; border-color: #2d3436; border-radius: 5px 5px;')
				
				$taskList.eq(2).toggle('collapse');
				$taskList.eq(0).hide();
				$taskList.eq(1).hide();
			});
	}		
	Tabulation();
// 2.2 Le minimum vital du JavaScript de front

 	// 2.2.1 Le dropdown qui fait plaisir
 	function dropDown() {
		$navButton = $('.navbar-toggler');
		$navButton.on('click', () => {
			$('#navbarTogglerDemo03').toggle('collapse');
		});
	}
	dropDown();

	// 2.2.2 Modales de connexion/inscription
	function modales() {
		$loginForm = $('#login');
		$loginButton = $('.loginButton');

		$signupForm = $('#signup');
		$signUpButton = $('.signUpButton');

		$loginButton.on('click', () => {
			$signupForm.hide();
			$loginForm.toggle('collapse');
		});

		$('.close').on('click', () => {
			$loginForm.hide();
			$signupForm.hide();
		});

		$signUpButton.on('click', () => {
			$loginForm.hide();
			$signupForm.toggle('collapse');
		});
	}
	modales();

// 2.3. Carousel
	function Carousel() {
		$cards = $('.card.col-3 .rounded-circle');
		$('.card.col-3').hide();

		$nextButton = $('#nextButton');
		$previousButton = $('#previousButton');

		$('.card.col-3').eq(0).show();
		$cards.eq(0).show();

		var i = 0;

		$nextButton.on('click', () => {

			$('.card.col-3').eq(i).hide();
			i++;
			if (i == $cards.length) {
				i = 0;
			}
			$('.card.col-3').eq(i).show();

		});

		$previousButton.on('click', () => {
			$('.card.col-3').eq(i).hide();
			i--;
			if (i < 0) {
				i = $cards.length - 1;
			}
			$('.card.col-3').eq(i).show();			
		});
	}
	Carousel();
});	