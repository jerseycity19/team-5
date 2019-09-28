const NodeGeocoder = require('node-geocoder')

var options = {
  provider: 'google',

  // Optional depending on the providers
  httpAdapter: 'https', // Default
  apiKey: process.env.GOOGLE_API_KEY, // for Mapquest, OpenCage, Google Premier
  // formatter: 'gpx',         // 'gpx', 'string', ...
}

module.exports = NodeGeocoder(options)
