function EducationInfo() {
  return (
    <>
      <div className="info__box info__edu ">
        <div className="u-margin-bottom-lg">
          <h3 className="heading-tertiary">University</h3>
          <div className="info__edu--text ">
            <p>
              <strong>Liberty University</strong>, 2019 - 2022 &rarr; Bachelor
              of Science.{" "}
              <em>Summa cum Laude</em>
            </p>
          </div>
        </div>
        <div className="">
          <h3 className="heading-tertiary">Certificates</h3>
          <div className="info__edu--text">
            <p>
              <strong>Google</strong>, 2024 &rarr; Cybersecurity Professional (In progress)
            </p>
            <p>
              <strong>Udemy</strong>, 2024 &rarr; Advanced CSS & Sass
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export { EducationInfo };
