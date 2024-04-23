import React from 'react'
import  { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Dashboard() {
  const handleLogout = () => {
    // Perform logout actions here, such as clearing local storage, redirecting to login page, etc.
    // For example:
    localStorage.removeItem('authToken'); // Remove authentication token from local storage
    window.location.href = '/login'; // Redirect to login page
  };
  return (
    <div  className=' w-full vh-100 bg-light'>
      <Navbar expand="lg" style={{backgroundColor:'lightgreen'}} >
        <Container>
          <Navbar.Brand href="/dashboard" className='text-info fw-bolder' >Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"  />
          <Navbar.Collapse id="basic-navbar-nav" className='ms-5'>
            <Nav className="ms-5">
              <Nav.Link href="/dashboard" style={{marginLeft:'100px'}} className='fw-bolder'>Home</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <button className='btn btn-primary'  onClick={handleLogout}>Logout</button>
        </Container>
      </Navbar>
      <div className='container'>
        <div style={{ backgroundColor: 'lightgreen', height: '100vh', position: 'fixed', top: 0, left: 0 }}>
      <div className='p-3'>
        <Link style={{fontSize:'30px'}} className='text-info fw-bolder text-decoration-none' to={'/dashboard'}>Logo</Link>
       <a className=' text-decoration-none' href="/dashboard/add"><h4  style={{marginTop:'100px'}}><i className="fa-solid fa-circle-plus me-2 text-dark"></i>Create Employee</h4></a> 
       <a className=' text-decoration-none' href="/dashboard/manage"><h4 className='mt-5 ms-2'>Manage Employee</h4></a> 
      </div>
        </div>
        <h2 className='fw-bolder d-flex justify-content-center align-items-center text-info mt-5'>Welcome to Admin Panel</h2>
      </div>
      
    </div>
  )
}

export default Dashboard