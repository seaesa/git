const mongoose = require('mongoose');
async function connect() {
  try {
    await mongoose.connect('mongodb://127.0.0.1/education_dev');
  } catch (err) {
    throw err;
  }
}
module.exports = { connect };
