import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import { Meteor } from 'meteor/meteor';

import './insertImages.html';
import { name as InsertInforChild } from '../insertInforChild/insertInforChild';

class InsertImages {
	constructor($scope) {
		'ngInject';
	}
}

const name = 'insertImages';

export default angular.module(name, [
	angularMeteor,
	uiRouter,
	InsertInforChild
]).component(name, {
	templateUrl: `imports/ui/components/createRequirement/${name}/${name}.html`,
	controllerAs: name,
	controller: InsertImages
}).config(config);

function config($stateProvider) {
	'ngInject';

	$stateProvider.state('createRequirementInsertImages', {
		url: '/create-requirement/insert-images',
		template: '<insert-images></insert-images>'
	});
}
