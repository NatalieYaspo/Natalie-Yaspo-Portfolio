import Image from '../images/NatalieYaspo.jpg'

export default function About() {
  return (
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-4 px-4">
          <img src={Image} className="d-block mx-lg-auto img-fluid shadow p-3 mb-5 bg-white rounded" width={700} height={500} />
        </div>
        <div className="col-lg-8 px-4">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">About Me:</h1>
          <p className="lead">After many years in the Hospitality industry, I have recently taken the plunge into the coding and web development world.
            I will have competeted the Full-Stack Coding Bootcamp through UNC Charlotte in early March.

            I am seeking a role as a software engineer where I can incorporate my operational experience with Marriott to help enhance applications.
            I have many years of experience with professional communication, project and event management, logistics and successfully meeting leadership and ownership goals.</p>
        </div>
      </div>
    </div>
  );
}

