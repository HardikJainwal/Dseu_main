import React from "react";
import { Link, Route, Routes } from "react-router-dom";

const courseCategories = [
  { id: "ug", title: "UG Courses", description: "Undergraduate degree programs designed for high school graduates", color: "bg-blue-500", icon: "🎓" },
  { id: "pg", title: "PG Courses", description: "Postgraduate programs for students with a bachelor's degree", color: "bg-purple-500", icon: "📚" },
  { id: "certificate-courses", title: "Certificate Courses", description: "Short-term specialization programs to enhance specific skills", color: "bg-green-500", icon: "📜" },
  { id: "diploma", title: "Diploma Courses", description: "Specialized technical and professional qualification programs", color: "bg-orange-500", icon: "🏆" },
];

const CategoryPage = ({ category }) => {
  return (
    <div className="text-center p-8">
      <div className="flex items-center justify-center mb-6">
        <Link to="/" className="flex items-center mr-6 text-gray-600 hover:text-gray-900">← Back</Link>
        <h1 className="text-3xl font-bold">{category.title}</h1>
      </div>
      <p className="text-lg mb-8">Explore our {category.title.toLowerCase()} and start your educational journey today!</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map(item => (
          <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="h-40 bg-gray-200"></div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">Sample {category.title} {item}</h3>
              <p className="text-gray-600 mb-4">This is a sample course description for demonstration purposes.</p>
              <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const CoursesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Routes>
        <Route path="/" element={
          <div className="text-center p-8">
            <h1 className="text-4xl font-bold mb-2">Our Courses</h1>
            <p className="text-xl text-gray-600 mb-12">Choose a category to explore our educational programs</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {courseCategories.map(category => (
                <Link key={category.id} to={`/courses/${category.id}`} className={`${category.color} text-white rounded-xl p-6 shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl flex flex-col items-center`}>
                  <div className="text-5xl mb-4">{category.icon}</div>
                  <h2 className="text-2xl font-bold mb-2">{category.title}</h2>
                  <p className="opacity-90">{category.description}</p>
                </Link>
              ))}
            </div>
          </div>
        } />
        {courseCategories.map(category => (
          <Route key={category.id} path={`/${category.id}`} element={<CategoryPage category={category} />} />
        ))}
      </Routes>
    </div>
  );
};

export default CoursesPage;
