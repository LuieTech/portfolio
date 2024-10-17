import React from "react";
import { useForm, ValidationError } from '@formspree/react';

function ContactMe() {
  const [state, handleSubmit] = useForm("manyypyp"); // 'manyypyp' is your form ID from Formspree
  
  if (state.succeeded) {
    return <p className="flex justify-center p-[20%] text-indigo-500 text-lg">Thanks for your message!</p>;
  }

  return (
    <section
      id="contact-me"
      className="flex flex-col max-w-full items-center px-4  py-[8vh] sm:pt-[10vh] sm:pb-[12vh] bg-white"
    >
      <div className="text-center mb-8 px-16">
        <p className="text-indigo-600 text-lg font-medium">Get In Touch</p>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Me</h2>
        <p className="text-gray-700 text-base">
          Feel free to get in touch with me for any questions, <br /> I’ll make
          sure to get back to you as soon as possible.
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-gray-50 p-8 shadow-md rounded-lg"
      >
        {/* First Name */}
        <div className="mb-4">
          <label
            htmlFor="first-name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            First Name
          </label>
          <input
            type="text"
            id="first-name"
            name="firstName"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="First Name"
            required
          />
        </div>

        {/* Last Name */}
        <div className="mb-4">
          <label
            htmlFor="last-name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Last Name
          </label>
          <input
            type="text"
            id="last-name"
            name="lastName"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Last Name"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Email"
            required
          />
          <ValidationError field="email" prefix="Email" errors={state.errors} />
        </div>

        {/* Phone Number */}
        <div className="mb-4">
          <label
            htmlFor="phone-number"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone-number"
            name="phoneNumber"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Phone Number"
            required
          />
        </div>

        {/* Message */}
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Type your message..."
            required
          />
          <ValidationError field="message" prefix="Message" errors={state.errors} />
        </div>

        <div>
          <button
            type="submit"
            disabled={state.submitting}
            className="w-full bg-indigo-600 text-white p-2 rounded hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {state.submitting ? "Sending..." : "Send"}
          </button>
        </div>
      </form>
    </section>
  );
}

export default ContactMe;
