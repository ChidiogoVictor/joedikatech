import { useRef } from "react";
import Section from "./Section";
import Button from "./Button";

const Contact = () => {
  const form = useRef();

  const sendEmail = () => {};
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
    </Section>
  );
};

export default Contact;
