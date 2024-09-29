import React from "react";
import { useParams } from "react-router-dom";
import UserSidebar from "../../Components/UserProfile/UserSideBar";
import AccountSettings from "../../Components/UserProfile/AccountSettings";
import ChangePassword from "../../Components/UserProfile/ChangePassword";
import { CustomerOrder } from "../Orders/CustomerOrder";
import UserAddress from "../../Components/UserProfile/UserAddress";
import "./UserProfile.css";

const UserProfile = () => {
  const { activepage } = useParams();
  return (
    <div className="userprofile">
      <div className="userprofilein">
        <div className="left">
          <UserSidebar activepage={activepage} />
        </div>
        <div className="right">
          {activepage === "accountsettings" && <AccountSettings />}
          {activepage === "changepassword" && <ChangePassword />}
          {activepage === "yourorders" && <CustomerOrder />}
          {activepage === "address" && <UserAddress />}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
