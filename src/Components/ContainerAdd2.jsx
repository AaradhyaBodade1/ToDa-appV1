import React from "react";

function ContainerAdd2() {
  let todoName = "Go to College";
  let todoDate = "09/11/24";
  return (
    <div className="row kg-row ">
      <div className="col-6">{todoName}</div>
      <div className="col-4">{todoDate}</div>
      <div className="col-2">
        <button type="button" className="btn btn-danger btn-kg">
          Delete
        </button>
      </div>
    </div>
  );
}

export default ContainerAdd2;
