## Emailer     

This project is a simple emailer application that allows users to enter an email and send emails to anyone. The application has a frontend interface where users can input the recipient's email address and send a predefined message. The backend handles the email sending functionality.

## Features

- Simple frontend form for entering recipient email addresses
- Backend integration to send emails
- Predefined email subject and message

## Setup

To run this project locally, follow the steps below.

### Prerequisites

- Node.js installed on your machine
- npm (Node Package Manager) installed on your machine

### Installation

Clone the repository:

```shell
git clone https://github.com/your-username/emailer.git
cd emailer
```

Install dependencies:

```shell
npm install 
```

Create a `.env` file in the `backend` directory:

```plaintext
EMAIL_HOST=your_email_host
EMAIL_USER=your_email_address
EMAIL_PASS=your_email_password
```

Replace `your_email_host`, `your_email_address`, and `your_email_password` with your actual email service credentials.

Update the email message in `server.js`:

```javascript
const subject = "SUBJECT";
const message = `
    YOUR_MESSAGE
`;
```

Replace `subject =`, and `message` with your actual subject and message you want to send.

### Running the Application

Start the backend server:

```bash
node backend/server.js
```

Open the frontend:

Open `frontend/index.html` in your web browser. This is the frontend interface where you can enter the recipient's email address and send the email.

### Usage

Enter the recipient's email address in the input field. Click the "Send Email" button to send the email.

### Technologies Used

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express, Nodemailer

### Project Structure

```
emailer/
├── backend/
│   ├── server.js
│   ├── sendEmail.js
│   └── .env
├── frontend/
│   ├── index.html
│   ├── styles.css
│   └── script.js
└── README.md
```

### Notes

Ensure that your email provider allows sending emails via SMTP and that you have the correct SMTP settings in your `.env` file. For security reasons, avoid pushing your `.env` file to a public repository. Add `.env` to your `.gitignore` file.

### License

This project is licensed under the MIT License.
```

This is a simple emailer application where users can enter an email and send emails with a predefined message. The backend handles the email sending functionality.
```
