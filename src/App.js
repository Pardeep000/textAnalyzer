import "./styles.css";
import { useState } from "react";
import Navbar from "./component/Navbar";
import Textform from "./component/Textform";
import Alert from "./component/Alert";
export default function App() {
  //for navbar mode
  const [mode, setmode] = useState("light");
  let changeMode = () => {
    setmode(mode === "dark" ? "light" : "dark");
  };
  //for alert
  const [alert, setAlert] = useState(null);
  let alertFunc = (type, msg) => {
    setAlert({
      type: type,
      msg: msg,
      clear: () => {
        setAlert(null);
      }
    });
  };
  return (
    <>
      <Navbar mode={mode} changeMode={changeMode} />
      <Alert alert={alert} />
      <Textform alertFunc={alertFunc} mode={mode} />
    </>
  );
}
