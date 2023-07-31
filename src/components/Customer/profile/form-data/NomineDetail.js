import style from "./style.module.css";
const NomineeDetail = () => {
  return (
    <div className={style.header}>
      <div className={style.question}>
        <h5 className={style.text}>First Name</h5>
        <div className={style.ans}>
          <input type="text" placeholder="First Name" className={style.input} />
        </div>
      </div>
      <div className={style.question}>
        <h5 className={style.text}>Second Name</h5>
        <div className={style.ans}>
          <input
            type="text"
            placeholder="Second Name"
            className={style.input}
          />
        </div>
      </div>

      <div className={style.question}>
        <h5 className={style.text}>CNIC</h5>
        <div className={style.ans}>
          <input type="text" placeholder="CNIC" className={style.input} />
        </div>
      </div>

      <div className={style.question}>
        <h5 className={style.text}>Relation</h5>
        <div className={style.ans}>
          <input type="text" placeholder="Relation" className={style.input} />
        </div>
      </div>

      <div className={style.question}>
        <h5 className={style.text}>Contact detail</h5>
        <div className={style.ans}>
          <input
            type="text"
            placeholder="Contact detail"
            className={style.input}
          />
        </div>
      </div>
    </div>
  );
};

export default NomineeDetail;
