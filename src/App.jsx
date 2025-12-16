
import logo1 from "./assets/htgymLogo.png";
import logo2 from "./assets/crghoustonLogo.png";
import logo3 from "./assets/caminopythonLogo.png";

function App() {
  return (
    <div
      style={{
        padding: '4rem',
        fontFamily:
          'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        maxWidth: '900px',
        margin: '0 auto',
      }}
    >
      <h1
        style={{
          fontSize: '3rem',
          marginBottom: '1rem',
          color: '#1f2933',
        }}
      >
        operacha projects
      </h1>

      <p style={{ marginBottom: '2rem', color: '#4b5563' }}>
        
      </p>

      <h2
        style={{
          fontSize: '1.5rem',
          marginBottom: '0.5rem',
          color: '#111827',
        }}
      >
        Current Project
      </h2>

<ul style={{ paddingLeft: "1.2rem", listStyle: "none" }}>
  <li style={{ marginBottom: "0.75rem" }}>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
      }}
    >
      <a
        href="https://htgym.operacha.org"
        style={{
          color: "#111827",
          textDecoration: "underline",
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <img
          src={logo1}
          alt="HT Gym logo"
          style={{ height: "24px" }}
        />
        HT Gym Project
      </a>

      <span style={{ color: "#4b5563" }}>
        (production: 12/08/2025)
      </span>
    </div>
  </li>
</ul>

      <h2
        style={{
          fontSize: '1.5rem',
          marginTop: '5rem',
          marginBottom: '0.5rem',
          color: '#111827',
        }}
      >
        Other Apps
      </h2>

     <ul style={{ paddingLeft: "1.2rem", listStyle: "none" }}>
  <li style={{ marginBottom: "0.75rem" }}>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
      }}
    >
      <a
        href="https://crghouston.org"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: "#2563eb",
          textDecoration: "underline",
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <img
          src={logo2}
          alt="Community Resources Guide logo"
          style={{ height: "24px" }}
        />
        Community Resources Guide Houston
      </a>
      <span style={{ color: "#4b5563" }}>
        (production: 5/15/2024)
      </span>
    </div>
  </li>
</ul>

     <ul style={{ paddingLeft: "1.2rem", listStyle: "none" }}>
  <li style={{ marginBottom: "0.75rem" }}>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
      }}
    >
      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: "#2563eb",
          textDecoration: "underline",
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <img
          src={logo3}
          alt="Coamino Python logo"
          style={{ height: "24px" }}
        />
        Camino Python - iPhone app
      </a>
      <span style={{ color: "#4b5563" }}>
        (production: 10/01/2025)
      </span>
    </div>
  </li>
</ul>

    </div>
  );
}

export default App;