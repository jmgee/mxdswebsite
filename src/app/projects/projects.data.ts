export type ProjectCategory = "FiveM" | "Website" | "Discord Bot" | "Software";

export type ProjectTag =
  | "Roleplay"
  | "Zombie"
  | "PvP"
  | "Portfolio"
  | "Business"
  | "Automation"
  | "Application";

export type ProjectItem = {
  name: string;
  year: string;
  category: ProjectCategory;
  tag: ProjectTag;
  description: string;
  keyFeatures: string[];
  logoUrl?: string;
  projectUrl?: string;

  // FiveM-only fields. Leave these undefined for websites, bots, and software.
  serverId?: string;
  discordUrl?: string;
};

export type ProjectLiveState = {
  status: "Checking" | "Online" | "Offline";
  players?: number;
  maxPlayers?: number;
};

export const PROJECT_CATEGORIES = [
  "All",
  "FiveM",
  "Website",
  "Discord Bot",
  "Software",
] as const;

export type ProjectCategoryFilter = (typeof PROJECT_CATEGORIES)[number];

export const PROJECTS: ProjectItem[] = [
  {
    name: "Hybrid City",
    year: "2026",
    category: "FiveM",
    tag: "Roleplay",
    serverId: "899ddm",
    logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/hybrid1024.png",
    discordUrl: "https://discord.gg/mcF9FS3ZJN",
    description:
      "An immersive PVP and car-community PH roleplay server with custom scripts and systems.",
    keyFeatures: [
      "Optimized Scripts",
      "Advanced Lua Scripting",
      "MySQL Database Integration",
    ],
  },
  {
    name: "Ohana City V2",
    year: "2026",
    category: "FiveM",
    tag: "Roleplay",
    serverId: "3myody",
    logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/Ohana1024.png",
    discordUrl: "https://discord.gg/NtfMAvJ8jG",
    description:
      "An immersive PH roleplay server with custom scripts and systems.",
    keyFeatures: [
      "Optimized Scripts",
      "Advanced Lua Scripting",
      "MySQL Database Integration",
    ],
  },
  {
    name: "Rivals City",
    year: "2025",
    category: "FiveM",
    tag: "PvP",
    logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/rivals1024.png",
    discordUrl: "https://discord.gg/REPLACE_RIVALS",
    description:
      "An immersive PVP PH-based roleplay server with custom scripts and systems.",
    keyFeatures: [
      "Optimized Scripts",
      "Advanced Lua Scripting",
      "MySQL Database Integration",
    ],
  },
  {
    name: "Highdays Cali",
    year: "2025",
    category: "FiveM",
    tag: "PvP",
    logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/highdays1024.png",
    discordUrl: "https://discord.gg/REPLACE_HIGHDAYS",
    description:
      "An immersive PVP PH-based roleplay server with custom scripts and systems.",
    keyFeatures: [
      "Optimized Scripts",
      "Advanced Lua Scripting",
      "MySQL Database Integration",
    ],
  },
  {
    name: "BINI City",
    year: "2025",
    category: "FiveM",
    tag: "Roleplay",
    serverId: "kr7g9r",
    logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/bini1024.png",
    discordUrl: "https://discord.gg/nyXBkduAJb",
    description:
      "An immersive roleplay server with custom scripts and systems.",
    keyFeatures: [
      "Optimized Scripts",
      "Advanced Lua Scripting",
      "MySQL Database Integration",
    ],
  },
  {
    name: "District 8",
    year: "2025",
    category: "FiveM",
    tag: "Roleplay",
    logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/district8.png",
    discordUrl: "https://discord.gg/REPLACE_DISTRICT8",
    description:
      "An immersive US roleplay server with custom scripts and systems.",
    keyFeatures: [
      "Optimized Scripts",
      "Advanced Lua Scripting",
      "MySQL Database Integration",
    ],
  },
  {
    name: "The Hallows City: Blackout",
    year: "2025",
    category: "FiveM",
    tag: "Zombie",
    logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/thc.png",
    discordUrl: "https://discord.gg/REPLACE_HALLOWS",
    description:
      "An immersive zombie server with custom scripts and progression systems.",
    keyFeatures: ["Zombie Server", "Loot & Crafting", "Realistic Zombie System"],
  },
  {
    name: "SouthSide City",
    year: "2025",
    category: "FiveM",
    tag: "Roleplay",
    logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/ss1024.png",
    discordUrl: "https://discord.gg/REPLACE_SOUTHSIDE",
    description:
      "An immersive semi-serious roleplay server with custom scripts and systems.",
    keyFeatures: ["Custom Gang System", "Custom Business", "Whitelisted Jobs"],
  },
  {
    name: "Cavite City Reborn",
    year: "2025",
    category: "FiveM",
    tag: "Roleplay",
    logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/cavite1024.png",
    discordUrl: "https://discord.gg/REPLACE_CAVITE",
    description:
      "An immersive serious roleplay server with custom scripts and systems.",
    keyFeatures: ["Serious RP", "Custom Scripts", "Realistic Life"],
  },
  {
    name: "Escolta RP",
    year: "2024",
    category: "FiveM",
    tag: "Roleplay",
    logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/escolta1024.png",
    discordUrl: "https://discord.gg/REPLACE_ESCOLTA",
    description:
      "An immersive semi-serious roleplay server with custom scripts and systems.",
    keyFeatures: ["Semi Serious RP", "Friendly Staff", "Mid Economy"],
  },
  {
    name: "Trinity Roleplay",
    year: "2024",
    category: "FiveM",
    tag: "Roleplay",
    logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/trinity1024.png",
    discordUrl: "https://discord.gg/REPLACE_TRINITY",
    description:
      "An immersive semi-serious roleplay server with custom scripts and systems.",
    keyFeatures: ["Custom Jobs", "Progression Systems", "Advanced Lua Scripting"],
  },
  {
    name: "City of Hope Reunited",
    year: "2024",
    category: "FiveM",
    tag: "Roleplay",
    logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/COH_1024.png",
    discordUrl: "https://discord.gg/REPLACE_COH",
    description:
      "An immersive semi-serious roleplay server with custom scripts and systems.",
    keyFeatures: ["Semi-Serious RP", "Custom Scripts", "Optimized Resources"],
  },
  {
    name: "Blackrose Roleplay",
    year: "2024",
    category: "FiveM",
    tag: "Roleplay",
    logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/br1024.png",
    discordUrl: "https://discord.gg/REPLACE_BLACKROSE",
    description:
      "An immersive semi-serious roleplay server with custom scripts and systems.",
    keyFeatures: ["Since 2021", "Custom Scripts", "Optimized Resources"],
  },
  {
    name: "Autonomy RP",
    year: "2024",
    category: "FiveM",
    tag: "Roleplay",
    logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/autonomy1024.png",
    discordUrl: "https://discord.gg/REPLACE_AUTONOMY",
    description:
      "An immersive semi-serious roleplay server with custom scripts and systems.",
    keyFeatures: ["Custom Business", "Serious RP", "Custom Scripts"],
  },
  {
    name: "New Horizon RP",
    year: "2024",
    category: "FiveM",
    tag: "Roleplay",
    logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/newhorizon1024.png",
    discordUrl: "https://discord.gg/REPLACE_NEWHORIZON",
    description:
      "An immersive serious roleplay server with custom scripts and systems.",
    keyFeatures: ["Serious RP", "Friendly Staff", "Accepting Newbies"],
  },
  {
    name: "Haven City",
    year: "2024",
    category: "FiveM",
    tag: "Roleplay",
    logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/HAVEN_1024.png",
    discordUrl: "https://discord.gg/REPLACE_HAVEN",
    description:
      "An immersive serious roleplay server with custom scripts and systems.",
    keyFeatures: ["Serious RP", "ESX Framework", "Accepting Newbies"],
  },
  {
    name: "Majesty City V2",
    year: "2023",
    category: "FiveM",
    tag: "Roleplay",
    logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/mjsty_1024.png",
    discordUrl: "https://discord.gg/REPLACE_MAJESTY",
    description:
      "An immersive semi-serious roleplay server with custom scripts and systems.",
    keyFeatures: ["Gangs vs Police", "Advanced Cardealer System", "Custom Framework"],
  },
];
