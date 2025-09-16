import type { NextApiRequest, NextApiResponse } from "next";

const GQL = `
  query($username: String!) {
    user(login: $username) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              date
            }
          }
        }
      }
    }
  }
`;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const username = (req.query.username as string || "").trim();
    if (!username || username.startsWith("@")) {
      return res.status(400).json({ error: "Paramètre 'username' invalide (ex: username=salmanadir, sans @)" });
    }

    // TRÈS IMPORTANT : supprimer espaces/quotes invisibles
    const raw = process.env.GITHUB_TOKEN ?? "";
    const token = raw.replace(/(^["'\s]+|["'\s]+$)/g, ""); // trim + enlève quotes

    // DEBUG: log username et token (token masqué)
    console.log("[github-contributions] username:", username);
    console.log("[github-contributions] token:", token ? token.slice(0, 6) + "..." : "(vide)");

    if (!token) {
      return res.status(500).json({ error: "GITHUB_TOKEN manquant côté serveur" });
    }

    // Appel GraphQL GitHub
    const gh = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        "User-Agent": "nextjs-pages-api",
      },
      body: JSON.stringify({ query: GQL, variables: { username } }),
    });

    const data = await gh.json().catch(() => null);

    if (!gh.ok) {
      const msg = (data && (data.message || data?.errors?.[0]?.message)) || `GitHub HTTP ${gh.status}`;
      return res.status(502).json({ error: msg });
    }

    if (data?.errors?.length) {
      // Expose l’erreur GraphQL exacte (ex: "The string did not match the expected pattern")
      const msg = data.errors.map((e: any) => e.message).join(" | ");
      return res.status(502).json({ error: msg });
    }

    const cal = data?.data?.user?.contributionsCollection?.contributionCalendar;
    if (!cal) {
      return res.status(502).json({ error: "No calendar data returned" });
    }

    return res.status(200).json({
      totalContributions: cal.totalContributions,
      weeks: cal.weeks,
    });
  } catch (err: any) {
    return res.status(500).json({ error: err?.message || "Unexpected server error" });
  }
}
