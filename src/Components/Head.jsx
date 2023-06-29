import React from 'react'
import "./Head.scss"
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import * as mdb from 'mdb-ui-kit'; // lib
import { Input } from 'mdb-ui-kit'; // module
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { addTodo } from '../Redux/todoSlice';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { checked } from '../Redux/checkedSlice';



export default function Head() {
const notify = (noti) => toast(noti);
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const abc=useSelector(state=>state.todo)

    const [show, setShow] = useState(false);
const [todo,setTodo]=useState({type:"Incomplete",todo:"",id:Date.now(),check:false});
console.log(todo);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch=useDispatch();

  return (

 
<>
<div className='container '>
<div className="row mt-5 text-center  d-flex justify-content-center ">
    <h1>TODO LIST</h1>
</div>
<div className="row mt-5 text-center  d-flex justify-content-center ">
    <div className="col-md-8  ">
    
        <div className="row">
        <div className="col-md-6 d-flex justify-content-start">
    <Button className='mt' variant="primary" onClick={handleShow}>
        Add Todo
    </Button>
    </div>
    <div className="col-md-6 d-flex justify-content-end ">
        <div>
                <div className="dropdown">
                <button
                    className="btn btn-primary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                >
                    All
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <li onClick={()=>dispatch(checked("Complete"))}>
                    <a className="dropdown-item" href="#">
                        Complete
                    </a>
                    </li>
                    <li onClick={()=>dispatch(checked("Incomplete"))}>
                    <a className="dropdown-item" href="#">
                        Incomplete
                    </a>
                    </li>
                    <li onClick={()=>dispatch(checked("All"))}>
                    <a className="dropdown-item" href="#">
                        All
                    </a>
                    </li>
                </ul>
                </div>

        </div>
        
        
        
        </div>
        </div>



    </div>


</div>







<Modal
  show={show}
  onHide={handleClose}
  backdrop="static"
  keyboard={false}
>
  <Modal.Header closeButton>
    {/* <Modal.Title>Modal title</Modal.Title> */}
  </Modal.Header>
  <Modal.Body>
  <h4>Add Task</h4>
    <div>
        <div>Title</div>
        <div className='border border-success'>
        <input style={{width:"100%",height:"40px"}} placeholder='Title' value={todo.todo} onChange={(e)=>setTodo({...todo,todo:e.target.value})}></input>
        </div>
        <div className='mt-4'>
        <div>Status</div>    
        <Form.Select onChange={(e)=>setTodo({...todo,check:"Incomplete"==e.target.value?false:true}) } >
        <option id="1">Incomplete</option>
        <option id="2">Complete</option>

      </Form.Select>

        






        </div>
  
        
    </div>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>
      Close
    </Button>
    <Button variant="primary" 
    onClick={()=>
    { if(todo.todo){dispatch(addTodo({todo:todo.todo,type:todo.type,id:Date.now(),date:`${day}/${month}/${year}-${hours}:${minutes}:${seconds}`,check:todo.check}));notify("Add complete")}else{notify("Nhập nội dung")};
    setTodo({type:"Incomplete",todo:"",id:Date.now(),check:false})
}
    
    }>Add</Button>
  </Modal.Footer>
</Modal>








</div>
</>


)
}
