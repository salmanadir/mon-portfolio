import React, { useState, useEffect } from "react";

interface ContributionDay {
  contributionCount: number;
  date: string;
}
interface ContributionWeek {
  contributionDays: ContributionDay[];
}
interface GithubContributionsProps {
  username?: string;
}

const RealGithubContributions: React.FC<GithubContributionsProps> = ({
  username = "salmanadir",
}) => {
  const [contributions, setContributions] = useState<ContributionWeek[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [totalContributions, setTotalContributions] = useState(0);

  const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;
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

  const fetchGithubContributions = async () => {
    try {
      const res = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: GQL, variables: { username } }),
      });
      const data = await res.json();
      if (!res.ok || data.errors) {
        const msg = data.errors ? data.errors.map((e: any) => e.message).join(" | ") : `Erreur API: ${res.status}`;
        throw new Error(msg);
      }
      const cal = data?.data?.user?.contributionsCollection?.contributionCalendar;
      setContributions(cal?.weeks || []);
      setTotalContributions(cal?.totalContributions || 0);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur inconnue");
      console.error("Erreur lors de la récupération des contributions:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (username) {
      fetchGithubContributions();
    } else {
      setError("Veuillez configurer votre username GitHub");
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username]);

  const getContributionColor = (count: number) => {
    if (count === 0) return "#ebedf0";
    if (count < 3) return "#9be9a8";
    if (count < 6) return "#40c463";
    if (count < 9) return "#30a14e";
    if (count < 12) return "#216e39";
    return "#0d4117";
  };

  const getMonthLabels = () => {
    const months = ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil", "Aoû", "Sep", "Oct", "Nov", "Déc"];
    const labels: string[] = [];
    const today = new Date();
    for (let i = 0; i < 12; i++) {
      const date = new Date(today.getFullYear(), today.getMonth() - 11 + i, 1);
      labels.push(months[date.getMonth()]);
    }
    return labels;
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-500"></div>
        <span className="ml-2">Chargement de vos contributions...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
        <h3 className="text-lg font-semibold text-red-800 mb-2">Erreur</h3>
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg border shadow-sm">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold mb-2">Contributions GitHub</h2>
        <p className="text-gray-600">@{username}</p>
        <p className="text-sm text-gray-500">
          {totalContributions} contributions dans les 12 derniers mois
        </p>
      </div>

      <div className="flex flex-col items-center">
        <div className="flex gap-1 mb-2 text-xs text-gray-500" style={{ marginLeft: "20px" }}>
          {getMonthLabels().map((month, index) => (
            <div key={index} style={{ width: "60px", textAlign: "left" }}>
              {index % 2 === 0 ? month : ""}
            </div>
          ))}
        </div>

        <div className="flex gap-2">
          <div className="flex flex-col gap-1 text-xs text-gray-500 pt-4">
            <div style={{ height: "11px" }}>Lun</div>
            <div style={{ height: "11px" }}></div>
            <div style={{ height: "11px" }}>Mer</div>
            <div style={{ height: "11px" }}></div>
            <div style={{ height: "11px" }}>Ven</div>
            <div style={{ height: "11px" }}></div>
            <div style={{ height: "11px" }}></div>
          </div>

          <div className="flex gap-1">
            {contributions.map((week, weekIndex) => (
              <div key={weekIndex} className="flex flex-col gap-1">
                {week.contributionDays.map((day, dayIndex) => {
                  const date = new Date(day.date);
                  const formattedDate = date.toLocaleDateString("fr-FR", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  });

                  return (
                    <div
                      key={dayIndex}
                      className="rounded-sm cursor-pointer hover:ring-2 hover:ring-gray-300 transition-all"
                      style={{
                        width: "11px",
                        height: "11px",
                        backgroundColor: getContributionColor(day.contributionCount),
                      }}
                      title={`${day.contributionCount} contribution${day.contributionCount > 1 ? "s" : ""} le ${formattedDate}`}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 mt-4 text-xs text-gray-500">
          <span>Moins</span>
          <div className="flex gap-1">
            {[0, 1, 2, 3, 4].map((level) => (
              <div
                key={level}
                className="rounded-sm"
                style={{
                  width: "11px",
                  height: "11px",
                  backgroundColor: getContributionColor(level * 3),
                }}
              />
            ))}
          </div>
          <span>Plus</span>
        </div>
      </div>
    </div>
  );
};

export default RealGithubContributions;
