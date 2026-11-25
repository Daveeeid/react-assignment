import axios from "axios";
import React, { useEffect, useState } from "react";
import LibraryButton from "./LibraryButton";

function Offices() {
  const [searchValue, setSearchValue] = useState("");
  const [office, setOffice] = useState([]);

  async function getOffices() {
    try {
      const response = await axios.get("http://localhost:8082/api/office/all");

      if (response.status === 200) {
        setOffice(response.data);
      }
    } catch (error) {
      alert("Failed to retrieve offices");
    }
  }

  useEffect(() => {
    getOffices();
  }, []);

  async function deleteOffice(officeNumber) {
    if (window.confirm("Are you sure you want to delete this office?")) {
      try {
        const response = await axios.delete(
          `http://localhost:8082/api/offices/delete-by-number/${officeNumber}`,
        );

        if (response.status === 200) {
          alert("Office deleted successfully");
          getOffices();
        }
      } catch (error) {
        alert("Office not deleted");
      }
    }
  }

  return (
    <div>
      <h2>Offices</h2>

      <input
        type="text"
        placeholder="Search office..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />

      <table border="3" cellPadding="10" align="center">
        <thead>
          <tr>
            <th>Office Number</th>
            <th>Office Name</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {office
            .filter(
              (office) =>
                office.name.toLowerCase().includes(searchValue.toLowerCase()) ||
                String(office.officeNumber).includes(searchValue),
            )
            .map((office) => (
              <tr key={office.id}>
                <td>{office.officeNumber}</td>
                <td>{office.name}</td>
                <td>
                  <LibraryButton
                    buttonLabel="DELETE"
                    onClickButton={() => deleteOffice(office.officeNumber)}
                  />
                </td>
              </tr>
            ))}

          {office.filter(
            (office) =>
              office.name.toLowerCase().includes(searchValue.toLowerCase()) ||
              String(office.officeNumber).includes(searchValue),
          ).length === 0 && (
            <tr>
              <td colSpan="3">No offices found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Offices;
