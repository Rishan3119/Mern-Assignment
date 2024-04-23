import React, { useEffect, useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom'
import axios from 'axios';
function ManageEmployee({UpdateUser}) {
  const [data,setData] = useState([])
  useEffect(()=>{
    async function FetchData(){
     try {
      const FetchUser = await axios.get('http://localhost:3001/api/get')
      const response = FetchUser.data
      console.log(response)
      setData(response)
     } catch (error) {
      
     }
    }
    FetchData()
  },[data])

  const handleDelete = async (id) => {
    try {
      // Delete employee from the database
      await axios.delete(`http://localhost:3001/api/delete/${id}`);
      // Update the local state to reflect the deletion
      setData(data.filter((employee) => employee._id !== id));
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };
  
  return (
  
   <div>
    <Navbar expand="lg" style={{backgroundColor:'lightgreen'}} >
        <Container>
          <Navbar.Brand href="/dashboard" className='text-info fw-bolder' >LOGO</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"  />
          <Navbar.Collapse id="basic-navbar-nav" className='ms-5'>
            <Nav className="ms-5">
              <Nav.Link href="/dashboard" style={{marginLeft:'100px'}} className='fw-bolder'>Home</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <button className='btn btn-primary'>Logout</button>
        </Container>
      </Navbar>
      <div className='container-fluid p-4 mt-5 ms-4'>
              <div className="col-sm-6">
              <h2 className='mb-5  font-bold'>Employee List</h2>
              </div>
              
              {/* table */}
              <Table  style={{width:'1180px'}} className='shadow' striped   hover>
        <thead className='bg-info' >
         
          <tr>
            <th>NO.</th>
            <th> NAME</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Designation</th>
            <th>Gender</th>
            <th>Course</th>
            <th>Image</th>
            <th >Actions</th>
          </tr>
        </thead>
        <tbody className='divide-y'>
        { data.user?.map((elem,index)=>{
            return(
              <tr>
            <td>{index+1}</td>
            <td>{elem.name}</td>
            <td>{elem.Email}</td>
            <td>{elem.phone}</td>
            <td>{elem.Designation}</td> 
            <td>{elem.Gender}</td>
            <td>{elem.Course}</td>
            <td style={{width:'10px',}}>{elem.image}</td>
            <td ><Link className=' rounded text-decoration-none text-info  me-2' to={'/dashboard/update'} onChange={()=>UpdateUser(elem._id)} ><i class="fa-solid fa-pen fa-xl"></i></Link>
            <Link className='rounded text-decoration-none ms-2' onClick={()=>handleDelete(elem._id)}> <i className="fa-solid text-danger fa-xl fa-trash"></i></Link>
            </td>
          </tr>
            )
          })}
            
          </tbody> 
        
       
      </Table>
  
      </div>
   </div>
  )
}

export default ManageEmployee