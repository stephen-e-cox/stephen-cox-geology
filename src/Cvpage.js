import React from "react";
import publications from "./data/publications.json";

const getYear = (publication) =>
  publication.issued?.["date-parts"]?.[0]?.[0];

const formatAuthors = (authors = []) => {
  const names = authors.map(({ given, family, literal }) =>
    literal || [given, family].filter(Boolean).join(" ")
  );

  if (names.length <= 1) {
    return names[0] || "";
  }

  return `${names.slice(0, -1).join(", ")}, and ${
    names[names.length - 1]
  }`;
};

const PublicationList = () => {
  // Remove this filter if you want theses and other entry types too.
  const journalArticles = publications.filter(
    (publication) => publication.type === "article-journal"
  );

  return (
    <ol>
      {journalArticles.map((publication) => {
        const year = getYear(publication);
        const doi = publication.DOI;
        const url = doi
          ? `https://doi.org/${doi}`
          : publication.URL;

        return (
          <li key={publication.id}>
            {formatAuthors(publication.author)}
            {publication.title && <>, “{publication.title},”</>}
            {publication["container-title"] && (
              <> <em>{publication["container-title"]}</em></>
            )}
            {publication.volume && `, vol. ${publication.volume}`}
            {publication.issue && `, no. ${publication.issue}`}
            {publication.page && `, pp. ${publication.page}`}
            {year && `, ${year}`}.
            {url && (
              <>
                {" "}
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {doi || "View publication"}
                </a>
              </>
            )}
          </li>
        );
      })}
    </ol>
  );
};

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
      <PublicationList />
    </section>

    <p>Download my full CV <a href="/Stephen_Cox_CV.pdf" target="_blank" rel="noopener noreferrer" className="link-gold">here</a>.</p>
  </div>
);

export default CVDetails;
