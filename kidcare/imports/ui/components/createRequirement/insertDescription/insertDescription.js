import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import { Meteor } from 'meteor/meteor';

import './insertDescription.html';

class InsertDescription {
	constructor($scope, $reactive, $ionicHistory) {
		'ngInject';

		$reactive(this).attach($scope);
		this.$ionicHistory = $ionicHistory;
	}

	backView() {
		this.$ionicHistory.goBack();
	};
}

const name = 'insertDescription';

export default angular.module(name, [
	angularMeteor,
	uiRouter,
]).component(name, {
	templateUrl: `imports/ui/components/createRequirement/${name}/${name}.html`,
	controllerAs: name,
	controller: InsertDescription
}).config(config);

function config($stateProvider) {
	'ngInject';

	$stateProvider.state('createRequirementInsertDescription', {
		url: '/create-requirement/insert-description',
		template: '<insert-description></insert-description>'
	});
}
