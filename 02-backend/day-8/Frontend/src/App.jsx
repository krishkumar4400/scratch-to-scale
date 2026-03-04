import React, { useEffect, useState } from "react";
import axios from "axios";
const App = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [newDescription, setNewDescription] = useState("");

  async function submitHandler(e) {
    e.preventDefault();
    await axios.post("http://localhost:3000/api/notes", {
      title,
      description,
    });
  }

  async function deleteNoteHandler(note) {
    await axios.delete(`http://localhost:3000/api/notes/${note._id}`);
  }

  async function updateNoteHandler(e, note) {
    e.preventDefault();
    await axios.patch(`http://localhost:3000/api/notes/${note._id}`, {
      description: newDescription,
    });
  }

  useEffect(() => {
    console.log("Hello Integration");
    axios.get("http://localhost:3000/api/notes").then((res) => {
      setNotes(res.data.notes);
    });
  }, []);

  return (
    <div className="notes">
      <div>
        {notes.map((note, index) => (
          <div key={index} className="note">
            <h1>{note.title}</h1>
            <p>{note.description}</p>
            <button type="button" onClick={() => deleteNoteHandler(note)}>
              Delete Note
            </button>
            <form onSubmit={(e) => updateNoteHandler(e, note)}>
              <input
                type="text"
                placeholder="Enter new description"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
              />
              <button type="submit">Update Note</button>
            </form>
          </div>
        ))}
      </div>
      <div className="create">
        <form onSubmit={(e) => submitHandler(e)}>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Note Title"
          />
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            placeholder="Note Description"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default App;
