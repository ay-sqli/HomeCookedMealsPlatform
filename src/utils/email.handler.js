// src/api/users/email.handler.js

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
  auth: {
    user: 'myemail@gmail.com', //  Gmail email address
    pass: 'password', //  Gmail password 
  },
});

// Send a password reset email
exports.sendPasswordResetEmail = async (toEmail, newPassword) => {
  try {
    const mailOptions = {
      from: 'myemail@gmail.com', //  Gmail email address
      to: toEmail,
      subject: 'Password Reset',
      html: `Your new password is: ${newPassword}`,
    };

    await transporter.sendMail(mailOptions);
    console.log('Password reset email sent.');
  } catch (error) {
    console.error('Error sending password reset email:', error);
  }
};

