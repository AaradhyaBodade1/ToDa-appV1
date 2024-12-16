import React from "react";

function ContainerAdd() {
  return (
    <div className="row kg-row">
      <div className="col-6">
        <input type="text" placeholder="Guys Please Enter Here" />
      </div>
      <div className="col-4">
        <input type="text" placeholder="Enter Date (dd/mm/yyyy)" />
      </div>
      <div className="col-2">
        <button type="button" className="btn btn-success btn-kg">
          Add
        </button>
      </div>
    </div>
  );
}

export default ContainerAdd;
