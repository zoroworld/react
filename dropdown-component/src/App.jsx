import "./App.css";
import DropDown from "./component/DropDown";

function App() {
  const data = [
    {
      title: "Title 01",
      options: ["option 1", "option 2"],
    },
    {
      title: "Title 02",
      options: ["option 1", "option 2"],
    },
  ];

  return (
    <>
      <div className="">
        <h1>DropDown</h1>
      </div>
      <div>
        {data.map((item, index) => {
          return <DropDown key={index} item={item} />;
        })}
      </div>
    </>
  );
}

export default App;
