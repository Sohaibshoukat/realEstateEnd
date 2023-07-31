import React, { useEffect, useState } from "react";
import styles from "../../searchbar.module.css";
import axios from "axios";

const Residential_Form = () => {
  const [residential, setresidential] = useState([]);

  useEffect(() => {
    axios.get(`/api/projectresidential_get`).then((res) => {
      setresidential(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <>
      <center>
        <label className={styles.label}>
          Enter Project's Credentials Here:
        </label>
      </center>
      <form
        action="/api/projectresidential"
        method="post"
        className={styles.dev_form}
        encType="multipart/formdata"
      >
        <div className={styles.input}>
          <label>Pick Image file for your Project:</label>
          <input
            type="file"
            name="project_image_file"
            style={{ alignSelf: `center` }}
          />
        </div>
        <input
          name="project_title"
          type="text"
          className={styles.input}
          placeholder="Enter Project's Title"
          required={true}
        />
        <input
          name="area"
          type="number"
          className={styles.input}
          placeholder="Enter Area in SqFt."
          required={true}
        />
        <select name="house_type" className={styles.input}>
          <option disabled={true}>Select Property Type</option>
          <option value="Flat">Flat</option>
          <option value="House">House</option>
          <option value="Bungalow">Bungalow</option>
          <option value="Bungalow">Apartment</option>
          <option value="Plot">Plot</option>
        </select>
        <input
          name="Developer_name"
          type="text"
          className={styles.input}
          placeholder="Enter Developer's Name (only Registered)"
          required={true}
        />

        <label>Choose Category for Property:</label>
        <select className={styles.input} name="category">
          <option disabled={true}>Select Category</option>
          <option value="Featured">Featured</option>
          <option value="Standard">Standard</option>
        </select>

        <label>Location:</label>
        <input
          className={styles.input}
          name="location"
          placeholder="Enter Property Location"
        />
        <input
          className={styles.input}
          name="property_city"
          placeholder="Enter Property City"
        />

        {residential.map((t) => (
          <h1 key={t._id}>{t.project_status}</h1>
        ))}

        <label
          style={{
            marginTop: `2%`,
            fontWeight: `700`,
            color: `black`,
            marginLeft: `-75%`,
          }}
        >
          Project's Specifications:
        </label>
        <label style={{ fontWeight: `600` }}>Structure:</label>

        <input
          className={styles.input}
          name="no_of_beds"
          placeholder="Enter No. of Beds"
        />

        <input
          className={styles.input}
          name="no_of_baths"
          placeholder="Enter No. of Bathrooms"
        />

        <select className={styles.input} name="roof_type">
          <option disabled style={{ color: `gray` }}>
            Select Roof Type:
          </option>
          <option value="False Ceiling">False Ceiling</option>
          <option value="Double Height Ceiling">Double Height Ceiling</option>
        </select>

        <select className={styles.input} name="walls_paint">
          <option disabled style={{ color: `gray` }}>
            Select Walls Paint:
          </option>
          <option value="Oil Bound Distemper">Oil Bound Distemper</option>
          <option value="Acrylic Emulsion">Acrylic Emulsion</option>
          <option value="Plastic Emulsion">Plastic Emulsion</option>
        </select>

        <input
          className={styles.input}
          name="internal_wall_thickness"
          type="text"
          placeholder="Internal Wall Thickness"
          required={true}
        />
        <input
          className={styles.input}
          name="external_wall_thickness"
          type="text"
          placeholder="External Wall Thickness"
          required={true}
        />
        <label style={{ fontWeight: `600` }}>Flooring:</label>
        <select className={styles.input} name="living_room_tile">
          <option disabled style={{ color: `gray` }}>
            Living Room Tile:
          </option>
          <option value="Ceramic Tiles">Ceramic Tiles</option>
          <option value="Porcelain Tiles">Porcelain Tiles</option>
          <option value="Marble Tiles">Marble Tiles</option>
        </select>

        <select className={styles.input} name="bedroom_tile">
          <option disabled style={{ color: `gray` }}>
            Bedroom Tile:
          </option>
          <option value="Natural Stone Tiles">Natural Stone Tiles</option>
          <option value="Glass Tiles">Glass Tiles</option>
          <option value="Granite Tiles">Granite Tiles</option>
        </select>

        <select className={styles.input} name="balcony_tile">
          <option disabled style={{ color: `gray` }}>
            Balcony Tile:
          </option>
          <option value="Wooden Tiles">Wooden Tiles</option>
          <option value="Slate Tiles">Slate Tiles</option>
        </select>

        <input
          className={styles.input}
          name="kitchen_tile"
          type="text"
          placeholder="Kitchen Tile"
          required={true}
        />

        <input
          className={styles.input}
          name="bathroom_tile"
          type="text"
          placeholder="Bathroom Tile"
          required={true}
        />

        <label style={{ fontWeight: `600` }}>Doors, Wardrobe & Windows:</label>

        <select className={styles.input} name="main_door">
          <option disabled style={{ color: `gray` }}>
            Main door:
          </option>
          <option value="Solid Wood Doors">Solid Wood Doors</option>
          <option value="Solid Core Doors">Solid Core Doors</option>
          <option value="Hollow-Core">Hollow-Core</option>
        </select>

        <input
          className={styles.input}
          name="inner_door"
          type="text"
          placeholder="Inner Door"
          required={true}
        />
        <select className={styles.input} name="windows">
          <option disabled style={{ color: `gray` }}>
            Windows:
          </option>
          <option value="WOOD">WOOD</option>
          <option value="VINYL">VINYL</option>
          <option value="FIBREGLASS">FIBREGLASS</option>
          <option value="ALUMINIUM">ALUMINIUM</option>
        </select>

        <select className={styles.input} name="wardrobe">
          <option disabled style={{ color: `gray` }}>
            Wardrobe:
          </option>
          <option value="Plywood">Plywood</option>
          <option value="Wood Plastic Composites">
            Wood Plastic Composites
          </option>
          <option value="Solid Wood">Solid Wood</option>
          <option value="Mirror">Mirror</option>
          <option value="Glass">Glass</option>
        </select>

        <label style={{ fontWeight: `600` }}>
          Bedroom, Bathroom & Kitchen:
        </label>

        <select className={styles.input} name="bathroom_fittings">
          <option disabled style={{ color: `gray` }}>
            Bathroom Fittings:
          </option>
          <option value="Shower Panel">Shower Panel</option>
          <option value="Geyser">Geyser</option>
          <option value="Exhaust Fan">Exhaust Fan</option>
        </select>

        <select className={styles.input} name="bedroom_fittings">
          <option disabled style={{ color: `gray` }}>
            Bedroom Fittings:
          </option>
          <option value="AC">AC</option>
          <option value="Wall Panelling">Wall Panelling</option>
        </select>

        <select className={styles.input} name="kitchen_equipment">
          <option disabled style={{ color: `gray` }}>
            Kitchen Equipment:
          </option>
          <option value="Modular Kitchen">Modular Kitchen</option>
          <option value="Chimney">Chimney</option>
          <option value="Hob">Hob</option>
        </select>

        <label>Property Price:</label>
        <input
          className={styles.input}
          name="price"
          placeholder="Enter Property Price in PKR"
        />

        <label>Advertisement Type:</label>
        <select className={styles.input} name="advertisement_type">
          <option disabled={true}>Advertisement Type</option>
          <option value="For Sale">For Sale</option>
          <option value="For Rent">For Rent</option>
        </select>

        <label>Project Status:</label>
        <select className={styles.input} name="project_status">
          <option disabled={true}>Status Type</option>
          <option value="Under Construction">Under Construction</option>
          <option value="Off Plan">Off Plan</option>
          <option value="Delievered">Delievered</option>
          <option value="Recently delievered">Recently delievered</option>
        </select>

        <textarea
          name="project_description"
          className={styles.textarea}
          placeholder="Project's Description"
          required={true}
        />
        <input type="submit" className={styles.dev_form_btn} value="Submit" />
      </form>
      <form action="/api/projectresidential_get" method="post">
        <input
          type="submit"
          className={styles.get_btn}
          style={{ width: `50%`, color: `black`, textAlign: `center` }}
          value="Get All Data"
        />
      </form>
    </>
  );
};

export default Residential_Form;
