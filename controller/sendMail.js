const express = require('express');
const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
    // res.send('Mail is Sent');

    let { userEmail } = req.body;
    console.log(req.body);
    let admin = 'bigwalstudio@gmail.com';

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'bigwalstudio@gmail.com',
            pass: 'rztx lihe goya kamu'
        }
    });

    const mailOptionsToAdmin = {
        from: 'bigwalstudio@gmail.com',
        to: admin,
        subject: 'Washta',
        text: `A new user subscribed with the email: ${userEmail}`
    };

    const mailOptionsToUser = {
        from: 'test@test.com',
        to: userEmail,
        subject: 'Washta',
        text: 'Thank You For Your Subscription'
    };

    try {
        // Send emails to both admin and user simultaneously
        await Promise.all([
            transporter.sendMail(mailOptionsToAdmin),
            transporter.sendMail(mailOptionsToUser)
        ]);
        console.log('Emails sent successfully');
        res.send('Thank you for subscribing!');
    } catch (error) {
        console.error('Error sending emails:', error);
        return res.status(500).send('Failed to send emails');
    }
};



module.exports = sendMail;