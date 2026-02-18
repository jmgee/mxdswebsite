import { NextResponse } from "next/server";

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
          {
            next: { revalidate: 60 }, 
            headers: {
              "User-Agent": "mxds-server-check"
            }
          }
        );

        if (!response.ok) {
          return {
            name: server.name,
            status: "Offline"
          };
        }

        const json = await response.json();

        const data = json?.Data;

        if (!data) {
          return {
            name: server.name,
            status: "Offline"
          };
        }

        return {
          name: server.name,
          status: "Online",
          players: typeof data.clients === "number" ? data.clients : 0,
          maxPlayers: typeof data.sv_maxclients === "number" ? data.sv_maxclients : 0
        };
      } catch (error) {
        return {
          name: server.name,
          status: "Offline"
        };
      }
    })
  );

  return NextResponse.json(results);
}