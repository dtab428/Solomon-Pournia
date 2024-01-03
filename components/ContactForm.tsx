import React, { useState, ChangeEvent, FormEvent } from "react";
import { Input, Textarea, Button } from "@nextui-org/react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Send form data to your API route or server
    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      // Handle success
      console.log("Email sent successfully");
    } else {
      // Handle error
      console.error("Failed to send email");
    }
  };

  return (
    <div className="container mx-auto px-4">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
        <Input
          fullWidth
          size="lg"
          placeholder="Your Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          variant="faded"
        />
        <Input
          fullWidth
          size="lg"
          type="email"
          placeholder="Your Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          variant="faded"
        />
        <Textarea
          fullWidth
          size="lg"
          placeholder="Your Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          variant="faded"
        />
        <Button
          type="submit"
          color="primary"
          className="justify-self-end text-2xl p-6"
        >
          Send
        </Button>
      </form>
    </div>
  );
}
