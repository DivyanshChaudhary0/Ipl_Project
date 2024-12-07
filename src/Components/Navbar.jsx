import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="nav "
        style={{
          width: "100%",
          paddingTop: "40px",
          paddingBottom: "10px",
          backgroundColor: "#223577",
        }}>

        <div className="elem lg:w-full lg:items-center lg:p-0 lg:m-0 lg:justify-between" style={{
            margin: "0px auto",
            display: "flex",
            alignItems: "flex-end",
            gap: "20px",
            justifyContent: "center",
          }}>

            <Link to={"/"}>
          <button
            style={{
              padding: "8px 22px",
              borderRadius: "4px",
              border: "1px solid white",
              color: "white",
              background:"none",
              cursor:"pointer"
            }}>MATCHES</button>
            </Link>

            <Link to={"pointsTable"}>
          <button
            style={{
              padding: "8px 22px",
              borderRadius: "4px",
              border: "1px solid white",
              color: "white",
              background:"none",
              cursor:"pointer"
            }}>POINTS TABLE</button>
            </Link>

        </div>

      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
