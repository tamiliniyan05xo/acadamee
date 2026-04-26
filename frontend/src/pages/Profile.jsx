import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import "./Profile.css";

const Profile = () => {
  const { user, updateName } = useAuth();
  const [name, setName] = useState(user?.name || "");

  if (!user) return <h2>Loading...</h2>;

  const total = user.courses.length;
  const completed = user.courses.filter(c => c.progress === 100).length;

  const avg =
    total > 0
      ? Math.round(
          user.courses.reduce((a, c) => a + c.progress, 0) / total
        )
      : 0;

  const saveName = () => {
    updateName(name);
  };

  return (
    <div className="profile-wrapper">

      {/* LEFT PANEL */}
      <div className="profile-sidebar">
        <div className="avatar">
          {user.name?.charAt(0).toUpperCase()}
        </div>

        <h2>{user.name}</h2>
        <p>{user.email}</p>

        <div className="edit-box">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button onClick={saveName}>Save</button>
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="profile-main">

        {/* STATS */}
        <div className="stats-grid">
          <div className="stat-card">
            <h3>{total}</h3>
            <p>Courses</p>
          </div>

          <div className="stat-card">
            <h3>{completed}</h3>
            <p>Completed</p>
          </div>

          <div className="stat-card">
            <h3>{avg}%</h3>
            <p>Progress</p>
          </div>
        </div>

        {/* COURSES */}
        <h3 className="section-title">My Courses</h3>

        {total === 0 ? (
          <p>No courses enrolled</p>
        ) : (
          <div className="course-list">
            {user.courses.map((course, i) => (
              <div key={i} className="course-card">
                <div className="course-row">
                  <span>{course.title}</span>
                  <span>{course.progress}%</span>
                </div>

                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;