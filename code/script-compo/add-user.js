function addUser() {
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  if (email.match(validRegex)) {
    if (name && email != null) {
      var id = 1;
      var val = users
        .map(function (x) {
          return x.id;
        })
        .indexOf(id);
      while (val != -1) {
        id++;
        val = users
          .map(function (x) {
            return x.id;
          })
          .indexOf(id);
      }
      const user = {
        id: id,
        name: name,
        email: email,
      };
      users.push(user);
      localStorage.setItem("users", JSON.stringify(users));
      nameInput.value = "";
      emailInput.value = "";
      renderTable();
    } else {
      alert("Name is Required");
    }
  } else {
    alert("Invalid email address!");
  }
}
