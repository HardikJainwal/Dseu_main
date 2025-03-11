import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const FacultyList = ({ department }) => {
  const [facultyList, setFacultyList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/faculty")
      .then((res) => res.json())
      .then((data) => {
        const filteredData = data.filter((faculty) => faculty.Department === department);
        setFacultyList(filteredData);
      })
      .catch((error) => console.error("Error fetching faculty data:", error));
  }, [department]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">{department}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {facultyList.length > 0 ? (
          facultyList.map((faculty) => (
            <div key={faculty.ID} className="bg-white shadow-lg rounded-lg p-4 text-center">
              <img src={faculty.Image} alt={faculty.Name} className="rounded-full w-24 h-24 mx-auto mb-4" />
              <h3 className="font-bold text-lg">{faculty.Name}</h3>
              <p className="text-gray-600">{faculty.Designation}</p>
              <Link to={`/faculty/${faculty.ID}`}>
                <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg">View Profile</button>
              </Link>
            </div>
          ))
        ) : (
          <p>No faculty members available.</p>
        )}
      </div>
    </div>
  );
};

export default FacultyList;
