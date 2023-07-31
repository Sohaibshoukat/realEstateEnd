const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  username:{
    type: String,
    unique:true
  },
  password: {
    type: String,
    required: true,
  },
  profilepic: {
    data: Buffer,
    contentType: String,
  },
  fathername: {
    type: String,
  },
  CNIC: {
    type: String
  },
  passpoort: {
    type: String
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
  },
  Gender: {
    type: String,
  },
  DOB: {
    type: Date,
  },
  Nationality: {
    type: String,
  },
  Country: {
    type: String,
  },
  State: {
    type: String,
  },
  City: {
    type: String,
  },
  Address: {
    type: String
  },
  cnicfront: {
    data: Buffer,
    contentType: String,
  },
  cnicback: {
    data: Buffer,
    contentType: String,
  },
  RecQuestion: {
    ReasonBuy: {
      type: String,
      enum: ["Investment", "rental", "residential"]
    },
    LookingFor: {
      type: String,
      enum: ["Apartment", "Commercial", "townhouse", "Villa"]
    },
    SizeUnit: {
      type: String,
      enum: ["Studio", "1bhk", "2bhk"]
    },
    prefferdLoc: [
      {
        type: String
      }
    ],
    PlaningPocession: {
      type: String,
      enum: ["Instant", "SameYear", "2 year", "4 Year"]
    },
    ProjectPrice: {
      type: String,
      enum: ["Low for average projects", "medium for suitable", "high price for high-end"]
    },
    Ammenties: [
      {
        type: String,
      }
    ],
    Floor: {
      type: String,
      enum: ["1-10", "10-20", "20-30"]
    },
    Greenery: {
      type: String,
      enum: ["Must", "Not to much", "No need"]
    },
    Connectivity: {
      type: String,
      enum: ["Must", "Not to much", "No need"]
    },
    Livability: {
      type: String,
      enum: ["Must", "Not to much", "No need"]
    },
    ValueOfMoney: {
      type: String,
      enum: ["Must", "Not to much", "No need"]
    },
    Approvals: {
      type: String,
      enum: ["Must", "Not to much", "No need"]
    },
    CompanySecurity: {
      type: String,
      enum: ["Yes", "No"]
    }
  }
});

const User = mongoose.model("User", userSchema);
module.exports= User;
