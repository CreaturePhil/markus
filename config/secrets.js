/**
 * IMPORTANT * IMPORTANT * IMPORTANT * IMPORTANT * IMPORTANT * IMPORTANT *
 *
 * You should never commit this file to a public repository on GitHub!
 * All public code on GitHub can be searched, that means anyone can see your
 * uploaded secrets.js file.
 *
 * I did it for your convenience using "throw away" credentials so that
 * all features could work out of the box.
 *
 * Untrack secrets.js before pushing your code to public GitHub repository:
 *
 * git rm --cached config/secrets.js
 *
 * If you have already commited this file to GitHub with your keys, then
 * refer to https://help.github.com/articles/remove-sensitive-data
 *
 * On Windows to set env variables:
 * set NODE_ENV=stuff
*/

module.exports = {

  db: process.env.MONGODB || 'mongodb://localhost:27017/test',

  sessionSecret: process.env.SESSION_SECRET || 'Your Session Secret goes here',

  mailgun: {
    user: process.env.MAILGUN_USER || 'postmaster@sandbox697fcddc09814c6b83718b9fd5d4e5dc.mailgun.org',
    password: process.env.MAILGUN_PASSWORD || '29eldds1uri6'
  },
  
  mandrill: {
    user: process.env.MANDRILL_USER || 'hackathonstarterdemo',
    password: process.env.MANDRILL_PASSWORD || 'E1K950_ydLR4mHw12a0ldA'
  },

  sendgrid: {
    user: process.env.SENDGRID_USER || 'hslogin',
    password: process.env.SENDGRID_PASSWORD || 'hspassword00'
  },

};
