import angular from 'angular';
import { Meteor } from 'meteor/meteor';

import { name as Kidcare } from '../imports/ui/components/kidcare/kidcare';

function onReady() {
	angular.bootstrap(document, [
		Kidcare
	], {
		strictDi: true
	});
}

if (Meteor.isCordova) {
	angular.element(document).on('deviceready', onReady);
} else {
	angular.element(document).ready(onReady);
}
