
const mongoos = require("mongoose");
const Schema = mongoos.Schema;

// Create Schema
const MesscutSchema = new Schema({
 
  user: {
    type:Schema.Types.ObjectId,
    ref:"users"
  },
 from:{
    type:Date
 },
 to:{
    type:Date
   
}
 
});

module.exports = Messcut = mongoos.model("messcuts", MesscutSchema);