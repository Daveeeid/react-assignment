import React from "react";
import LibraryButton from "./LibraryButton";
import { useState } from "react";
import axios from "axios";
import LibraryHeader from "./LibraryHeader";

function Office() {
  const [name, setName] = useState("");
  const [officeNumber, setOfficeNumber] = useState("");

  async function saveOffice() {
    const response = await axios.post(
      "http://localhost:8082/api/offices/save",
      {
        name: name,
        officeNumber: officeNumber,
      },
    );

    if (response.status == 200) {
      alert("Office saved successfully");
    } else {
      alert("Office not saved");
    }
  }
  async function deleteOffice() {
    const response = await axios.delete(
      `http://localhost:8082/api/offices/delete-by-number/${officeNumber}`,
    );

    if (response.status == 200) {
      alert("Office deleted successfully");
    } else {
      alert("Office not deleted");
    }
  }

  return (
    <div>
      <LibraryHeader/>
      <h1>SAVE OFFICE</h1>
      <label>Office Name: </label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Office Number: </label>
      <input
        type="text"
        value={officeNumber}
        onChange={(e) => setOfficeNumber(e.target.value)}
      />
      <LibraryButton buttonLabel="SAVE" onClickButton={saveOffice} />
      <h1>DELETE OFFICE</h1>
      <label>Office Number: </label>
      <input
        type="text"
        value={officeNumber}
        onChange={(e) => setOfficeNumber(e.target.value)}
      />
      <LibraryButton buttonLabel="DELETE" onClickButton={deleteOffice} />
    </div>
  );
}

export default Office;
