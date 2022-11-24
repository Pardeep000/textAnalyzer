import React from "react";

export default function Alert(props) {
  let type = "";
  if (props.alert !== null) {
    type = props.alert.type.charAt(0).toUpperCase() + props.alert.type.slice(1);
  }
  return (
    <div style={{ height: "58px", backgroundColor: "white" }}>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{type}</strong> {props.alert.msg}
          <button
            type="button"
            className="btn-close"
            // data-bs-dismiss="alert"
            // aria-label="Close"
            onClick={props.alert.clear}
          ></button>
        </div>
      )}
    </div>
  );
}
