const contacts = require("./contacts")

// const argv = require("yargs").argv;


const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
          const contactList = await contacts.listContacts();
          console.table(contactList)
      break;

    case "get":
          const oneContact = await contacts.getContactById(id);
          console.table(oneContact)
      break;

    case "add":
      const newContact = await contacts.addContact({ name, email, phone });
      console.log(newContact);
      break;

    case "remove":
      // ... id
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

// invokeAction(argv);

// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "2" })
invokeAction({ action: "add", name: "Stas", email: "stas@mail.com", phone: "234 234 56" })