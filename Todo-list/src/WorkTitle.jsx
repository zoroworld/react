import { useState } from "react";
import './App.css'

// eslint-disable-next-line react/prop-types
function WorkTitle({title, workList, setWorkList}){

    const[isEdit, setIsEdit] = useState(false);
    const[newTitle, SetNewTitle] = useState(title);

    function handleDelete(checketitle){
        // eslint-disable-next-line react/prop-types
        let deleteTitle = workList.filter((item) => (item !== checketitle));
        setWorkList(deleteTitle);
        setIsEdit(false);
    }

    function handleEdit(){
       setIsEdit(true);
    }

    function handleNewTitleChange(e){
        SetNewTitle(e.target.value);
    }

    function handleSave(){
       // eslint-disable-next-line react/prop-types
       let newTitlechange = workList.map((item)=>(item === title ? newTitle : title));
       setWorkList(newTitlechange);
       setIsEdit(false);
    }

    function handleCancel(){
       SetNewTitle(title)
       setIsEdit(false)
    }

    return(<>
      <div>
        {isEdit?
            <>
            <div>
                <input type="text" value={newTitle} onChange={(e) => handleNewTitleChange(e)}/>
                <button type='button' className='' onClick={handleSave}>SAVE</button>
                <button type='button' className='' onClick={handleCancel}>CANCEL</button>
            </div>
            </>
        :
        <>
            <div className="tit-container">
                <h1>{title}</h1>
                <button type='button' className='' onClick={() => handleDelete(title)}>DELETE</button>
                <button type='button' className='' onClick={handleEdit}>EDIT</button>
            </div>
        </>
        }
      </div>
    </>)
}


export default WorkTitle;