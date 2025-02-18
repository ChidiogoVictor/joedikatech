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
      .sendForm("service_s2jq0p8", "template_s8mez1l", form.current, {
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
    <Section className="container" id="contact">
      <div className="relative">
        <h2 className="h2 text-center mb-4">Contact Us</h2>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="--form-control --card flex flex-col items-center justify-center"
        >
          <input
            type="text"
            placeholder="Full Name"
            name="user_name"
            required
          />
          <input type="email" placeholder="Email" name="user_email" required />
          <input type="text" placeholder="Subject" name="subject" required />
          <textarea
            name="message"
            placeholder="Message"
            cols="22"
            rows="10"
            required
            className="p-2"
          />
          <Button type="submit">{"Send Message"}</Button>
        </form>
      </div>
      {/* ToastContainer for showing notifications */}
      <ToastContainer position="top-right" autoClose={3000} />
    </Section>
  );
};

export default Contact;
