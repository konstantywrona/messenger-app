// HTML references
const loginForm = document.querySelector('#welcome-form');
const messagesSection = document.querySelector('#messages-section');
const messagesList = document.querySelector('#messages-list');
const addMessagesForm = document.querySelector('#add-messages-form');
const userNameInput = document.querySelector('#username');
const messageContentInput = document.querySelector('#message-content');

// Global
let userName = '';

const login = (e) => {
  e.preventDefault();
  if (userNameInput.value.length > 0) {
    userName = userNameInput.value;
    loginForm.classList.remove('show');
    messagesSection.classList.add('show');
    addMessagesForm.classList.add('show');
  } else {
    alert('Please enter a username');
  }
};

const sendMessage = (e) => {
  e.preventDefault();
  if (messageContentInput.value.length > 0) {
    addMessage(userName, messageContentInput.value);
    messageContentInput.value = '';
  } else {
    alert('Please enter a message');
  }
};

function addMessage(author, content) {
  const message = document.createElement('li');
  message.classList.add('message');
  message.classList.add('message--received');
  if (author === userName) message.classList.add('message--self');
  message.innerHTML = `
    <h3 class="message__author">${userName === author ? 'You' : author}</h3>
    <div class="message__content">
     ${content}
    </div>
  `;
  messagesList.appendChild(message);
}

loginForm.addEventListener('submit', (e) => login(e));
addMessagesForm.addEventListener('submit', (e) => sendMessage(e));
