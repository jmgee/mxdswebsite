export const PROJECT_CATEGORIES = [
  "FiveM",
  "Website",
  "Discord Bot",
] as const;

export type ProjectCategory =
  (typeof PROJECT_CATEGORIES)[number];

export type ProjectItem = {
  name: string;
  year: string;
  category: ProjectCategory;

  /*
   * FiveM only
   */
  serverId?: string;
  discordUrl?: string;

  /*
   * Website / external project
   */
  projectUrl?: string;

  /*
   * Shared
   */
  logoUrl?: string;
  description?: string;
};

export type ProjectLiveState = {
  status: "Checking" | "Online" | "Offline";
  players?: number;
  maxPlayers?: number;
};

export const PROJECTS: ProjectItem[] = [
  /* =========================================================
     FIVEM PROJECTS — 2026
     ========================================================= */

  {
    name: "Hybrid City",
    year: "2026",
    category: "FiveM",
    serverId: "899ddm",
    logoUrl:
      "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/hybrid1024.png",
    discordUrl:
      "https://discord.gg/mcF9FS3ZJN",
  },

  {
    name: "Ohana City V2",
    year: "2026",
    category: "FiveM",
    serverId: "3myody",
    logoUrl:
      "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/Ohana1024.png",
    discordUrl:
      "https://discord.gg/NtfMAvJ8jG",
  },

  /* =========================================================
     FIVEM PROJECTS — 2025
     ========================================================= */

  {
    name: "Rivals City",
    year: "2025",
    category: "FiveM",
    logoUrl:
      "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/rivals1024.png",
  },

  {
    name: "Highdays Cali",
    year: "2025",
    category: "FiveM",
    logoUrl:
      "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/highdays1024.png",
  },

  {
    name: "BINI City",
    year: "2025",
    category: "FiveM",
    serverId: "kr7g9r",
    logoUrl:
      "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/bini1024.png",
    discordUrl:
      "https://discord.gg/nyXBkduAJb",
  },

  {
    name: "District 8",
    year: "2025",
    category: "FiveM",
    logoUrl:
      "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/district8.png",
  },

  {
    name: "The Hallows City: Blackout",
    year: "2025",
    category: "FiveM",
    logoUrl:
      "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/thc.png",
  },

  {
    name: "SouthSide City",
    year: "2025",
    category: "FiveM",
    logoUrl:
      "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/ss1024.png",
  },

  {
    name: "Cavite City Reborn",
    year: "2025",
    category: "FiveM",
    logoUrl:
      "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/cavite1024.png",
  },

  /* =========================================================
     FIVEM PROJECTS — 2024
     ========================================================= */

  {
    name: "Escolta RP",
    year: "2024",
    category: "FiveM",
    logoUrl:
      "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/escolta1024.png",
  },

  {
    name: "Trinity Roleplay",
    year: "2024",
    category: "FiveM",
    logoUrl:
      "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/trinity1024.png",
  },

  {
    name: "City of Hope Reunited",
    year: "2024",
    category: "FiveM",
    logoUrl:
      "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/COH_1024.png",
  },

  {
    name: "Blackrose Roleplay",
    year: "2024",
    category: "FiveM",
    logoUrl:
      "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/br1024.png",
  },

  {
    name: "Autonomy RP",
    year: "2024",
    category: "FiveM",
    logoUrl:
      "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/autonomy1024.png",
  },

  {
    name: "New Horizon RP",
    year: "2024",
    category: "FiveM",
    logoUrl:
      "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/newhorizon1024.png",
  },

  {
    name: "Haven City",
    year: "2024",
    category: "FiveM",
    logoUrl:
      "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/HAVEN_1024.png",
  },

  /* =========================================================
     FIVEM PROJECTS — 2023
     ========================================================= */

  {
    name: "Majesty City V2",
    year: "2023",
    category: "FiveM",
    logoUrl:
      "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/mjsty_1024.png",
  },

  /* =========================================================
     WEBSITE PROJECTS
     ========================================================= */

  {
    name: "Toughzone PH",
    year: "2026",
    category: "Website",
    projectUrl:
      "https://toughzoneph.com/",
    description:
      "A modern e-commerce website for Toughzone PH, designed to showcase the brand and provide customers with a streamlined online shopping experience.",
  },

  /* =========================================================
     DISCORD BOT PROJECTS

     Add future Discord bot projects here using:

     {
       name: "Bot Name",
       year: "2026",
       category: "Discord Bot",
       logoUrl: "https://...",
       projectUrl: "https://...",
       description: "Short project description.",
     },

     ========================================================= */
];