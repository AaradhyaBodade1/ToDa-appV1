import React from "react";

function ContainerAdd1() {
  let todoName = "Buy Milk";
  let todoDate = "05/10/24";

  return (
    <div className="row kg-row">
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

export default ContainerAdd1;
