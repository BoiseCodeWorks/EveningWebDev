(function () {
	
	var app = angular.module('heroApp');

	app.component('heroList', {
		bindings: {
			heroes: '<'
		},
		templateUrl: 'heroList.html',
		controller: HeroList,
		controllerAs: 'hl'
	});

	HeroList.$inject = [];

	function HeroList() {

	}
})();