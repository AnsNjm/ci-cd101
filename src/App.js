import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentTable from "./components/StudentTable.js";
import AddStudent from "./components/AddStudent.js";
import About from "./components/About.js";
import Navbar from "./components/Navbar.js"; // Import Navbar

const App = () => {
  const [students, setStudents] = useState([]);

  // Function to fetch students (for reloading list)
  const fetchStudents = () => {
    fetch("http://localhost:5000/api/students")
      .then((res) => res.json())
      .then((data) => setStudents(data))
      .catch((error) => console.error("Error fetching students:", error));
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <Router>
      <Navbar /> {/* Navbar is now globally included */}
      <div className="p-4"> {/* Padding to prevent content overlap */}
        <Routes>
          <Route path="/" element={<StudentTable students={students} />} />
          <Route path="/add-student" element={<AddStudent reloadList={fetchStudents} />} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
