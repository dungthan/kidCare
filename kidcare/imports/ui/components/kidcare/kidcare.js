import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import 'angular-component';

import './kidcare.html';
import { name as Login } from '../login/login';
import { name as Register } from '../register/register';
import { name as ForgetPassword } from '../forgetPassword/forgetPassword';

class Kidcare {}

const name = 'kidcare';

export default angular.module(name, [
	angularMeteor,
	'ionic',
	uiRouter,
	ForgetPassword,
	Login,
	Register,
]).component(name, {
	templateUrl: `imports/ui/components/${name}/${name}.html`,
	controllerAs: name,
	controller: Kidcare
}).config(config).run(run);

function config($locationProvider, $urlRouterProvider) {
	'ngInject';

	$locationProvider.html5Mode(true);
	$urlRouterProvider.otherwise('/login');
}

function run ($rootScope, $state) {
	'ngInject';

	$rootScope.$on('$stateChangeError', (event, toState, toParams, fromState, fromParams, error) => {
		if (error === "AUTH_REQUIRED") {
			$state.go('listRequirement');
		}

		if (error === "AUTH") {
			$state.go("login");
		}
	});
}
