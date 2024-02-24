export default function Resume() {
  return (
    <div className="my-5">
      <div className="p-5 text-center bg-body-white">
        <div className="container">
          <h3 className="text-white">Resume:</h3>
          <button type="button" className="btn btn-sm btn-outline-secondary"><a href="https://drive.google.com/file/d/1MkTFZ-mYZQ9PE0CZNkJXTc_sc-Y67_Fi/view?usp=sharing">Download Resume</a></button>
        </div>
        <div className="container py-5">
          <h3 className="text-white">Proficiencies</h3>

          <p className="bold">Technical Skills:</p>
          <p className="italic">Front End: HTML5, CSS, JQuery, Javascript, Bootstrap, AJAX, SASS</p>
          <p className="italic">Back End: MySQL, MongoDB, Express, ReactJS, Node, Handlebars, Webpack, MERN, GraphQl</p>
          <br></br>
          <br></br>
          <p className="bold">Non-Technical Skills</p>
          <p className="italic">Strong Communication, Customer Service Experience, Teamwork, Highly Organized, Strong Leadership and Project Management</p>

        </div>
      </div>
    </div>
  );
}

