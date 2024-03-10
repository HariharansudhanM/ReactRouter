import React from "react";

function DataScience() {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src="https://th.bing.com/th/id/OIP.z_QZFOvDbcpP7NyCXnWMJAHaEo?w=273&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">Data Science course</h5>
        <p className="card-text">
          Technology covered : Phyton, PowerBI, Tablelu, MongoDB
        </p>
        <a href="#" className="btn btn-primary">
          Enroll
        </a>
      </div>
    </div>
  );
}

export default DataScience;
