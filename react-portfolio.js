// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
          <h2 className="text-xl text-white mt-4">Loading...</h2>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className="font-sans text-gray-100 bg-gray-900">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = [
    { name: 'Home', target: 'home' },
    { name: 'About', target: 'about' },
    { name: 'Skills', target: 'skills' },
    { name: 'Projects', target: 'projects' },
    { name: 'Experience', target: 'experience' },
    { name: 'Education', target: 'education' },
    { name: 'Testimonials', target: 'testimonials' },
    { name: 'Contact', target: 'contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900 shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="home" smooth={true} duration={500} className="cursor-pointer">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Mackwin Joy Dsouza</h1>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.target}
                to={link.target}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer"
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
              <span className="bg-blue-600 text-xs text-white px-2 py-1 rounded-full mb-4 inline-block">
                {selectedProject.category}
              </span>
              <p className="text-gray-300 my-4">{selectedProject.description}</p>
              
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-blue-400 mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, i) => (
                    <span key={i} className="bg-gray-700 text-gray-300 px-3 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mt-6 flex justify-end">
                <button
                  onClick={closeProjectModal}
                  className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded mr-2"
                >
                  Close
                </button>
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;

// src/components/Experience.js
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Experience = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const experiences = [
    {
      company: 'Invenger Technologies Inc.',
      position: 'Business Development Executive',
      period: 'Jul 2024 – Present',
      description: [
        'Initiated cold calls and outreach, resulting in a 30% increase in high-quality leads and sales opportunities.',
        'Delivered impactful presentations and product pitches to C-level executives, effectively aligning ERP solutions with client business needs.',
        'Led comprehensive ERP software demonstrations, emphasizing key features and real-world applications, resulting in a 40% increase in client engagement and conversion.',
        'Showcased expertise as an ERP subject matter expert, ensuring precise and in-depth product knowledge during client interactions.',
        'Collaborated with marketing teams on strategic campaigns, boosting product visibility, brand recognition, and market positioning.',
        'Conducted thorough market analysis and competitor research, identifying trends and refining value propositions to support sales strategies.',
        'Maintained CRM systems to track leads, manage client interactions, and generate actionable insights for sales forecasting and reporting.'
      ]
    },
    {
      company: 'Acrene Solutions Private Limited',
      position: 'Business Operations Associate',
      period: 'Previous Role',
      description: [
        'Recorded and organized cash/bank transactions using Zoho Books.',
        'Tracked and managed operational expenses.',
        'Generated leads through social media platforms.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" data-aos="fade-up">Work Experience</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mb-8" data-aos="fade-up" data-aos-delay="200"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="mb-12 relative pl-8 border-l-2 border-blue-500"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-500"></div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-white mb-1">{exp.position}</h3>
                <div className="flex items-center mb-4">
                  <i className="fas fa-building text-blue-400 mr-2"></i>
                  <h4 className="text-xl text-blue-400">{exp.company}</h4>
                </div>
                <div className="flex items-center mb-4">
                  <i className="fas fa-calendar-alt text-gray-400 mr-2"></i>
                  <span className="text-gray-400">{exp.period}</span>
                </div>
                <ul className="list-disc pl-5 space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-gray-300">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

// src/components/Education.js
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Education = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const education = [
    {
      degree: 'MBA in Finance & Marketing',
      institution: 'Sahyadri College',
      period: '2022–2024',
      score: 'CGPA: 8.46',
      icon: 'fa-graduation-cap'
    },
    {
      degree: 'Bachelor of Commerce',
      institution: 'MGM College, Udupi',
      period: '2019–2022',
      score: '74.4%',
      icon: 'fa-user-graduate'
    }
  ];

  const certifications = [
    { name: 'Power BI', icon: 'fa-chart-bar' },
    { name: 'SPSS', icon: 'fa-chart-line' },
    { name: 'Advanced Microsoft Excel', icon: 'fa-file-excel' },
    { name: 'Social Media Marketing', icon: 'fa-hashtag' }
  ];

  return (
    <section id="education" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" data-aos="fade-up">Education & Certifications</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mb-8" data-aos="fade-up" data-aos-delay="200"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div data-aos="fade-right">
            <h3 className="text-2xl font-semibold mb-6 text-blue-400 flex items-center">
              <i className="fas fa-university mr-3"></i>
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div 
                  key={index} 
                  className="bg-gray-700 p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]"
                >
                  <div className="flex items-start">
                    <div className="bg-blue-600 p-3 rounded-full mr-4">
                      <i className={`fas ${edu.icon} text-white`}></i>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">{edu.degree}</h4>
                      <p className="text-blue-400">{edu.institution}</p>
                      <div className="flex items-center mt-2 text-gray-400">
                        <i className="fas fa-calendar-alt mr-2"></i>
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center mt-1 text-gray-300">
                        <i className="fas fa-star mr-2"></i>
                        <span>{edu.score}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div data-aos="fade-left">
            <h3 className="text-2xl font-semibold mb-6 text-blue-400 flex items-center">
              <i className="fas fa-certificate mr-3"></i>
              Certifications
            </h3>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div 
                    key={index} 
                    className="bg-gray-800 p-4 rounded-lg flex items-center transform transition-all duration-300 hover:bg-gray-700"
                  >
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full mr-3">
                      <i className={`fas ${cert.icon} text-white`}></i>
                    </div>
                    <span className="font-medium">{cert.name}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4 text-blue-400">Continuous Learning</h4>
                <p className="text-gray-300">
                  I'm constantly expanding my knowledge through professional development courses 
                  and staying updated with the latest industry trends in business development,
                  ERP technologies, and digital marketing strategies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

// src/components/Testimonials.js
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Testimonials = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const [swiper, setSwiper] = useState(null);

  const testimonials = [
    {
      name: "Rajesh Sharma",
      position: "CTO, TechSphere Solutions",
      image: "/api/placeholder/100/100",
      quote: "Working with Mackwin was a game-changer for our ERP implementation. His attention to detail and deep product knowledge made the transition seamless. He is not just a service provider but a true technology partner."
    },
    {
      name: "Priya Mehta",
      position: "Operations Director, Global Manufacturing Ltd",
      image: "/api/placeholder/100/100",
      quote: "Mackwin's ability to understand our complex manufacturing processes and translate them into effective ERP solutions saved us countless hours and resources. His follow-up and client service are outstanding."
    },
    {
      name: "Vikram Reddy",
      position: "Finance Manager, Innovative Systems",
      image: "/api/placeholder/100/100",
      quote: "I've worked with many business development professionals, but Mackwin stands out for his technical knowledge combined with excellent communication skills. He presented complex ERP features in a way that made sense to our entire team."
    },
    {
      name: "Ananya Desai",
      position: "CEO, Horizon Technologies",
      image: "/api/placeholder/100/100",
      quote: "Mackwin's strategic approach to our business needs helped us implement an ERP solution that perfectly aligned with our growth goals. His insights went beyond the product to truly understand our business challenges."
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-10 left-10 text-9xl text-white opacity-10">
          <i className="fas fa-quote-left"></i>
        </div>
        <div className="absolute bottom-10 right-10 text-9xl text-white opacity-10">
          <i className="fas fa-quote-right"></i>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" data-aos="fade-up">Client Testimonials</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mb-8" data-aos="fade-up" data-aos-delay="200"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="300">
            What clients and colleagues say about working with me
          </p>
        </div>

        <div className="max-w-4xl mx-auto" data-aos="fade-up">
          <div className="relative">
            <Swiper
              onSwiper={setSwiper}
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              className="testimonial-swiper"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-6">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-20 h-20 rounded-full border-4 border-blue-500 object-cover"
                        />
                      </div>
                      <div className="mb-6">
                        <i className="fas fa-quote-left text-4xl text-blue-400 opacity-50"></i>
                      </div>
                      <p className="text-lg text-gray-300 italic mb-6">
                        "{testimonial.quote}"
                      </p>
                      <h4 className="text-xl font-semibold text-white">{testimonial.name}</h4>
                      <p className="text-blue-400">{testimonial.position}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-full">
              <button 
                onClick={() => swiper?.slidePrev()}
                className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full focus:outline-none shadow-lg transform transition-transform hover:scale-110"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>
            </div>
            
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-full">
              <button 
                onClick={() => swiper?.slideNext()}
                className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full focus:outline-none shadow-lg transform transition-transform hover:scale-110"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

// src/components/Contact.js
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ isSubmitting: true, isSubmitted: false, error: null });
    
    // Simulate form submission with a timeout
    setTimeout(() => {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: true,
        error: null
      });
      
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus(prev => ({ ...prev, isSubmitted: false }));
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" data-aos="fade-up">Get In Touch</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mb-8" data-aos="fade-up" data-aos-delay="200"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="300">
            Have a question or want to work together? Feel free to contact me!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div data-aos="fade-right">
            <h3 className="text-2xl font-semibold mb-6 text-blue-400">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-600 p-3 rounded-full mr-4">
                  <i className="fas fa-envelope text-white"></i>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-200">Email</h4>
                  <a href="mailto:dsouzamackwinjoy@gmail.com" className="text-blue-400 hover:underline">dsouzamackwinjoy@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-600 p-3 rounded-full mr-4">
                  <i className="fas fa-phone text-white"></i>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-200">Phone</h4>
                  <p className="text-gray-300">9901179203</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-600 p-3 rounded-full mr-4">
                  <i className="fas fa-map-marker-alt text-white"></i>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-200">Location</h4>
                  <p className="text-gray-300">Sunview Posarma House, Pilar Village, Mudarangadi</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-600 p-3 rounded-full mr-4">
                  <i className="fab fa-linkedin text-white"></i>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-200">LinkedIn</h4>
                  <a href="https://www.linkedin.com/in/mackwin-joy-dsouza" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">mackwin-joy-dsouza</a>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Connect With Me</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-700 hover:bg-blue-600 p-3 rounded-full transition-colors">
                  <i className="fab fa-facebook-f text-white"></i>
                </a>
                <a href="#" className="bg-gray-700 hover:bg-blue-600 p-3 rounded-full transition-colors">
                  <i className="fab fa-twitter text-white"></i>
                </a>
                <a href="https://www.linkedin.com/in/mackwin-joy-dsouza" target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-blue-600 p-3 rounded-full transition-colors">
                  <i className="fab fa-linkedin-in text-white"></i>
                </a>
                <a href="#" className="bg-gray-700 hover:bg-blue-600 p-3 rounded-full transition-colors">
                  <i className="fab fa-instagram text-white"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div data-aos="fade-left">
            <form onSubmit={handleSubmit} className="bg-gray-700 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">Send Message</h3>
              
              {formStatus.isSubmitted && (
                <div className="bg-green-600 text-white p-4 rounded mb-6">
                  Your message has been sent successfully! I'll get back to you soon.
                </div>
              )}
              
              {formStatus.error && (
                <div className="bg-red-600 text-white p-4 rounded mb-6">
                  {formStatus.error}
                </div>
              )}
              
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-600 border border-gray-500 rounded p-3 text-white focus:outline-none focus:border-blue-400"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-300 mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-600 border border-gray-500 rounded p-3 text-white focus:outline-none focus:border-blue-400"
                  placeholder="john@example.com"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-600 border border-gray-500 rounded p-3 text-white focus:outline-none focus:border-blue-400"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full bg-gray-600 border border-gray-500 rounded p-3 text-white focus:outline-none focus:border-blue-400"
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={formStatus.isSubmitting}
                className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded transition-colors ${
                  formStatus.isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {formStatus.isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

// src/components/Footer.js
import React from 'react';
import { Link } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link to="home" smooth={true} duration={500} className="cursor-pointer">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Mackwin Joy Dsouza</h1>
            </Link>
            <p className="text-gray-400 mt-2">Business Development Executive</p>
          </div>
          
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/in/mackwin-joy-dsouza" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          
          <div>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full inline-block transition-colors"
            >
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
              </svg>
            </Link>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-900 mt-2 py-3 px-4 rounded-lg shadow-lg">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.target}
                  to={link.target}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

// src/components/Hero.js
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Hero = () => {
  const [text] = useTypewriter({
    words: ['Business Development Executive', 'ERP Expert', 'Client Relationship Manager'],
    loop: true,
    delaySpeed: 2000,
  });

  const heroRef = useRef(null);

  useEffect(() => {
    const parallaxEffect = (e) => {
      const speed = -5;
      const x = (window.innerWidth - e.pageX * speed) / 100;
      const y = (window.innerHeight - e.pageY * speed) / 100;
      if (heroRef.current) {
        heroRef.current.style.backgroundPosition = `${x}px ${y}px`;
      }
    };

    document.addEventListener('mousemove', parallaxEffect);
    return () => document.removeEventListener('mousemove', parallaxEffect);
  }, []);

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="h-screen flex items-center justify-center relative bg-cover bg-center"
      style={{ 
        backgroundImage: 'url("https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="container mx-auto px-4 z-10">
        <div className="text-center">
          <div className="animate-fadeUp">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">
              Mackwin Joy <span className="text-blue-400">Dsouza</span>
            </h1>
            <h2 className="text-2xl md:text-3xl mb-8 text-gray-300">
              <span>{text}</span>
              <Cursor cursorColor="#60a5fa" />
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
              Transforming Business Challenges into Growth Opportunities
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-all transform hover:scale-105 font-semibold cursor-pointer"
              >
                Get in Touch
              </Link>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="bg-transparent border-2 border-blue-400 hover:bg-blue-400 hover:text-gray-900 text-blue-400 px-8 py-3 rounded-full transition-all transform hover:scale-105 font-semibold cursor-pointer"
              >
                View My Work
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer"
        >
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default Hero;

// src/components/About.js
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const journeyItems = [
    {
      date: '2022-2024',
      title: 'MBA in Finance & Marketing',
      subtitle: 'Sahyadri College',
      description: 'Gained comprehensive knowledge in both finance and marketing, preparing for business development roles.',
      icon: '🎓',
    },
    {
      date: '2019-2022',
      title: 'Bachelor of Commerce',
      subtitle: 'MGM College, Udupi',
      description: 'Built a strong foundation in business and commerce principles.',
      icon: '📚',
    },
    {
      date: '2024-Present',
      title: 'Business Development Executive',
      subtitle: 'Invenger Technologies Inc.',
      description: 'Leading business development initiatives and client relationship management.',
      icon: '💼',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" data-aos="fade-up">About Me</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mb-8" data-aos="fade-up" data-aos-delay="200"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center mb-16 gap-8">
          <div className="md:w-1/3" data-aos="fade-right">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <img 
                src="https://media.licdn.com/dms/image/v2/D5603AQHeQyGKTGPS6A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1695443825900?e=1751500800&v=beta&t=j-7RB9ILYBXLJ5EklI7mGXSS7a155ztxnFEwmMouauw" 
                alt="Mackwin Joy Dsouza" 
                className="rounded-full w-64 h-64 object-cover border-4 border-blue-500 shadow-lg relative mx-auto"
              />
            </div>
          </div>
          <div className="md:w-2/3" data-aos="fade-left">
            <h3 className="text-2xl font-semibold mb-4 text-blue-400">Who Am I?</h3>
            <p className="text-lg leading-relaxed mb-6">
              Proactive Business Development Executive with 1 year of experience. Successfully generated 150+ high-quality B2B leads and sales opportunities. Delivered impactful presentations to C-level executives, aligning ERP solutions with client needs.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Conducted 50+ ERP software demonstrations, driving client engagement and conversion. Acted as an ERP subject matter expert, ensuring in-depth product knowledge during client interactions. Collaborated on strategic campaigns, enhancing product visibility and brand recognition.
            </p>
            <p className="text-lg leading-relaxed">
              Conducted market analysis and competitor research to refine value propositions and support sales strategies. Proficient in Zoho CRM and Books for lead tracking and follow-ups. Adept at social media lead generation and cold calling campaigns.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="bg-gray-700 px-4 py-2 rounded-full">
                <span className="text-blue-400 font-semibold">Email:</span> dsouzamackwinjoy@gmail.com
              </div>
              <div className="bg-gray-700 px-4 py-2 rounded-full">
                <span className="text-blue-400 font-semibold">Phone:</span> 9901179203
              </div>
              <div className="bg-gray-700 px-4 py-2 rounded-full">
                <span className="text-blue-400 font-semibold">Location:</span> Mudarangadi
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16" data-aos="fade-up">
          <h3 className="text-2xl font-semibold mb-8 text-center text-blue-400">My Journey</h3>
          <VerticalTimeline>
            {journeyItems.map((item, index) => (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element"
                date={item.date}
                iconStyle={{ background: '#1e40af', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                icon={<div className="text-2xl">{item.icon}</div>}
                contentStyle={{ background: '#1f2937', color: '#f3f4f6', borderTop: '3px solid #3b82f6' }}
                contentArrowStyle={{ borderRight: '7px solid #1f2937' }}
              >
                <h3 className="vertical-timeline-element-title text-xl font-bold">{item.title}</h3>
                <h4 className="vertical-timeline-element-subtitle text-blue-400 mt-1">{item.subtitle}</h4>
                <p className="mt-3">{item.description}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default About;

// src/components/Skills.js
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const [activeTab, setActiveTab] = useState('technical');

  const technicalSkills = [
    { name: 'Microsoft Excel', level: 90, icon: 'fa-file-excel' },
    { name: 'Microsoft Word', level: 85, icon: 'fa-file-word' },
    { name: 'ODOO ERP', level: 80, icon: 'fa-database' },
    { name: 'Power BI', level: 75, icon: 'fa-chart-bar' },
    { name: 'SPSS', level: 70, icon: 'fa-chart-line' },
    { name: 'Zoho CRM', level: 85, icon: 'fa-users-cog' },
    { name: 'Zoho Books', level: 80, icon: 'fa-book' },
  ];

  const softSkills = [
    { name: 'Client Relationship Management', level: 95, icon: 'fa-handshake' },
    { name: 'Sales & Promotion Strategies', level: 90, icon: 'fa-chart-line' },
    { name: 'Social Media Marketing', level: 85, icon: 'fa-ad' },
    { name: 'Adaptability & Flexibility', level: 90, icon: 'fa-sync-alt' },
    { name: 'Time Management', level: 85, icon: 'fa-clock' },
    { name: 'Team Collaboration', level: 90, icon: 'fa-users' },
    { name: 'Communication', level: 95, icon: 'fa-comments' },
  ];

  const languages = [
    { name: 'English', level: 95, icon: 'fa-language' },
    { name: 'Hindi', level: 85, icon: 'fa-language' },
    { name: 'Kannada', level: 90, icon: 'fa-language' },
  ];

  const renderSkills = (skills) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className="bg-gray-700 p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <div className="flex items-center mb-4">
              <i className={`fas ${skill.icon} text-2xl text-blue-400 mr-3`}></i>
              <h3 className="text-xl font-semibold">{skill.name}</h3>
            </div>
            <div className="w-full bg-gray-600 rounded-full h-2.5 mb-3">
              <div 
                className="bg-gradient-to-r from-blue-400 to-purple-500 h-2.5 rounded-full" 
                style={{ width: `${skill.level}%`, transition: 'width 1.5s ease-in-out' }}
              ></div>
            </div>
            <div className="text-right text-sm text-gray-300">{skill.level}%</div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" data-aos="fade-up">My Skills</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mb-8" data-aos="fade-up" data-aos-delay="200"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="300">
            I've acquired and honed a diverse set of skills throughout my professional journey
          </p>
        </div>

        <div className="flex justify-center mb-10" data-aos="fade-up">
          <div className="inline-flex rounded-md shadow-sm bg-gray-800 p-1">
            <button
              onClick={() => setActiveTab('technical')}
              className={`px-6 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTab === 'technical'
                  ? 'bg-blue-600 text-white'
                  : 'bg-transparent text-gray-300 hover:text-blue-400'
              }`}
            >
              Technical Skills
            </button>
            <button
              onClick={() => setActiveTab('soft')}
              className={`px-6 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTab === 'soft'
                  ? 'bg-blue-600 text-white'
                  : 'bg-transparent text-gray-300 hover:text-blue-400'
              }`}
            >
              Soft Skills
            </button>
            <button
              onClick={() => setActiveTab('languages')}
              className={`px-6 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTab === 'languages'
                  ? 'bg-blue-600 text-white'
                  : 'bg-transparent text-gray-300 hover:text-blue-400'
              }`}
            >
              Languages
            </button>
          </div>
        </div>

        <div className="mt-8">
          {activeTab === 'technical' && renderSkills(technicalSkills)}
          {activeTab === 'soft' && renderSkills(softSkills)}
          {activeTab === 'languages' && renderSkills(languages)}
        </div>
      </div>
    </section>
  );
};

export default Skills;

// src/components/Projects.js
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'ERP Implementation Strategy',
      category: 'Business Development',
      image: '/api/placeholder/600/400',
      description: 'Developed a comprehensive ERP implementation strategy for manufacturing clients that reduced onboarding time by 30% and improved client satisfaction ratings.',
      technologies: ['ODOO ERP', 'Project Management', 'Client Relations'],
      link: '#',
    },
    {
      id: 2,
      title: 'B2B Lead Generation Campaign',
      category: 'Marketing',
      image: '/api/placeholder/600/400',
      description: 'Created and executed a targeted B2B lead generation campaign that resulted in 150+ qualified leads and a 25% conversion rate to sales meetings.',
      technologies: ['Zoho CRM', 'LinkedIn Sales Navigator', 'Email Marketing'],
      link: '#',
    },
    {
      id: 3,
      title: 'Client Relationship Management System',
      category: 'Operations',
      image: '/api/placeholder/600/400',
      description: 'Implemented a streamlined client relationship management system that improved client retention by 20% and increased upselling opportunities.',
      technologies: ['Zoho CRM', 'Data Analysis', 'Customer Journey Mapping'],
      link: '#',
    },
    {
      id: 4,
      title: 'Sales Training Program',
      category: 'Training',
      image: '/api/placeholder/600/400',
      description: 'Developed and led a sales training program focused on ERP solution selling that improved team performance by 35% over six months.',
      technologies: ['Training Development', 'Performance Metrics', 'Coaching'],
      link: '#',
    },
    {
      id: 5,
      title: 'Market Research Analysis',
      category: 'Research',
      image: '/api/placeholder/600/400',
      description: 'Conducted comprehensive market research to identify emerging trends in ERP adoption across industries, informing product development strategy.',
      technologies: ['Data Analysis', 'SPSS', 'Market Segmentation'],
      link: '#',
    },
    {
      id: 6,
      title: 'Financial Reporting Dashboard',
      category: 'Analytics',
      image: '/api/placeholder/600/400',
      description: 'Created interactive financial reporting dashboards that provide real-time insights into sales performance and business development KPIs.',
      technologies: ['Power BI', 'Excel', 'Data Visualization'],
      link: '#',
    },
  ];

  const [filter, setFilter] = useState('all');
  const categories = ['all', ...new Set(projects.map(project => project.category))];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const openProjectModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" data-aos="fade-up">My Projects</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mb-8" data-aos="fade-up" data-aos-delay="200"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="300">
            Explore my portfolio of business development and marketing projects
          </p>
        </div>

        <div className="flex justify-center mb-10 flex-wrap gap-2" data-aos="fade-up">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="bg-gray-700 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              onClick={() => openProjectModal(project)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover transition-transform duration-500 transform hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-70 transition-opacity duration-300 flex items-end">
                  <div className="p-4">
                    <span className="bg-blue-600 text-xs text-white px-2 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 2).map((tech, i) => (
                    <span key={i} className="bg-gray-600 text-xs text-gray-300 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 2 && (
                    <span className="bg-gray-600 text-xs text-gray-300 px-2 py-1 rounded">
                      +{project.technologies.length - 2} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-lg max-w-3xl w-full max-h-90vh overflow-y-auto">
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={closeProjectModal}
                className="absolute top-4 right-4 bg-gray-900 bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75 transition-all"
              >
                <svg className="w-6