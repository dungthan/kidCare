import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import { Meteor } from 'meteor/meteor';

import './listRequirement.html';
import { name as CreateRequirement } from '../createRequirement/insertImages/insertImages';
import './navs.css';

class ListRequirement {
	constructor($scope, $reactive, $ionicPopover, $state) {
		'ngInject';

		$reactive(this).attach($scope);

		$ionicPopover.fromTemplateUrl('avatarMore', {
			scope: $scope
		}).then((popover) => {
			this.popover = popover;
		});
		this.$state = $state;
	}

	navs() {
		$('#navs').toggleClass('active');
	}

	show($event) {
		this.popover.show($event);
	}

	hide() {
		this.popover.hide();
	}

	logout() {
		this.hide();
		Meteor.logout((error) => {
			if (error) {
				console.log(error);
			} else {
				this.$state.go('login');
			}
		});
	}
}

const name = 'listRequirement';

export default angular.module(name, [
	angularMeteor,
	uiRouter,
	CreateRequirement
]).component(name, {
	templateUrl: `imports/ui/components/${name}/${name}.html`,
	controllerAs: name,
	controller: ListRequirement
}).config(config);

function config($stateProvider) {
	'ngInject';

	$stateProvider.state('listRequirement', {
		url: '/list-requirement',
		template: '<list-requirement></list-requirement>',
		resolve: {
			currentUser($q) {
				if (Meteor.userId() === null) {
					return $q.reject('AUTH');
				} else {
					return $q.resolve();
				}
			}
		}
	});
}
