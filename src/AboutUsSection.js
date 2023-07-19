import React, { useState } from 'react';
import Modal from 'react-modal';
import about_us from './images/about_us.jpg';
import './AboutUsSection.css';

const AboutUsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [showPaymentInfo, setShowPaymentInfo] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission and card information here

    // Update the modal content
    setModalContent(
      <>
        <p>Thank you for subscribing! 🎉</p>
        <p>By subscribing to our plan, you will receive a monthly personalized workout plan based on your information. Please complete the form below:</p>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="age">Age:</label>
          <input type="number" id="age" name="age" required />

          <label htmlFor="weight">Weight (in kg):</label>
          <input type="number" id="weight" name="weight" required />

          <label htmlFor="height">Height (in cm):</label>
          <input type="number" id="height" name="height" required />

          <button type="submit">Submit</button>
        </form>
      </>
    );
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setShowPaymentInfo(true);
  };

  return (
    <section id="about-us" className="about-us-section">
      <div className="about-us-content">
        <div className="about-us-image">
          <img src={about_us} alt="About Us" />
        </div>
        <div className="about-us-text">
          <h2>Subscribe and Get Personalized Workout Plans</h2>
          <p>
            By subscribing to our plan, you will receive a monthly personalized workout plan tailored to your specific needs and goals. We take into account your age, weight, height, and other relevant information to create a workout plan that suits you best.
          </p>
          <p>
            Start your fitness journey with us and experience the benefits of having an updated workout plan each month based on your progress and results. We are committed to helping you achieve your fitness goals and providing you with the guidance you need.
          </p>
          <button className="subscription-button" onClick={toggleModal}>
            Only 9.99$/month
          </button>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleModalClose}
        contentLabel="Subscription Modal"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <h3>Subscribe to Get Personalized Workout Plans</h3>
        {modalContent ? (
          modalContent
        ) : (
          <form onSubmit={handleSubmit}>
            <label htmlFor="cardNumber">Card Number:</label>
            <input type="text" id="cardNumber" name="cardNumber" required />

            <label htmlFor="expirationDate">Expiration Date:</label>
            <input type="text" id="expirationDate" name="expirationDate" required />

            <label htmlFor="cvv">CVV:</label>
            <input type="text" id="cvv" name="cvv" required />

            <button type="submit">Subscribe</button>
          </form>
        )}
      </Modal>
      {showPaymentInfo && (
        <div className="payment-info">
          {/* Display payment information */}
        </div>
      )}
    </section>
  );
};

export default AboutUsSection;