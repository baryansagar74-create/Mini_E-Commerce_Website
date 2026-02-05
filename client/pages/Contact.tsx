import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              {/* Phone */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-2">
                    Phone
                  </h3>
                  <a
                    href="tel:+1234567890"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    (123) 456-7890
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-2">
                    Email
                  </h3>
                  <a
                    href="mailto:hello@threadhub.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    hello@threadhub.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-2">
                    Location
                  </h3>
                  <p className="text-muted-foreground">
                    123 College Ave
                    <br />
                    University City, CA 94305
                    <br />
                    United States
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div>
                <h3 className="font-semibold text-foreground text-lg mb-4">
                  Business Hours
                </h3>
                <div className="space-y-2 text-muted-foreground text-sm">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Send us a Message
              </h2>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-green-900 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-green-700">
                    Your message has been sent successfully. We'll get back to
                    you soon!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-colors"
                      placeholder="How can we help?"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-colors resize-none"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full btn-primary justify-center"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="bg-muted rounded-xl overflow-hidden h-96 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-16 h-16 text-primary/40 mx-auto mb-4" />
            <p className="text-muted-foreground">Map Integration Coming Soon</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
