const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'mrwhiterk@gmail.com',
    subject: 'Thanks for joining in',
    text: `Welcome to the app, ${name}. Let me know what you think about the app.`
  })
}

const sendCancellationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'mrwhiterk@gmail.com',
    subject: 'Sorry to see you go',
    text: `Sorry to see you leave, ${name}. Let me know how we can have improved your experience.`
  })
}

module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail
}
