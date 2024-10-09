const form = document.querySelector("form");
let obj = {};
form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    const newForm = event.target;
    const inputEmail = form.elements.email.value;
    const inputPassword = form.elements.password.value;
    
    if (inputEmail === "" || inputPassword === "") {
       return alert("All form fields must be filled in");
    }else{
        obj.email=inputEmail;
        obj.password=inputPassword;
    }
  
    console.log(obj);
    newForm.reset();
  }