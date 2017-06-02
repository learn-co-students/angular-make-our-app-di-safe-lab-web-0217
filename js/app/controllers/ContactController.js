function ContactController(stuff, lag) {
	stuff.name = 'Bill Gates';

	lag(function () {
		stuff.name = 'Steve Jobs';
	}, 5000);
}

ContactController.$inject = ['$scope', '$timeout']

angular
	.module('app')
	.controller('ContactController', ContactController);
