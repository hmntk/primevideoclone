import "./App.css";
import { Navbar1 } from "./Components/Navbar1";
import rectangle12 from "./images/Rectangle12.png";
import rectangle13 from "./images/Rectangle13.png";
import rectangle14 from "./images/Rectangle14.png";
import rectangle15 from "./images/Rectangle15.png";
import rectangle16 from "./images/Rectangle16.png";

function App() {
  return (
    <div
      style={{
        background: "#252E39",
        width: "1440px",
        margin: "auto",
        color: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          textAlign: "left",
          alignItems: "center",
        }}
      >
        <div>
          <img src={rectangle12}></img>
        </div>
        <div style={{ marginLeft: "56px" }}>
          <h1 style={{ fontSize: "36px", margin: "0px" }}>
            Welcome to Prime Video
          </h1>
          <p style={{ fontSize: "20px", lineHeight: "20px" }}>
            Join Prime to watch the latest movies and TV Shows and award-winning
            Amazon originals
          </p>
          <button
            style={{
              fontSize: "16px",
              background: "#0F79AF",
              width: "259px",
              height: "48px",
              color: "white",
            }}
          >
            Login to Prime Video
          </button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          textAlign: "left",
          alignItems: "center",
        }}
      >
        <div>
          <img src={rectangle13}></img>
        </div>
        <div style={{ marginLeft: "56px" }}>
          <h1 style={{ fontSize: "36px", margin: "0px" }}>
            Welcome to Prime Video
          </h1>
          <p style={{ fontSize: "20px", lineHeight: "20px" }}>
            Join Prime to watch the latest movies and TV Shows and award-winning
            Amazon originals
          </p>
          <button
            style={{
              fontSize: "16px",
              background: "#0F79AF",
              width: "259px",
              height: "48px",
              color: "white",
            }}
          >
            Login to Prime Video
          </button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          textAlign: "left",
          alignItems: "center",
        }}
      >
        <div>
          <img src={rectangle14}></img>
        </div>
        <div style={{ marginLeft: "56px" }}>
          <h1 style={{ fontSize: "36px", margin: "0px" }}>
            Welcome to Prime Video
          </h1>
          <p style={{ fontSize: "20px", lineHeight: "20px" }}>
            Join Prime to watch the latest movies and TV Shows and award-winning
            Amazon originals
          </p>
          <button
            style={{
              fontSize: "16px",
              background: "#0F79AF",
              width: "259px",
              height: "48px",
              color: "white",
            }}
          >
            Login to Prime Video
          </button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          textAlign: "left",
          alignItems: "center",
        }}
      >
        <div>
          <img src={rectangle15}></img>
        </div>
        <div style={{ marginLeft: "56px" }}>
          <h1 style={{ fontSize: "36px", margin: "0px" }}>
            Welcome to Prime Video
          </h1>
          <p style={{ fontSize: "20px", lineHeight: "20px" }}>
            Join Prime to watch the latest movies and TV Shows and award-winning
            Amazon originals
          </p>
          <button
            style={{
              fontSize: "16px",
              background: "#0F79AF",
              width: "259px",
              height: "48px",
              color: "white",
            }}
          >
            Login to Prime Video
          </button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          textAlign: "left",
          alignItems: "center",
        }}
      >
        <div>
          <img src={rectangle16}></img>
        </div>
        <div style={{ marginLeft: "56px" }}>
          <h1 style={{ fontSize: "36px", margin: "0px" }}>
            Welcome to Prime Video
          </h1>
          <p style={{ fontSize: "20px", lineHeight: "20px" }}>
            Join Prime to watch the latest movies and TV Shows and award-winning
            Amazon originals
          </p>
          <button
            style={{
              fontSize: "16px",
              background: "#0F79AF",
              width: "259px",
              height: "48px",
              color: "white",
            }}
          >
            Login to Prime Video
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
