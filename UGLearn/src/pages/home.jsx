import React from "react";
import "../styles/home.css";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";

// Feature Component
const Feature = ({ title, description, imgSrc, direction }) => {
  return (
    <>
      <div className={`feature-item ${direction}`}>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="feature-about"
        >
          <div className="feature-title gold arima">{title}</div>
          <div className="feature-desc">{description}</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="feature-visual"
        >
          <div className="feature-img">
            <img src={imgSrc} alt="Feature Image" className="feat-image" />
          </div>
        </motion.div>
      </div>
    </>
  );
};

// Home Page Component
const Home = () => {
  // Testimonials Data
  const testimonials = [
    "I'm thoroughly impressed by the platform's innovative approach. This thoughtful design promises to make learning more efficient, user-friendly and engaging, eliminating the need to switch between multiple tabs. The potential to streamline the learning process is vast. No doubt that this platform will have a profound impact on the future of learning.",
    "The integration of AI -generated teaching paths and AI-driven doubt-solving kits is particularly exciting, as it offers personalized support for students and teachers. The emphasis on integrity and security is also crucial, especially in today's digital landscape.",
    "This is one of the best learning platforms that I came across in long time.It's interface is super easy and effective to use.It's a stop for everyone wanting to learn,practice,asess themselves and many more user-friendly features are available in this all-in-one platform.I highly recommended everyone to give a try to this wonderful platform and get the best for you.Thankyou!.",
    "Your project sounds like a game-changer for educational technology, offering a comprehensive, integrated solution that addresses many of the current challenges in online learning. The emphasis on security, AI-driven features, and preventing academic dishonesty is impressive. I look forward to seeing the UI and experiencing the platform in action.",
    "I've been searching for software like this for ages! This all-in-one solution is a game-changer for me. I no longer need to scour multiple sites, as everything I need is conveniently in one place. The platform expertly organizes various materials and leverages superficial AI technologies to provide swift solutions and study materials, along with numerous other features.",
    "Team Code It's innovative platform is a game-changer for education! Its comprehensive features, AI-driven tools, and secure environment make learning engaging, efficient, and effective. The assignment-based approach ensures students stay on track, while the integrated analytics and live classes provide a seamless experience.",
    "Your project appears to be a game-changer in education, merging essential tools like live classes, exams, and student analytics into one platform. The emphasis on academic integrity and a streamlined, user-friendly experience makes it a compelling alternative to existing systems. I'm eager to see its impact!",
    "Your new platform sounds amazing! It's great that you're putting everything in one place, making it easy for students to access what they need. The use of AI to help teachers and students is also a fantastic feature. I like that it keeps students on track with assignments and timelines, promoting consistent progress.",
    "Prioritizing security and fairness is really important, especially after the challenges faced during the pandemic. I'm excited to see the user interface and give more feedback.",
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        {/* <video autoPlay muted className="video-bg">
          <source src="/assets/background.mp4" type="video/mp4" />
        </video> */}
        <div className="hero-bg"></div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="hero-head"
        >
          Unlock the Power of Learning with
          <span className="gold arima">UGLearn</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scaleX: 0.9 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="hero-subhead"
        >
          UGLearn is a comprehensive educational platform designed to empower
          educators with advanced tools and insights.
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="hero-cta"
        >
          <Link to="/signin" className="animated-btn">
            Get Started <FaArrowRightLong />
          </Link>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="features-head">
          <span className="gold arima">Discover</span> UGLearn Capabilities
          <p className="features-subhead">
            Explore the Tools That Make Learning Smarter and Teaching Simpler
          </p>
        </div>

        <div className="feature-container">
          <Feature
            title="Real-time Analytics"
            description="Discover the power of real-time analytics with our advanced dashboard feature. Whether you're tracking individual student progress or analyzing class-wide trends, our dashboard provides you with up-to-the-minute data."
            imgSrc="/assets/analytics.png"
            direction="same"
          />
          <Feature
            title="AI Chatbot"
            description="Meet your new learning assistant, available 24/7. Our real-time AI chatbot is designed to provide immediate help and guidance, making your learning experience smoother and more engaging."
            imgSrc="/assets/chatbot.jpg"
            direction="reverse"
          />
          <Feature
            title="Upload Functionality"
            description="Our chatbot goes beyond just answering questions—it allows you to upload files, photos, and books, making it a versatile tool for all your learning needs. Easily upload documents, photos, or books and ask the AI questions about the content."
            imgSrc="/assets/cloud.jpg"
            direction="same"
          />
          <Feature
            title="User-friendly Platform"
            description="Experience a platform designed with you in mind. Our site is crafted to be user-friendly and highly interactive, ensuring that both teachers and students can navigate with ease and engage fully in their educational journey."
            imgSrc="/assets/ui.jpeg"
            direction="reverse"
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="testimonial-intro">
          <div className="testimonial-caption">TESTIMONIALS</div>
          <div className="testimonial-title">
            Don't just take <span className="gold arima">our word</span> for it!
          </div>
          <div className="testimonial-subtitle">
            See what the community has to say about UGLearn
          </div>
        </div>
        <div className="scroll-wrapper">
          <div className="testimonial-container">
            <div className="carousel-primary">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-card">
                  <p>{testimonial}</p>
                </div>
              ))}
            </div>
            <div className="carousel-secondary">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-card">
                  <p>{testimonial}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
