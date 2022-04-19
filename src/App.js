import "./components/style.css";
import CalculatorTitle from "./components/calculatorTitle";
import OutputScreen from "./components/outputScreen";
import Button from "./components/button";
import { useState } from "react";

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  function handleClick(event) {
    // get the value from the target element (button)
    console.log("1");
    const value = event.target.value;
    console.log(value);

    switch (value) {
      case "=": {
        if (question !== "") {
          var ans = "";
          try {
            ans = eval(question);
          } catch (err) {
            setAnswer("Math Error");
          }
          if (ans === undefined) setAnswer("Math Error");
          // update answer in our state.
          else {
            setAnswer(ans);
            setQuestion("");
          }
        }
        break;
      }
      case "Clear": {
        setAnswer("");
        setQuestion("");
        break;
      }

      case "Delete": {
        var str = question;
        str = str.substring(0, str.length - 1);
        setQuestion(str);
        break;
      }

      default: {
        setQuestion(...question, value);
        break;
      }
    }
  }

  return (
    <div className="frame">
      <CalculatorTitle value="Basic Calculator" />
      <div className="mainCalc">
        <OutputScreen question={question} answer={answer} />
        <div className="button-row">
          <Button label={"Clear"} onClick={handleClick} />
          <Button label={"Delete"} onClick={handleClick} />
          <Button label={"."} onClick={handleClick} />
          <Button label={"/"} onClick={handleClick} />
        </div>
        <div className="button-row">
          <Button label={"7"} onClick={handleClick} />
          <Button label={"8"} onClick={handleClick} />
          <Button label={"9"} onClick={handleClick} />
          <Button label={"*"} onClick={handleClick} />
        </div>
        <div className="button-row">
          <Button label={"4"} onClick={handleClick} />
          <Button label={"5"} onClick={handleClick} />
          <Button label={"6"} onClick={handleClick} />
          <Button label={"-"} onClick={handleClick} />
        </div>
        <div className="button-row">
          <Button label={"1"} onClick={handleClick} />
          <Button label={"2"} onClick={handleClick} />
          <Button label={"3"} onClick={handleClick} />
          <Button label={"+"} onClick={handleClick} />
        </div>
        <div className="button-row">
          <Button label={"0"} onClick={handleClick} />
          <Button label={"="} onClick={handleClick} />
        </div>
      </div>
    </div>
  );
}

export default App;
