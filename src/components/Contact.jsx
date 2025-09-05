import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  MapPin,
  Send,
  Check,
  AlertCircle,
} from "lucide-react";
import { useDarkMode } from "../DarkModeContext";

const Contact = () => {
  const me = {
    name: "Frank Joseph Jamon",
    email: "joseph.zap@outlook.com",
    phone: "+63 905 251 5351",
    location: "Antipolo City, Philippines",
    linkedin: "",
    github: "",
    discord: "Farhanur#2170",
  }
  const username = me.name
  const useremail = me.email
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const { darkMode } = useDarkMode();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!formData.name.trim()) return "Name is required";
    if (!formData.email.trim()) return "Email is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      return "Please enter a valid email";
    if (!formData.message.trim()) return "Message is required";
    return null;
  };

  // EmailJS Configuration - Replace these with your actual values
  const EMAILJS_CONFIG = {
    SERVICE_ID: 'service_yzt5lgc', // Replace with your EmailJS service ID
    NOTIFICATION_TEMPLATE_ID: 'template_u1ifacb', // Replace with your notification template ID
    THANKYOU_TEMPLATE_ID: 'template_jet4x7h', // Replace with your thank you template ID
    PUBLIC_KEY: 'PYfBDpI-F_HQAgr7y' // Replace with your EmailJS public key
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      setStatus({ type: "error", message: validationError });
      return;
    }

    setIsSending(true);
    setStatus({ type: "", message: "" });

    try {
      // Initialize EmailJS (it's safe to call multiple times)
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

      // Prepare template parameters for notification email (to you)
      const notificationParams = {
        from_name: formData.name,
        from_email: formData.email,
        reply_to: formData.email,
        subject: formData.subject || 'New Contact Form Message',
        message: formData.message,
        to_name: me.name,
        to_email: me.email
      };

      // Prepare template parameters for thank you email (to user)
      const thankYouParams = {
        to_name: formData.name,
        to_email: formData.email,
        reply_to: me.email,
        subject: formData.subject || 'New Contact Form Message',
        from_name: me.name,
        user_email: formData.email // Alternative parameter name
      };

      // Send notification email to you
      console.log('Sending notification email...');
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.NOTIFICATION_TEMPLATE_ID,
        notificationParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      // Send thank you email to user
      console.log('Sending thank you email...');
      // await emailjs.send(
      //   EMAILJS_CONFIG.SERVICE_ID,
      //   EMAILJS_CONFIG.THANKYOU_TEMPLATE_ID,
      //   thankYouParams,
      //   EMAILJS_CONFIG.PUBLIC_KEY
      // );

      setStatus({
        type: "success",
        message: "Message sent successfully! Check your email for confirmation. I'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });

    } catch (error) {
      console.error('EmailJS Error Details:', error);

      let errorMessage = "Sorry, there was an error sending your message. ";

      if (error.text) {
        // EmailJS specific error
        errorMessage += `Error: ${error.text}`;
      } else if (error.status === 400) {
        errorMessage += "Please check your input and try again.";
      } else if (error.status === 401) {
        errorMessage += "Authentication failed. Please contact support.";
      } else if (error.status === 402) {
        errorMessage += "Service temporarily unavailable. Please try again later.";
      } else {
        errorMessage += "Please try again or contact me directly at crackfire217@gmail.com";
      }

      setStatus({
        type: "error",
        message: errorMessage,
      });
    }

    setIsSending(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: me.email,
      href: `mailto:${me.email}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: me.phone,
      href: `tel:${me.phone}`,
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Antipolo City, Philippines",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: me.linkedin,
      color: "hover:text-blue-600",
    },
    {
      icon: Github,
      label: "GitHub",
      href: me.github,
      color: "hover:text-gray-800",
    }
  ];

  return (
    <section id="contact" className="relative">
      <div className={`min-h-screen bg-gradient-to-br py-8 sm:py-12 md:py-16 px-3 sm:px-4 md:px-6 lg:px-8
      ${darkMode
          ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-100"
          : "bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900"
        }`}>
        <div className="max-w-7xl mx-auto">
          {/* Header - Responsive Typography */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 animate-slide-up transition-colors duration-300 leading-tight ${darkMode ? 'text-white' : 'text-[#2C3E50]'
              }`}>
              Contact Me
            </h2>

          </div>

          {/* Main Content Grid - Responsive Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-start">
            {/* Contact Information - Left Column */}
            <div className="space-y-4 sm:space-y-6 md:space-y-8 order-2 lg:order-1">
              <div className={`rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg border
            ${darkMode
                  ? "bg-slate-900 border-slate-800"
                  : "bg-white border-gray-100"
                }`}>
                <h2 className={`text-xl sm:text-2xl font-semibold mb-4 sm:mb-6
              ${darkMode ? "text-gray-100" : "text-gray-900"}`}>
                  Get In Touch
                </h2>

                <div className="space-y-4 sm:space-y-6">
                  {contactInfo.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <div key={index} className="flex items-center space-x-3 sm:space-x-4">
                        <div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center
                      ${darkMode ? "bg-blue-900" : "bg-blue-100"}`}>
                          <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className={`text-xs sm:text-sm font-medium
                        ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                            {item.label}
                          </p>
                          {item.href ? (
                            <a
                              href={item.href}
                              className={`text-sm sm:text-base transition-colors break-all sm:break-normal
                            ${darkMode
                                  ? "text-gray-100 hover:text-blue-400"
                                  : "text-gray-900 hover:text-blue-600"
                                }`}
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className={`text-sm sm:text-base ${darkMode ? "text-gray-100" : "text-gray-900"}`}>
                              {item.value}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Social Links */}
                <div className={`mt-6 sm:mt-8 pt-6 sm:pt-8 border-t
              ${darkMode ? "border-slate-700" : "border-gray-200"}`}>
                  <p className={`text-xs sm:text-sm font-medium mb-3 sm:mb-4
                ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                    Follow Me
                  </p>
                  <div className="flex space-x-3 sm:space-x-4">
                    Let's connect! 🚍
                  </div>
                </div>
              </div>

              {/* Quick Response Promise */}
              <div className={`rounded-xl sm:rounded-2xl p-4 sm:p-6 border
            ${darkMode
                  ? "bg-blue-950 border-blue-900"
                  : "bg-blue-50 border-blue-100"
                }`}>
                <div className="flex items-start space-x-3">
                  <div className={`flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center mt-0.5 sm:mt-1
                ${darkMode ? "bg-blue-900" : "bg-blue-100"}`}>
                    <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className={`text-sm sm:text-base font-semibold mb-1
                  ${darkMode ? "text-blue-200" : "text-blue-900"}`}>
                      Anytime Call Me
                    </h3>
                    <p className={`text-xs sm:text-sm leading-relaxed
                  ${darkMode ? "text-blue-300" : "text-blue-700"}`}>
                      We are all threads in the fabric of connection, woven stronger together.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form - Right Column */}
            <div className={`rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg border order-1 lg:order-2
          ${darkMode
                ? "bg-slate-900 border-slate-800"
                : "bg-white border-gray-100"
              }`}>
              <h2 className={`text-xl sm:text-2xl font-semibold mb-4 sm:mb-6
            ${darkMode ? "text-gray-100" : "text-gray-900"}`}>
                Send a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                {/* Name and Email Row - Responsive Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className={`block text-sm font-medium mb-2
                    ${darkMode ? "text-gray-300" : "text-gray-700"}`}
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base
                    ${darkMode
                          ? "bg-slate-800 border-slate-700 text-gray-100 placeholder-gray-400"
                          : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                        }`}
                      placeholder="Your name..."
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className={`block text-sm font-medium mb-2
                    ${darkMode ? "text-gray-300" : "text-gray-700"}`}
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base
                    ${darkMode
                          ? "bg-slate-800 border-slate-700 text-gray-100 placeholder-gray-400"
                          : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                        }`}
                      placeholder="your.email@gmail.com"
                      required
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className={`block text-sm font-medium mb-2
                  ${darkMode ? "text-gray-300" : "text-gray-700"}`}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base
                  ${darkMode
                        ? "bg-slate-800 border-slate-700 text-gray-100 placeholder-gray-400"
                        : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                      }`}
                    placeholder="Project Inquiry / Collaboration / General Question"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className={`block text-sm font-medium mb-2
                  ${darkMode ? "text-gray-300" : "text-gray-700"}`}
                  >
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none text-sm sm:text-base
                  ${darkMode
                        ? "bg-slate-800 border-slate-700 text-gray-100 placeholder-gray-400"
                        : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                      }`}
                    placeholder="Tell me about your project, timeline, budget, or any questions you have..."
                    required
                  />
                </div>

                {/* Status Message */}
                {status.message && (
                  <div
                    className={`p-3 sm:p-4 rounded-lg flex items-start space-x-3 ${status.type === "success"
                      ? darkMode
                        ? "bg-green-900 border border-green-700"
                        : "bg-green-50 border border-green-200"
                      : darkMode
                        ? "bg-red-900 border border-red-700"
                        : "bg-red-50 border border-red-200"
                      }`}
                  >
                    {status.type === "success" ? (
                      <Check className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5 ${darkMode ? "text-green-400" : "text-green-600"
                        }`} />
                    ) : (
                      <AlertCircle className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5 ${darkMode ? "text-red-400" : "text-red-600"
                        }`} />
                    )}
                    <p
                      className={`text-xs sm:text-sm leading-relaxed ${status.type === "success"
                        ? darkMode ? "text-green-200" : "text-green-800"
                        : darkMode ? "text-red-200" : "text-red-800"
                        }`}
                    >
                      {status.message}
                    </p>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSending}
                  className={`w-full font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-full cursor-pointer transition-all duration-200 flex items-center justify-center space-x-2 transform hover:scale-[1.02] active:scale-[0.98] disabled:scale-100 text-sm sm:text-base
                ${darkMode
                      ? "bg-gradient-to-r from-[#2c3e50] to-[#4ca1af] text-white hover:from-blue-700 hover:to-purple-700"
                      : "bg-gradient-to-r from-[#2c3e50] to-[#4ca1af] text-white hover:from-blue-700 hover:to-purple-700"
                    } disabled:opacity-70 disabled:cursor-not-allowed`}
                >
                  {isSending ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
