function updateUser() {
  const name = updateNameInput.value;
  const email = updateEmailInput.value;
  if (email.match(validRegex)) {
    const index = users.findIndex((user) => user.id === currentUserId);
    if (index !== -1) {
      users[index].name = name;
      users[index].email = email;
      localStorage.setItem("users", JSON.stringify(users));
      hideUpdateForm();
      renderTable();
    }
  } else {
    alert("Invalid email address!");
  }
}
