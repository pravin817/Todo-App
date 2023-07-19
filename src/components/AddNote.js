import React, { useEffect, useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");

  const characterLimit = 200;
  const handleChange = (e) => {
    if (characterLimit - e.target.value.length >= 0) {
      setNoteText(e.target.value);
    }
    // setNoteText(e.target.value);
    // console.warn(noteText);
  };

  const handleSaveClick = () => {
    // console.warn("handle save click")

    // check for the blank and the white spaces

    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    } else {
      alert("Plase add the notes before saving.");
    }
  };
  return (
    <div className="note new-note">
      <textarea
        name="note"
        id=""
        cols="8"
        rows="10"
        placeholder="Type to add a note...."
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <span>{characterLimit - noteText.length} Reaming</span>
        <button className="btn" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
