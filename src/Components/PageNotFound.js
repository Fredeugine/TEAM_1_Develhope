import React from 'react';
import { Link } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <div
      style={{
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      {/* <img src="/images/beer.svg"></img> */}
      <h1
        style={{
          marginTop: "450px",
          fontSize: "72px",
        }}
      >
        404
      </h1>
      <p style={{ fontWeight: "600" }}>Oops, page not found.</p>
      <Link to={"/"} style={{ marginBottom: "450px" }}>
        Back Home
      </Link>
    </div>
  );
}
