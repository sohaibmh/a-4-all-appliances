import "./App.css";
import logo from "./images/logo.png";
import oven from "./images/oven.jpg";
import washingMachine from "./images/washing-machine.jpg";
import brandsLogos from "./images/brands-logos.jpg";

function App() {
  return (
    <div className="">
      <div className="site-header sticky-top py-1" id="header">
        <div className="py-2" id="logoContainer">
          <img className="logo" src={logo} alt="logo" />
        </div>

        <div id="headerButton">
          <form action="https://a4allappliances.simplybook.it/v2/#book">
            <button type="submit" className="btn btn-warning btn-md">
              Book Now
            </button>
          </form>
        </div>
      </div>

      <div
        className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center "
        style={{ backgroundColor: "#F7F7F7" }}
      >
        <div className="col-md-5 p-lg-5 mx-auto my-5">
          <h1 className="display-4 font-weight-normal">
            Appliances Repair Service
          </h1>
          <p className="lead font-weight-normal">
            We repair all kitchen appliances including fridge freezers, washing
            machines, ovens, dishwashers, cookers, and more.
          </p>
          <form action="https://a4allappliances.simplybook.it/v2/#book">
            <button type="submit" className="btn btn-primary btn-lg">
              Book Now
            </button>
          </form>
        </div>
        <img className="washingMachine" src={washingMachine} />
        <img className="oven" src={oven} />
      </div>

      <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
        <div
          className="mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden"
          style={{ backgroundColor: "#A663CC" }}
        >
          <div className="my-3 py-3">
            <h2 className="display-5">Same Day/Next Day Service</h2>
            <p className="lead"></p>
          </div>
          <div
            className="bg-light shadow-sm mx-auto"
            styles="width: 80%; height: 300px; 
            -radius: 21px 21px 0 0;"
          ></div>
        </div>
        <div
          className="mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden"
          style={{ backgroundColor: "#8ea7cc" }}
        >
          <div className="my-3 p-3">
            <h3 className="display-5">
              Get your appliances repaired by our qualified and experienced
              technicians
            </h3>
          </div>
          <div
            className="bg-dark shadow-sm mx-auto"
            styles="width: 80%; height: 300px; border-radius: 21px 21px 0 0;"
          ></div>
        </div>
      </div>

      <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3 ">
        <div
          className="mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-black overflow-hidden"
          id="icons"
        >
          <div>
            <svg className="svg-icon" viewBox="0 0 20 20">
              <path
                fill="black"
                d="M16.254,3.399h-0.695V3.052c0-0.576-0.467-1.042-1.041-1.042c-0.576,0-1.043,0.467-1.043,1.042v0.347H6.526V3.052c0-0.576-0.467-1.042-1.042-1.042S4.441,2.476,4.441,3.052v0.347H3.747c-0.768,0-1.39,0.622-1.39,1.39v11.813c0,0.768,0.622,1.39,1.39,1.39h12.507c0.768,0,1.391-0.622,1.391-1.39V4.789C17.645,4.021,17.021,3.399,16.254,3.399z M14.17,3.052c0-0.192,0.154-0.348,0.348-0.348c0.191,0,0.348,0.156,0.348,0.348v0.347H14.17V3.052z M5.136,3.052c0-0.192,0.156-0.348,0.348-0.348S5.831,2.86,5.831,3.052v0.347H5.136V3.052z M16.949,16.602c0,0.384-0.311,0.694-0.695,0.694H3.747c-0.384,0-0.695-0.311-0.695-0.694V7.568h13.897V16.602z M16.949,6.874H3.052V4.789c0-0.383,0.311-0.695,0.695-0.695h12.507c0.385,0,0.695,0.312,0.695,0.695V6.874z M5.484,11.737c0.576,0,1.042-0.467,1.042-1.042c0-0.576-0.467-1.043-1.042-1.043s-1.042,0.467-1.042,1.043C4.441,11.271,4.908,11.737,5.484,11.737z M5.484,10.348c0.192,0,0.347,0.155,0.347,0.348c0,0.191-0.155,0.348-0.347,0.348s-0.348-0.156-0.348-0.348C5.136,10.503,5.292,10.348,5.484,10.348z M14.518,11.737c0.574,0,1.041-0.467,1.041-1.042c0-0.576-0.467-1.043-1.041-1.043c-0.576,0-1.043,0.467-1.043,1.043C13.475,11.271,13.941,11.737,14.518,11.737z M14.518,10.348c0.191,0,0.348,0.155,0.348,0.348c0,0.191-0.156,0.348-0.348,0.348c-0.193,0-0.348-0.156-0.348-0.348C14.17,10.503,14.324,10.348,14.518,10.348z M14.518,15.212c0.574,0,1.041-0.467,1.041-1.043c0-0.575-0.467-1.042-1.041-1.042c-0.576,0-1.043,0.467-1.043,1.042C13.475,14.745,13.941,15.212,14.518,15.212z M14.518,13.822c0.191,0,0.348,0.155,0.348,0.347c0,0.192-0.156,0.348-0.348,0.348c-0.193,0-0.348-0.155-0.348-0.348C14.17,13.978,14.324,13.822,14.518,13.822z M10,15.212c0.575,0,1.042-0.467,1.042-1.043c0-0.575-0.467-1.042-1.042-1.042c-0.576,0-1.042,0.467-1.042,1.042C8.958,14.745,9.425,15.212,10,15.212z M10,13.822c0.192,0,0.348,0.155,0.348,0.347c0,0.192-0.156,0.348-0.348,0.348s-0.348-0.155-0.348-0.348C9.653,13.978,9.809,13.822,10,13.822z M5.484,15.212c0.576,0,1.042-0.467,1.042-1.043c0-0.575-0.467-1.042-1.042-1.042s-1.042,0.467-1.042,1.042C4.441,14.745,4.908,15.212,5.484,15.212z M5.484,13.822c0.192,0,0.347,0.155,0.347,0.347c0,0.192-0.155,0.348-0.347,0.348s-0.348-0.155-0.348-0.348C5.136,13.978,5.292,13.822,5.484,13.822z M10,11.737c0.575,0,1.042-0.467,1.042-1.042c0-0.576-0.467-1.043-1.042-1.043c-0.576,0-1.042,0.467-1.042,1.043C8.958,11.271,9.425,11.737,10,11.737z M10,10.348c0.192,0,0.348,0.155,0.348,0.348c0,0.191-0.156,0.348-0.348,0.348s-0.348-0.156-0.348-0.348C9.653,10.503,9.809,10.348,10,10.348z"
              ></path>
            </svg>
            <h4 style={{ fontWeight: "700", color: "black" }}>
              Flexible Scheduling
            </h4>
          </div>
          <div>
            <svg class="svg-icon" viewBox="0 0 20 20">
              <path d="M10.25,2.375c-4.212,0-7.625,3.413-7.625,7.625s3.413,7.625,7.625,7.625s7.625-3.413,7.625-7.625S14.462,2.375,10.25,2.375M10.651,16.811v-0.403c0-0.221-0.181-0.401-0.401-0.401s-0.401,0.181-0.401,0.401v0.403c-3.443-0.201-6.208-2.966-6.409-6.409h0.404c0.22,0,0.401-0.181,0.401-0.401S4.063,9.599,3.843,9.599H3.439C3.64,6.155,6.405,3.391,9.849,3.19v0.403c0,0.22,0.181,0.401,0.401,0.401s0.401-0.181,0.401-0.401V3.19c3.443,0.201,6.208,2.965,6.409,6.409h-0.404c-0.22,0-0.4,0.181-0.4,0.401s0.181,0.401,0.4,0.401h0.404C16.859,13.845,14.095,16.609,10.651,16.811 M12.662,12.412c-0.156,0.156-0.409,0.159-0.568,0l-2.127-2.129C9.986,10.302,9.849,10.192,9.849,10V5.184c0-0.221,0.181-0.401,0.401-0.401s0.401,0.181,0.401,0.401v4.651l2.011,2.008C12.818,12.001,12.818,12.256,12.662,12.412"></path>
            </svg>

            <h4 style={{ fontWeight: "700", color: "black" }}>Quick Service</h4>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <g id="outline">
                <path d="M256,16A240.05,240.05,0,0,0,49.827,378.916a7.991,7.991,0,0,0-.483,9.522l9.06,13.59L19.884,425.14a8,8,0,0,0,2.547,14.705l33.207,6.641-2.223,41.081a8,8,0,0,0,12.107,7.291l61.1-36.7a240.12,240.12,0,0,0,258.763,0l61.1,36.7a8,8,0,0,0,12.107-7.291l-2.223-41.081,33.207-6.641a8,8,0,0,0,2.547-14.705L453.6,402.028l9.06-13.59a7.992,7.992,0,0,0-.485-9.525A240.026,240.026,0,0,0,256,16ZM90.369,376.377a382.764,382.764,0,0,1,331.262,0l22.6,10.85-23.083,34.625a398.732,398.732,0,0,0-330.3,0L67.766,387.227ZM256,322.685a401.343,401.343,0,0,0-132.68,22.763A158.725,158.725,0,0,1,96,256c0-88.225,71.775-160,160-160s160,71.775,160,160a158.815,158.815,0,0,1-27.325,89.446A401.338,401.338,0,0,0,256,322.685Zm55.37,83.439a160.163,160.163,0,0,1-110.743,0,377.593,377.593,0,0,1,110.743,0ZM70.206,473.381l1.782-32.948a8,8,0,0,0-6.419-8.278L45.86,428.214l21.43-12.858,14.054,21.082a8,8,0,0,0,10.095,2.785q8.032-3.825,16.253-7.263l9,13.5Zm65.076-28.67a8.057,8.057,0,0,0-.626-1.149l-11.736-17.6A386.228,386.228,0,0,1,173,411.217a176.124,176.124,0,0,0,166,0,385.992,385.992,0,0,1,50.081,14.74l-11.736,17.6a7.942,7.942,0,0,0-.625,1.148,224.122,224.122,0,0,1-241.437,0Zm330.858-16.5-19.709,3.941a8,8,0,0,0-6.419,8.278l1.782,32.948L395.309,445.46l9-13.5q8.213,3.446,16.253,7.263a8,8,0,0,0,10.1-2.785l14.054-21.082Zm-18.067-56.892-19.518-9.369q-12.058-5.787-24.512-10.745A174.7,174.7,0,0,0,432,256c0-97.047-78.953-176-176-176S80,158.953,80,256a174.6,174.6,0,0,0,27.949,95.211q-12.436,4.959-24.5,10.742l-19.513,9.366a224,224,0,1,1,384.141,0Z" />
                <path d="M332,192H288a8.009,8.009,0,0,1-8-8V160a24.028,24.028,0,0,0-24-24H240a8,8,0,0,0-8,8v17.633a45.692,45.692,0,0,1-13.474,32.526L212.686,200H168a8,8,0,0,0-8,8v88a8,8,0,0,0,8,8H308A20,20,0,0,0,326.7,276.894a19.991,19.991,0,0,0,8-24,19.991,19.991,0,0,0,8-24A20,20,0,0,0,332,192ZM176,216h32v72H176Zm156,0h-8a8,8,0,0,0,0,16,4,4,0,0,1,0,8h-8a8,8,0,0,0,0,16,4,4,0,0,1,0,8h-8a8,8,0,0,0,0,16,4,4,0,0,1,0,8H224V211.313l5.841-5.839A61.6,61.6,0,0,0,248,161.633V152h8a8.009,8.009,0,0,1,8,8v24a24.028,24.028,0,0,0,24,24h44a4,4,0,0,1,0,8Z" />
                <path d="M239.41,360.2l7.4,5.377-2.827,8.7a3,3,0,0,0,4.617,3.355l7.4-5.377,7.4,5.377a3,3,0,0,0,4.617-3.355l-2.827-8.7,7.4-5.377a3,3,0,0,0-1.763-5.427H261.68l-2.827-8.7a3,3,0,0,0-5.706,0l-2.827,8.7h-9.147A3,3,0,0,0,239.41,360.2Z" />
                <path d="M193.242,365.983l7.4,5.377-2.827,8.7a3,3,0,0,0,4.617,3.355l7.4-5.377,7.4,5.377a3,3,0,0,0,4.617-3.355l-2.827-8.7,7.4-5.377a3,3,0,0,0-1.763-5.427h-9.148l-2.826-8.7a3,3,0,0,0-5.707,0l-2.826,8.7h-9.147A3,3,0,0,0,193.242,365.983Z" />
                <path d="M285.577,365.983l7.4,5.377-2.827,8.7a3,3,0,0,0,4.617,3.355l7.4-5.377,7.4,5.377a3,3,0,0,0,4.617-3.355l-2.827-8.7,7.4-5.377a3,3,0,0,0-1.764-5.427h-9.147l-2.826-8.7a3,3,0,0,0-5.707,0l-2.826,8.7H287.34A3,3,0,0,0,285.577,365.983Z" />
              </g>
            </svg>

            <h4 style={{ fontWeight: "700", color: "black" }}>
              Approved Quality Control
            </h4>
          </div>
        </div>
        <div className=" mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden brandsLogos"></div>
      </div>

      <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
        <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div className="my-3 p-3">
            <h2 className="display-5">Another headline</h2>
            <p className="lead">And an even wittier subheading.</p>
          </div>
          <div
            className="bg-white shadow-sm mx-auto"
            styles="width: 80%; height: 300px; border-radius: 21px 21px 0 0;"
          ></div>
        </div>
        <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div className="my-3 py-3">
            <h2 className="display-5">Another headline</h2>
            <p className="lead">And an even wittier subheading.</p>
          </div>
          <div
            className="bg-white shadow-sm mx-auto"
            styles="width: 80%; height: 300px; border-radius: 21px 21px 0 0;"
          ></div>
        </div>
      </div>

      <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
        <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div className="my-3 p-3">
            <h2 className="display-5">Another headline</h2>
            <p className="lead">And an even wittier subheading.</p>
          </div>
          <div
            className="bg-white shadow-sm mx-auto"
            styles="width: 80%; height: 300px; border-radius: 21px 21px 0 0;"
          ></div>
        </div>
        <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div className="my-3 py-3">
            <h2 className="display-5">Another headline</h2>
            <p className="lead">And an even wittier subheading.</p>
          </div>
          <div
            className="bg-white shadow-sm mx-auto"
            styles="width: 80%; height: 300px; border-radius: 21px 21px 0 0;"
          ></div>
        </div>
      </div>

      <footer className="container py-5">
        <div className="row">
          <div className="col-12 col-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="d-block mb-2"
              role="img"
              viewBox="0 0 24 24"
              focusable="false"
            >
              <title>Product</title>
              <circle cx="12" cy="12" r="10" />
              <path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94" />
            </svg>
            <small className="d-block mb-3 text-muted">&copy; 2017-2020</small>
          </div>
          <div className="col-6 col-md">
            <h5>Features</h5>
            <ul className="list-unstylesd text-small">
              <li>
                <a className="text-muted" href="#">
                  Cool stuff
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Random feature
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Team feature
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Stuff for developers
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Another one
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Last time
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>Resources</h5>
            <ul className="list-unstylesd text-small">
              <li>
                <a className="text-muted" href="#">
                  Resource
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Resource name
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Another resource
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Final resource
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>Resources</h5>
            <ul className="list-unstylesd text-small">
              <li>
                <a className="text-muted" href="#">
                  Business
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Education
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Government
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Gaming
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>About</h5>
            <ul className="list-unstylesd text-small">
              <li>
                <a className="text-muted" href="#">
                  Team
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Locations
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Privacy
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
