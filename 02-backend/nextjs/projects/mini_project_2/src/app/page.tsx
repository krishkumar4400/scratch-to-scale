"use client"

// import connectToDB from "@/lib/db";
import React, { SubmitEventHandler, useEffect, useState } from "react";

export default function Home() {

  type Note = {
    _id: string;
    title: string;
    content: string; 
  };

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [notes, setNotes] = useState<Note[]>([]);


  async function fetchNotes() {
    try {
      const response = await fetch('/api/notes', {
        method: "GET"
      });

      if (!response.ok) {
        throw new Error("Failed to fetch note");
      }

      const data = await response.json();
      console.log(data);
      setNotes(data.notes)
    } catch (error) {
      console.log(error)
    }
  }


  async function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log(title, content);
    if (!title || !content) {
      alert("Please fill in all fields");
      return;
    }
    try {
      setLoading(true);
      const response = await fetch('/api/notes', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, content })
      });

      if (!response.ok) {
        throw new Error("Failed to create note");
      }

      const data = await response.json();
      console.log(data.response);

      if (response.ok) {
        fetchNotes();
        setTitle("");
        setContent("");
        
        alert("Notes created successfully");
      }

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }



  useEffect(() => { fetchNotes() }, [])


  return (
    <div className="w-full h-screen bg-amber-50 flex justify-center items-center">
      <div>
        <form onSubmit={submitHandler} className="p-4 border-2 border-amber-400">
          <h1 className="text-center py-3 pb-6 text-2xl text-amber-800">Notes App</h1>
          <div>
            <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Enter Note Title" className="w-full px-6 py-2 mb-4 outline-0 border border-amber-300" />
          </div>

          <div>
            <textarea rows={5} value={content} onChange={(e) => setContent(e.target.value)} placeholder="Enter Note Content" className="w-full px-6 py-2 mb-4 outline-0 border border-amber-300">

            </textarea>
          </div>

          <div>
            <button disabled={loading} type="submit" className="w-full px-6 py-2 mb-4 outline-0 border-0 bg-amber-900 text-white cursor-pointer">
              Submit
            </button>
          </div>
        </form>
      </div>
      <div>
        {
          notes.length === 0 ? (<div>Empty Notes</div>) : (<div>
            {
              notes.map((note) => (
                <div key={note._id}>
                  <p>
                    {note.title}
                  </p>
                </div>
              ))
            }
          </div>)
        }
      </div>
    </div>
  );
}
