export type ServerTag = "Roleplay" | "Zombie" | "Barilan";

export type ServerItem = {
  name: string;
  year: string;
  serverId?: string;
  tag: ServerTag;
  logoUrl?: string;
  discordUrl?: string;
  serverDesc: string;
  keyFeatures: string[];
};

export type ServerLiveState = {
  status: "Checking" | "Online" | "Offline";
  players?: number;
  maxPlayers?: number;
};

export const SERVERS: ServerItem[] = [
  {
    name: "Hybrid City",
    year: "2026",
    serverId: "899ddm",
    tag: "Roleplay",
    logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/hybrid1024.png",
    discordUrl: "https://discord.gg/mcF9FS3ZJN",
    serverDesc: "An immersive PVP & Car Community PH roleplay server with custom scripts and systems.",
    keyFeatures: ["Optimized Scripts", "Advanced Lua Scripting", "MySQL Database Integration"],
  },
  {
    name: "Ohana City V2",
    year: "2026",
    serverId: "3myody",
    tag: "Roleplay",
    logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/Ohana1024.png",
    discordUrl: "https://discord.gg/NtfMAvJ8jG",
    serverDesc: "An immersive PH roleplay server with custom scripts and systems.",
    keyFeatures: ["Optimized Scripts", "Advanced Lua Scripting", "MySQL Database Integration"],
  },
  {
    name: "Rivals City",
    year: "2025",
    tag: "Barilan",
    logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/rivals1024.png",
    discordUrl: "https://discord.gg/REPLACE_RIVALS",
    serverDesc: "An immersive PVP PH Based Roleplay Server with custom scripts and systems.",
    keyFeatures: ["Optimized Scripts", "Advanced Lua Scripting", "MySQL Database Integration"],
  },
  {
    name: "Highdays Cali",
    year: "2025",
    tag: "Barilan",
    logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/highdays1024.png",
    discordUrl: "https://discord.gg/REPLACE_HIGHDAYS",
    serverDesc: "An immersive PVP PH Based Roleplay Server with custom scripts and systems.",
    keyFeatures: ["Optimized Scripts", "Advanced Lua Scripting", "MySQL Database Integration"],
  },
  {
    name: "BINI City",
    year: "2025",
    serverId: "kr7g9r",
    tag: "Roleplay",
    logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/bini1024.png",
    discordUrl: "https://discord.gg/nyXBkduAJb",
    serverDesc: "An immersive roleplay server with custom scripts and systems.",
    keyFeatures: ["Optimized Scripts", "Advanced Lua Scripting", "MySQL Database Integration"],
  },
  {
    name: "District 8",
    year: "2025",
    tag: "Roleplay",
    logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/district8.png",
    discordUrl: "https://discord.gg/REPLACE_HIGHDAYS",
    serverDesc: "An immersive US Roleplay Server with custom scripts and systems.",
    keyFeatures: ["Optimized Scripts", "Advanced Lua Scripting", "MySQL Database Integration"],
  },
  {
    name: "The Hallows City: Blackout",
    year: "2025",
    tag: "Zombie",
    logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/thc.png",
    discordUrl: "https://discord.gg/REPLACE_HALLOWS",
    serverDesc: "An immersive Zombie Server with custom scripts and systems.",
    keyFeatures: ["Zombie Server", "Loot & crafting", "Realistic Zombie System"],
  },
  {
    name: "SouthSide City",
    year: "2025",
    tag: "Roleplay",
    logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/ss1024.png",
    discordUrl: "https://discord.gg/REPLACE_SOUTHSIDE",
    serverDesc: "An immersive Semi-Serious RP Server with custom scripts and systems.",
    keyFeatures: ["Custom Gang System", "Custom Business", "Whitelisted Jobs"],
  },
  {
    name: "Cavite City Reborn",
    year: "2025",
    tag: "Roleplay",
    logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/cavite1024.png",
    discordUrl: "https://discord.gg/REPLACE_ESCOLTA",
    serverDesc: "An immersive Serious RP Server with custom scripts and systems.",
    keyFeatures: ["Serious RP", "Custom Scripts", "Realistic Life"],
  },
  {
    name: "Escolta RP",
    year: "2024",
    tag: "Roleplay",
    logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/escolta1024.png",
    discordUrl: "https://discord.gg/REPLACE_ESCOLTA",
    serverDesc: "An immersive Semi-Serious RP Server with custom scripts and systems.",
    keyFeatures: ["Semi Serious RP", "Friendly Staffs", "Mid Economy"],
  },
  {
    name: "Trinity Roleplay",
    year: "2024",
    tag: "Roleplay",
    logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/trinity1024.png",
    discordUrl: "https://discord.gg/REPLACE_TRINITY",
    serverDesc: "An immersive Semi-Serious RP Server with custom scripts and systems.",
    keyFeatures: ["Custom jobs", "Progression systems", "Advanced Lua scripting"],
  },
  {
    name: "City of Hope Reunited",
    year: "2024",
    tag: "Roleplay",
    logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/COH_1024.png",
    discordUrl: "https://discord.gg/REPLACE_COH",
    serverDesc: "An immersive Semi-Serious RP Server with custom scripts and systems.",
    keyFeatures: ["Semi-Serious RP", "Custom Scripts", "Optimized Resources"],
  },
  {
    name: "Blackrose Roleplay",
    year: "2024",
    tag: "Roleplay",
    logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/br1024.png",
    discordUrl: "https://discord.gg/REPLACE_BLACKROSE",
    serverDesc: "An immersive Semi-Serious RP Server with custom scripts and systems.",
    keyFeatures: ["Since 2021", "Custom Scripts", "Optimized resources"],
  },
  {
    name: "Autonomy RP",
    year: "2024",
    tag: "Roleplay",
    logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/autonomy1024.png",
    discordUrl: "https://discord.gg/REPLACE_AUTONOMY",
    serverDesc: "An immersive Semi-Serious RP Server with custom scripts and systems.",
    keyFeatures: ["Custom Business", "Serious RP", "Custom Scripts"],
  },
  {
    name: "New Horizon RP",
    year: "2024",
    tag: "Roleplay",
    logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/newhorizon1024.png",
    discordUrl: "https://discord.gg/REPLACE_NEWHORIZON",
    serverDesc: "An immersive Serious RP Server with custom scripts and systems.",
    keyFeatures: ["Serious RP", "Friendly Staffs", "Accepting Newbies"],
  },
  {
    name: "Haven City",
    year: "2024",
    tag: "Roleplay",
    logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/HAVEN_1024.png",
    discordUrl: "https://discord.gg/REPLACE_HAVEN",
    serverDesc: "An immersive Serious RP Server with custom scripts and systems.",
    keyFeatures: ["Serious RP", "ESX Framework", "Accepting Newbies"],
  },
  {
    name: "Majesty City V2",
    year: "2023",
    tag: "Roleplay",
    logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/mjsty_1024.png",
    discordUrl: "https://discord.gg/REPLACE_MAJESTY",
    serverDesc: "An immersive Semi-Serious RP Server with custom scripts and systems.",
    keyFeatures: ["Gangs vs Police", "Advanced Cardealer System", "Custom Framework"],
  },
];