import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [lst, setLst] = useState([
    { title: "check", content: "check content" }
  ]);

  function addList(nte) {
    setLst((prev) => {
      return [...prev, nte];
    });
  }

  function removeList(myKey) {
    console.log("deleted");
    setLst((prev) => lst.filter((item, index) => index !== myKey));
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addList} />
      {lst.map((item, index) => (
        <Note
          key={index}
          myKey={index}
          title={item.title}
          content={item.content}
          removeNote={removeList}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
