const messageDisplay = document.querySelector('.message-container')

const showMessage = (message) => {
  const messageElement = document.createElement('p');
  messageElement.textContent = message;
  messageDisplay.append(messageElement);
  setTimeout(() => messageDisplay.removeChild(messageElement), 2000);
}

async function text(){
var myHeaders = new Headers();
myHeaders.append("Authorization", "Basic QUM3OTE3ZmY4ZjJhODIwMTE3YThlNjY5YmFjMGI1MGNlMTpjNDAwYTg1MTM4NWY2OTBkZWFiOTE3ZWI1MmM4MGMxOQ==");
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

let phone = document.querySelector('input').value;
let message = document.querySelector('textarea').value;
console.log(phone, message);

//showMessage("hi");

var urlencoded = new URLSearchParams();
urlencoded.append("To", phone);
urlencoded.append("From", "+13854621286");
urlencoded.append("Body", message);


var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: urlencoded,
  redirect: 'follow'
};

fetch("https://api.twilio.com/2010-04-01/Accounts/AC7917ff8f2a820117a8e669bac0b50ce1/Messages.json", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}





