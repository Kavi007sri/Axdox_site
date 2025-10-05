import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Listbox } from "@headlessui/react";
import { ChevronsUpDown } from "lucide-react";
import { useState } from "react";

const services = [
  "AI Voice Agent",
  "AI Chatbot",
  "AI Customer Service",
  "Web Development",
  "AI related Products",
];

const Contact = () => {
  const [selectedService, setSelectedService] = useState(services[0]);

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      detail: "support@axdox.in",
      description: "We'll respond within 24 hours",
    },
    {
      icon: Phone,
      title: "Call Us",
      detail: "+91 8667858467",
      description: "",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      detail: "Erode, Tamil Nadu, India",
      description: "",
    },
    {
      icon: Clock,
      title: "Business Hours",
      detail: "24/7 Online Support",
      description: "",
    },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget; // store form reference

    const formData = {
      firstName: (form.elements.namedItem("firstName") as HTMLInputElement).value,
      lastName: (form.elements.namedItem("lastName") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      service: selectedService,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/contact`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(formData),
});


      let data = null;
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
      }

      if (response.ok) {
        alert("Message sent successfully!");
        form.reset(); // reset using stored reference
        setSelectedService(services[0]);
      } else {
        alert("Error: " + (data?.error || response.statusText));
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-20 space-y-6 animate-slide-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
              <span className="text-foreground">Get in </span>
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Ready to transform your business with AI? Let's talk about your needs and how we can help
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm border-border/50 animate-slide-up">
                <h2 className="text-3xl font-bold text-foreground mb-8">Send us a Message</h2>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">First Name</label>
                      <Input
                        name="firstName"
                        placeholder="Shri"
                        className="bg-background/50 border-border/50 focus:border-primary"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Last Name</label>
                      <Input
                        name="lastName"
                        placeholder="Siva"
                        className="bg-background/50 border-border/50 focus:border-primary"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Email</label>
                    <Input
                      name="email"
                      type="email"
                      placeholder="siva@company.com"
                      className="bg-background/50 border-border/50 focus:border-primary"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Phone (Optional)</label>
                    <Input
                      name="phone"
                      type="tel"
                      placeholder="+91 8667858467"
                      className="bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>

                  {/* Custom Dropdown */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Service Interested In</label>
                    <Listbox value={selectedService} onChange={setSelectedService}>
                      <div className="relative">
                        <Listbox.Button className="w-full px-4 py-3 text-left rounded-lg bg-background/50 border border-border/50 text-foreground focus:border-primary focus:outline-none flex justify-between items-center">
                          {selectedService}
                          <ChevronsUpDown className="w-5 h-5 text-primary" />
                        </Listbox.Button>

                        <Listbox.Options className="absolute w-full mt-1 bg-card/90 backdrop-blur-sm rounded-lg border border-border/50 z-10 shadow-lg max-h-60 overflow-auto">
                          {services.map((service, idx) => (
                            <Listbox.Option
                              key={idx}
                              value={service}
                              className={({ active, selected }) =>
                                `cursor-pointer select-none px-4 py-2 ${
                                  active ? "bg-primary/20 text-foreground" : "text-foreground"
                                } ${selected ? "font-semibold" : ""}`
                              }
                            >
                              {service}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </div>
                    </Listbox>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Message</label>
                    <Textarea
                      name="message"
                      placeholder="Tell us about your project and how we can help..."
                      className="bg-background/50 border-border/50 focus:border-primary min-h-[150px]"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-hero hover:opacity-90 transition-all shadow-glow group"
                  >
                    Send Message
                    <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card
                    key={index}
                    className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all hover:shadow-glow animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-lg bg-gradient-to-br from-primary to-accent flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-semibold text-foreground">{info.title}</h3>
                        <p className="text-lg text-primary font-medium">{info.detail}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}

              {/* Quick Response */}
              <Card
                className="p-6 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 border border-primary/20 backdrop-blur-sm animate-slide-up"
                style={{ animationDelay: "0.4s" }}
              >
                <h3 className="font-bold text-foreground mb-2">⚡ Quick Response</h3>
                <p className="text-sm text-muted-foreground">
                  Most inquiries are answered within 2 hours during business hours. For urgent matters, please call us directly.
                </p>
              </Card>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-20 animate-slide-up" style={{ animationDelay: "0.5s" }}>
            <Card className="overflow-hidden border-border/50 rounded-2xl shadow-md">
              <div className="w-full h-[400px] overflow-hidden rounded-2xl">
                <iframe
                  title="Axdox Location - Veerapanchatram, Erode"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.784055086303!2d77.71366187481161!3d11.341749588853134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96f0f7b8ac9b7%3A0x58e07b9d49bbbd8a!2sVeerappanchatram%2C%20Erode%2C%20Tamil%20Nadu%20638012!5e0!3m2!1sen!2sin!4v1728149450000!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
