import { useAuth } from "../context/AuthContext";
import "./Dashboard.css";

const Dashboard = () => {
  const { user, updateProgress } = useAuth();

  if (!user) return <h2>Loading...</h2>;

  const total = user.courses.length;
  const completed = user.courses.filter(c => c.progress === 100).length;

  const avg =
    total > 0
      ? Math.round(
          user.courses.reduce((a, c) => a + c.progress, 0) / total
        )
      : 0;

  return (
    <div className="dashboard-container">
      <div className="dashboard-hero">
        <h1>Welcome back 👋</h1>
        <p>Track your learning journey</p>
      </div>

      {/* STATS */}
      <div className="stats">
        <div className="stat-card">
          <h2>{total}</h2>
          <p>Courses</p>
        </div>

        <div className="stat-card">
          <h2>{completed}</h2>
          <p>Completed</p>
        </div>

        <div className="stat-card">
          <h2>{avg}%</h2>
          <p>Progress</p>
        </div>
      </div>

      {/* COURSES */}
      <h2 className="section-title">My Courses</h2>

      {total === 0 ? (
        <p>No courses enrolled</p>
      ) : (
        <div className="course-grid">
          {user.courses.map((course, i) => (
            <div key={i} className="course-card">
              <h3>{course.title}</h3>

              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${course.progress}%` }}
                />
              </div>

              <p>{course.progress}% complete</p>

              <button
                onClick={() =>
                  updateProgress(
                    course.title,
                    Math.min(course.progress + 20, 100)
                  )
                }
              >
                Continue
              </button>

              {course.progress === 100 && (
                <button className="certificate">
                  🎓 Certificate
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;