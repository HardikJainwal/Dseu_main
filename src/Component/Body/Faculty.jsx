import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FacultyProfile = () => {
  const { id } = useParams();
  const [faculty, setFaculty] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/faculty")
      .then((res) => res.json())
      .then((data) => {
        const facultyData = data.find((f) => f.ID.toString() === id);
        setFaculty(facultyData);
      })
      .catch((error) => console.error("Error fetching faculty data:", error));
  }, [id]);

  if (!faculty) return <p className="text-center mt-6">Faculty not found.</p>;

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <div className="bg-white shadow-lg rounded-lg p-6 text-center">
        <img src={faculty.Image} alt={faculty.Name} className="rounded-full w-32 h-32 mx-auto mb-4" />
        <h2 className="text-2xl font-bold">{faculty.Name}</h2>
        <p className="text-gray-600">{faculty.Designation}</p>
        <h3 className="mt-4 font-semibold">Research Areas:</h3>
        <p className="text-gray-700">{faculty["Research Areas"]}</p>
        <h3 className="mt-4 font-semibold">Publications:</h3>
        <ul className="list-disc list-inside">
          {faculty.Publications.split(",").map((pub, index) => (
            <li key={index}>{pub.trim()}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FacultyProfile;
