import { useState } from "react";
import Select from "react-select";

import "./App.css";

const options = [
  { value: "mumbai", label: "Mumbai" },
  { value: "bengaluru", label: "Bengaluru" },
];

function App() {
  const [count, setCount] = useState(0);
  const [selectedOption, setSelectedOption] = useState(0);

  return (
    <div className="App">
      <nav class="navbar navbar-dark">
        <a class="navbar-brand" href="#">
          <b>3melon 🍉</b>
        </a>
      </nav>
      <div className="main-page">
        <div className="center">
          <h1 className="title">
            <b>3melon</b>
          </h1>
          <h3>Web3 Social | Events | Meetups </h3>
        </div>

        <div>
          <form id="form">
            <label>
              Get <code>weekly</code> updates of web3 events around you{" "}
              <code>in your inbox!</code>
            </label>
            <input
              type="text"
              placeholder="Email Address (abc@xyz.com)"
              name="email"
            />
            <input
              type="text"
              placeholder="Wallet Address (0x..)"
              name="wallet"
            />
            <Select
              defaultValue={selectedOption}
              onChange={setSelectedOption}
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

            <button
              className="btn-submit"
              onClick={() => setCount((count) => count + 1)}
            >
              Subscribe
            </button>
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
