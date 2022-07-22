import { useState } from "react";
import Select from "react-select";

import "./App.css";

function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-dark">
        <a class="navbar-brand" href="#">
          <b>3melon 🍉</b>
        </a>
        <a href="https://youtube.com/playlist?list=PLwXSCBuwy1Qt92DyIcV7Da_vCseAOj9gJ">
          <button>watch</button>
        </a>
      </nav>
      <div className="main-page">
        <div className="center">
          <h1 className="title">
            <b>3melon</b>
          </h1>
          <h3>Web3 Social | Events | Meetups </h3>
        </div>
        <div className="youtube-video">
          <iframe
            width="350"
            height="200"
            src="https://www.youtube.com/embed/sqhaoo3xNr4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <a
          href="https://forms.gle/eH3XiA5zXiQ86xCNA"
          style={{ padding: "3em" }}
        >
          <button>Enter</button>
        </a>

        <p style={{ textAlign: "center" }}>
          Created by <code>Ali Solanki</code>
        </p>
      </div>
    </div>
  );
}

export default App;
