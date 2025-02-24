import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Section from "./Section";
import Button from "./Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // emailjs API for sending direct email
    emailjs
      .sendForm("service_zhvbz63", "template_s8mez1l", form.current, {
        publicKey: "cNsEd8mdBLwRQSw8X",
      })
      .then(
        () => {
          toast.success("Email Sent Successfully!"); // Show toast on success
          e.target.reset(); // Reset the form only after success
        },
        (error) => {
          toast.error("Failed to send email. Please try again."); // Show toast on failure
          console.error("FAILED...", error.text);
        }
      );
  };

  return (
    <Section className="container mx-auto px-4" id="contact">
      <div className="max-w-lg mx-auto bg-n-5 p-6 rounded-lg shadow-md">
        <h2 className="h2 text-center mb-4 text-2xl font-semibold">
          Contact Us
        </h2>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col space-y-4"
        >
          <input
            type="text"
            placeholder="Full Name"
            name="user_name"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            name="user_email"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Subject"
            name="subject"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
          />
          <textarea
            name="message"
            placeholder="Message"
            cols="30"
            rows="5"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
          />
          <Button type="submit" className="w-full sm:w-auto">
            Send Message
          </Button>
        </form>
      </div>
      {/* ToastContainer for showing notifications */}
      <ToastContainer position="top-right" autoClose={3000} />
    </Section>
  );
};

export default Contact;
