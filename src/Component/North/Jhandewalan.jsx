import { useState } from "react";

const campusData = {
  "About Us": "Our newly established DSEU Mayur Vihar Campus is a highly updated and modern version of all DSEU campuses...",
  "Campus Head": "The head of the campus is responsible for administration and smooth operation...",
  "Programs Offered": "We offer multiple programs including Applied Arts, Computer Science, Business Administration...",
  "Campus Highlights": "Fantastic connectivity, diverse student culture, well-equipped labs, and state-of-the-art infrastructure...",
  "Location": "Located near Akshardham temple, this campus provides an ideal space for creative learning and networking..."
};

const CampusInfo = () => {
  const [selected, setSelected] = useState("About Us");

  return (
    <div className="w-11/12 max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-lg mt-10">
      <h1 className="text-2xl font-bold text-center text-blue-700 mb-6">
        BPIBS DSEU SHAKARPUR CAMPUS - 2
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="flex flex-col gap-2">
          {Object.keys(campusData).map((option) => (
            <button
              key={option}
              className={`p-3 text-left font-medium rounded-lg transition-all ${
                selected === option
                  ? "bg-blue-700 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
              onClick={() => setSelected(option)}
            >
              {option}
            </button>
          ))}
        </div>

        {/* Dynamic Content */}
        <div className="md:col-span-3 bg-gray-100 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-blue-700">{selected}</h2>
          <p className="mt-2 text-gray-700">{campusData[selected]}</p>
        </div>
      </div>
    </div>
  );
};

export default CampusInfo;
