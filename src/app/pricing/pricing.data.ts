export type Plan = {
  name: string;
  subtitle: string;
  setupLabel: string;
  setupPrice: string;
  monthlyPrice: string;
  features: string[];
  note: string;
  popular?: boolean;
  variant: "standard" | "featured";
};

export type PlanCategory = "fivem" | "server" | "others";

export const ALL_PLANS: Record<PlanCategory, Plan[]> = {
  fivem: [
    {
      name: "Basic Setup Plan",
      subtitle: "Perfect for growing RP communities.",
      setupLabel: "Initial hiring fee",
      setupPrice: "₱5,000",
      monthlyPrice: "₱3,000 /month",
      features: [
        "Full Resources/Scripts Configuration",
        "Server Configuration",
        "Resources/Assets Installation",
        "Minor & Major Script Bug/Exploit Fixes",
        "Full Managed Server",
        "Live Chat Support thru Discord",
      ],
      note: "Includes standard server pack resources and scripts.",
      variant: "standard",
    },
    {
      name: "Premium Setup Plan",
      subtitle: "Suitable for users who require comprehensive development.",
      setupLabel: "Initial hiring fee",
      setupPrice: "₱6,000",
      monthlyPrice: "₱5,000 /month",
      features: [
        "Unique scripts development",
        "Full Resources/Scripts Configuration",
        "Server Configuration",
        "Resources/Assets Installation",
        "Minor & Major Script Bug/Exploit Fixes",
        "Custom Script Creations Included",
        "Full Script Optimize",
        "Full Managed Server (24/7 Support)",
        "Live Chat Support thru Discord (24/7 Support)",
      ],
      note: "Includes standard server pack resources and scripts.",
      popular: true,
      variant: "featured",
    },
  ],
  server: [
    {
      name: "SSRP Server Pack",
      subtitle: "Normal RP server pack perfect for grindings and casual RP.",
      setupLabel: "Starting at",
      setupPrice: "₱3,000",
      monthlyPrice: "One-time fee",
      features: [
        "Latest ESX Core (Modified)",
        "Latest OX Scripts",
        "Advanced Robbery System",
        "Advanced Whitelisted Jobs System",
        "All in one resource Sidejobs System",
        "Open Source Scripts",
        "Database Configuration",
        "7 days of Free Support for Bug Fixes & Exploits",
      ],
      note: "Custom modifications require additional support.",
      variant: "standard",
    },
    {
      name: "Barilan Server Pack",
      subtitle: "PVP focused server pack with custom scripts and features.",
      setupLabel: "Starting at",
      setupPrice: "₱5,000",
      monthlyPrice: "One-time fee",
      features: [
        "Complete Server Resources & Scripts",
        "Open Source Scripts",
        "Advanced Robbery System",
        "Advanced Traphouse System (Unli)",
        "Custom Death System (Includes Death Screen)",
        "Modified Gang System (Includes Unli Gang Car)",
        "7 days of Free Support for Bug Fixes & Exploits",
      ],
      note: "Custom modifications require additional support.",
      popular: true,
      variant: "featured",
    },
  ],
  others: [
    {
      name: "Clothing Pack",
      subtitle: "Clothing system setup and optimization.",
      setupLabel: "Starting at",
      setupPrice: "₱2,500",
      monthlyPrice: "One-time fee",
      features: ["Optimized Cloth Pack", "300+ Clothing Items"],
      note: "Includes installation and configuration.",
      variant: "standard",
    },
    {
      name: "Custom Script Development",
      subtitle: "Unique script development for your server.",
      setupLabel: "Starting at",
      setupPrice: "₱1,000",
      monthlyPrice: "One-time fee",
      features: [
        "Fully Custom Script",
        "Optimized Performance",
        "Source Code Included",
        "Bug Fix Warranty (7 Days)",
      ],
      note: "Pricing depends on complexity.",
      variant: "standard",
    },
  ],
};

export const CATEGORY_LABELS: Record<PlanCategory, string> = {
  fivem: "FiveM Development",
  server: "Server Packs",
  others: "Other Services",
};

export const CATEGORY_DESCRIPTIONS: Record<PlanCategory, string> = {
  fivem:
    "Long-term development and maintenance plans for communities that need reliability, support, and consistent updates.",
  server:
    "Ready-to-launch packs built for communities that want a faster setup with polished systems and cleaner delivery.",
  others:
    "Extra services and custom add-ons for communities that need tailored work beyond standard packages.",
};

export const PLAN_NOTES = {
  general: [
    `Please review the Terms & Agreement in the “Store Terms” channel on our Discord server before purchasing.`,
  ],
  basic: [
    `Weekday Availability: Mon & Wed: 6PM until 9PM | Tue & Fri: 8AM until 9PM | Thu: 4PM until 9PM.`,
    `Weekend Availability: Sat & Sun: 12PM until 12AM.`,
  ],
  premium: [
    `Weekday Availability: Mon & Wed: 6PM onwards | Tue & Fri: 7AM onwards | Thu: 4PM onwards.`,
    `Weekend Availability: Open Schedule (Available Throughout the Day).`,
  ],
} as const;