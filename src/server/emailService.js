// emailService.js
const nodemailer = require('nodemailer');

// Configure the transporter
const transporter = nodemailer.createTransport({
    host: 'smtp.mailgun.org', // Mailgun SMTP host
    port: 587, // SMTP port
    auth: {
        user: 'postmaster@sandbox37a886d91ab24fb58631c6b1464f3975.mailgun.org', // Your Mailgun SMTP username
        pass: 'ebf2c24c78b43b9a032316cb14dd2633-5dcb5e36-80af4644' // Mailgun SMTP password
    }
});

// Function to send verification email
async function sendVerificationEmail(toEmail, verificationLink) {
    try {
        const info = await transporter.sendMail({
            from: '"SoftWear" <postmaster@sandbox37a886d91ab24fb58631c6b1464f3975.mailgun.org>', // Sender address
            to: 'rickihippy@hotmail.com', // My Mailgun Authorized recipient
            subject: 'Céleste Fontaine: Timeless Elegance, Modern Trends - Please Verify Your Email', // Improved subject
            html: `<p>Thank you for signing up with Céleste Fontaine! We’re excited to have you on board. To get started, please verify your email address by clicking the link below:</p>
           <p><a href="${verificationLink}" style="color: #3498db; text-decoration: none;">Verify Email</a></p>
           <p>Welcome to the community,</p>`
        });
        console.log('Email sent: ' + info.response);
        console.log(process.env.JWT_SECRET);
    } catch (error) {
        console.error('Error sending email: ', error);
    }
}

// Export the function so you can use it in other files
module.exports = { sendVerificationEmail };
