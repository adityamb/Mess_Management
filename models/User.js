
const mongoos = require("mongoose");
const Schema = mongoos.Schema;

// Create Schema
const UserSchema = new Schema({
 
  name: {
    type: String,
    required: true
  },
 
  email: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  phone: {
    type: String,
    require: true
  },
  messnumber:{
    type: Number,
    require: true
  },
  branch: {
    type: String,
    required: true
  },
  year: {
    type: String,
    required: true
  },
});

module.exports = User = mongoos.model("users", UserSchema);