let form = document.querySelector("form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  let uname = document.getElementById("name").value;

  let email = document.getElementById("email").value;

  let message = document.getElementById("message").value;

  if (uname == "" || uname == null) {
    if (email == "" || email == null) {
      if (message == "" || message == null) {
        console.warn("You must enter some data to submit this form");
        return false;
      }
    }
  }

  console.log("========== Form Submission ==========");

  if (uname == "" || uname == null) {
    console.log("Name: No Submission");
  } else {
    console.log("Name: " + uname);
  }

  if (email == "" || email == null) {
    console.log("Email: No Submission");
  } else {
    console.log("Email: " + email);
  }

  if (message == "" || message == null) {
    console.log("Message: No Submission");
  } else {
    console.log("Message: " + message);
  }

  return false;
}

function refreshTime() {
  let time = document.getElementById("time");
  let date = new Date();

  time.textContent = date;
}
setInterval(refreshTime, 5000);
