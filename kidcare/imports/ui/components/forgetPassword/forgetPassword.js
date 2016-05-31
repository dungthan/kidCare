import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import './forgetPassword.html';

class ForgetPassword {}

const name = 'forgetPassword';

export default angular.module(name, [
	angularMeteor,
	uiRouter
]).component(name, {
	templateUrl: `imports/ui/components/${name}/${name}.html`,
	controllerAs: name,
	controller: ForgetPassword
}).config(config);

function config($stateProvider) {
	'ngInject';

	$stateProvider.state('forgetPassword', {
		url: '/forget-password',
		template: '<forget-password></forget-password>'
	});
}
