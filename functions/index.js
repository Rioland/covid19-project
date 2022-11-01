const functions = require("firebase-functions");
const path = require("path");

var admin = require("firebase-admin");

var serviceAccount = require("./covid-dece5-firebase-adminsdk-4mwf1-576d6007b0.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://covid-dece5-default-rtdb.firebaseio.com"
});

var hbs = require('nodemailer-express-handlebars');
var nodemailer = require("nodemailer");
var fs = require("fs-extra");



var options = {

    viewEngine: {

        extname: '.hbs',

        layoutsDir: path.resolve("template"),

        defaultLayout : path.resolve("template"),

        partialsDir : path.resolve("template")

    },

    viewPath: path.resolve("template"),

    extName: '.hbs'

};





var transporter = nodemailer.createTransport({
    host: "smtp-relay.sendinblue.com", //process.env.EMAIL_SERVER,
    port: 587,
    auth: {
        user: "riotech2222@gmail.com", //process.env.EMAIL_USERNAME, support@alocryptotrade.com
        pass: "XtDEPfNdAvbjRqGg", //process.env.EMAIL_PASSWORD Adedamolarioland2222@gmail.com
    },
});

transporter.use('compile', hbs(options));
exports.sendEmail = functions.firestore.document("users/{uEmail}").onWrite((snap, context) => {
    try {
        var resp = snap.after.data()
        var REmail = snap.after.id;
        console.log(REmail);
        const mailOptions = {
            from: "riotech2222@gmail.com", // Sender address
            to: [REmail, "riolandadedamola@gmail.com",], // List of recipients
            subject: "Covid19 Vaccination Details</h1>", // Subject line
            template: 'temp',

            context: {

                name: `${resp['first_name']} ${resp['last_name']}`,
                gender: resp['gender'],
                first_date: resp['first_date'],
                first_dose: resp['first_dose'],
                second_dose: resp['second_dose'],
                third_does: resp['third_does'],
                vacine_type: resp['vacine_type']
            }
            // html: "",
            // attachments: [
            //     {
            //         filename: `export.pdf`,
            //         path: path.join(process.cwd(), "views", `export.pdf`),
            //         content: pdfBuffer.buffer,
            //         contentType: "application/pdf"
            //     },
            // ],
        };
        console.log(resp);
        transporter.sendMail(mailOptions, async function (err, info) {
            if (err) {

                console.error(err);
            } else {
                console.log(info);

            }
        });

    } catch (error) {
        console.log(error);
    }

})