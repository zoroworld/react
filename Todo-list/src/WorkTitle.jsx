import { useState } from "react";
import "./App.css";

function WorkTitle({ title, workList, setWorkList }) {
  const [isEdit, setIsEdit] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  // Handle delete action
  const handleDelete = (targetTitle) => {
    const updatedList = workList.filter((item) => item !== targetTitle);
    setWorkList(updatedList);
    setIsEdit(false);
  };

  // Handle entering edit mode
  const handleEdit = () => {
    setIsEdit(true);
  };

  // Handle input change for new title
  const handleNewTitleChange = (e) => {
    setNewTitle(e.target.value);
  };

  // Save the edited title
  const handleSave = () => {
    const updatedList = workList.map((item) => (item === title ? newTitle : item));
    setWorkList(updatedList);
    setIsEdit(false);
  };

  // Cancel edit action
  const handleCancel = () => {
    setNewTitle(title); // Revert to original title
    setIsEdit(false);
  };

  return (
    <div className="task-item">
      {isEdit ? (
        <div className="edit-container">
          <input
            type="text"
            value={newTitle}
            onChange={handleNewTitleChange}
            className="edit-input"
          />
          <button type="button" className="save-button" onClick={handleSave}>
            SAVE
          </button>
          <button type="button" className="cancel-button" onClick={handleCancel}>
            CANCEL
          </button>
        </div>
      ) : (
        <div className="task-container">
          <h2 className="task-title">{title}</h2>
          <div>
          <button
            type="button"
            className="delete-button"
            onClick={() => handleDelete(title)}
          >
            DELETE
          </button>
          <button type="button" className="edit-button" onClick={handleEdit}>
            EDIT
          </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default WorkTitle;
