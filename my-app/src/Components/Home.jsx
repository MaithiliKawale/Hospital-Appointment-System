import { NavLink } from "react-router-dom";
const Home = () =>{
    return(
      <div>
        <div className="container my-2">
          <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
              <div className="col-10 col-sm-8 col-lg-6">
                <img src="/image/doctor-img.jpg" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="800" loading="lazy"/>      
              </div>
              <div className="col-lg-6">
                <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Dr. Danial Roa (Physician specialist)</h1>
                <p className="lead"> Physicians work to maintain, promote, and restore health by studying, diagnosing, and treating injuries and diseases. Physicians generally have six core skills: Patient care Physicians have to provide compassionate, appropriate, and effective care to promote health and treat health problems in their patients.</p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                  <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold"> <NavLink className="nav-link" to="/appointmentform">Book Appointments</NavLink></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  export default Home;