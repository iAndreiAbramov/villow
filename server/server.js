'use strict';
require('dotenv').config();
const nodemailer = require('nodemailer');

const formidable = require('formidable');

const express = require('express');
const app = express();

const port = process.env.API_PORT; // напр.: 3001

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 *
 * Что нужно:
 *
 * 1. Создать .env.example
 * 1.1. process.env.EMAIL_LOG - их почта
 * 1.2. process.env.EMAIL_PASS - пароль к их почте
 * 1.3. process.env.EMAIL_RECEIVER - почта куда отправляем письмо
 *
 * 2. Поменять fields на те которые мы заполняем в форме обратной связи
 *
 * 3. Уточнить host и port для nodemailer
 *
 */

// async..await is not allowed in global scope, must use a wrapper
// Принимаем FormData
async function main(req) {
    try {
        const form = formidable({ multiples: true });
        let fields;
        let files;

        form.parse(req, (err, fieldsI, filesI) => {
            if (err) {
                console.error(err);
            }

            fields = fieldsI;
            files = filesI;
        });

        await delay(2000);

        let transporter = nodemailer.createTransport({
            // TODO: см.п.3
            host: 'smtp.yandex.ru',
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_LOG, // generated ethereal user
                pass: process.env.EMAIL_PASS, // generated ethereal password
            },
        });

        // TODO: см.п.2
        const messageHtml = `<h2>Contact Request Submitted</h2>
                    <p><b>Name:</b> ${fields.name}</p>
                    <p><b>Country:</b> ${fields.country}</p>
                    <p><b>Email:</b> ${fields.email}</p>
                    <p><b>Theme:</b> ${fields.theme}</p>
                    <p><b>Application:</b> ${fields.app}</p>
                    <p><b>Message:</b><br/>${fields.message}</p>`;

        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: `"Villow" < ${process.env.EMAIL_LOG}>`, // sender address - вывести в env
            to: process.env.EMAIL_RECEIVER, // list of receivers - вывести в env
            subject: 'Новая заявка от ' + fields.name, // Subject line
            text: '', // plain text body
            html: messageHtml, // html body
        });

        console.log('Message sent: %s', info.messageId);

        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    } catch (e) {
        console.error(e);
    }
}

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

app.post('/mail', async function (req, res) {
    await main(req);
    res.send('POST request to the homepage');
});
