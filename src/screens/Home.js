import React from "react";
import { useLocation } from "react-router-dom";
const Home = () => {
  const { state } = useLocation();
  const { name, address, number } = state;
  return (
    <div>
      <h1>Welcome to Receptionist</h1>
      <h2>{name}</h2>
      <h2>{address}</h2>
      <h2>{number}</h2>
    </div>
  );
};

export default Home;
