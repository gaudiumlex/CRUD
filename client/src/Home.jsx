import React from "react"

function Home() {
    return(
        <>
  {/* Hello world */}
  <div className="awesome" style={{ border: "1px solid red" }}>
    <label htmlFor="name">Enter your name: </label>
    <input type="text" id="name" />
  </div>
  <p>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>LMS Homepage</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <style
      dangerouslySetInnerHTML={{
        __html:
          "\n        :root {\n            --primary-color: #3498db;\n            --secondary-color: #2c3e50;\n            --accent-color: #e74c3c;\n        }\n        .bg-custom-primary { background-color: var(--primary-color); }\n        .bg-custom-secondary { background-color: var(--secondary-color); }\n        .btn-custom-accent { \n            background-color: var(--accent-color);\n            border-color: var(--accent-color);\n            color: white;\n        }\n        .btn-custom-accent:hover {\n            background-color: #c0392b;\n            border-color: #c0392b;\n            color: white;\n        }\n        .pricing-card {\n            transition: transform 0.3s;\n        }\n        .pricing-card:hover {\n            transform: translateY(-10px);\n        }\n    "
      }}
    />
    {/* Navigation */}
  </p>
  <nav className="navbar navbar-expand-lg navbar-dark bg-custom-secondary fixed-top">
    <div className="container">
      <a className="navbar-brand" href="#">
        LMS Portal
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link" href="#home">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#courses">
              Courses
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#pricing">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              My Learning
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Profile
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  {/* Hero Section */}
  <header
    id="home"
    className="bg-custom-primary text-white text-center py-5"
    style={{ marginTop: 56 }}
  >
    <div className="container">
      <h1 className="display-4">Empower Your Future with Knowledge</h1>
      <p className="lead">
        Discover, Learn, and Grow with Our Diverse Course Offerings
      </p>
      <a href="#courses" className="btn btn-custom-accent btn-lg">
        Start Learning Now
      </a>
    </div>
  </header>
  {/* Course Categories */}
  <section id="courses" className="py-5">
    <div className="container">
      <h2 className="text-center mb-4">Explore Our Course Categories</h2>
      <div className="row">
        <div className="col-md-3 mb-3">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Technology</h5>
              <p className="card-text">
                Programming, Web Development, AI, and more.
              </p>
              <a href="#" className="btn btn-custom-accent">
                Explore Tech
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Business</h5>
              <p className="card-text">
                Management, Marketing, Finance, and Entrepreneurship.
              </p>
              <a href="#" className="btn btn-custom-accent">
                Discover Business
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Creative Arts</h5>
              <p className="card-text">
                Graphic Design, Music, Photography, and Film.
              </p>
              <a href="#" className="btn btn-custom-accent">
                Unleash Creativity
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Health &amp; Wellness</h5>
              <p className="card-text">
                Nutrition, Fitness, Mental Health, and Medical Sciences.
              </p>
              <a href="#" className="btn btn-custom-accent">
                Boost Wellness
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Featured Courses */}
  <section className="bg-light py-5">
    <div className="container">
      <h2 className="text-center mb-4">Featured Courses</h2>
      <div className="row">
        <div className="col-md-4 mb-3">
          <div className="card h-100">
            <img
              src="src\images1\data-science--with-python-igmguru_176161162_l.png"
              className="card-img-top"
              alt="Python Course"
            />
            <div className="card-body">
              <h5 className="card-title">Python for Data Science</h5>
              <p className="card-text">
                Master Python for data analysis and machine learning.
              </p>
              <a href="#" className="btn btn-custom-accent">
                Enroll Now
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card h-100">
            <img
              src="src\images1\digital-marketing-4111002_1920 (2).jpg"
              className="card-img-top"
              alt="Marketing Course"
            />
            <div className="card-body">
              <h5 className="card-title">Digital Marketing Mastery</h5>
              <p className="card-text">
                Learn cutting-edge digital marketing strategies and tools.
              </p>
              <a href="#" className="btn btn-custom-accent">
                Enroll Now
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card h-100">
            <img
              src="src\images1\A-pathway-that-UIUX-team-follows-before-designing-your-app (1).png"
              className="card-img-top"
              alt="UX Design Course"
            />
            <div className="card-body">
              <h5 className="card-title">UX/UI Design Fundamentals</h5>
              <p className="card-text">
                Create stunning user experiences for web and mobile apps.
              </p>
              <a href="#" className="btn btn-custom-accent">
                Enroll Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Pricing Section */}
  <section id="pricing" className="py-5 bg-light">
    <div className="container">
      <h2 className="text-center mb-5">Choose Your Learning Plan</h2>
      <div className="row">
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100 pricing-card">
            <div className="card-body">
              <h5 className="card-title text-center">Basic</h5>
              <h6 className="card-price text-center">
                $9.99<span className="period">/month</span>
              </h6>
              <hr />
              <ul className="fa-ul">
                <li>
                  <span className="fa-li">
                    <i className="fas fa-check" />
                  </span>
                  Access to 50+ courses
                </li>
                <li>
                  <span className="fa-li">
                    <i className="fas fa-check" />
                  </span>
                  Basic quizzes and assignments
                </li>
                <li>
                  <span className="fa-li">
                    <i className="fas fa-check" />
                  </span>
                  Email support
                </li>
                <li className="text-muted">
                  <span className="fa-li">
                    <i className="fas fa-times" />
                  </span>
                  Certificate of completion
                </li>
                <li className="text-muted">
                  <span className="fa-li">
                    <i className="fas fa-times" />
                  </span>
                  1-on-1 mentoring
                </li>
              </ul>
              <div className="d-grid">
                <a href="#" className="btn btn-custom-accent text-uppercase">
                  Choose Plan
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100 pricing-card">
            <div className="card-body">
              <h5 className="card-title text-center">Pro</h5>
              <h6 className="card-price text-center">
                $19.99<span className="period">/month</span>
              </h6>
              <hr />
              <ul className="fa-ul">
                <li>
                  <span className="fa-li">
                    <i className="fas fa-check" />
                  </span>
                  <strong>Unlimited</strong> access to all courses
                </li>
                <li>
                  <span className="fa-li">
                    <i className="fas fa-check" />
                  </span>
                  Advanced projects and assignments
                </li>
                <li>
                  <span className="fa-li">
                    <i className="fas fa-check" />
                  </span>
                  Priority email support
                </li>
                <li>
                  <span className="fa-li">
                    <i className="fas fa-check" />
                  </span>
                  Certificate of completion
                </li>
                <li className="text-muted">
                  <span className="fa-li">
                    <i className="fas fa-times" />
                  </span>
                  1-on-1 mentoring
                </li>
              </ul>
              <div className="d-grid">
                <a href="#" className="btn btn-custom-accent text-uppercase">
                  Choose Plan
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100 pricing-card">
            <div className="card-body">
              <h5 className="card-title text-center">Premium</h5>
              <h6 className="card-price text-center">
                $29.99<span className="period">/month</span>
              </h6>
              <hr />
              <ul className="fa-ul">
                <li>
                  <span className="fa-li">
                    <i className="fas fa-check" />
                  </span>
                  <strong>Unlimited</strong> access to all courses
                </li>
                <li>
                  <span className="fa-li">
                    <i className="fas fa-check" />
                  </span>
                  Advanced projects and assignments
                </li>
                <li>
                  <span className="fa-li">
                    <i className="fas fa-check" />
                  </span>
                  24/7 phone and email support
                </li>
                <li>
                  <span className="fa-li">
                    <i className="fas fa-check" />
                  </span>
                  Certificate of completion
                </li>
                <li>
                  <span className="fa-li">
                    <i className="fas fa-check" />
                  </span>
                  Monthly 1-on-1 mentoring session
                </li>
              </ul>
              <div className="d-grid">
                <a href="#" className="btn btn-custom-accent text-uppercase">
                  Choose Plan
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Footer */}
  <footer className="bg-custom-secondary text-white text-center py-3">
    <div className="container">
      <p>LMS PORTAL HOME PAGE</p>
    </div>
  </footer>
  <p />
</>

    )
}

export default Home;