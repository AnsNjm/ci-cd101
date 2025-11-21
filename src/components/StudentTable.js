import React from "react";
import { Link } from "react-router-dom";
import { Pencil, Trash2 } from "lucide-react";

const StudentTable = ({ students }) => {

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      try {
        // Send DELETE request to backend to delete the student
        const response = await fetch(`http://localhost:5000/api/students/${id}`, {
          method: 'DELETE',
        });
  
        if (response.ok) {
          response.status(201)
        } else {
          console.error('Failed to delete student');
        }
      } catch (error) {
        console.error('Error deleting student:', error);
      }
    }
  };

  

  
  return (
    <div className="container mx-auto p-4">
      {/* Add Student Button */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Student List</h2>
        <Link to="/add-student">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
            Add Student
          </button>
        </Link>
      </div>

      {/* Student Table */}
      <table className="min-w-full bg-white border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">First Name</th>
            <th className="border px-4 py-2">Last Name</th>
            <th className="border px-4 py-2">Age</th>
            <th className="border px-4 py-2">Address</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Licence</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student._id} className="text-center">
              <td className="border px-4 py-2">{student.firstName}</td>
              <td className="border px-4 py-2">{student.lastName}</td>
              <td className="border px-4 py-2">{student.age}</td>
              <td className="border px-4 py-2">{student.address}</td>
              <td className="border px-4 py-2">{student.email}</td>
              <td className="border px-4 py-2">{student.licence}</td>
              <td className="space-x-2">
                <button /*onClick={() => handleEdit(student)}*/ className="p-2 rounded hover:bg-gray-200">
                  <Pencil size={20} className="text-blue-600" />
                </button>

                {/* Delete Button */}
                <button onClick={() => handleDelete(student._id)} className="p-2 rounded hover:bg-red-200">
                  <Trash2 size={20} className="text-red-600" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
