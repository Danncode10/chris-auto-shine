import './App.css';
import { useEffect, useState } from 'react';
import companyLogo from './company-logo.png';

function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal-on-scroll');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Smooth scroll for internal anchor links
    const handleClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (!target) return;
      const id = target.getAttribute('href');
      if (!id || id === '#') return;
      const el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="App">
      {/* Responsive Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand fw-bold d-flex align-items-center" href="#home">
            <img src={companyLogo} alt="Chris Auto Shine logo" className="navbar-logo me-2" />
            <span className="brand-text d-none d-sm-inline">Chris Auto Shine</span>
          </a>
          
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#gallery">Gallery</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section" id="home">
        <div className="container">
          <div className="hero-content">
            <img src={companyLogo} alt="Chris Auto Shine" className="hero-logo mb-4" />
            <h1 className="hero-title">Chris Auto Shine Detailing</h1>
            <p className="hero-tagline">Professional Car Detailing & Shine Experts</p>
            <button className="btn hero-btn" type="button">
              <i className="bi bi-calendar-check me-2"></i>
              Book Now
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="main-content">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="display-4 mb-4">Our Services</h2>
              <p className="lead">
                Professional car detailing services that make your vehicle shine like new.
              </p>
            </div>
          </div>

          {/* Services Section */}
          <section id="services" className="services-section py-5">
            <div className="row g-4">
              <div className="col-12 col-md-6 col-lg-4">
                <div className="card service-card h-100 text-center p-3 reveal-on-scroll">
                  <div className="service-icon mb-3">
                    <i className="bi bi-droplet-half"></i>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Exterior Wash</h5>
                    <p className="card-text">Thorough exterior wash with premium products for a spotless shine.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-4">
                <div className="card service-card h-100 text-center p-3 reveal-on-scroll">
                  <div className="service-icon mb-3">
                    <i className="bi bi-brush"></i>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Interior Detailing</h5>
                    <p className="card-text">Deep interior clean including vacuum, upholstery, and dashboard care.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-4">
                <div className="card service-card h-100 text-center p-3 reveal-on-scroll">
                  <div className="service-icon mb-3">
                    <i className="bi bi-shield-check"></i>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Ceramic Coating</h5>
                    <p className="card-text">Long-lasting protection with high-gloss finish and hydrophobic effect.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Gallery Section */}
          <section id="gallery" className="gallery-section py-5">
            <div className="text-center mb-4">
              <h2 className="display-6">Gallery</h2>
              <p className="text-muted">A glimpse of our detailing work</p>
            </div>
            <div className="row g-4">
              {[
                'https://picsum.photos/id/1011/800/600',
                'https://picsum.photos/id/1018/800/600',
                'https://picsum.photos/id/1020/800/600',
                'https://picsum.photos/id/1033/800/600',
                'https://picsum.photos/id/1035/800/600',
                'https://picsum.photos/id/1043/800/600',
              ].map((src, index) => (
                <div className="col-12 col-md-6 col-lg-4" key={index}>
                  <div className="gallery-item reveal-on-scroll">
                    <img
                      src={src}
                      alt={`Gallery car ${index + 1}`}
                      className="img-fluid rounded shadow-sm gallery-image"
                      role="button"
                      data-bs-toggle="modal"
                      data-bs-target="#imageModal"
                      onClick={() => setSelectedImage(src)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="about-section py-5">
            <div className="row align-items-center g-5">
              <div className="col-12 col-lg-6">
                <div className="about-image-wrapper reveal-on-scroll fade-right">
                  <img
                    src="https://picsum.photos/id/1050/900/600"
                    alt="Car detailing"
                    className="img-fluid rounded shadow"
                  />
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="about-text reveal-on-scroll fade-left">
                  <h2 className="display-6 mb-3">About Chris Auto Shine</h2>
                  <p className="lead mb-3 text-muted">
                    We deliver premium automotive detailing services with meticulous attention to
                    detail, combining expertise, passion, and high-quality products to ensure your
                    vehicle looks its absolute best.
                  </p>
                  <p className="text-muted">
                    Chris Auto Shine is a local, family-run detailing studio based in Kippa-Ring,
                    proudly serving the Redcliffe Peninsula and North Brisbane. We specialize in
                    exterior and interior detailing, paint correction, and ceramic coatings for
                    daily drivers, enthusiast vehicles, fleets, and dealerships. We use
                    industry-standard techniques, pH-balanced and eco‑friendly products, and take
                    a careful, no‑rush approach so every vehicle leaves with a showroom glow. We’re
                    fully insured and stand behind our work with a satisfaction guarantee.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Contact Section */}
      <section id="contact" className="contact-section py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-12 col-lg-6">
              <div className="card p-4 contact-card reveal-on-scroll">
                <h3 className="mb-3">Get In Touch</h3>
                <form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control contact-input" id="name" placeholder="Your name" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control contact-input" id="email" placeholder="you@example.com" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea className="form-control contact-input" id="message" rows="5" placeholder="How can we help?"></textarea>
                  </div>
                  <button type="submit" className="btn hero-btn w-100">Submit</button>
                </form>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="map-placeholder rounded reveal-on-scroll p-0 overflow-hidden">
                <iframe
                  title="Chris Auto Shine Location"
                  className="map-embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps?q=${encodeURIComponent('Unit 23 439 Elizabeth Ave KIPPA-RING QLD 4021')}&output=embed`}
                ></iframe>
              </div>
              <div className="mt-3">
                <h5 className="mb-1">Our Address</h5>
                <p className="mb-2 text-muted">Unit 23 439 Elizabeth Ave KIPPA-RING QLD 4021</p>
                <a
                  className="btn btn-outline-light btn-sm"
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Unit 23 439 Elizabeth Ave KIPPA-RING QLD 4021')}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <div
        className="modal fade"
        id="imageModal"
        tabIndex="-1"
        aria-labelledby="imageModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content bg-dark">
            <div className="modal-header border-0">
              <h5 className="modal-title" id="imageModalLabel">Preview</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {selectedImage && (
                <img src={selectedImage} alt="Selected" className="img-fluid rounded" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
