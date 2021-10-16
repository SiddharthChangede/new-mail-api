const express = require('express')
const app = express()
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: '123sid21@gmail.com',
        pass: '123ichliebedich231'
    }
})

const mailOptions = {
    from: '123sid21@gmail.com',
    to: '123sid231@gmail.com',
    subject: 'try new email via api',
    text: 'Hii Siddharth'
}

app.post('/send-mail', (req, response) => {
    transporter.sendMail(mailOptions, (res, err) => {
        console.log('Mail sent to' + ' ' + mailOptions.to)
        response.send('Mail sent to' + ' ' + mailOptions.to)
    })
})

app.listen(process.env.PORT || 3000, () => { console.log('Listening on port 3000') })