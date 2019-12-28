const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'k.kyuta.821@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'k.kyuta.821@gmail.com',
        subject: 'Sorry to see you go!',
        text: `We are very sad to say Goodbye to ${name}!`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}