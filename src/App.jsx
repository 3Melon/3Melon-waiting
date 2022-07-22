import { useState } from "react";
import Select from "react-select";

import EntryService from "./services/EntryService";

import "./App.css";

function App() {
  const [selectedOption, setSelectedOption] = useState("");
  const [state, setState] = useState({ email: "", wallet: "", loc: [] });
  const [msg, setMessage] = useState({ error: false, msg: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (state.email == "" || state.loc.length == 0 || state.wallet == "") {
      setMessage({ error: true, msg: "All fields are mandatory" });
      return;
    }
    const newEntry = {
      email: state.email,
      wallet: state.wallet,
      loc: state.loc,
    };
    try {
      await EntryService.addEntry(newEntry);
      setMessage({
        error: false,
        msg: state.email + " has been successfully added!",
      });
    } catch (err) {
      setMessage({ error: false, msg: "Error occured" });
    }
    setState({ email: "", wallet: "", loc: [] });
  };

  const options = [
    { value: "mumbai", label: "Mumbai" },
    { value: "bengaluru", label: "Bengaluru" },
  ];

  return (
    <div className="App">
      <nav class="navbar navbar-dark">
        <a class="navbar-brand" href="#">
          <b>3melon 🍉</b>
        </a>
        <button>watch</button>
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

        <div>
          <form id="form" onSubmit={handleSubmit}>
            <label>
              Get <code>weekly</code> updates of web3 events around you{" "}
              <code>in your inbox!</code>
            </label>
            <input
              type="email"
              placeholder="Email Address (abc@xyz.com)"
              name="email"
              onChange={(e) =>
                setState({
                  email: e.target.value,
                  wallet: state.wallet,
                  loc: state.loc,
                })
              }
            />
            <input
              type="text"
              placeholder="Wallet Address (0x..)"
              name="wallet"
              onChange={(e) =>
                setState({
                  email: state.email,
                  wallet: e.target.value,
                  loc: state.loc,
                })
              }
            />
            <Select
              onChange={(e) => {
                const temp = [];
                e.forEach((loc) => temp.push(loc.value));
                setState({
                  email: state.email,
                  wallet: state.wallet,
                  loc: temp,
                });
              }}
              options={options}
              isMulti={true}
              isSearchable={true}
              placeholder="Locations to get web3 event updates for..."
              name="loc"
              className="select"
              styles={{
                input: ({ color, ...provided }) => ({
                  ...provided,
                  color: "white !important",
                }),
                control: ({ backgroundColor, ...provided }) => ({
                  ...provided,
                  backgroundColor: "#3B3B3B !important",
                }),
                menu: ({ backgroundColor, ...provided }) => ({
                  ...provided,
                  backgroundColor: "#3b3b3b !important",
                }),
                option: ({ backgroundColor, ...provided }) => ({
                  ...provided,
                  backgroundColor: "#3b3b3b !important",
                  "&:hover": {
                    backgroundColor: "black !important",
                  },
                }),
                clearIndicator: ({ color, ...provided }) => ({
                  ...provided,
                  color: "white !important",
                  "&:hover": {
                    color: "red !important",
                  },
                }),
                dropdownIndicator: ({ color, ...provided }) => ({
                  ...provided,
                  color: "white !important",
                  "&:hover": {
                    color: "green !important",
                  },
                }),
                multiValueLabel: ({ backgroundColor, ...provided }) => ({
                  ...provided,
                  backgroundColor: "black !important",
                  color: "white",
                }),
                multiValueRemove: ({
                  backgroundColor,
                  color,
                  ...provided
                }) => ({
                  ...provided,
                  backgroundColor: "black !important",
                  color: "white",
                }),
                multiValue: ({ backgroundColor, ...provided }) => ({
                  ...provided,
                  backgroundColor: "black !important",
                }),
              }}
            />

            <button className="btn-submit">Subscribe</button>
          </form>
        </div>

        <p style={{ textAlign: "center" }}>
          Created by <code>Ali Solanki</code>
        </p>
      </div>
    </div>
  );
}

export default App;
