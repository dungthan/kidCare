import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

import './register.html';

class Register {
	constructor($scope, $reactive, $state) {
		'ngInject';

		$reactive(this).attach($scope);

		this.subscribe('users');

		this.user = {};
		this.isLoadding = false;
		this.emailUnique = true;
		this.$state = $state;
	}

	submit() {
		this.isLoadding = true;

		if (Meteor.users.find({emails: {$elemMatch: { address: this.user.email }}}).fetch().length > 0) {
			this.emailUnique = false;
			this.isLoadding = false;
			return false;
		}

		if (this.emailUnique) {
			Meteor.call('insertUser', this.user.email, this.user.password, (error, result) => {
				if (error) {
					console.log('Error inser user');
				} else {
					console.log('dungthan');
					this.$state.go('login');
					this.isLoadding = false;
				}
			});

		}
	}

	checkEmailUnique() {
		this.emailUnique = true;
	}
}

const name = 'register';

export default angular.module(name, [
	angularMeteor,
	uiRouter
]).component(name, {
	templateUrl: `imports/ui/components/${name}/${name}.html`,
	controllerAs: name,
	controller: Register
}).config(config).directive('repeatPassword', repeatPassword);

function config($stateProvider) {
	'ngInject';

	$stateProvider.state('register', {
		url: '/register',
		template: '<register></register>',
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

function repeatPassword() {
	return {
        require: "ngModel",
        link: function(scope, elem, attrs, ctrl) {
            var otherInput = elem.inheritedData("$formController")[attrs.repeatPassword];
            ctrl.$parsers.push(function(value) {
                if(value === otherInput.$viewValue) {
                    ctrl.$setValidity("noMatch", true);
                    return value;
                }
                ctrl.$setValidity("noMatch", false);
            });

            otherInput.$parsers.push(function(value) {
                ctrl.$setValidity("noMatch", value === ctrl.$viewValue);
                return value;
            });
        }
    };
}
