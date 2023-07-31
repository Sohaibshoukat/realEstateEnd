import React, { useState } from "react";
import styles from "../../searchbar.module.css";
import axios from "axios";

const Form = () => {
  const [inputdev_name, setinputdev] = useState("");
  const [inp_email, setinp_email] = useState("");
  const [inp_phone, setinp_phone] = useState("");
  const [inp_office, setinp_office] = useState("");
  const [inp_fax, setinp_fax] = useState("");
  const [inp_description, setinp_description] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`/api/developers_register`, {
        Dev_name: inputdev_name,
        e_mail: inp_email,
        phone: inp_phone,
        office: inp_office,
        fax: inp_fax,
        description: inp_description,
      })
      .then((res) => {
        console.log(res);
        setinputdev("");
        setinp_email("");
        setinp_phone("");
        setinp_office("");
        setinp_fax("");
        setinp_description("");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <form onSubmit={handleSubmit} method="post" className={styles.dev_form}>
      <input
        name="Dev_name"
        value={inputdev_name}
        onChange={(e) => setinputdev(e.target.value)}
        type="text"
        className={styles.input}
        placeholder="Enter Developer's Name"
        required={true}
      />
      <input
        name="e_mail"
        value={inp_email}
        onChange={(e) => setinp_email(e.target.value)}
        type="email"
        className={styles.input}
        placeholder="Enter Developer's email"
        required={true}
      />
      <input
        name="phone"
        value={inp_phone}
        onChange={(e) => setinp_phone(e.target.value)}
        type="text"
        className={styles.input}
        placeholder="Enter Developer's Phone No."
        required={true}
      />
      <input
        name="office"
        value={inp_office}
        onChange={(e) => setinp_office(e.target.value)}
        type="text"
        className={styles.input}
        placeholder="Enter Developer's Office No."
        required={true}
      />
      <input
        name="fax"
        value={inp_fax}
        onChange={(e) => setinp_fax(e.target.value)}
        type="text"
        className={styles.input}
        placeholder="Enter Developer's Fax No."
        required={true}
      />
      <textarea
        name="description"
        value={inp_description}
        onChange={(e) => setinp_description(e.target.value)}
        className={styles.textarea}
        placeholder="Developer's Description"
        required={true}
      />
      <input type="submit" className={styles.dev_form_btn} value="Submit" />
    </form>
  );
};

export default Form;
