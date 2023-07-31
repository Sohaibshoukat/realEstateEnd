// import { Schema, models, model } from "mongoose";
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const villa_schema = new Schema({
  projecttype: {
    type: String,
    default: "Town Villa"
  },
  projectDeveloper: {
    type: String,
  },
  project_title: {
    type: String,
  },
  projectLocation: {
    city: {
      type: String,

    },
    address: {
      type: String,

    },
  },
  locationCoordinates: {
    lat: {
      type: Number,

    },
    lng: {
      type: Number,

    },
  },
  HighlightIcon: {
    ID: {
      type: String
    },
    ProjectArea: {
      type: String
    },
    HouseSizeRange: {
      type: String
    },
    BedsRange: {
      type: String
    },
    BathRange: {
      type: String
    },
    SqftRange: {
      type: String
    },
    Location: {
      type: String
    },
    PriceStartingfrom: {
      type: String
    },
    PossessionHandover: {
      type: String
    },
    Developer: {
      type: String
    }
  },
  featured_project: {
    type: Boolean,
    default: false,
  },
  startingprice: {
    type: String,
  },
  priceConverstion:{
    dirham:{
      type:String,
    }, 
    riyal:{
      type:String
    }, 
    ukdollar:{
      type:String
    },  
    usadollar:{
      type:String
    }
  },
  overview: [
    {
      Title: {
        type: String,

      },
      Description: {
        type: String,

      }
    },
  ],
  main_image: {
    type: String
  },
  interiorPictures: [{
    type: String
  }],
  exteriorPictures: [{
    type: String
  }],
  video_3D: {
    type: String
  },
  simple_video: {
    type: String
  },
  check_lda_approval: {
    type: Boolean,
    default: false
  },
  check_fbr_approval: {
    type: Boolean,
    default: false
  },
  DecisionDriver:[
    {
      Title: {
        type: String,
      },
      Value: {
        type: Number,
      }
    },
  ],
  RatingDrivers:[
    {
      Title: {
        type: String,
      },
      Value: {
        type: Number,
      }
    },
  ],
  affordabilityStatus: [{
    type: String,
    enum: ["affordable", "Value for money", "luxury"]
  }],
  checkFurnished: {
    type: Boolean,
  },
  amenities: {
    activities: [{
      type: String,
      enum: ["Swimming Pool", "Gym", "Badminton Court", "Kids Play Area", "Table Tennis", "Cycle/Jogging Track", "Library", "Prayer Area"]
    }],
    facilities: [{
      type: String,
      enum: ["Lifts", "Power Backup", "Solar Panel", "Treated Water Supply", "Maid Room", "Sewage Treatment Plant", "Car Parking", "B Car Parking", "Garbage Collection", "House Keeping", "Laundry Services"]
    }],
    safety: [{
      type: String,
      enum: ["Security Guard", "CCTV Camera", "Fire Fighting System", "Intercom Facility"]
    }],
    leisure: [{
      type: String,
      enum: ["Cafeteria", "Saloon", "Spa", "Reception", "Day Care Center", "Coffee Shop", "Super Store", "Cigar Area", "Bar", "Stream & Suna", "Theater"]
    }],
  },
  list_of_specifications: {
    Structure: [
      {
        Title: {
          type: String,

        },
        Description: {
          type: String,

        }
      },
    ],
    Flooring: [
      {
        Title: {
          type: String,

        },
        Description: {
          type: String,

        }
      },
    ],
    doorsWindowsWardrobe: [
      {
        Title: {
          type: String,

        },
        Description: {
          type: String,

        }
      },
    ],
    bedroomBathroomKitchen: [
      {
        Title: {
          type: String,

        },
        Description: {
          type: String,

        }
      },
    ]
  },
  floorPlan: [
    {
      Title: {
        type: String,

      },
      FloorImage: {
        type: String
      }
    },
  ],
  paymentPlan: [
    {
      Title: {
        type: String
      },
      InPlan: [
        {
          Plan: {
            storyNumbers: {
              type: String,
            },
            housePlan: {
              type: String,
            },
            UnitPrice: {
              type: String
            },
            numberOfBed: {
              type: Number,
            },
            numberOfBaths: {
              type: Number,
            },
            areaInSqft: {
              type: Number,
            },
            installmentAmountPerMonth: {
              type: Number,
            }
          },
          Dropdown:{
            FloorImage: {
              type: String
            },
            descriptionPoint: [{
              type: String,
            }],
          },
          payment:{
            downPayment: {
              type: Number,
            },
            numberOfInstallmentsMonths: {
              type: Number,
            },
            numberOfBIYearlyInstallments: {
              type: Number,
            },
            biYearlyInstallmentAmount: {
              type: Number,
            },
            possessionAmount: {
              type: Number
            },
          }
        }
      ]
    }
  ]
});

const Villa_project = mongoose.model("villa_project", villa_schema)

module.exports = Villa_project