const nodemailer = require('nodemailer')
const utils = require('../middleware/utils')

/********************
 * Public functions *
 ********************/

exports.contact = async (req, res) => {
  try {
    const smtpTrans = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: true,
      auth: {
        user: ".com",
        pass: "$"
      }
    })
  
    // Specify what the email will look like
    const mailOpts = {
      from: '@.com', // This is ignored by Gmail
      to: "@.com",
      subject: 'New message',
      text: `${req.body.name} (${req.body.email} | ${req.body.phone}) says: ${req.body.message}`
      // text: `Oleg (test@gmail.com | (123)456-7890) says: Test`
    }
  
    // Attempt to send the email
    smtpTrans.sendMail(mailOpts, (error, response) => {
      if (error) {
        res.send(error) // Show a page indicating failure
      }
      else {
        res.send('contact-success') // Show a page indicating success
      }
    })
  } catch (error) {
    utils.handleError(res, error)
  }
}
