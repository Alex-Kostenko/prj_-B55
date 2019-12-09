const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var AlbumSchema = new Schema({
  name: String,
  image: {
    type: Object,

    imgList:{
      file: Object,
      fileList: {
        type: [{
          fild: Buffer,
        }]
      }
    }
  }
})

module.exports = mongoose.model('Album', AlbumSchema);
