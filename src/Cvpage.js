import React from "react";

const CVDetails = () => (
  <div className="container py-5 text-gold">
    <h2>Curriculum Vitae</h2>

    <section className="mb-4">
      <h4>Education</h4>
      <ul>
        <li><strong>PhD in Geochemistry</strong>, California Institute of Technology, Sep 2010 – Dec 2016<br />
        Thesis: New techniques for noble gas geochronometry and thermochronometry<br />
        Advisor: Prof. Ken Farley</li>
        <li><strong>BA in Earth Science</strong>, Columbia College, Columbia University, Sep 2005 – May 2009</li>
      </ul>
    </section>

    <section className="mb-4">
      <h4>Professional Appointments</h4>
      <ul>
        <li><strong>Lamont-Doherty Earth Observatory</strong>, Associate Research Scientist (Jun 2020–)</li>
        <li>Postdoctoral Research Scientist, Lamont-Doherty (Aug 2017 – May 2020)</li>
        <li><strong>California Institute of Technology</strong>, Postdoctoral Research Scientist (Jan 2017 – Jun 2017)</li>
      </ul>
    </section>

    <section className="mb-4">
      <h4>Journal Articles</h4>
      Bibbase
      <script src="https://bibbase.org/show?bib=https%3A%2F%2Fbibbase.org%2Fnetwork%2Ffiles%2FwRnnfK3uuPp6eT5xd&noBootstrap=1&jsonp=1"></script>
    </section>

    <p>Download my full CV <a href="/Stephen_Cox_CV.pdf" target="_blank" rel="noopener noreferrer" className="link-gold">here</a>.</p>
  </div>
);

export default CVDetails;
