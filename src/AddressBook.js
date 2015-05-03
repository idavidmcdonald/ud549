function AddressBook() {
	var self = this;
	this.contacts = [];
	this.initialComplete = false;

	this.getInitialContacts = function(cb) {
		setTimeout(function() {
			self.initialComplete = true;
			if (cb) {
				return cb();
			};
		}, 3);
	};

	this.addContact = function(contact){
		self.contacts.push(contact);
	};

	this.getContact = function(index){
		return self.contacts[index];
	};

	this.deleteContact = function(index){
		self.contacts.splice(index, 1);
	}
};