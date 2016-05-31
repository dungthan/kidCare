import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import { Meteor } from 'meteor/meteor';

import './login.html';
import { name as ListRequirement } from '../listRequirement/listRequirement';

class Login {
	constructor($state, $scope, $reactive) {
		'ngInject';

		$reactive(this).attach($scope);
		this.user = {};
		this.$state = $state;
		this.isLoading = false;
		this.loginFailed = true;
	}

	login() {
		event.preventDefault();
		console.log(this.user);
		Meteor.loginWithPassword(this.user.email, this.user.password, (error) => {
			if (error) {
				 console.log(error);
				 this.loginFailed = false;
			} else {
				this.$state.go('listRequirement');
			}
		});
		// Meteor.call('loginKid', this.user.email, this.user.password, (error, result) => {
		// 	if (error) {
		// 		this.loginFailed = false;
		// 		console.log(error);
		// 	} else {
		// 		this.$state.go('listRequirement');
		// 	}
		// });
		this.isLoadding = true;
		//this.$state.go('listRequirement');
	}
}

const name = 'login';

export default angular.module(name, [
	angularMeteor,
	uiRouter,
	ListRequirement
]).component(name, {
	templateUrl: `imports/ui/components/${name}/${name}.html`,
	controllerAs: name,
	controller: Login
}).config(config);

function config($stateProvider) {
	'ngInject';

	$stateProvider.state('login', {
		url: '/login',
		template: '<login></login>',
		resolve: {
			currentUser($q) {
				if (Meteor.userId() === null) {
					return $q.resolve();
				} else {
					return $q.reject('AUTH_REQUIRED');
				}
			}
		}
	});
}
