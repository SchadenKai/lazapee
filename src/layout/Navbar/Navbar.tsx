import "./Navbar.css";
import jsonData from "./data.json";
import { BsSearch } from "react-icons/bs";
import { LuShoppingCart } from "react-icons/lu"

export default function Navbar() {
  return (
    <div>
      <div className="upper-navbar">
        <div className="row-container">
          {jsonData["upper-navbar"] ? (
            jsonData["upper-navbar"].map((data, index) => (
              <p className="text-btn" key={index}>
                {data.toUpperCase()}
              </p>
            ))
          ) : (
            <p>!missing values</p>
          )}
        </div>
      </div>
      <div className="lower-navbar">
        <img
          width="auto"
          height="50px"
          src={jsonData["lower-navbar"]["lazada-brand-img"]}
          alt="lazada brand icon"
        />
        <form className="form-container">
          <input
            className="search-input"
            type="text"
            placeholder="Search on Lazada"
          />
          <button type="submit">
            <BsSearch />
          </button>
        </form>
        <LuShoppingCart style={{fontSize: "26px"}}/>
        <img
          width="auto"
          height="50px"
          src={jsonData["lower-navbar"]["apply-now-icon"]}
          alt="apply now"
        />
      </div>
    </div>
  );
}
