// Kalian bisa menambahkan CSS di src/components/Header.css
// atau langsung tambahkan dengan sx={{}}
import React from "react";
import Contact from "./Contact";
import "./Header.css";

// Header berisi judul dan subtitle
// Judul: Call a Friend
// Subtitle: Your friendly contact app
const Header = () => {
  return (
    <>
      <h1 className="judul">Call a Friend</h1>
      <div className="subtitle">
        <span>Your friendly contact app</span>
      </div>
    </>
  );
};

export default Header;
