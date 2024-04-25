import React from "react";

function Profile() {
  return (
    <div className="cursor-pointer flex flex-col dropdownProfil">
      <ul className="flex flex-col gap-6">
        <li>profile</li>
        <li>Dachboard</li>
        <li>Notifications</li>
        <li>log out</li>
      </ul>
    </div>
  );
}

export default Profile;
