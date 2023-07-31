import React, { useState } from "react";
import styles from "../../searchbar.module.css";
import axios from "axios";
import { useEffect } from "react";

const Commercial_form = () => {
  const [Commercial, setCommercial] = useState([]);
  useEffect(() => {
    axios.get(`/api/projectcommercial_get`).then((res) => {
      setCommercial(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <>
      <center>
        <label className={styles.label}>
          Enter Your Commercial Project's Credentials Here:
        </label>
      </center>
      <form
        action="/api/projectcommercial"
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
        {Commercial.map((t) => (
          <h1 key={t._id}>{t.project_title}</h1>
        ))}
        {Commercial.map((t) => (
          <h2 key={t._id}>{t.house_type}</h2>
        ))}
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

        <label>Advertisement Type:</label>
        <select className={styles.input} name="advertisement_type">
          <option disabled={true}>Advertisement Type</option>
          <option value="For Sale">For Sale</option>
          <option value="For Rent">For Rent</option>
        </select>

        <label>Property Price:</label>
        <input
          className={styles.input}
          name="price"
          placeholder="Enter Property Price in PKR"
        />

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
      <form action="/api/projectcommercial_get" method="post">
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

export default Commercial_form;
