// Load the Gmail API client library
gapi.load('client:auth2', initClient);

// Initialize the API client with the credentials
function initClient() {
  gapi.client.init({
    apiKey: 'YOUR_API_KEY',
    clientId: 'YOUR_CLIENT_ID',
    discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest'],
    scope: 'https://www.googleapis.com/auth/gmail.send'
  }).then(function () {
    // Call the Gmail API to send a message
    sendMessage('recipient@example.com', 'Subject', 'Body');
  });
}

// Send a message using the Gmail API
function sendMessage(to, subject, message) {
  var raw = makeEmail(to, 'me', subject, message);
  var request = gapi.client.gmail.users.messages.send({
    'userId': 'me',
    'resource': {
      'raw': window.btoa(raw)
    }
  });
  request.execute(function (message) {
    console.log('Message Id: ' + message.id);
  });
}

// Create a message in the required format for the Gmail API
function makeEmail(to, from, subject, message) {
  var headers = [
    "To: " + to,
    "From: " + from,
    "Subject: " + subject
  ];
  var body = message.split("\n").map(function (line) {
    return " " + line;
  }).join("\n");
  var email = headers.join("\n") + "\n\n" + body;
  var base64EncodedEmail = btoa(email);
  return base64EncodedEmail;
}
