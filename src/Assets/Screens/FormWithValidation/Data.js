import React, { useEffect, useState } from "react";

const Data = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("Data")));
  }, []);
  return (
    <div>
      <span>firstName</span>:{data.firstName}
      <br />
      <span>lastName</span>:{data.lastName}
      <br />
      <span>email</span>:{data.email}
      <br />
      <span>gender</span>:{data.gender}
      <br />
      <span>phoneNumber</span>:{data.phoneNumber}
      <br />
      <span>address</span>:{data.address}
      <br />
    </div>
  );
};

export default Data;


