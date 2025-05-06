let contacts = [];

function addContact() {
  const input = document.getElementById("nameInput");
  const name = input.value.trim();

  if (name === "") return;

  if (contacts.length === 7) {
    contacts.shift(); // remove first contact
  }

  contacts.push(name);
  input.value = "";
  showContacts();
}

function removeContact() {
  contacts.pop(); // remove last contact
  showContacts();
}

function showContacts() {
  const list = document.getElementById("contactsList");
  list.innerHTML = "";

  for (let i = 0; i < contacts.length; i++) {
    const span = document.createElement("span");
    span.textContent = contacts[i];
    list.appendChild(span);
  }
}


