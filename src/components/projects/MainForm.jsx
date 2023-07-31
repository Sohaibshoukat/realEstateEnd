import React from "react";
import styles from "../../searchbar.module.css";
import Link from "next/link";

const MainForm = () => {
  return (
    <>
      <center>
        <label className={styles.label}>
          Enter Project's Credentials Here:
        </label>
      </center>
      <form
        action="/api/mainproject"
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

        <textarea
          name="project_description"
          className={styles.textarea}
          placeholder="Project's Description"
          required={true}
        />
        <input type="submit" className={styles.dev_form_btn} value="Submit" />
      </form>
      <form action="/api/mainproject_get" method="post">
        <input
          type="submit"
          className={styles.get_btn}
          style={{ width: `50%`, color: `black`, textAlign: `center` }}
          value="Get All Data"
        />
      </form>
      <div className={styles.options_div}>
        <Link href="/commercial">
          <a className={styles.linkcommercial}>List Commercial Property</a>
        </Link>
        <Link href="/residential">
          <a className={styles.linkresidential}>List Residential Property</a>
        </Link>
      </div>
    </>
  );
};

export default MainForm;
