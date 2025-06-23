
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, MessageCircle, Phone, Clock, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: ""
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your interest. We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", organization: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const offices = [
    {
      city: "Doha",
      country: "Qatar",
      address: "West Bay Business District",
      phone: "+974-XXXX-XXXX",
      email: "doha@zenithflow.io"
    },
    {
      city: "Dubai",
      country: "UAE", 
      address: "Dubai International Financial Centre",
      phone: "+971-XXXX-XXXX",
      email: "dubai@zenithflow.io"
    },
    {
      city: "Riyadh",
      country: "Saudi Arabia",
      address: "King Abdullah Financial District",
      phone: "+966-XXXX-XXXX",
      email: "riyadh@zenithflow.io"
    }
  ];

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help via email",
      contact: "hello@zenithflow.io",
      note: "Response within 24 hours"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Business",
      description: "Quick support via WhatsApp",
      contact: "+974-XXXX-XXXX",
      note: "Available 9 AM - 6 PM GST"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak with our team",
      contact: "Schedule a call",
      note: "Enterprise customers only"
    }
  ];

  return (
    <div className="min-h-screen bg-zenith-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Get in Touch</span> with
            <br />
            Our Team
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Have questions about ZenithFlow? Need a custom solution for your organization?
            We're here to help you succeed.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <Card className="bg-white border-zenith-card/30 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-zenith-primary mb-6">
                  Send us a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-1"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1"
                      placeholder="Enter your email address"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="organization">Organization Name</Label>
                    <Input
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      className="mt-1"
                      placeholder="Enter your organization name"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="mt-1"
                      rows={5}
                      placeholder="Tell us about your project needs or questions..."
                    />
                  </div>
                  
                  <Button type="submit" className="w-full button-gradient text-white font-medium" size="lg">
                    Send Message
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Methods */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-zenith-primary mb-6">
                  Other Ways to Reach Us
                </h2>
                
                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <Card key={index} className="bg-white border-zenith-card/30">
                      <CardContent className="p-6">
                        <div className="flex items-start">
                          <div className="bg-gradient-zenith p-3 rounded-lg mr-4">
                            <method.icon className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-zenith-primary mb-1">
                              {method.title}
                            </h3>
                            <p className="text-gray-600 text-sm mb-2">{method.description}</p>
                            <p className="font-medium text-zenith-accent">{method.contact}</p>
                            <p className="text-xs text-gray-500 mt-1">{method.note}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <Card className="bg-zenith-background/50 border-zenith-card/30">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-zenith-primary mb-4">
                    Quick Actions
                  </h3>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <Clock className="mr-2 h-4 w-4" />
                      Schedule a Demo
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <ArrowRight className="mr-2 h-4 w-4" />
                      Start Free Trial
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="gradient-text">Gulf Offices</span>
            </h2>
            <p className="text-xl text-gray-600">
              Local presence across the Gulf region to better serve your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className="text-center bg-zenith-background/30 border-zenith-card/30 card-hover">
                <CardContent className="p-8">
                  <div className="bg-gradient-zenith p-3 rounded-lg w-fit mx-auto mb-4">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-zenith-primary mb-2">
                    {office.city}, {office.country}
                  </h3>
                  <p className="text-gray-600 mb-4">{office.address}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center text-gray-600">
                      <Phone className="h-4 w-4 mr-2" />
                      {office.phone}
                    </div>
                    <div className="flex items-center justify-center text-gray-600">
                      <Mail className="h-4 w-4 mr-2" />
                      {office.email}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-zenith">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Projects?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Don't wait - start your ZenithFlow journey today with a free trial.
          </p>
          <Button size="lg" className="bg-white text-zenith-primary hover:bg-gray-100 font-medium">
            Start Free Trial Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
