import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Linkedin, Github, Instagram } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // PLEASE FILL THESE WITH YOUR EMAILJS CREDENTIALS
  const SERVICE_ID = "service_oukkshn";
  const TEMPLATE_ID = "template_9m5wcob";
  const PUBLIC_KEY = "PYe_NChR9clgf4dDP";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    setIsSubmitting(true);

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(
        () => {
          toast.success("Thanks for your message! I'll get back to you soon.");
          setIsSuccess(true);
          formRef.current?.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          toast.error("Oops! There was a problem submitting your form.");
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-16 md:py-24 border-t border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16">

          {/* LEFT SIDE */}
          <div className="md:w-1/3">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              LET'S CONNECT
            </h2>

            <p className="text-sm text-muted-foreground mb-1">
              Say hello at{" "}
              <a
                href="mailto:avinasshvelmurugan@gmail.com"
                className="text-foreground underline"
              >
                avinasshvelmurugan@gmail.com
              </a>
            </p>

            <p className="text-sm text-muted-foreground mb-1">
              Or call me at{" "}
              <a
                href="tel:+918778316453"
                className="text-foreground underline"
              >
                +91 8778316453
              </a>
            </p>

            <p className="text-sm text-muted-foreground mb-6">
              For more info, here's my{" "}
              <a
                href="/avinash_resume.pdf"
                download
                className="text-foreground underline"
              >
                resume
              </a>
            </p>

            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/avinassh31"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="https://github.com/Avinash-023"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20} />
              </a>


            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="md:w-2/3">
            {isSuccess ? (
              <div className="bg-secondary p-8 rounded-2xl border border-border text-center">
                <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
                <p className="text-muted-foreground">
                  Thanks for reaching out. I'll get back to you as soon as possible.
                </p>

                <button
                  onClick={() => setIsSuccess(false)}
                  className="mt-6 text-sm underline hover:text-primary transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">

                {/* NAME */}
                <div>
                  <label className="block text-sm mb-2 text-muted-foreground">Name *</label>
                  <input
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                    required
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label className="block text-sm mb-2 text-muted-foreground">Email *</label>
                  <input
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                    required
                  />
                </div>

                {/* SUBJECT */}
                <div>
                  <label className="block text-sm mb-2 text-muted-foreground">Subject</label>
                  <input
                    name="subject"
                    type="text"
                    placeholder="Project inquiry"
                    className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                  />
                </div>

                {/* MESSAGE */}
                <div>
                  <label className="block text-sm mb-2 text-muted-foreground">Message *</label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-primary text-primary-foreground px-8 py-3 rounded-full text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "SENDING..." : "SUBMIT"}
                </button>

              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
