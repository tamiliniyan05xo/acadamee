import { useAuth } from "../context/AuthContext";
import "./Courses.css";

const allCourses = [
  { title: "Data Structures", category: "CS", level: "Intermediate" },
  { title: "Algorithms", category: "CS", level: "Advanced" },
  { title: "Operating Systems", category: "CS", level: "Intermediate" },
  { title: "Database Systems", category: "CS", level: "Beginner" },
  { title: "Computer Networks", category: "CS", level: "Intermediate" },

  { title: "Machine Learning", category: "AI", level: "Advanced" },
  { title: "Artificial Intelligence", category: "AI", level: "Advanced" },

  { title: "Digital Electronics", category: "ECE", level: "Intermediate" },
  { title: "Microprocessors", category: "ECE", level: "Advanced" },
  { title: "Signals & Systems", category: "ECE", level: "Intermediate" },

  { title: "Thermodynamics", category: "Mechanical", level: "Beginner" },
  { title: "Fluid Mechanics", category: "Mechanical", level: "Intermediate" },
  { title: "Heat Transfer", category: "Mechanical", level: "Advanced" },

  { title: "Structural Engineering", category: "Civil", level: "Advanced" },
  { title: "Geotechnical Engineering", category: "Civil", level: "Intermediate" },

  { title: "Web Development", category: "IT", level: "Beginner" },
  { title: "Mobile App Development", category: "IT", level: "Intermediate" },
  { title: "Cloud Computing", category: "IT", level: "Advanced" },
];

const Courses = () => {
  const { enrollCourse } = useAuth();

  return (
    <div className="courses-container">
      <h2 className="title">Engineering Courses</h2>

      <div className="courses-grid">
        {allCourses.map((course, i) => (
          <div key={i} className="course-card">
            <div className="course-header">
              <span className="category">{course.category}</span>
              <span className="level">{course.level}</span>
            </div>

            <h3>{course.title}</h3>

            <button onClick={() => enrollCourse(course.title)}>
              Enroll
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;