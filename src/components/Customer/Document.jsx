import React, { useState } from "react";
import style from "./CustomerStyling.module.css";

function Document() {
  const [selectoption, setselectoption] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [document, setdocument] = useState([]);

  function handleFileUpload(event) {
    const file = event.target.files[0];
    if (file && /\.(pdf|jpg|jpeg)$/.test(file.name)) {
      setSelectedFile(file);
    } else {
      alert("Please select a PDF or JPG file");
    }
  }

  function handleDeleteFile() {
    setSelectedFile(null);
  }

  function handleOptionChange(event) {
    setselectoption(event.target.value);
  }

  function handleSubmitClick() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const newdoc = document;
    newdoc.push({
      type: selectoption,
      name: selectedFile.name,
      time: `${date}/${month}/${year}`,
    });
    setdocument(newdoc);
    setSelectedFile(null);
    setselectoption(null);
  }

  return (
    <>
      {console.log(document)}
      <table className={`table ${style.Document_table}`}>
        <thead className="table-secondary">
          <tr>
            <th scope="col">Document Type</th>
            <th scope="col">File Name</th>
            <th scope="col">Last Updated</th>
          </tr>
        </thead>
        <tbody>
          {document &&
            document.map((doc) => {
              return (
                <tr>
                  <td>{doc.type}</td>
                  <td>{doc.name}</td>
                  <td>{doc.time}</td>
                </tr>
              );
            })}
        </tbody>
      </table>

      <div className={style.Documentation_upload}>
        <p>
          <strong>Note: </strong>Note: Please upload a clear scanned copy of
          your original documents.
          <br />
          Accepted formats are PDF, PNG, JPEG and JPG only. Max file size ~10MB.
        </p>
        <div className={style.upload_shown}>
          <select
            className="form-select"
            style={{ width: "auto" }}
            aria-label="Default select example"
            onChange={handleOptionChange}
            value={selectoption || ""}
          >
            <option selected value="CNIC-Front">CNIC Front</option>
            <option value="CNIC-Back">CNIC Back</option>
          </select>
          <div className={style.input_wrapper}>
            <label for="file-upload">
              <i className="fa fa-upload"></i>
              <span>Select a file</span>
            </label>
            <input
              type="file"
              id="file-upload"
              accept=".pdf,.png,.jpeg,.jpg"
              onChange={handleFileUpload}
            />
          </div>
        </div>
        {selectedFile && (
          <div className={style.file_Style}>
            <p>{selectedFile.name}</p>
            <i className="fa fa-times" onClick={handleDeleteFile}></i>
          </div>
        )}
        <div className={style.Action_btn}>
          <button
            className={`${style.btn} ${selectedFile && style.Submit_Btn}`}
            disabled={!selectedFile || !selectoption}
            onClick={handleSubmitClick}
          >
            Submit
          </button>
          <button
            className={style.btn}
            onClick={() => {
              setSelectedFile(null);
              setselectoption(null);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}

export default Document;
