import React, { useState } from "react";

function CreateArea(props) {
  const [nte, setNte] = useState({ title: "", content: "" });

  function addNte(event) {
    const { name, value } = event.target;
    setNte((prev) => {
      if (name === "title") return { ...prev, [name]: value };
      else if (name === "content") return { ...prev, [name]: value };
    });
  }

  return (
    <div>
      <form>
        <input
          onChange={addNte}
          name="title"
          placeholder="Title"
          value={nte.title}
        />
        <textarea
          onChange={addNte}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={nte.content}
        />
        <button
          onClick={(event) => {
            props.onAdd(nte);
            setNte((prev) => {
              return {
                title: "",
                content: ""
              };
            });
            event.preventDefault();
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
