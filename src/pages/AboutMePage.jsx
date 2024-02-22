import Image from '../images/NatalieYaspo.jpg'

export default function About() {
    return (
      <div>
        <img src={Image} height={200} width={200} />
        <h2>About Me:</h2>
        <p>After many years in the Hospitality industry, I have recently taken the plunge into the coding and web development world.
          I will have competeted the Full-Stack Coding Bootcamp through UNC Charlotte in early March.

        I am seeking a role as a software engineer where I can incorporate my operational experience with Marriott to help enhance applications.
        I have many years of experience with professional communication, project and event management, logistics and successfully meeting leadership and ownership goals.

        </p>
      </div>
    );
  }