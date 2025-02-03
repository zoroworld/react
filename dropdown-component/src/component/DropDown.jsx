import { useState } from "react";

function DropDown({ item }) {
  const [handleClick, setHandleClick] = useState("");
  const [handleOption, setHandleOption] = useState("");

  function headerClick() {
    if (handleClick === item.title) {
      setHandleClick("");
    } else {
      setHandleClick(item.title);
    }
  }

  function handleOptionClick(option) {
    setHandleClick("");
    setHandleOption(option);
  }

  function getReturnOptions() {
    if (handleClick === item.title) {
      let newOptions = [];
      item.options.map((option, index) => {
        newOptions.push(
          <span key={index} onClick={() => handleOptionClick(option)}>
            {option}
          </span>
        );
      });
      return newOptions;
    } else {
      return null;
    }
  }
  return (
    <>
      <div className="componentTile">
        <div className="componentHeader" onClick={headerClick}>
          {item.title}
        </div>
        <div className="componentOption">{getReturnOptions()}</div>
      </div>
    </>
  );
}

export default DropDown;
