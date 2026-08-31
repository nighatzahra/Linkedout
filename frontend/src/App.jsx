import './App.css'

function App() {
  return (
    <div className="app">
      <header className="navbar">
        <div className="logo">LinkedOut</div>

        <nav className="nav-links">
          <a href="#companies">Companies</a>
          <a href="#reviews">Reviews</a>
          <a href="#about">About</a>
        </nav>

        <div className="nav-actions">
          <button className="login-button">Sign in</button>
          <button className="signup-button">Join LinkedOut</button>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <p className="eyebrow">REAL WORKPLACE EXPERIENCES</p>

            <h1>
              Find out what it’s really like
              <span> to work there.</span>
            </h1>

            <p className="hero-description">
              Explore honest employee experiences, company reviews,
              workplace culture, and career insights — all in one place.
            </p>

            <div className="search-box">
              <input
                type="text"
                placeholder="Search for a company..."
              />
              <button>Search</button>
            </div>
          </div>
        </section>

        <section className="companies" id="companies">
          <div className="section-heading">
            <p className="eyebrow">EXPLORE</p>
            <h2>Discover companies</h2>
            <p>
              Explore what employees are saying about the places they work.
            </p>
          </div>

          <div className="company-grid">
            <div className="company-card">
              <h3>Tech Companies</h3>
              <p>Explore workplace experiences in technology.</p>
            </div>

            <div className="company-card">
              <h3>Startups</h3>
              <p>Discover what it’s like behind the startup culture.</p>
            </div>

            <div className="company-card">
              <h3>Top Employers</h3>
              <p>See companies employees are talking about.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 LinkedOut. Built to make workplace experiences more transparent.</p>
      </footer>
    </div>
  )
}

export default App