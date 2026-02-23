export type ServerLiveState = {
  status: "Checking" | "Online" | "Offline";
  players?: number;
  maxPlayers?: number;
};

export async function fetchServerStatuses(
  servers: { name: string; serverId?: string }[]
): Promise<Record<string, ServerLiveState>> {
  const results: Record<string, ServerLiveState> = {};

  await Promise.all(
    servers.map(async (server) => {
      if (!server.serverId) {
        results[server.name] = { status: "Offline" };
        return;
      }

      try {
        const res = await fetch(
          `https://servers-frontend.fivem.net/api/servers/single/${server.serverId}`
        );

        if (!res.ok) {
          results[server.name] = { status: "Offline" };
          return;
        }

        const json = await res.json();
        const data = json?.Data;

        if (!data) {
          results[server.name] = { status: "Offline" };
          return;
        }

        results[server.name] = {
          status: "Online",
          players: typeof data.clients === "number" ? data.clients : 0,
          maxPlayers:
            typeof data.sv_maxclients === "number" ? data.sv_maxclients : 0,
        };
      } catch {
        results[server.name] = { status: "Offline" };
      }
    })
  );

  return results;
}