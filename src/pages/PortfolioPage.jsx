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
        {/* Change the bg-body-tertiary to a different background color */}
        <div className="container">

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col">
              <div className="card shadow p-3 mb-5 bg-secondary-subtle">
                <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={Giflix} role="img" preserveAspectRatio="xMidYMid slice" focusable="false" />
                <div className="card-body text-center">
                  <h5 className="justify-content-center">Giflix</h5>
                  <p className="card-text">The one-stop, quick movie reference app</p>
                  <div className="d-flex justify-content-center align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary"><a href="https://natalieyaspo.github.io/Giflix/">Deployed App</a></button>
                      <button type="button" className="btn btn-sm btn-outline-secondary"><a href="https://github.com/NatalieYaspo/Giflix">GitHub</a></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow p-3 mb-5 bg-secondary-subtle">
              <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={AnothersTreasure} role="img" preserveAspectRatio="xMidYMid slice" focusable="false" />
                <div className="card-body text-center">
                <h5 className="justify-content-center">Another's Treasure</h5>
                  <p className="card-text">A simple, community resource sharing app.</p>
                  <div className="d-flex justify-content-center align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary"><a href="https://anotherstreasure-20417965e1d9.herokuapp.com/">Deployed App</a></button>
                      <button type="button" className="btn btn-sm btn-outline-secondary"><a href="https://github.com/NatalieYaspo/Project-2-Team-4">GitHub</a></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow p-3 mb-5 bg-secondary-subtle">
              <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={Placeholder} role="img" preserveAspectRatio="xMidYMid slice" focusable="false" />
                <div className="card-body text-center">
                <h5 className="justify-content-center">Project 3 Placeholder</h5>
                  <p className="card-text">I know this one will be awesome!</p>
                  <div className="d-flex justify-content-center align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">Deployed App</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">GitHub</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card shadow p-3 mb-5 bg-secondary-subtle">
              <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={Readme} role="img" preserveAspectRatio="xMidYMid slice" focusable="false" />
                <div className="card-body text-center">
                <h5 className="justify-content-center">README Generator</h5>
                  <p className="card-text">A proressional README Generator using the CLI.</p>
                  <div className="d-flex justify-content-center align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary"><a href="https://drive.google.com/file/d/1Pgy97l5wF6JCxidBwNHaKjw6ra3DURQr/view">Tutorial Video</a></button>
                      <button type="button" className="btn btn-sm btn-outline-secondary"><a href="https://github.com/NatalieYaspo/Professional_README_Generator">GitHub</a></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow p-3 mb-5 bg-secondary-subtle">
              <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={Weather} role="img" preserveAspectRatio="xMidYMid slice" focusable="false" />
                <div className="card-body text-center">
                <h5 className="justify-content-center">Weather Dashboard</h5>
                  <p className="card-text">A basic weather dashboard using a REST API.</p>
                  <div className="d-flex justify-content-center align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary"><a href="https://natalieyaspo.github.io/Five-Day-Weather-Dashboard/">Deployed App</a></button>
                      <button type="button" className="btn btn-sm btn-outline-secondary"><a href="https://github.com/NatalieYaspo/Five-Day-Weather-Dashboard">GitHub</a></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow p-3 mb-5 bg-secondary-subtle">
              <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={NoSql} role="img" preserveAspectRatio="xMidYMid slice" focusable="false" />
                <div className="card-body text-center">
                <h5 className="justify-content-center">NoSQL Social Network API</h5>
                  <p className="card-text">NoSQL database API to handle large amounts of data.</p>
                  <div className="d-flex justify-content-center align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary"><a href="https://drive.google.com/file/d/1H4hxWcoKexqjyBIxxH13efGLKvbgwhO4/view">Tutorial Video</a></button>
                      <button type="button" className="btn btn-sm btn-outline-secondary"><a href="https://github.com/NatalieYaspo/NoSQL-Social-Network-API">GitHub</a></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );






}