
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building, Construction, Hospital, Laptop, ArrowRight, CheckCircle } from "lucide-react";

const Industries = () => {
  const industries = [
    {
      icon: Building,
      title: "Public Sector",
      subtitle: "Government & PMO Solutions",
      description: "PMO-aligned with regional government standards for infrastructure and public projects.",
      features: [
        "Government compliance tracking",
        "Multi-stakeholder coordination",
        "Public tender management",
        "Regulatory reporting",
        "Budget transparency tools"
      ],
      caseStudy: "Qatar Urban Development Council achieved 30% faster project delivery using ZenithFlow's PMO dashboard."
    },
    {
      icon: Construction,
      title: "Construction",
      subtitle: "Site Management & BOQ Integration",
      description: "Manage site progress, vendors, BOQs, and drawings with specialized construction workflows.",
      features: [
        "Site progress tracking",
        "BOQ management & costing",
        "Vendor coordination",
        "Drawing version control",
        "Safety compliance monitoring"
      ],
      caseStudy: "Major Dubai contractor reduced cost overruns by 25% with integrated BOQ tracking and real-time budget alerts."
    },
    {
      icon: Laptop,
      title: "Enterprise & IT",
      subtitle: "Agile Development & Operations",
      description: "Agile sprints, Jira import, KPI dashboards tailored for software development and IT operations.",
      features: [
        "Agile sprint management",
        "Jira integration & import",
        "DevOps pipeline tracking",
        "KPI dashboards",
        "Release management"
      ],
      caseStudy: "TechBridge MENA consolidated 4 project tools into ZenithFlow, improving team productivity by 40%."
    },
    {
      icon: Hospital,
      title: "Healthcare & Education",
      subtitle: "Compliance & Resource Management",
      description: "Track renovations, resources, and compliance for healthcare facilities and educational institutions.",
      features: [
        "Facility renovation tracking",
        "Resource allocation",
        "Compliance monitoring",
        "Equipment management",
        "Safety protocols"
      ],
      caseStudy: "Leading healthcare network in Riyadh streamlined facility upgrades across 12 locations with centralized tracking."
    }
  ];

  const benefits = [
    "Industry-specific templates and workflows",
    "Regional compliance and regulatory support",
    "Arabic and English interface",
    "Local customer support",
    "Integration with popular Gulf business tools"
  ];

  return (
    <div className="min-h-screen bg-zenith-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Tailored Solutions</span> for
            <br />
            Every Industry
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            ZenithFlow adapts to your industry's unique needs with specialized workflows,
            compliance features, and Gulf-region expertise.
          </p>
          <Button size="lg" className="button-gradient text-white font-medium">
            Find Your Solution
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {industries.map((industry, index) => (
              <Card key={index} className="card-hover bg-white border-zenith-card/30 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-zenith p-3 rounded-lg mr-4">
                      <industry.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-zenith-primary">
                        {industry.title}
                      </h3>
                      <p className="text-zenith-accent font-medium">
                        {industry.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6">
                    {industry.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-zenith-primary mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {industry.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-zenith-accent mr-2 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-zenith-background/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-zenith-primary mb-2">Success Story:</h4>
                    <p className="text-sm text-gray-600 italic">
                      "{industry.caseStudy}"
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Gulf Organizations <span className="gradient-text">Choose ZenithFlow</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built specifically for the Middle East market with deep understanding of regional business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center bg-zenith-background/30 border-zenith-card/30">
              <CardContent className="p-8">
                <div className="text-3xl font-bold gradient-text mb-2">500+</div>
                <div className="text-gray-600">Projects Delivered</div>
              </CardContent>
            </Card>
            <Card className="text-center bg-zenith-background/30 border-zenith-card/30">
              <CardContent className="p-8">
                <div className="text-3xl font-bold gradient-text mb-2">50+</div>
                <div className="text-gray-600">Gulf Organizations</div>
              </CardContent>
            </Card>
            <Card className="text-center bg-zenith-background/30 border-zenith-card/30">
              <CardContent className="p-8">
                <div className="text-3xl font-bold gradient-text mb-2">99.9%</div>
                <div className="text-gray-600">Platform Uptime</div>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-8 text-zenith-primary">
              Regional Advantages
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-zenith-accent mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-zenith">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Industry?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Schedule a demo tailored to your industry and see ZenithFlow in action.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-zenith-primary hover:bg-gray-100 font-medium">
              Schedule Industry Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zenith-primary">
              Start Free Trial
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Industries;
