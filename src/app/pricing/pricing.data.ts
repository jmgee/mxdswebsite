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
        "Normal RP server pack perfect for grinding and casual RP.",
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
        "All-in-One Side Jobs System",
        "Open Source Scripts",
        "Database Configuration",
        "1 Week Free Support for Bug Fixes & Exploits",
      ],
      note:
        "Custom modifications require additional support.",
    },

    {
      name: "Barilan Server Pack",
      subtitle:
        "PVP-focused server pack with custom scripts and features.",
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
        "1 Week Free Support for Bug Fixes & Exploits",
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
        "Optimized Clothing Pack",
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

  discord: [
    {
      name: "Basic Bot Development",
      subtitle:
        "Ideal for Discord communities that need essential automation and management features.",
      setupLabel:
        "Starting at",
      setupPrice:
        "₱3,000",
      monthlyPrice:
        "One-time fee",
      features: [
        "Custom Bot Branding",
        "Custom Moderation Commands",
        "Basic Logging System",
      ],
      note:
        "Bot hosting is not included.",
    },

    {
      name: "Advanced Bot Development",
      subtitle:
        "Ideal for Discord communities that need advanced automation and management features.",
      setupLabel:
        "Starting at",
      setupPrice:
        "₱15,000",
      monthlyPrice:
        "One-time fee",
      features: [
        "Fully Custom Discord Bot Development",
        "Advanced Moderation, Ticket & Automation Systems",
        "Flexible Database Integration (SQL, NoSQL & Cloud Databases)",
        "Custom Slash Commands, Buttons, Menus & Modals",
        "Source Code, Deployment Assistance & 30 Days Support",
      ],
      note:
        "Hosting, premium APIs, third-party services, and advanced custom requirements are quoted separately based on project scope and technical complexity.",
      popular: true,
    },
  ],

  web: [
    {
      name: "Portfolio Website",
      subtitle:
        "A modern responsive website for personal brands, developers, creatives, and professionals.",
      setupLabel:
        "Starting at",
      setupPrice:
        "₱10,000",
      monthlyPrice:
        "₱5,000 /15 days support",
      features: [
        "Custom Responsive Website Design",
        "Mobile & Desktop Optimization",
        "Profile / About Section",
        "Projects or Portfolio Showcase",
        "Contact & Social Media Integration",
        "Basic SEO Configuration",
        "Performance Optimization",
        "Deployment Assistance",
      ],
      note:
        "Final pricing depends on the project scope, number of pages, design requirements, integrations, and overall complexity. Domain, hosting, premium APIs, and third-party services are quoted separately.",
    },

    {
      name: "Business Website",
      subtitle:
        "A professional website built for businesses, brands, products, and service-based companies.",
      setupLabel:
        "Starting at",
      setupPrice:
        "₱20,000",
      monthlyPrice:
        "₱10,000 /15 days support",
      features: [
        "Custom Business Website Design",
        "Responsive Mobile-First Development",
        "Landing, Service & Business Pages",
        "Product or Collection Pages",
        "Contact & Inquiry Systems",
        "SEO-Friendly Structure",
        "Performance Optimization",
        "Deployment & Production Setup",
      ],
      note:
        "Final pricing depends on the project scope, required pages, business features, integrations, backend requirements, and overall complexity. E-commerce, payment gateways, custom dashboards, premium APIs, hosting, and third-party services are quoted separately.",
    },
  ],
};