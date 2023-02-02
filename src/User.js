import React, { useState } from "react";
import Info from "./Info";

const User = (props) => {
  const [viewInfo, setViewInfo] = useState(false);

  function toggleView() {
    setViewInfo((prev) => !prev);
    console.log(viewInfo);
  }
  console.log(props.data);

  return (
    <div className="py-7 px-9 bg-gray-900 text-white rounded-3xl">
      <div className="grid grid-cols-5 gap-x-5">
        <div className="flex items-center text-xl text-blue-100 font-thin">
          <h2>{props.data.company.name}</h2>
        </div>
        <div>
          <h1 className="font-bold text-blue-300">CONTACT</h1>
          <h2>{props.data.name}</h2>
        </div>
        <div>
          <h1 className="font-bold text-blue-300">CITY</h1>
          <h2>{props.data.address.city}</h2>
        </div>
        <div>
          <h1 className="font-bold text-blue-300">ZIPCODE</h1>
          <h2>{props.data.address.zipcode}</h2>
        </div>
        <div>
          <div
            className="flex bg-blue-600 text-white font-light text-lg justify-center rounded-full px-1.5 py-3 cursor-pointer"
            onClick={() => {
              toggleView();
            }}
          >
            {viewInfo ? <h1>Hide Details</h1> : <h1>View Details</h1>}
          </div>
        </div>
      </div>
      {viewInfo && (
        <Info
          contactName={props.data.name}
          email={props.data.email}
          phone={props.data.phone}
          address={props.data.address}
          website={props.data.website}
          company={props.data.company}
        />
      )}
    </div>
  );
};

export default User;
