const About = () =>{
    return(
      <div className="container my-2">
        <div className="container col-xxl-8 px-4 py-5">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <img src="../image/hospital.jpg" className="d-block mx-lg-auto img-fluid rounded-2" alt="Bootstrap Themes" width="700" height="800" loading="lazy"/>      
            </div>
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">About i-Hospital</h1>
              <p className="lead"> i-Hospital is committed to advanced medical care through innovative and efficient services, creating an environment of continued quality improvement and expertise of the best physicians. We utilise the most recent medical technologies, advanced clinical methods and develop protocols to improve our outcomes ensuring the good health of the community around us.</p>
            </div>
          </div>
        </div>
      </div>
    )

  }
  export default About;