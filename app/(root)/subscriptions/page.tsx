"use client";

import { Check } from "lucide-react";
import { toast } from "sonner";

export default function SubscriptionsPage() {
  const plans = [
    {
      name: "Free",
      description:
        "A simple way to try the app with one book and short voice sessions.",
      price: "$0",
      priceSuffix: "",
      subPrice: "Always free",
      badge: "Active",
      features: [
        "Upload 1 book",
        "5 voice sessions / month",
        "Up to 5 minutes per session",
        "No session history or re-indexing",
      ],
      buttonText: "",
      buttonVariant: "outline",
      isCurrent: false,
    },
    {
      name: "Standard",
      description:
        "Ideal for regular reading with more books, longer sessions, and saved history.",
      price: "$8",
      priceSuffix: "/month",
      subPrice: "Billed annually",
      badge: "Coming Soon",
      features: [
        "Upload 10 books",
        "100 voice sessions / month",
        "Up to 15 minutes per session",
        "Session history saved",
      ],
      buttonText: "Coming Soon",
      buttonVariant: "primary",
      isCurrent: true,
    },
    {
      name: "Pro",
      description:
        "Best for deep reading and heavy use, with long sessions and full memory.",
      price: "$15",
      priceSuffix: "/month",
      subPrice: "Billed annually",
      badge: "Coming Soon",
      features: [
        "100 book uploads",
        "Unlimited voice sessions",
        "Up to 60 minutes per session",
        "Full session memory",
      ],
      buttonText: "Coming Soon",
      buttonVariant: "primary",
      isCurrent: false,
    },
  ];

  return (
    <div className="container wrapper py-10">
      <div className="flex flex-col items-center text-center mb-10">
        <h1 className="text-4xl font-bold font-serif mb-4">Choose Your Plan</h1>
        <p className="text-muted-foreground max-w-2xl">
          Upgrade to unlock more books, longer sessions, and advanced features.
        </p>
      </div>

      <div className="clerk-pricing-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col bg-card rounded-2xl border-2 p-6 shadow-soft transition-all duration-300 ${
                plan.name === "Free" ? "border-[#4A3226]" : "border-transparent"
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold font-sans">{plan.name}</h2>
                {plan.badge && (
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold bg-[#64493a] text-white`}
                  >
                    {plan.badge}
                  </span>
                )}
              </div>

              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                {plan.description}
              </p>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">
                    {plan.priceSuffix}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  {plan.subPrice}
                </p>
              </div>

              <div className="border-t border-border pt-6 mb-8 flex-grow">
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-4 h-4 mt-1 text-muted-foreground shrink-0" />
                      <span className="text-sm text-foreground/80">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className={`w-full py-3 px-4 rounded-xl font-semibold transition-colors duration-200 ${
                  plan.buttonVariant === "primary"
                    ? "bg-[#212a3b] text-white hover:bg-[#3d485e]"
                    : "bg-transparent text-muted-foreground border-none cursor-default"
                }`}
                onClick={() => toast.info("You will soon be able to subscribe")}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
