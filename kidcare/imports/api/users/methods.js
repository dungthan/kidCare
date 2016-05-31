import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Accounts } from 'meteor/accounts-base';

export function insertUser(email, password) {
	return Accounts.createUser({
		email: email,
		password: password
	});
}


Meteor.methods({
	insertUser
});
