import React, { useEffect } from "react";
import { HashRouter as Router, Route, Routes, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CVDetails from "./Cvpage"; // 👈 new import

const usePageTitle = (title) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};

const Home = () => {
  usePageTitle("Stephen E. Cox – Geologist");
  return (
    <div className="container text-center py-5 text-gold">
      <picture>
        <source srcSet={`${process.env.PUBLIC_URL}/images/landscape.webp`} type="image/webp" />
        <source media="(min-width: 1200px)" srcSet={`${process.env.PUBLIC_URL}/images/landscape-1920.jpg`} />
        <source media="(min-width: 768px)" srcSet={`${process.env.PUBLIC_URL}/images/landscape-768.jpg`} />
        <img
          src={`${process.env.PUBLIC_URL}/images/landscape-320.jpg`}
          alt="Landscape"
          className="img-fluid mb-4 rounded"
          loading="lazy"
        />
      </picture>
      <h1>Stephen E. Cox</h1>
      <p className="lead">Geologist | Research Scientist</p>
      <div className="mt-5 p-4 rounded" style={{ backgroundColor: "#1a1a1a", maxHeight: "400px", overflowY: "auto" }}>
        <div className="d-flex flex-column align-items-center text-center mb-3">
          <div className="d-flex align-items-center justify-content-center flex-wrap">
            <picture>
              <source srcSet={`${process.env.PUBLIC_URL}/images/profile.webp`} type="image/webp" />
              <source srcSet={`${process.env.PUBLIC_URL}/images/profile.jpg`} type="image/jpeg" />
              <img
                src={`${process.env.PUBLIC_URL}/images/profile.jpg`}
                alt="Profile"
                style={{ width: "120px", height: "120px", objectFit: "cover" }}
                className="rounded me-4 mb-2"
                loading="lazy"
              />
            </picture>
            <p className="text-gold fs-5 fw-semibold mb-0 align-self-center">
              Researching the deep-time history of the Earth through noble gas geochemistry
            </p>
          </div>
        </div>
        <p className="text-gold">
          I am a geochronologist and noble gas geochemist in New York. I have a PhD in Geochemistry from Caltech. My research interests include noble gas mass spectrometry, geochronology and thermochronology, earthquake hazard, and deep time tectonic processes. As an undergraduate, I conducted research on erosion rates in East Antarctica using detrital thermochronology. As a grad student, I worked on projects involving the development of (U-Th)/Ne, U-Kr, and U-Xr dating techniques. My current research projects include noble gas mass spectrometer developent, the dating of very young volcanic rocks, the evolution of the Turkana Basin and the East African Rift, and the tectonic and thermal histories of important features in the western United States such as the San Andreas Fault, the Basin and Range, and the Great Unconformity.
        </p>
      </div>
    </div>
  );
};

const CV = () => {
  usePageTitle("CV – Stephen E. Cox");
  return (
    <div className="container py-5 text-gold">
      <h2>Curriculum Vitae</h2>
      <p>Download my full CV <a href="/Stephen_Cox_CV.pdf" target="_blank" rel="noopener noreferrer" className="link-gold">here</a>.</p>
    </div>
  );
};

const Research = () => {
  usePageTitle("Research – Stephen E. Cox");
  return (
    <div className="container py-5 text-gold">
      <h2>Research Projects</h2>
      <h4>Next generaition noble gas mass spectrometry</h4>
      <p>Developing a new generation of high sensitivity, high resolution noble gas mass spectrometers.</p>
      <h4>Fault dating and earthquake hazard</h4>
      <p>Fault rock earthquake dating project.</p>
      <h4>Synchrotron X-ray fluorescence tomography</h4>
      <p>3-D mapping of uranium, thorium, and other elemnets in apatite and zircon for thermochronology.</p>
      <h4>Turkana Miocene Project</h4>
      <p>I am deeply involved in 40Ar/39Ar dating for the Turkana Miocene Project, focusing on early hominid evolution, rift evolution, and deep time climate.</p>
    </div>
  );
};

const Consulting = () => {
  usePageTitle("Consulting – Stephen E. Cox");
  return (
    <div className="container py-5 text-gold">
      <h2>Consulting</h2>
      <p>Available for geological consulting in geochronology, field geology, and isotope geochemistry. Contact via email: stephen@stephencoxgeology.com</p>
    </div>
  );
};

const CodeLinks = () => {
  usePageTitle("Code – Stephen E. Cox");
  return (
    <div className="container py-5 text-gold">
      <h2>Code Projects</h2>
      <ul>
        <li><a href="https://massspec.academy/" target="_blank" rel="noopener noreferrer" className="link-gold">Mass Spec Academy</a></li>
        <li><a href="https://github.com/stephen-e-cox/pyneon" target="_blank" rel="noopener noreferrer" className="link-gold">Neon data reduction software for geochronology</a></li>
      </ul>
    </div>
  );
};

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-black">
    <div className="container">
      <Link className="navbar-brand text-gold" to="/">Stephen E. Cox</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item"><Link className="nav-link text-gold" to="/cv">CV</Link></li>
          <li className="nav-item"><Link className="nav-link text-gold" to="/research">Research</Link></li>
          <li className="nav-item"><Link className="nav-link text-gold" to="/consulting">Consulting</Link></li>
          <li className="nav-item"><Link className="nav-link text-gold" to="/code">Code</Link></li>
        </ul>
      </div>
    </div>
  </nav>
);

const App = () => (
  <div className="bg-black min-vh-100">
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cv" element={<CVDetails />} />
        <Route path="/research" element={<Research />} />
        <Route path="/consulting" element={<Consulting />} />
        <Route path="/code" element={<CodeLinks />} />
      </Routes>
    </Router>
  </div>
);

export default App;
