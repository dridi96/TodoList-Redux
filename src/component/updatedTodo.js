import { useState } from "react";
import { useDispatch  } from "react-redux";
import { ChangeTask,UpdateTask } from "../redux/todoSlice";


const UpdateForm = ({id,updateData}) => {
    let dispatch = useDispatch()

    const [update,setUpdate]=useState('')
  
  
  const HandleUpdate=()=>{
    dispatch(ChangeTask({id:id,task:update}))
    dispatch(UpdateTask(id))
  }
  
  const HandleCancel=()=>{
    dispatch(UpdateTask(id))
  }

    return(
      <div className="updateform">
        <div >
          <div >
          <input className="upinput"
              defaultValue={updateData && updateData.task}
              onChange={(e)=>{const Edit =e.target.value ;setUpdate(Edit)}}/>
          </div>
          <div className="bu">
            <button className="update"
              onClick={HandleUpdate}>Update</button>
            <button className="cancel"
              onClick={HandleCancel}>Cancel</button>
          </div>
        </div>
        <br />  
      </div>
    )
  }
  
  export default UpdateForm;