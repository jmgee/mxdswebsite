import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const SERVERS = [
  {
    name: "London Roleplay",
    serverId: "qlol3p"
  },
];

export async function GET() {
  const results = await Promise.all(
    SERVERS.map(async (server) => {
      try {
        const response = await fetch(
          `https://servers-frontend.fivem.net/api/servers/single/${server.serverId}`,
          { cache: "no-store" }
        );

        if (!response.ok) {
          return { name: server.name, status: "Offline" };
        }

        const json = await response.json();
        const data = json?.Data;

        if (!data) {
          return { name: server.name, status: "Offline" };
        }

        return {
          name: server.name,
          status: "Online",
          players: data.clients ?? 0,
          maxPlayers: data.sv_maxclients ?? 0
        };
      } catch {
        return { name: server.name, status: "Offline" };
      }
    })
  );

  return NextResponse.json(results);
}