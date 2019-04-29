if (process.env.NODE_ENV === 'production') {
  // Production state - return prod keys
  module.exports = require('./prodKeys');
} else {
  // We are in development - return dev keys
  module.exports = require('./devKeys');
}