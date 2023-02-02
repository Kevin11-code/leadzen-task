import React from "react";

const Info = (props) => {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-blue-500 py-8 px-10 mt-8 mb-5 rounded-3xl space-y-5">
      <div>
        <h1 className="font-bold font-sans text-2xl mb-2">
          Company Description
        </h1>
        <h2 className="font-medium">
          Company Name :{" "}
          <span className="font-light">{props.company.name}</span>
        </h2>
        <h2 className="font-medium">
          Catch Phrase :{" "}
          <span className="font-light">{props.company.catchPhrase}</span>
        </h2>
        <h2 className="font-medium">
          Business Services :{" "}
          <span className="font-light">{props.company.bs}</span>
        </h2>
      </div>

      <div className="grid grid-cols-3 gap-y-3">
        <div>
          <h1 className="font-bold">Contact Person</h1>
          <h2>{props.contactName}</h2>
        </div>
        <div>
          <h1 className="font-bold">Website</h1>
          <h2>{props.website}</h2>
        </div>
        <div>
          <h1 className="font-bold">Email</h1>
          <h2>{props.email}</h2>
        </div>
        <div>
          <h1 className="font-bold">Phone</h1>
          <h2>{props.phone}</h2>
        </div>

        <div>
          <h1 className="font-bold">Address</h1>
          <h2>{props.address.suite}</h2>
        </div>
        <div>
          <h1 className="font-bold">Street</h1>
          <h2>{props.address.street}</h2>
        </div>
        <div>
          <h1 className="font-bold">City</h1>
          <h2>{props.address.city}</h2>
        </div>
        <div>
          <h1 className="font-bold">Zipcode</h1>
          <h2>{props.address.zipcode}</h2>
        </div>
      </div>
    </div>
  );
};

export default Info;
