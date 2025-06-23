
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, X, Star, ArrowRight } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$9",
      period: "per user/month",
      description: "Perfect for small teams getting started",
      users: "1-10 users",
      popular: false,
      features: [
        "Core project management features",
        "1 custom workflow template",
        "Basic AI assistance",
        "Email support",
        "5GB storage",
        "Basic reporting"
      ],
      notIncluded: [
        "BOQ integration",
        "Advanced analytics",
        "Priority support",
        "Custom integrations"
      ]
    },
    {
      name: "Growth",
      price: "$29",
      period: "per user/month",
      description: "For growing teams that need more power",
      users: "10-50 users",
      popular: true,
      features: [
        "Everything in Starter",
        "BOQ integration & tracking",
        "Advanced document management",
        "Slack/Teams integrations",
        "Time tracking & reporting",
        "Advanced AI insights",
        "Priority email support",
        "50GB storage",
        "Custom workflows (unlimited)"
      ],
      notIncluded: [
        "PMO dashboards",
        "SSO integration",
        "Dedicated support"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "For large organizations with complex needs",
      users: "50+ users",
      popular: false,
      features: [
        "Everything in Growth",
        "PMO dashboards & analytics",
        "SSO integration",
        "Custom support & training",
        "API access",
        "Advanced security features",
        "Dedicated account manager",
        "Unlimited storage",
        "White-label options",
        "Custom integrations"
      ],
      notIncluded: []
    }
  ];

  const faqs = [
    {
      question: "Can I switch plans at any time?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and billing is prorated."
    },
    {
      question: "Is there a free trial?",
      answer: "Yes, we offer a 14-day free trial for all plans. No credit card required to start."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, bank transfers, and can accommodate local payment methods in the Gulf region."
    },
    {
      question: "Do you offer discounts for annual billing?",
      answer: "Yes, we offer 20% discount when you pay annually. Enterprise plans can be customized for multi-year agreements."
    }
  ];

  return (
    <div className="min-h-screen bg-zenith-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Simple Pricing</span> for
            <br />
            Every Team Size
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Start free and scale as you grow. All plans include our core features
            with increasing power and support as your needs expand.
          </p>
          <div className="inline-flex items-center px-4 py-2 bg-zenith-accent/10 rounded-full">
            <Star className="h-4 w-4 text-zenith-accent mr-2" />
            <span className="text-sm font-medium text-zenith-primary">
              14-day free trial • No credit card required
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative card-hover bg-white border-zenith-card/30 shadow-lg ${
                  plan.popular ? 'ring-2 ring-zenith-accent scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-zenith-accent text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <CardHeader className="text-center p-8">
                  <h3 className="text-2xl font-bold text-zenith-primary mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold gradient-text">
                      {plan.price}
                    </span>
                    {plan.price !== "Custom" && (
                      <span className="text-gray-600 ml-1">/{plan.period}</span>
                    )}
                  </div>
                  <p className="text-gray-600 mb-2">{plan.description}</p>
                  <p className="text-sm text-zenith-accent font-medium">
                    {plan.users}
                  </p>
                </CardHeader>

                <CardContent className="p-8 pt-0">
                  <Button 
                    className={`w-full mb-8 ${
                      plan.popular 
                        ? 'button-gradient text-white' 
                        : 'bg-zenith-background text-zenith-primary hover:bg-zenith-primary hover:text-white'
                    }`}
                    size="lg"
                  >
                    {plan.price === "Custom" ? "Contact Sales" : "Start Free Trial"}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-zenith-primary mb-3">Included:</h4>
                      <ul className="space-y-2">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-zenith-accent mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {plan.notIncluded.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-gray-400 mb-3">Not included:</h4>
                        <ul className="space-y-2">
                          {plan.notIncluded.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start">
                              <X className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-400 text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Something <span className="gradient-text">Custom?</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our Enterprise plan can be tailored to your organization's specific needs,
            including custom workflows, integrations, and dedicated support.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold gradient-text mb-2">Custom</div>
              <div className="text-gray-600">Workflows</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold gradient-text mb-2">24/7</div>
              <div className="text-gray-600">Dedicated Support</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold gradient-text mb-2">SSO</div>
              <div className="text-gray-600">Security Integration</div>
            </div>
          </div>
          <Button size="lg" className="button-gradient text-white font-medium">
            Contact Sales Team
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-white border-zenith-card/30">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-zenith-primary mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">{faq.answer}</p>
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
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join hundreds of Gulf organizations already using ZenithFlow to manage their projects more effectively.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-zenith-primary hover:bg-gray-100 font-medium">
              Start 14-Day Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zenith-primary">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
