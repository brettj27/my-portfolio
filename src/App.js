import React from "react";
import projects from "./projects";

export default function App() {
  return (
    <div style={{ backgroundColor: "#f9fafb", minHeight: "100vh" }}>
      <header style={{ textAlign: "center", padding: "2.5rem 1rem" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "0.5rem" }}>
          Brett Steven James
        </h1>
        <p style={{ color: "#4b5563", fontSize: "1.1rem" }}>
          Operations Research + AI @ Rice University
        </p>
        <div style={{ marginTop: "1rem" }}>
          <a href="https://github.com/brettj27" target="_blank" rel="noreferrer">
            <button style={buttonStyle}>GitHub</button>
          </a>
          <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
            <button style={{ ...buttonStyle, backgroundColor: "white", color: "#2563eb", border: "2px solid #2563eb", marginLeft: "10px" }}>
              Resume
            </button>
          </a>
          <a href="https://linkedin.com/in/brett-s-james" target="_blank" rel="noreferrer">
            <button style={{ ...buttonStyle, border: "2px solid #2563eb", marginLeft: "10px" }}>
              LinkedIn
            </button>
          </a>
        </div>
      </header>

      <main
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.5rem",
          padding: "2rem",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {projects.map((proj, i) => (
          <div
            key={i}
            style={{
              background: "white",
              borderRadius: "20px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
              padding: "1.75rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.08)";
            }}
          >
            <div>
              <h2 style={{ fontSize: "1.4rem", fontWeight: "600", marginBottom: "0.75rem" }}>
                {proj.title}
              </h2>
              <p style={{ color: "#6b7280", marginBottom: "1.25rem", fontSize: "0.95rem" }}>
                {proj.description}
              </p>
            </div>
            <a href={proj.link} target="_blank" rel="noreferrer">
              <button style={buttonStyle}>View Project</button>
            </a>
          </div>
        ))}
      </main>

      <footer style={{ textAlign: "center", color: "gray", padding: "2rem" }}>
        © {new Date().getFullYear()} Brett Steven James
      </footer>
    </div>
  );
}

const buttonStyle = {
  backgroundColor: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: "10px",
  padding: "0.6rem 1.25rem",
  fontSize: "0.95rem",
  fontWeight: "500",
  cursor: "pointer",
  transition: "background 0.2s ease",
};
