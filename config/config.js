if (
  process.env.NODE_ENV === 'production' ||
  process.env.NODE_ENV === 'travis'
) {
  // Production state - return prod keys
  module.exports = require('./prodKeys');
} else {
  // We are in development - return dev keys
  module.exports = require('./devKeys');
}
