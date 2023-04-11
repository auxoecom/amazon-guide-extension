// Capture the user's question
let userQuestion = window.prompt("What's your question?");

// Find the input field and populate it with the user's question
let inputField = document.querySelector("input[name='chat-input']");
if (inputField) {
  inputField.value = userQuestion;
  
  // Submit the form to trigger the chatbot response
  let chatForm = inputField.form;
  chatForm.submit();
} else {
  console.error("Could not find chat input field.");
}

// Wait for the chatbot response to load
let chatbotResponse = document.querySelector(".chatbot-response");
let observer = new MutationObserver(mutations => {
  // When the chatbot response loads, get the answer and display it to the user
  let answer = chatbotResponse.querySelector(".response-text");
  if (answer) {
    alert(answer.textContent.trim());
  }
});
