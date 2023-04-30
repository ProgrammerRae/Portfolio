// Load the Gmail API client library
const {google} = require('googleapis');
const gmail = google.gmail('v1');

// Authenticate and authorize your application
// (You will need to replace the placeholders with your own values)
const credentials = require('./path/to/credentials.json');
const auth = new google.auth.GoogleAuth({
  credentials: credentials,
  scopes: ['https://www.googleapis.com/auth/gmail.send']
});
const client = await auth.getClient();

// Create an email message
const message = "To: recipient@example.com\r\n" +
                "Subject: Test email from Gmail API\r\n" +
                "\r\n" +
                "This is a test email sent using the Gmail API.";

// Convert the email message to base64 URL-encoded string
const encodedMessage = Buffer.from(message).toString('base64').replace(/\+/g, '-').replace(/\//g, '_');

// Send the email
const res = await gmail.users.messages.send({
  auth: client,
  userId: 'me',
  resource: {
    raw: encodedMessage
  }
});

console.log('Email sent:', res.data);
