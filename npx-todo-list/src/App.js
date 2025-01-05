// import Header from "./Components/Header";
// import TodoList from "./Components/TodoList";
// import Footer from './Components/Footer';
// import { ParentComponent } from "./Components/ParentComponent";
// import { ChildComponent } from "./Components/ChildComponent";
// import { ParentComponent } from "./Components/ParentComponent";
// import { Form } from "./Components/Form";
// import { Posts } from "./Components/Posts";
import { useState } from "react";
import { ColourSelector } from "./Components/ColourSelector.jsx";

function App() {
  // const onDelete = (todo) => {
  //   console.log("ON DELETE", todo);
  // }
  // let todos = [
  //   {sno: 1, title: "Go to the Market", desc: "Need to get - Milk - Have run out"},
  //   {sno: 2, title: "Go to the Gym", desc: "Need to get Ripped"},
  //   {sno: 3, title: "Study for Exam", desc: "Need to get Good Grades"}
  // ]
  const [colour, setColour] = useState('black')
  function changeColour(colour) {
    window.localStorage.setItem('Background', (colour));
    setColour(colour)
  }
  return (
    <>
      <div className="w-100 h-screen relative" style={{backgroundColor: window.localStorage.getItem('Background') || colour}}></div>
      <ColourSelector changeColour={changeColour}/>
      {/* <Header title={"Eshan Sud"} searchBar={true} /> */}
      {/* <TodoList todos={todos} onDelete={onDelete}/> */}
      {/* <Footer /> */}
      {/* <Form /> */}
      {/* <Posts /> */}
    </>
  );
}

export default App;