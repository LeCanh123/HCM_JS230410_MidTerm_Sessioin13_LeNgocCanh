import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { remove } from '../Redux/todoSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Head.scss"
import { check } from '../Redux/todoSlice';
import { edit } from '../Redux/checkedSlice';
import { saveEdit } from '../Redux/checkedSlice';
import { saveEdit1 } from '../Redux/todoSlice';




export default function Body() {
  const list=useSelector(state=>state.todo);
  const check1=useSelector(state=>state.check);
  const [todo,setTodo]=useState("");
  console.log(check1.edit);
  const notify = (noti) => toast(noti);
  console.log(list);
  const dispatch=useDispatch();
  return (
    <div className='container'>
        <section className=" mt-5">
  <div className="container  h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-12 col-xl-10">
        <div className="card mask-custom">
          <div className="card-body text-white">

            <table className="table mb-0">
              <thead>
                <tr>
                  <th scope="col">Check</th>
                  <th scope="col">Task</th>
                  <th scope="col">Time</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {list.map((item)=>

                {if("All"==check1.check){ 
                  return(
                  <tr className="fw-normal">
                  <th>
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                      alt="avatar 1"
                      style={{ width: 45, height: "auto" }}
                    />
                    <span className="ms-2"><input type="checkbox" checked={item.check?true:false} onChange={()=>dispatch(check({check:!item.check,id:item.id}))} /></span>
                  </th>
                  <td className="align-middle">
                    {check1.edit==item.id?   <input type='text' placeholder='Nhập nội dung' value={todo} onChange={(e)=>setTodo(e.target.value)}></input>:!item.check?<span>{item.todo}</span>:<del>{item.todo}</del>}
                  </td>
                  <td className="align-middle">
                    <h6 className="mb-0">
                      <span className="badge bg-danger">{item.date}</span>
                    </h6>
                  </td>
                  <td className="align-middle">
                  {check1.edit!=item.id?   <a href="#!" data-mdb-toggle="tooltip" title="Done" onClick={()=>{dispatch(edit(item.id));notify("Edit");}}>
                      <i className="fas fa-check fa-lg text-success me-3" />
                    </a>
                    :
                    <a href="#!" data-mdb-toggle="tooltip" title="Done" onClick={()=>{dispatch(saveEdit({todo:todo ,id:item.id}));
                    dispatch(saveEdit1({todo:todo ,id:item.id}));notify("Edit");}}>
                      Save
                    </a>



                    }
                    <a href="#!" data-mdb-toggle="tooltip" title="Remove" onClick={()=>{dispatch(remove(item.id));notify("Delete Complete");}}>
                      <i className="fas fa-trash-alt fa-lg text-warning" />
                    </a>
                  </td>
                </tr>
                )
              
              
              
              }else if("Complete"==check1.check){
                  return(
                    item.check?<tr className="fw-normal">
                    <th>
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                        alt="avatar 1"
                        style={{ width: 45, height: "auto" }}
                      />
                      <span className="ms-2"><input type="checkbox" checked={item.check?true:false} onChange={()=>dispatch(check({check:!item.check,id:item.id}))} /></span>
                    </th>
                    <td className="align-middle">
                      {!item.check?<span>{item.todo}</span>:<del>{item.todo}</del>}
                    </td>
                    <td className="align-middle">
                      <h6 className="mb-0">
                        <span className="badge bg-danger">{item.date}</span>
                      </h6>
                    </td>
                    <td className="align-middle">
                      <a href="#!" data-mdb-toggle="tooltip" title="Done">
                        <i className="fas fa-check fa-lg text-success me-3" />
                      </a>
                      <a href="#!" data-mdb-toggle="tooltip" title="Remove" onClick={()=>{dispatch(remove(item.id));notify("Delete Complete");}}>
                        <i className="fas fa-trash-alt fa-lg text-warning" />
                      </a>
                    </td>
                  </tr>
                  :
                <tr className="fw-normal d-none">
                    <th>
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                        alt="avatar 1"
                        style={{ width: 45, height: "auto" }}
                      />
                      <span className="ms-2"><input type="checkbox" checked={item.check?true:false} onChange={()=>dispatch(check({check:!item.check,id:item.id}))} /></span>
                    </th>
                    <td className="align-middle">
                    {check1.edit==item.id?   <input type='text' placeholder='Nhập nội dung' value={todo} onChange={(e)=>setTodo(e.target.value)}></input>:!item.check?<span>{item.todo}</span>:<del>{item.todo}</del>}
                    </td>
                    <td className="align-middle">
                      <h6 className="mb-0">
                        <span className="badge bg-danger">{item.date}</span>
                      </h6>
                    </td>
                    <td className="align-middle">
                    {check1.edit!=item.id?   <a href="#!" data-mdb-toggle="tooltip" title="Done" onClick={()=>{dispatch(edit(item.id));notify("Edit");}}>
                      <i className="fas fa-check fa-lg text-success me-3" />
                    </a>
                    :
                    <a href="#!" data-mdb-toggle="tooltip" title="Done" onClick={()=>{dispatch(saveEdit({todo:todo ,id:item.id}));
                    dispatch(saveEdit1({todo:todo ,id:item.id}));notify("Edit");}}>
                      Save
                    </a>



                    }
                      <a href="#!" data-mdb-toggle="tooltip" title="Remove" onClick={()=>{dispatch(remove(item.id));notify("Delete Complete");}}>
                        <i className="fas fa-trash-alt fa-lg text-warning" />
                      </a>
                    </td>
                  </tr>
                  )
                }else{

                  return(
                    item.check?<tr className="fw-normal d-none">
                    <th>
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                        alt="avatar 1"
                        style={{ width: 45, height: "auto" }}
                      />
                      <span className="ms-2"><input type="checkbox" checked={item.check?true:false} onChange={()=>dispatch(check({check:!item.check,id:item.id}))} /></span>
                    </th>
                    <td className="align-middle">
                    {check1.edit==item.id?   <input type='text' placeholder='Nhập nội dung' value={todo} onChange={(e)=>setTodo(e.target.value)}></input>:!item.check?<span>{item.todo}</span>:<del>{item.todo}</del>}
                    </td>
                    <td className="align-middle">
                      <h6 className="mb-0">
                        <span className="badge bg-danger">{item.date}</span>
                      </h6>
                    </td>
                    <td className="align-middle">
                    {check1.edit!=item.id?   <a href="#!" data-mdb-toggle="tooltip" title="Done" onClick={()=>{dispatch(edit(item.id));notify("Edit");}}>
                      <i className="fas fa-check fa-lg text-success me-3" />
                    </a>
                    :
                    <a href="#!" data-mdb-toggle="tooltip" title="Done" onClick={()=>{dispatch(saveEdit({todo:todo ,id:item.id}));
                    dispatch(saveEdit1({todo:todo ,id:item.id}));notify("Edit");}}>
                      Save
                    </a>



                    }
                      <a href="#!" data-mdb-toggle="tooltip" title="Remove" onClick={()=>{dispatch(remove(item.id));notify("Delete Complete");}}>
                        <i className="fas fa-trash-alt fa-lg text-warning" />
                      </a>
                    </td>
                  </tr>
                  :
                <tr className="fw-normal">
                    <th>
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                        alt="avatar 1"
                        style={{ width: 45, height: "auto" }}
                      />
                      <span className="ms-2"><input type="checkbox" checked={item.check?true:false} onChange={()=>dispatch(check({check:!item.check,id:item.id}))} /></span>
                    </th>
                    <td className="align-middle">
                    {check1.edit==item.id?   <input type='text' placeholder='Nhập nội dung' value={todo} onChange={(e)=>setTodo(e.target.value)}></input>:!item.check?<span>{item.todo}</span>:<del>{item.todo}</del>}
                    </td>
                    <td className="align-middle">
                      <h6 className="mb-0">
                        <span className="badge bg-danger">{item.date}</span>
                      </h6>
                    </td>
                    <td className="align-middle">
                    {check1.edit!=item.id?   <a href="#!" data-mdb-toggle="tooltip" title="Done" onClick={()=>{dispatch(edit(item.id));notify("Edit");}}>
                      <i className="fas fa-check fa-lg text-success me-3" />
                    </a>
                    :
                    <a href="#!" data-mdb-toggle="tooltip" title="Done" onClick={()=>{dispatch(saveEdit({todo:todo ,id:item.id}));
                    dispatch(saveEdit1({todo:todo ,id:item.id}));notify("Edit");}}>
                      Save
                    </a>



                    }
                      <a href="#!" data-mdb-toggle="tooltip" title="Remove" onClick={()=>{dispatch(remove(item.id));notify("Delete Complete");}}>
                        <i className="fas fa-trash-alt fa-lg text-warning" />
                      </a>
                    </td>
                  </tr>





                  )






                }

                }



                )}
              

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}
