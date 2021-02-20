const fs = require('fs')
const path = require('path')

// this path needs to be relative to work with fs
const contactsLocation = path.resolve('contacts.json'); // Or... path.join(__dirname, 'contacts.json');

/**
 * should read the contacts at the
 * @contactsLocation path and convert
 * it to a js object
 */
const getContacts = () => {
  const file = fs.readFileSync(contactsLocation).toString();

  return JSON.parse(file);
}

/**
 * takes a contacts object, converts it to JSON
 * and saves it at the @contactsLocation path
 * @param {Object} contacts contacts object
 */
const saveContacts = (contacts) => {
  const contactsJSON = JSON.stringify(contacts, null, 3); // 3 for spacing

  fs.writeFileSync(contactsLocation, contactsJSON);
}

module.exports = {
  contactsLocation,
  getContacts,
  saveContacts
}

