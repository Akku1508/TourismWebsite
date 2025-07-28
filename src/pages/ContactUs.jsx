import React, { useRef } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Accordion } from "../components/Accordion";
import Footer from "../components/Footer";

export const ContactUs = () => {
  const name = useRef("");
  const email = useRef("");
  const phone = useRef("");
  const subject = useRef("");
  const message = useRef("");

  const formData = new FormData();

  const onSubmitHandler = (ev) => {
    ev.preventDefault();
    formData.set("name", name.current.value);
    formData.set("email", email.current.value);
    formData.set("phone", phone.current.value);
    formData.set("subject", subject.current.value);
    formData.set("message", message.current.value);
    console.log(formData);
  };

  return (
    <div className="min-h-screen ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-[50px]">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We'd love to hear from you! Whether you have questions about our tours
            or need travel advice, our team is here to help.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info Column */}
          <div className="space-y-8">
            {/* Contact Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 transform transition-all hover:scale-[1.01]">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="bg-indigo-100 p-2 rounded-lg mr-3">
                  <EmailIcon className="text-indigo-600" />
                </span>
                Contact Information
              </h2>

              <div className="space-y-4">
                <div className="flex items-start">
                  <LocationOnIcon className="text-indigo-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-700">Head Office</h3>
                    <p className="text-gray-600">
                      Namaste Yatri, 456 Travel Plaza, Connaught Place, New Delhi - 110001
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <LocationOnIcon className="text-indigo-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-700">Branch Office</h3>
                    <p className="text-gray-600">
                      Namaste Yatri, 78 Heritage Lane, Fort, Mumbai - 400001
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <PhoneIcon className="text-indigo-600 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-700">Phone</h3>
                    <p className="text-gray-600">+91-987-654-3210 (24x7 Support)</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <EmailIcon className="text-indigo-600 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-700">Email</h3>
                    <p className="text-gray-600">support@namasteyatri.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="bg-indigo-100 p-2 rounded-lg mr-3">
                    <LocationOnIcon className="text-indigo-600" />
                  </span>
                  Our Location
                </h2>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.186813106435!2d77.2065393150824!3d28.63164498242208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b741d057%3A0xcdee88e47393c3f1!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1629808414142!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
                className="w-full h-96 border-t border-gray-200"
              ></iframe>
            </div>
          </div>

          {/* Form Column */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="bg-indigo-100 p-2 rounded-lg mr-3">
                <EmailIcon className="text-indigo-600" />
              </span>
              Send Us a Message
            </h2>

            <form onSubmit={onSubmitHandler} className="space-y-6">
              {/* Full Name - now on its own line */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  ref={name}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
                  required
                  placeholder="Enter your name"
                />
              </div>

              {/* Email - now on its own line */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  ref={email}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
                  required
                  placeholder="Enter your email"
                />
              </div>

              {/* Phone - now on its own line */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  ref={phone}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
                  required
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Subject - now on its own line */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  ref={subject}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
                  required
                  placeholder="What's this about?"
                />
              </div>

              {/* Message - already on its own line */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  ref={message}
                  rows="10"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
                  required
                  placeholder="Type your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-200 transform hover:scale-[1.02]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Additional Info Sections */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Hours Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 ">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="bg-indigo-100 p-2 rounded-lg mr-3">
                <AccessTimeIcon className="text-indigo-600" />
              </span>
              Operating Hours
            </h2>

            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-gray-100">
                <span className="font-medium text-gray-700">Monday - Friday</span>
                <span className="text-gray-600">8:00 AM - 8:00 PM</span>
              </div>

              <div className="flex items-center justify-between py-3 border-b border-gray-100">
                <span className="font-medium text-gray-700">Saturday</span>
                <span className="text-gray-600">9:00 AM - 6:00 PM</span>
              </div>

              <div className="flex items-center justify-between py-3">
                <span className="font-medium text-gray-700">Sunday</span>
                <span className="text-gray-600">10:00 AM - 4:00 PM</span>
              </div>
            </div>
          </div>

          {/* FAQ Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="bg-indigo-100 p-2 rounded-lg mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              <Accordion
                title={"How do I book a tour with Namaste Yatri?"}
                content={
                  "You can book directly through our website, mobile app, or by contacting our customer support. We offer instant confirmation for most bookings."
                }
              />
              <Accordion
                title={"What payment methods do you accept?"}
                content={
                  "We accept all major credit/debit cards, UPI payments (Google Pay, PhonePe, Paytm), net banking, and wallet payments. EMI options are also available."
                }
              />
              <Accordion
                title={"Can I customize my travel package?"}
                content={
                  "Absolutely! Our travel experts can help you customize any package to suit your preferences, budget, and schedule. Contact us for personalized itineraries."
                }
              />
              <Accordion
                title={"What is your cancellation policy?"}
                content={
                  "Cancellation policies vary by package. Generally, cancellations made 30+ days before departure receive full refunds. Please check your specific package details or contact us."
                }
              />
            </div>
          </div>
        </div>

        {/* Social & Helpline */}
        <div className="mt-16 space-y-8">
          {/* Social Media */}
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Connect With Us
            </h2>

            <div className="flex justify-center space-x-6">
              <a
                href="https://www.facebook.com/namasteyatri"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-100 p-3 rounded-full text-indigo-600 hover:bg-indigo-200 transition duration-200"
              >
                <FacebookIcon fontSize="large" />
              </a>

              <a
                href="https://www.twitter.com/namasteyatri"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-100 p-3 rounded-full text-indigo-600 hover:bg-indigo-200 transition duration-200"
              >
                <TwitterIcon fontSize="large" />
              </a>

              <a
                href="https://www.instagram.com/namasteyatri"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-100 p-3 rounded-full text-indigo-600 hover:bg-indigo-200 transition duration-200"
              >
                <InstagramIcon fontSize="large" />
              </a>
            </div>
          </div>

          {/* Helpline */}
          <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-2xl shadow-xl p-6 text-center">
            <div className="max-w-2xl mx-auto flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white mr-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                />
              </svg>

              <div>
                <h3 className="text-xl font-bold text-white">
                  24/7 Customer Support
                </h3>
                <p className="text-indigo-100">
                  For any assistance, call our helpline: +91-987-654-3210
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};