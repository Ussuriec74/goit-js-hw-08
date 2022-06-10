import throttle from "lodash.throttle";

const FORM_VALUE_KEY = 'feedback - form - state';
const formRef = document.querySelector(".feedback-form");

formRef.addEventListener("input", throttle(onFormInput), 1000);
formRef.addEventListener("submit", onSubmitForm);

filledForm();

function onFormInput() {
  localStorage.setItem(FORM_VALUE_KEY, JSON.stringify(createFormFieldsObject()));
}

function onSubmitForm(event) {
  event.preventDefault();
  console.log(createFormFieldsObject());
  formRef.reset();
  localStorage.removeItem(FORM_VALUE_KEY);
}

function createFormFieldsObject() {
  return {
    email: formRef.elements.email.value,
    message: formRef.elements.message.value,
  };
}

function filledForm() {
  try {
    const parsedData = JSON.parse(localStorage.getItem(FORM_VALUE_KEY));
    if (parsedData) {
      formRef.elements.email.value = parsedData.email;
      formRef.elements.message.value = parsedData.message;
    }
  } catch (error) {
      alert("Щось пішло не так");
    }
}
