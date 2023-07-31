import React from "react";
import styles from "../searchbar.module.css";
import { BsSearch } from "react-icons/bs";

const SearchBar = (props) => {
  return (
    <form className={styles.form}>
      <input
        placeholder="Search"
        style={{
          backgroundColor: `${props.color}`,
          color: `${props.textColor}`,
        }}
        className={styles.placeholder}
      ></input>

      <button type="submit" onSubmit={"#"}>
        <BsSearch
          className={styles.btn}
          style={{ color: `${props.button_Color}` }}
        />
      </button>
    </form>
  );
};

export default SearchBar;
