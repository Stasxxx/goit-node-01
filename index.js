const yargs = require("yargs");
const {hideBin} = require("yargs/helpers")

const contacts = require("./contacts")

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const contactList = await contacts.listContacts();
      console.table(contactList);
      break;

    case "get":
      const oneContact = await contacts.getContactById(id);
      console.table(oneContact);
      break;

    case "add":
      const newContact = await contacts.addContact({ name, email, phone });
      console.log(newContact);
      break;

    case "remove":
      const removeContact = await contacts.removeContact(id);
      console.log(removeContact)
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}


const arr = hideBin(process.argv)
const {argv} = yargs(arr)
invokeAction(argv);

