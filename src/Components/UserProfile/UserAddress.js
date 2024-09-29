import React from "react";
import "./UserAddress.css";
import { Trash } from "phosphor-react";
import { Plus } from "phosphor-react";

const UserAddress = () => {
  const [show, setShow] = React.useState(false);
  const [savedAddresses, setSavedAddresses] = React.useState([
    {
      AddressLine1: "AddressLine1",
      AddressLine2: "AddressLine2",
      AddressLine3: "AddressLine3",
    },
    {
      AddressLine1: "AddressLine1",
      AddressLine2: "AddressLine2",
      AddressLine3: "AddressLine3",
    },
  ]);

  const [newAddress, setNewAddress] = React.useState({
    AddressLine1: "",
    AddressLine2: "",
    AddressLine3: "",
  });

  const handleDelete = (index) => {
    const updatedAddresses = savedAddresses.filter((_, i) => i !== index);
    setSavedAddresses(updatedAddresses);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAddress((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    if (
      newAddress.AddressLine1.trim() &&
      newAddress.AddressLine2.trim() &&
      newAddress.AddressLine3.trim()
    ) {
      setSavedAddresses((prev) => [...prev, newAddress]);
      setNewAddress({ AddressLine1: "", AddressLine2: "", AddressLine3: "" }); // Reset input fields
      setShow(false); // Hide the add new address form
    } else {
      alert("Please fill in all address fields.");
    }
  };

  return (
    <div className="useraddress">
      {!show && <h1 className="mainhead1">Your Address</h1>}
      {!show && (
        <div className="addressin">
          {savedAddresses.map((item, index) => {
            return (
              <div className="address" key={index}>
                <h2>Address {index + 1}</h2>
                <span>{item.AddressLine1},</span>
                <span>{item.AddressLine2},</span>
                <span>{item.AddressLine3}.</span>
                <div className="delbtn" onClick={() => handleDelete(index)}>
                  <Trash size={25} />
                </div>
              </div>
            );
          })}
        </div>
      )}

      {!show && (
        <div className="addnewbtn" onClick={() => setShow(true)}>
          <Plus size={32} weight="bold" />
        </div>
      )}
      {show && (
        <div className="addnew">
          <h1 className="mainhead1">Add New Address</h1>
          <div className="form">
            <div className="input-container">
              <input
                type="text"
                name="AddressLine1"
                placeholder=" " 
                value={newAddress.AddressLine1}
                onChange={handleInputChange}
                required
              />
              <label htmlFor="addressline1">Address Line 1</label>
            </div>

            <div className="input-container">
              <input
                type="text"
                name="AddressLine2"
                placeholder=" " 
                value={newAddress.AddressLine2}
                onChange={handleInputChange}
                required
              />
              <label htmlFor="addressline2">Address Line 2</label>
            </div>

            <div className="input-container">
              <input
                type="text"
                name="AddressLine3"
                placeholder=" " 
                value={newAddress.AddressLine3}
                onChange={handleInputChange}
                required
              />
              <label htmlFor="addressline3">Address Line 3</label>
            </div>
          </div>
          <button className="mainbutton1" onClick={handleSave}>
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default UserAddress;
