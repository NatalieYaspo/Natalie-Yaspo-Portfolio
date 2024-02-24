import Project from '../components/Project';

import Giflix from '../images/Giflix.png'
import AnothersTreasure from '../images/AnothersTreasure.png'
import Readme from '../images/Readme.png'
import Weather from '../images/Weather.png'
import NoSql from '../images/NoSqlAPI.png'
import Placeholder from '../images/NatalieYaspo.jpg'

export default function Portfolio() {
  return (
    <div>
      <h2 className="text-center">Portfolio</h2>
      <div className="album py-5">

        <div className="container">

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <Project key={1}
              image={Giflix}
              title={"Giflix"}
              description={"The one-stop, quick movie reference app."}
              deployedUrl={"https://natalieyaspo.github.io/Giflix/"}
              githubUrl={"https://github.com/NatalieYaspo/Giflix"}
              deployed={"Deployed App"} />

            <Project key={2}
              image={AnothersTreasure}
              title={"Another's Treasure"}
              description={"A simple, community resource sharing app."}
              deployedUrl={"https://anotherstreasure-20417965e1d9.herokuapp.com/"}
              githubUrl={"https://github.com/NatalieYaspo/Project-2-Team-4"} 
              deployed={"Deployed App"} />

            <Project key={3}
              image={Placeholder}
              title={"Placeholder"}
              description={"Placeholder"}
              deployedUrl={"TBD"}
              githubUrl={"TBD"} 
              deployed={"Deployed App"} />

            <Project key={4}
              image={Readme}
              title={"README Generator"}
              description={"A proressional README Generator using the CLI."}
              deployedUrl={"https://drive.google.com/file/d/1Pgy97l5wF6JCxidBwNHaKjw6ra3DURQr/view"}
              githubUrl={"https://github.com/NatalieYaspo/Professional_README_Generator"} 
              deployed={"Tutorial Video"} />

            <Project key={5}
              image={Weather}
              title={"Weather Dashboard"}
              description={"A basic weather dashboard using a REST API."}
              deployedUrl={"https://natalieyaspo.github.io/Five-Day-Weather-Dashboard/"}
              githubUrl={"https://github.com/NatalieYaspo/Five-Day-Weather-Dashboard"}
              deployed={"Deployed App"} />

            <Project key={6}
              image={NoSql}
              title={"NoSQL Social Network API"}
              description={"NoSQL database API to handle large amounts of data."}
              deployedUrl={"https://drive.google.com/file/d/1H4hxWcoKexqjyBIxxH13efGLKvbgwhO4/view"}
              githubUrl={"https://github.com/NatalieYaspo/NoSQL-Social-Network-API"}
              deployed={"Tutorial Video"} />

          </div>
        </div>
      </div>
    </div>
  );
}