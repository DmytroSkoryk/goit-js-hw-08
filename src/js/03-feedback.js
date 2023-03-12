import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = "feedback-form-state";

form.addEventListener("submit", onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

updateOutput();

function onFormSubmit (event){
    event.preventDefault();
    const {email, message} = form.elements;
    console.log({ email:email.value, message:message.value })
    if (email.value === '' || message.value === '') {
      return alert(`Всі поля повинні бути заповнені!`);
    }
    form.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY); 
  };

 
  function onFormInput(event) {
    let inputData = localStorage.getItem(LOCALSTORAGE_KEY);
    inputData = inputData ? JSON.parse(inputData) : {};
    inputData[event.target.name] = event.target.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(inputData));
  }
  
  function updateOutput() {
    let savedData = localStorage.getItem(LOCALSTORAGE_KEY);
    if (savedData) {
        savedData = JSON.parse(savedData);
      Object.entries(savedData).forEach(([name, value]) => {
        form.elements[name].value = value;
      });
    }
  }
