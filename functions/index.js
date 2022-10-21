const functions = require("firebase-functions");


// var admin = require("firebase-admin");

var serviceAccount = require("covid-dece5-firebase-adminsdk-4mwf1-576d6007b0.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://covid-dece5-default-rtdb.firebaseio.com"
});

var hbs = require('nodemailer-express-handlebars');
var nodemailer = require("nodemailer");
var fs=require("fs-extra");



var options = {

    viewEngine: {

        extname: '.hbs',

        layoutsDir: 'template/',

        // defaultLayout : 'template',

        // partialsDir : 'views/partials/'

    },

    viewPath: 'template/',

    extName: '.hbs'

};



// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

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
    var resp = snap.after.data()
     var REmail=snap.after.id;
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
    transporter.sendMail(mailOptions, async function (err, info) {
        if (err) {

            console.error(err);
        } else {
            console.log("good work");

        }
    });


})