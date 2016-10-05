(function () {
	var app = angular.module('heroApp', []);

	app.controller('heroController', HeroController);

	HeroController.$inject = [];

	function HeroController() {

		var hc = this;

		hc.heroes = [
			'Batman',
			'Superman',
			'Wonder Woman'
		];
	}
})();