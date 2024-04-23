import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import axios from 'axios';
import Swal from 'sweetalert2';

const Update = ({ employeeId }) => {
  const [value, setValue] = useState({
    name: "",
    Email: "",
    phone: "",
    Designation: "",
    Gender: "",
    Course: "",
    image: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updateUser = await axios.put(`http://localhost:3001/api/update/${employeeId}`, value);
      const response = updateUser.data;
      if (response.success) {
        Swal.fire("User updated Successfully!");
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    if (validateForm()) {
      // Process form data here, like submitting to a server
      console.log(value);
      // Reset form
      setValue({
        name: "",
        Email: "",
        phone: "",
        Designation: "",
        Gender: "",
        Course: "",
        image: ""
      });
      setErrors({});
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!value.name || !value.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!value.Email || !value.Email.trim()) {
      newErrors.Email = 'Email is required';
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(value.Email)) {
      newErrors.Email = 'Email is invalid';
      isValid = false;
    }

    if (!value.phone || !value.phone.trim()) {
      newErrors.phone = 'Phone number is required';
      isValid = false;
    } else if (!/^\d{10}$/.test(value.phone)) {
      newErrors.phone = 'Phone number is invalid';
      isValid = false;
    }

    if (!value.Course) {
      newErrors.Course = 'Course is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  return (
    <div>
      <Navbar expand="lg" style={{ backgroundColor: 'lightgreen' }}>
        <Container>
          <Navbar.Brand href="/dashboard" className='text-info fw-bolder'>LOGO</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className='ms-5'>
            <Nav className="ms-5">
              <Nav.Link href="/dashboard" style={{ marginLeft: '100px' }} className='fw-bolder'>Home</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <button className='btn btn-primary'>Logout</button>
        </Container>
      </Navbar>
      <div className='d-flex justify-content-center align-items-center w-100 vh-100 bg-primary'>
        <div className='bg-light p-4 rounded'>
          <form onSubmit={handleSubmit}>
            <h3 className='mb-3 mt-3'>Update Employee</h3>
            <div className='mb-3'>
              <label>Name:</label>
              <input
                className='form-control'
                type="text"
                name="name"
                value={value.name}
                onChange={handleChange}
              />
              {errors.name && <span>{errors.name}</span>}
            </div>
            <div className='mb-3'>
              <label>Email:</label>
              <input
                className='form-control'
                type="Email"
                name="Email"
                value={value.Email}
                onChange={handleChange}
              />
              {errors.Email && <span>{errors.Email}</span>}
            </div>
            <div className='mb-3'>
              <label>Phone:</label>
              <input
                className='form-control'
                type="tel"
                name="phone"
                value={value.phone}
                onChange={handleChange}
              />
              {errors.phone && <span>{errors.phone}</span>}
            </div>
            <div>
              <label>Designation:</label>
              <select
                name="Designation"
                value={value.Designation}
                onChange={handleChange}
                className='form-control mb-2'
              >
                <option className='mt-2' value="">Select Designation</option>
                <option value="Developer">Developer</option>
                <option value="Designer">Designer</option>
                <option value="Manager">Manager</option>
                <option value="HR">HR</option>
                <option value="Sales">Sales</option>
                <option value="Other">Other</option>
              </select>
              {errors.Designation && <span>{errors.Designation}</span>}
            </div>
            <div className='d-flex'>
              <label className='me-2'>Gender:</label>
              <div className=' flex-col'>
                <div>
                  <input
                    type="radio"
                    name="Gender"
                    value="male"
                    onChange={handleChange}
                  />
                  <label>Male</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="Gender"
                    value="female"
                    onChange={handleChange}
                  />
                  <label>Female</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="Gender"
                    value="other"
                    onChange={handleChange}
                  />
                  <label>Other</label>
                </div>
              </div>
              {errors.Gender && <span>{errors.Gender}</span>}
            </div>
            <div>
              <label>Course:</label>
              <div className='d-flex me-2 mb-2'>
                <div>
                  <input
                    type="checkbox"
                    name="Course"
                    value="MCA"
                    onChange={handleChange}
                  />
                  <label className='me-2'>MCA</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="Course"
                    value="BSC"
                    onChange={handleChange}
                  />
                  <label className='me-2'>BSC</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="Course"
                    value="BCA"
                    onChange={handleChange}
                  />
                  <label className='me-2'>BCA</label>
                </div>
              </div>
              {errors.Course && <span>{errors.Course}</span>}
            </div>
            <div className='mt-2 mb-3'>
              <label className='me-2'>Image:</label>
              <input
                type="file"
                name="image"
                onChange={handleChange}
                accept="image/*"
              />
              {errors.image && <span>{errors.image}</span>}
            </div>
            <button className='btn btn-success text-center align-items-center' type="submit">Update</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
