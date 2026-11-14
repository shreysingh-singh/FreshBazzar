import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Headphones,
  Leaf,
  ArrowRight,
  ChevronDown,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const contactDetails = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Have a question? Send us an email.",
      value: "Your support email",
      color: "bg-green-50 text-[#399b25]",
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak with our support team.",
      value: "Your contact number",
      color: "bg-orange-50 text-orange-500",
    },
    {
      icon: Clock,
      title: "Working Hours",
      description: "We're here when you need us.",
      value: "Add your business hours",
      color: "bg-blue-50 text-blue-600",
    },
  ];

  const faqs = [
    {
      question: "How can I track my grocery order?",
      answer:
        "Visit the My Orders section of your account to view your order details and delivery status.",
    },
    {
      question: "Can I cancel an order after placing it?",
      answer:
        "Cancellation depends on the current order status. Contact our support team for assistance.",
    },
    {
      question: "What should I do if I receive a damaged product?",
      answer:
        "Please contact our support team with your order details and a description of the issue.",
    },
    {
      question: "How can I get help with a payment?",
      answer:
        "Share your order ID and payment details with our support team so they can assist you.",
    },
  ];

  const [openFaq, setOpenFaq] = useState(0);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.subject.trim() ||
      !formData.message.trim()
    ) {
      toast.error("Please fill in all required fields.");
      return;
    }

    // Backend integration will go here.
    console.log("Contact form data:", formData);

    toast.success("Your message is ready to be submitted!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const inputStyle =
    "w-full rounded-xl border border-[#e7ebe3] bg-[#fafbf9] px-4 py-3.5 text-sm text-[#30362d] outline-none transition duration-300 placeholder:text-[#a2a89d] focus:border-[#399b25] focus:bg-white focus:ring-4 focus:ring-[#399b25]/10";

  return (
    <main className="overflow-hidden bg-white">
      {/* HERO SECTION */}
      <section className="relative bg-[#f5f8f1] px-4 py-16 sm:px-8 sm:py-20 lg:px-16">
        <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[#399b25]/5" />
        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-[#399b25]/5" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[2px] text-[#399b25] shadow-sm">
                <MessageCircle size={15} />
                Get In Touch
              </div>

              <h1 className="max-w-xl text-4xl font-bold leading-[1.2] tracking-tight text-[#252a22] sm:text-5xl lg:text-[58px]">
                We'd Love to
                <span className="text-[#399b25]"> Hear From You.</span>
              </h1>

              <p className="mt-6 max-w-lg text-sm leading-8 text-[#777d72] sm:text-base">
                Have a question, suggestion, or need help with your order? We're
                always happy to hear from you. Reach out to us and let's make
                your FreshBazzar experience even better.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <div className="flex -space-x-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#f5f8f1] bg-[#dff0d7] text-[#399b25]">
                    <Leaf size={17} />
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#f5f8f1] bg-[#fff0d9] text-orange-500">
                    <HeartIcon />
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#f5f8f1] bg-[#e5efff] text-blue-500">
                    <Headphones size={17} />
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#30362d]">
                    We're here to help
                  </p>
                  <p className="mt-0.5 text-xs text-[#858b80]">
                    Your feedback matters to us.
                  </p>
                </div>
              </div>
            </div>

            {/* HERO IMAGE */}
            <div className="relative mx-auto w-full max-w-[540px]">
              <div className="absolute -right-5 -top-5 h-28 w-28 rounded-3xl bg-[#399b25]/10" />

              <div className="relative overflow-hidden rounded-[28px] shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=1100&auto=format&fit=crop&q=85"
                  alt="Fresh fruits and vegetables"
                  className="h-[330px] w-full object-cover sm:h-[420px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-xl font-bold text-white sm:text-2xl">
                    Freshness begins with a conversation.
                  </p>
                  <p className="mt-2 text-sm text-white/85">
                    We're always listening.
                  </p>
                </div>
              </div>

              <div className="absolute -bottom-5 -left-4 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-xl sm:-left-8">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#edf6e9] text-[#399b25]">
                  <CheckCircle2 size={23} />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#30362d]">
                    Customer First
                  </p>
                  <p className="mt-1 text-xs text-[#858b80]">
                    Your satisfaction matters
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT DETAILS */}
      <section className="px-4 pt-16 sm:px-8 sm:pt-20 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[3px] text-[#399b25]">
              Contact Information
            </p>

            <h2 className="mt-4 text-3xl font-bold text-[#252a22] sm:text-4xl">
              Let's Connect
            </h2>

            <p className="mt-4 text-sm text-[#858b80] sm:text-base">
              Choose the way that works best for you.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {contactDetails.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group rounded-2xl border border-[#edf0e9] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#d8e9d0] hover:shadow-lg sm:p-7"
                >
                  <div
                    className={`mb-5 flex h-13 w-13 items-center justify-center rounded-2xl ${item.color} transition duration-300 group-hover:scale-110`}
                  >
                    <Icon size={23} />
                  </div>

                  <h3 className="text-lg font-bold text-[#30362d]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm text-[#858b80]">
                    {item.description}
                  </p>

                  <p className="mt-5 text-sm font-semibold text-[#399b25]">
                    {item.value}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="px-4 py-16 sm:px-8 sm:py-20 lg:px-16">
        <div className="mx-auto grid max-w-7xl items-stretch gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-between rounded-[26px] bg-[#399b25] p-7 text-white sm:p-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[3px] text-white/75">
                Get In Touch
              </p>

              <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">
                Let's make your grocery experience better.
              </h2>

              <p className="mt-5 text-sm leading-8 text-white/80">
                Whether it's a question about products, an order, or simply
                sharing feedback, we'd love to hear from you.
              </p>

              <div className="mt-10 space-y-7">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">Email Support</p>
                    <p className="mt-1 text-sm text-white/75">
                      Contact us using your support email.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">Phone Support</p>
                    <p className="mt-1 text-sm text-white/75">
                      Add your customer support number here.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">Our Location</p>
                    <p className="mt-1 text-sm text-white/75">
                      Add your business location here.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 border-t border-white/20 pt-6">
              <p className="text-sm font-medium text-white/90">
                FreshBazzar — Fresh choices, happier living.
              </p>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="rounded-[26px] border border-[#edf0e9] bg-white p-6 shadow-sm sm:p-10">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#252a22] sm:text-3xl">
                Send Us a Message
              </h2>

              <p className="mt-3 text-sm leading-7 text-[#858b80]">
                Fill out the form below and tell us how we can help.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#454b40]">
                    Full Name <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className={inputStyle}
                    required
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#454b40]">
                    Email Address <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={inputStyle}
                    required
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#454b40]">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className={inputStyle}
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#454b40]">
                    Subject <span className="text-red-500">*</span>
                  </label>

                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={inputStyle}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="Order Related">Order Related</option>
                    <option value="Product Inquiry">Product Inquiry</option>
                    <option value="Payment Issue">Payment Issue</option>
                    <option value="Delivery Issue">Delivery Issue</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#454b40]">
                  Your Message <span className="text-red-500">*</span>
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help you..."
                  rows={6}
                  className={`${inputStyle} resize-none`}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#399b25] px-6 py-4 text-sm font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-[#318820] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Message"}
                <Send size={17} />
              </button>

              <p className="text-center text-xs text-[#9ba195]">
                Your information will be used to respond to your inquiry.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="bg-[#f7f9f5] px-4 py-16 sm:px-8 sm:py-20 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[3px] text-[#399b25]">
              Frequently Asked Questions
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-[#252a22] sm:text-4xl">
              Got Questions?
              <span className="text-[#399b25]"> We've Got Answers.</span>
            </h2>

            <p className="mt-5 max-w-md text-sm leading-8 text-[#858b80]">
              Find answers to common questions about your orders, products,
              payments, and shopping experience.
            </p>

            <Link
              to="/orders"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#399b25] transition hover:text-[#28791b]"
            >
              View My Orders
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={index}
                  className="overflow-hidden rounded-2xl border border-[#e9ede5] bg-white transition"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left"
                  >
                    <span className="text-sm font-semibold text-[#30362d] sm:text-base">
                      {faq.question}
                    </span>

                    <ChevronDown
                      size={19}
                      className={`shrink-0 text-[#399b25] transition duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5">
                      <p className="border-t border-[#edf0e9] pt-4 text-sm leading-7 text-[#858b80]">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-4 py-16 sm:px-8 sm:py-20 lg:px-16">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-[#edf6e9] px-6 py-12 text-center sm:px-12 sm:py-16">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#399b25] shadow-sm">
            <Leaf size={28} />
          </div>

          <h2 className="mt-6 text-3xl font-bold text-[#252a22] sm:text-4xl">
            Ready for a Fresher Shopping Experience?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#858b80] sm:text-base">
            Explore our collection of fresh fruits, vegetables, and everyday
            essentials.
          </p>

          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-3 rounded-xl bg-[#399b25] px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#318820] hover:shadow-lg"
          >
            Explore FreshBazzar
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}

function HeartIcon() {
  return <MessageCircle size={17} />;
}

export default Contact;
