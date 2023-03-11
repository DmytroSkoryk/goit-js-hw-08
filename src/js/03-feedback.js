import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = "feedback-form-state";

form.addEventListener("submit", onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

updateOutput();

function onFormSubmit (event){
    event.preventDefault();
    const formData = new FormData(form);
    formData.forEach((value, name) => console.log(value, name));
    form.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY); 
  };

  const inputData = {};
  function onFormInput(event) {
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
