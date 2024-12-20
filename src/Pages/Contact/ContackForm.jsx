import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser"; 
import React from 'react';
import { Notification, useToaster } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    Phone: "", 
    message: "",
  });

  const toaster = useToaster();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, Phone, message } = formData;

    if (name && email && message) {
      emailjs
        .send(
          "service_nq106ck", // Service ID
          "template_ob51v5g", // Template ID
          {
            fullName: name,
            email: email, 
            phoneNumber: Phone, 
            message: message, 
          },
          "kh3AaVAzox66vHlIN" // Public key
        )
        .then(() => {
          toaster.push(
            <Notification type="success" header="Success" closable>
              Your message has been sent successfully!
            </Notification>,
            { placement: 'topEnd' }
          );
          setFormData({
            name: "",
            email: "",
            Phone: "",
            message: "",
          });
        })
        .catch(() => {
          toaster.push(
            <Notification type="error" header="Error" closable>
              Failed to send your message. Please try again.
            </Notification>,
            { placement: 'topEnd' }
          );
        });
    } else {
      toaster.push(
        <Notification type="warning" header="Warning" closable>
          Please fill in all required fields.
        </Notification>,
        { placement: 'topEnd' }
      );
    }
  };

  useEffect(() => {
    AOS.init({ duration: 500 });
  });

  return (
    <div
      className="flex-grow flex items-center justify-center mb-9 ml-2 mr-2 mt-10 font-Poppins"
      data-aos="fade-up"
    >
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center sm:p-9 p-6 md:p-10 bg-[#000000] bg-opacity-90 shadow-2xl rounded-lg w-full max-w-lg "
      >
        <h1 className="font-bold text-xl md:text-2xl text-center mb-5 text-white ">
          Quick Contact
        </h1>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="h-12 w-full p-4 mb-4 md:mb-8 rounded border border-gray-300"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="h-12 w-full p-4 mb-4 md:mb-8 rounded border border-gray-300"
        />
        <input
          type="text"
          name="Phone"
          value={formData.Phone}
          onChange={handleChange}
          placeholder="Phone"
          className="h-12 w-full p-4 mb-4 md:mb-8 rounded border border-gray-300"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Type your message here"
          className="h-24 w-full p-4 mb-4 md:mb-5 rounded border border-gray-300"
        />
        <button
          type="submit"
          className="button w-full transition duration-1000 transform hover:scale-x-105 ease-in-out bg-[#03A651] hover:bg-gradient-to-r hover:from-[#144F30] hover:to-[#03A651] text-white py-2 rounded"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
