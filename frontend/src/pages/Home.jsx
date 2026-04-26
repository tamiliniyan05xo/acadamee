import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Home.css";

const Home = () => {
  const { user } = useAuth();

  return (
    <div className="home">

      {/* HERO */}
      <section className="hero">
        <h1>Welcome to Academe 🎓</h1>
        <p>
          Your engineering learning platform to track progress, enroll in courses,
          and achieve your academic goals.
        </p>

        <div className="hero-buttons">
          {!user ? (
            <>
              <Link to="/signup">
                <button className="primary">Get Started</button>
              </Link>
              <Link to="/login">
                <button className="secondary">Login</button>
              </Link>
            </>
          ) : (
            <Link to="/dashboard">
              <button className="primary">Go to Dashboard</button>
            </Link>
          )}
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <h2>Why Choose Academe?</h2>

        <div className="features-grid">
          <div className="feature-card">
            <h3>📚 Wide Course Selection</h3>
            <p>Explore engineering subjects across multiple domains.</p>
          </div>

          <div className="feature-card">
            <h3>📊 Track Progress</h3>
            <p>Monitor your learning journey with real-time progress updates.</p>
          </div>

          <div className="feature-card">
            <h3>🎓 Earn Certificates</h3>
            <p>Complete courses and receive certificates instantly.</p>
          </div>

          <div className="feature-card">
            <h3>⚡ Simple & Fast</h3>
            <p>Easy-to-use interface designed for students.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Start Your Learning Journey Today 🚀</h2>
        {!user && (
          <Link to="/signup">
            <button className="primary large">Join Now</button>
          </Link>
        )}
      </section>

    </div>
  );
};

export default Home;