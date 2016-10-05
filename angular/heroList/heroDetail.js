(function () {
	
	var app = angular.module('heroApp');

	app.component('heroDetail', {
		bindings: {
			hero: '<'
		},
		templateUrl: 'heroDetail.html',
		controller: HeroDetail,
		controllerAs: 'hd'
	});

	HeroDetail.$inject = [];

	function HeroDetail() {

	}
})();