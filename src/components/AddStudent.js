import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddStudent = () => {
  const navigate = useNavigate();

  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    age: "",
    address: "",
    email: "",
    licence: "",
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/students", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(student),
      });

      if (response.ok) {
        alert("Student added successfully!");
        navigate("/"); // Redirect to student list
      } else {
        alert("Error adding student");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Add Student</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={student.firstName}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-2"
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={student.lastName}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-2"
          required
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={student.age}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-2"
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={student.address}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-2"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={student.email}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-2"
          required
        />
        <input
          type="text"
          name="licence"
          placeholder="licence"
          value={student.licence}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-2"
          required
        />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded w-full">
          Save Student
        </button>
      </form>
    </div>
  );
};

export default AddStudent;
