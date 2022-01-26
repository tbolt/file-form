const fetch = require('node-fetch')

exports.handler = async event => {
  const email = JSON.parse(event.body).payload.email
  console.log(`Recieved a submission from: ${email}`)
}