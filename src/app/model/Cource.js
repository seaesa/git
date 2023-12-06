const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');
const Schema = mongoose.Schema;
const mongoose_delete = require('mongoose-delete');


// model
const Cource = new Schema({
  name: { type: String },
  description: { type: String },
  image: { type: String },
  slug: { type: String, slug: 'name' }
}, { timestamps: true });


mongoose.plugin(slug);
Cource.plugin(mongoose_delete, { overrideMethods: 'all' });
module.exports = mongoose.model('Cource', Cource);