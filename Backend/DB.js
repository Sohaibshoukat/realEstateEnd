const mongoose = require('mongoose');
const mongoURL = "mongodb+srv://mongodb1345:p4JBsDzbwZTHqlCO@cluster0.jxhcpgg.mongodb.net/test?retryWrites=true&w=majority";

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURL);
    console.log('connected to mongoose');
  } catch (error) {
    console.log(error.message);
    console.log("not connected")
  }
};

module.exports = connectToMongo;


