import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import { Meteor } from 'meteor/meteor';

import './insertInforChild.html';
import { name as InsertDescription } from '../insertDescription/insertDescription';


class InsertInforChild {
	constructor($scope, $reactive, $ionicHistory) {
		'ngInject';

		$reactive(this).attach($scope);
		this.$ionicHistory = $ionicHistory;
	}

	backView() {
		this.$ionicHistory.goBack();
	};
}

const name = 'insertInforChild';

export default angular.module(name, [
	angularMeteor,
	uiRouter,
	InsertDescription
]).component(name, {
	templateUrl: `imports/ui/components/createRequirement/${name}/${name}.html`,
	controllerAs: name,
	controller: InsertInforChild
}).config(config);

function config($stateProvider) {
	'ngInject';

	$stateProvider.state('createRequirementInsertInforChild', {
		url: '/create-requirement/insert-infor-child',
		template: '<insert-infor-child></insert-infor-child>'
	});
}
