import React, { useEffect, useState } from "react";
import axios from "axios";
const App = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [newDescription, setNewDescription] = useState("");

  function fetchNotes() {
    axios.get("http://localhost:3000/api/notes").then((res) => {
      setNotes(res.data.notes);
    });
  }

  function submitHandler(e) {
    e.preventDefault();
    const { title, description } = e.target.elements;
    console.log(title, description);

    axios
      .post("http://localhost:3000/api/notes", {
        title: title.value,
        description: description.value,
      })
      .then((res) => {
        console.log(res.data);
        fetchNotes();
      });
  }

  function deleteNoteHandler(note) {
    axios.delete(`http://localhost:3000/api/notes/${note._id}`).then((res) => {
      console.log(res.data);
      fetchNotes();
    });
  }

  async function updateNoteHandler(e, note) {
    e.preventDefault();
    await axios.patch(`http://localhost:3000/api/notes/${note._id}`, {
      description: newDescription,
    });
    fetchNotes();
  }

  useEffect(() => {
    fetchNotes();
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
        <form onSubmit={submitHandler}>
          <input name="title" type="text" placeholder="Enter Note Title" />
          <input
            name="description"
            type="text"
            placeholder="Enter Note Description"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default App;
