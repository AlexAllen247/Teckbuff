import React from "react";
import { Button } from "react-bootstrap";

const LandingPage = () => {
  return (
    <section className="landing-page">
      <h1>Transform Your Body and Your Tech Skills with TeckBuff</h1>
      <p>
        Welcome to TeckBuff, your one-stop-shop for health and fitness content,
        as well as tech tutorials and resources. As a Master Trainer with over
        15 years of experience in the fitness industry and a background in
        full-stack web development, I'm excited to share my knowledge and
        expertise with you.
      </p>
      <section className="testimonials">
        <h2>What Our Customers Are Saying</h2>
        {/* Add your testimonials here */}
      </section>
      <section className="free-content">
        <h2>Get Started with a Free Course</h2>
        {/* Add your free course content here */}
        <Button
          aria-label="Sign up now"
          type="submit"
          variant="primary"
          className="btn-custom"
        >
          Sign up now
        </Button>
      </section>
      <section className="paid-content">
        <h2>
          Take Your Skills to the Next Level with Our Paid Courses and E-Books
        </h2>
        {/* Add your paid course and e-book content here */}
        <Button
          aria-label="View Courses"
          type="submit"
          variant="primary"
          className="btn-custom"
        >
          View Courses
        </Button>
      </section>
      <section className="video-content">
        <h2>Check Out Our Video Content</h2>
        {/* Add your video content here */}
        <Button
          aria-label="watch Now"
          type="submit"
          variant="primary"
          className="btn-custom"
        >
          Watch Now
        </Button>
      </section>
      <section className="opt-in-form">
        <h2>Stay Up-to-Date with Our Latest Content</h2>
        <form>
          <input type="email" placeholder="Enter your email address" />
          <Button
            aria-label="Subscribe"
            type="submit"
            variant="primary"
            className="btn-custom"
          >
            Subscribe
          </Button>
        </form>
      </section>
      <section className="call-to-action">
        <h2>Ready to Get Started?</h2>
        <Button
          aria-label="Sign Up Now"
          type="submit"
          variant="primary"
          className="btn-custom"
        >
          Sign Up Now
        </Button>
      </section>
    </section>
  );
};

export default LandingPage;
