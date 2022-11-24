// import "./style2.css";
import React, { useState, useEffect } from "react";

export default function Textform(props) {
  const [myStyle, setmyStyle] = useState({
    color: props.mode === "dark" ? "#343a40" : "white"
    // backgroundColor: props.mode === "dark" ? "white" : "black"
  });

  //
  useEffect(() => {
    //use for all texts
    setmyStyle({ color: props.mode === "dark" ? "white" : "black" });
    //
    let data = document.querySelectorAll(".btn");
    if (props.mode === "dark") {
      data.forEach((e) => {
        e.style.color = "white";
        e.style.backgroundColor = "blue";
      });
    } else {
      data.forEach((e) => {
        e.style.color = "blue";
        e.style.backgroundColor = "white";
      });
    }
    //
  }, [props.mode]);
  //
  document.body.style.backgroundColor =
    props.mode === "dark" ? "#343a40" : "white";
  //
  //for rewind function
  const [storedData, setstoredData] = useState("");
  const [storeBool, setstoreBool] = useState(true);
  //
  const [text, setText] = useState("");
  let userText = (event) => {
    setText(event.target.value);
  };
  //button events
  let upperCase = () => {
    setText(text.toUpperCase());
    props.alertFunc("success", "Text has been converted to upperCase");
  };
  let lowerCase = () => {
    setText(text.toLowerCase());
    props.alertFunc("success", "Text has been converted to LowerCase");
  };
  let clearText = () => {
    //if there is something in the input field then it must store in storeVariable and enable the rewind-Text button
    if (text.length > 0) {
      setstoreBool(false);
      setstoredData(text);
      props.alertFunc(
        "success",
        "Text has been cleared which be revert back by clicking rewind-buttton"
      );
    }
    //clearance happens in both cases
    setText("");
  };
  let rewindText = () => {
    if (text.length > 0) {
      setText(text + " " + storedData);
    } else {
      setText(storedData);
      props.alertFunc("success", "Text re-appeared again...");
    }
    // setText(storedData);
    setstoreBool(true);
  };
  let whiteSpace = () => {
    let data = text.split(/\s+/);
    let data2 = data.join(" ");
    setText(data2);
    props.alertFunc("success", "White Spaces has been removed...");
  };
  let copyText = () => {
    navigator.clipboard.writeText(text);
    props.alertFunc("success", "Text has been copied.");
  };
  return (
    <>
      <div className="container">
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlTextarea1"
            className="form-label"
            style={myStyle}
          >
            Type your text to be analyzed
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            onChange={userText}
            value={text}
          ></textarea>
        </div>
        <button
          className="btn btn-outline-primary rounded-pill mx-3"
          title="Convert text to upper case"
          onClick={upperCase}
          disabled={text.length === 0 ? true : false}
        >
          UpperCase
        </button>
        <button
          className="btn btn-outline-primary rounded-pill mx-3"
          title="Convert text to lower case"
          onClick={lowerCase}
          disabled={text.length === 0 ? true : false}
        >
          LowerCase
        </button>
        <button
          className="btn btn-outline-primary rounded-pill mx-3"
          title="Clears the whole text"
          onClick={clearText}
          disabled={text.length === 0 ? true : false}
        >
          Clear-Text
        </button>
        <button
          className="btn btn-outline-primary rounded-pill mx-3"
          title="Bring text back to field"
          onClick={rewindText}
          disabled={storeBool}
        >
          Rewind-ClearedText
        </button>
        <button
          className="btn btn-outline-primary rounded-pill mx-3"
          title="Organizes the text by clearing white spaces"
          onClick={whiteSpace}
          disabled={text.length === 0 ? true : false}
        >
          WhiteSpace
        </button>
        <button
          className="btn btn-outline-primary rounded-pill mx-3"
          title="Copy text to clipboard"
          onClick={copyText}
          disabled={text.length === 0 ? true : false}
        >
          Copy-Text
        </button>
        <div style={myStyle}>
          <p className="my-3">
            Words = {text.split(/\s+/).filter((e) => e.length > 0).length}
          </p>
          <p>Characters = {text.length}</p>
          <h2>Preview of Text</h2>
          <p>
            {text.length === 0
              ? "Nothing to preview"
              : text.split(/\s+/).join(" ")}
          </p>
        </div>
        {/* endline */}
      </div>
    </>
  );
}
