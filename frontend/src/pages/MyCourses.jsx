import { useAuth } from "../context/AuthContext";

const MyCourses = () => {
  const { user, updateProgress } = useAuth();

  if (!user) return <h2>Please login</h2>;

  const downloadCertificate = (title) => {
    const content = `
Certificate of Completion

This certifies that ${user.email}
has completed the course ${title}.
`;

    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `${title}-certificate.txt`;
    a.click();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>My Courses</h2>

      {user.courses.map((c, i) => (
        <div key={i} style={{ marginBottom: "20px" }}>
          <h3>{c.title}</h3>

          <div style={{ background: "#ddd", height: "10px" }}>
            <div
              style={{
                width: `${c.progress}%`,
                background: "green",
                height: "10px",
              }}
            />
          </div>

          <p>{c.progress}%</p>

          {/* PROGRESS BUTTON */}
          <button
            onClick={() =>
              updateProgress(c.title, Math.min(c.progress + 20, 100))
            }
          >
            Continue (+20%)
          </button>

          {/* CERTIFICATE */}
          {c.progress === 100 && (
            <button onClick={() => downloadCertificate(c.title)}>
              🎓 Download Certificate
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default MyCourses;