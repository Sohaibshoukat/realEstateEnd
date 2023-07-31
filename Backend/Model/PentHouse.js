const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const penthouse_schema = new Schema({
    projecttype:{
        type:String,
        default:"Pent House"
    },
    project_title: {
        type: String,
        required: true
    },
    projectLocation: {
        city: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
    },
    locationCoordinates: {
        lat: {
            type: Number,
            required: true
        },
        lng: {
            type: Number,
            required: true
        },
    },
    HighlightIcon: {
        ID: {
            type: String
        },
        TotalUnits: {
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
    overview: [
        {
            Title: {
                type: String,
                required: true
            },
            Description: {
                type: String,
                required: true
            }
        },
    ],
    main_image: {
        data: Buffer,
        contentType: String,
    },
    interiorPictures: [{
        data: Buffer,
        contentType: String,
    }],
    exteriorPictures: [{
        data: Buffer,
        contentType: String,
    }],
    video_3D: {
        data: Buffer,
        contentType: String
    },
    simple_video: {
        data: Buffer,
        contentType: String
    },
    check_lda_approval: {
        type: Boolean,
        default: false
    },
    check_fbr_approval: {
        type: Boolean,
        default: false
    },
    projectStatus: {
        type: String,
        required: true
    },
    affordabilityStatus: [{
        type: String,
    }],
    checkFurnished: {
        type: Boolean,
        default: false,
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
            enum: ["Security Gaurd ", "CCTV Camera", "Fire Frightening System", "Intercom Facility"]
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
                    required: true
                },
                Description: {
                    type: String,
                    required: true
                }
            },
        ],
        Flooring: [
            {
                Title: {
                    type: String,
                    required: true
                },
                Description: {
                    type: String,
                    required: true
                }
            },
        ],
        doorsWindowsWardrobe: [
            {
                Title: {
                    type: String,
                    required: true
                },
                Description: {
                    type: String,
                    required: true
                }
            },
        ],
        bedroomBathroomKitchen: [
            {
                Title: {
                    type: String,
                    required: true
                },
                Description: {
                    type: String,
                    required: true
                }
            },
        ]
    },
    floorPlan: [
        {
            Title: {
                type: String,
                required: true
            },
            FloorImage: {
                data: Buffer,
                contentType: String,
            }
        },
    ],
    paymentPlan: [
        {
            Title: {
                type: String
            },
            InPlan: [{
                floorPlanName: {
                    type: String,
                },
                floorPlanPicture: {
                    data: Buffer,
                    contentType: String,
                },
                floorNumber: {
                    type: String,
                },
                unitNo: {
                    type: String,
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
                downPayment: {
                    type: Number,
                },
                numberOfInstallmentsMonths: {
                    type: Number,
                },
                installmentAmountPerMonth: {
                    type: Number,
                },
                possessionAmount: {
                    type: Number,
                },
                numberOfBIYearlyInstallments: {
                    type: Number,
                },
                biYearlyInstallmentAmount: {
                    type: Number,
                },
                descriptionPoint: [{
                    type: String,
                }],
            }]
        }
    ]
});

const Pent_house = mongoose.model("Pent_house",penthouse_schema)

module.exports= Pent_house