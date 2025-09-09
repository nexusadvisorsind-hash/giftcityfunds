import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Calendar,
  Users,
  Send
} from "lucide-react";
import businessDiscussionImage from "/lovable-uploads/13dd1c05-85f5-44db-8e96-ba7926f34d41.png";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    whatsapp: "",
    location: "",
    country: "",
    investorType: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email) {
      toast({
        title: "Required fields missing",
        description: "Please fill in your name and email address.",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
      variant: "default"
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      whatsapp: "",
      location: "",
      country: "",
      investorType: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section 
        className="relative h-96 flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${businessDiscussionImage})` }}
      >
        <div className="absolute inset-0 bg-primary/70"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Users className="h-16 w-16 text-primary-foreground mx-auto mb-6" />
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-4">
            Contact Us
          </h1>
          <p className="font-body text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Get in touch with our investment advisory team for personalized guidance
          </p>
        </div>
      </section>

      {/* Contact Form and Details */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl text-primary">Send Us a Message</CardTitle>
                  <CardDescription className="font-body">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="font-body font-medium">
                          Name *
                        </Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="font-body font-medium">
                          Email *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="font-body font-medium">
                          Phone
                        </Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="whatsapp" className="font-body font-medium">
                          WhatsApp
                        </Label>
                        <Input
                          id="whatsapp"
                          value={formData.whatsapp}
                          onChange={(e) => handleInputChange("whatsapp", e.target.value)}
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="location" className="font-body font-medium">
                          Location
                        </Label>
                        <Input
                          id="location"
                          value={formData.location}
                          onChange={(e) => handleInputChange("location", e.target.value)}
                          placeholder="City, State"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="country" className="font-body font-medium">
                          Country
                        </Label>
                        <Input
                          id="country"
                          value={formData.country}
                          onChange={(e) => handleInputChange("country", e.target.value)}
                          placeholder="Your country"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="investorType" className="font-body font-medium">
                        Investor Type
                      </Label>
                      <Select onValueChange={(value) => handleInputChange("investorType", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select investor type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="nri">NRI (Non-Resident Indian)</SelectItem>
                          <SelectItem value="foreign">Foreign Individual</SelectItem>
                          <SelectItem value="institutional">Institutional Investor</SelectItem>
                          <SelectItem value="corporate">Corporate</SelectItem>
                          <SelectItem value="family-office">Family Office</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="font-body font-medium">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Tell us about your investment objectives and any specific questions you have..."
                        rows={5}
                      />
                    </div>

                    <Button type="submit" variant="hero" size="lg" className="w-full">
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Contact Details */}
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="font-heading text-xl text-primary">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-secondary" />
                    <div>
                      <p className="font-body font-medium text-primary">Phone</p>
                      <p className="font-body text-foreground-muted">+91 9537533533</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-secondary" />
                    <div>
                      <p className="font-body font-medium text-primary">Email</p>
                      <p className="font-body text-foreground-muted">info@giftcityfunds.in</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-secondary" />
                    <div>
                      <p className="font-body font-medium text-primary">Address</p>
                      <p className="font-body text-foreground-muted">Nexus Advisors, Ahmedabad, Gujarat</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-secondary" />
                    <div>
                      <p className="font-body font-medium text-primary">Business Hours</p>
                      <p className="font-body text-foreground-muted">Mon - Fri: 9:00 AM - 6:00 PM IST</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Schedule Appointment */}
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="font-heading text-xl text-primary">Schedule a Meeting</CardTitle>
                  <CardDescription className="font-body">
                    Book a personalized consultation with our advisory team
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="secondary" size="lg" className="w-full">
                    <Calendar className="mr-2 h-5 w-5" />
                    Schedule Appointment
                  </Button>
                  <p className="font-body text-sm text-foreground-muted mt-3 text-center">
                    Available for video calls and in-person meetings at GIFT City
                  </p>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="font-heading text-xl text-primary">Our Location</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="w-full h-48 bg-surface rounded-lg flex items-center justify-center border-2 border-dashed border-border">
                    <div className="text-center">
                      <MapPin className="h-8 w-8 text-foreground-muted mx-auto mb-2" />
                      <p className="font-body text-foreground-muted">Google Maps</p>
                      <p className="font-body text-sm text-foreground-subtle">GIFT City, Gujarat</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;