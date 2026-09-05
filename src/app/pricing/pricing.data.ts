export type Plan = {
  name: string;
  subtitle: string;
  setupLabel: string;
  setupPrice: string;
  monthlyPrice: string;
  features: string[];
  note?: string;
  popular?: boolean;
};

export type PlanCategory =
  | "fivem"
  | "discord"
  | "web";

export const PRICING_CATEGORIES: PlanCategory[] = [
  "fivem",
  "discord",
  "web",
];

export const CATEGORY_LABELS: Record<
  PlanCategory,
  string
> = {
  fivem: "FiveM Development",
  discord: "Discord Bot Development",
  web: "Web Development",
};

export const ALL_PLANS: Record<
  PlanCategory,
  Plan[]
> = {
  fivem: [
    {
      name: "Basic Setup Plan",
      subtitle:
        "Perfect for growing RP communities.",
      setupLabel:
        "Initial hiring fee",
      setupPrice:
        "₱3,000",
      monthlyPrice:
        "₱2,500 /month",
      features: [
        "Maintenance and Ongoing Support",
        "Minor & Major Script Bug/Exploit Fixes",
      ],
      note:
        "Excludes major custom script creations and optimizations.",
    },

    {
      name: "Premium Setup Plan",
      subtitle:
        "Suitable for users who require comprehensive development.",
      setupLabel:
        "Initial hiring fee",
      setupPrice:
        "₱6,000",
      monthlyPrice:
        "₱5,000 /month",
      features: [
        "Full Maintenance and Optimization",
        "Minor to Major Script Bug Fixes",
        "Script Customization (Major Changes)",
        "Full Managed Server (24/7 Support)",
      ],
      note:
        "Includes stability checks, performance optimization, and continuous improvements.",
      popular: true,
    },

    {
      name: "SSRP Server Pack",
      subtitle:
        "Normal RP server pack perfect for grindings and casual RP.",
      setupLabel:
        "Starting at",
      setupPrice:
        "₱5,000",
      monthlyPrice:
        "One-time fee",
      features: [
        "Latest ESX Core (Modified)",
        "Latest OX Scripts",
        "Advanced Robbery System",
        "Advanced Whitelisted Jobs System",
        "All in one resource Sidejobs System",
        "Open Source Scripts",
        "Database Configuration",
        "1 week Free Support for Bug Fixes & Exploits",
      ],
      note:
        "Custom modifications require additional support.",
    },

    {
      name: "Barilan Server Pack",
      subtitle:
        "PVP focused server pack with custom scripts and features.",
      setupLabel:
        "Starting at",
      setupPrice:
        "₱10,000",
      monthlyPrice:
        "One-time fee",
      features: [
        "Complete Server Resources & Scripts",
        "Open Source Scripts",
        "Advanced Robbery System",
        "Advanced Traphouse System (Unli)",
        "Custom Death System (Includes Death Screen)",
        "Modified Gang System (Includes Unli Gang Car)",
        "1 week Free Support for Bug Fixes & Exploits",
      ],
      note:
        "Custom modifications require additional support.",
    },

    {
      name: "Clothing Pack",
      subtitle:
        "Clothing system setup and optimization.",
      setupLabel:
        "Starting at",
      setupPrice:
        "₱2,500",
      monthlyPrice:
        "One-time fee",
      features: [
        "Optimized Cloth Pack",
        "300+ Clothing Items",
      ],
      note:
        "Includes installation and configuration.",
    },

    {
      name: "Custom Script Development",
      subtitle:
        "Unique script development for your server.",
      setupLabel:
        "Starting at",
      setupPrice:
        "₱1,000",
      monthlyPrice:
        "One-time fee",
      features: [
        "Fully Custom Script",
        "Optimized Performance",
        "Source Code Included",
        "Bug Fix Warranty (7 Days)",
      ],
      note:
        "Pricing depends on complexity.",
    },
  ],

  discord: [],

  web: [],
};