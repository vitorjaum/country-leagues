import Image from "next/image";
import styles from "../styles/Table.module.css";

interface standingsProps {
  standings: [
    {
      team: { name: string; logos: [{ href: string }] };
      stats: [{ name: string; value: string | number }];
    }
  ];
}

export function Table({ standings }: standingsProps) {
  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.header_row}>
          <th>#</th>
          <th className={styles.club_column}>Club</th>
          <th>Pts</th>
          <th>GP</th>
          <th>Wins</th>
          <th>Draws</th>
          <th>Losses</th>
          <th>Goals</th>
          <th>PD</th>
        </tr>
      </thead>
      <tbody>
        {standings.map((club, idx) => {
          const name = club.team.name;
          const logos = club?.team?.logos?.[0]?.href ?? "/futicon.png";
          const stats = club.stats;
          const itemsInfo: Record<string, string | number> = {};
          stats.map((item) => (itemsInfo[item.name] = item.value));
          const {
            points,
            losses,
            gamesPlayed,
            pointDifferential,
            pointsAgainst,
            pointsFor,
            ties,
            rank,
            wins,
          } = itemsInfo;

          return (
            <tr key={idx}>
              <td>{rank}</td>
              <td className={styles.club_column}>
                <Image
                  alt={`logo of ${name}`}
                  src={logos}
                  width={30}
                  height={30}
                />
                {name}
              </td>
              <td>{points}</td>
              <td>{gamesPlayed}</td>
              <td>{wins}</td>
              <td>{ties}</td>
              <td>{losses}</td>
              <td>
                {pointsFor} : {pointsAgainst}
              </td>
              <td>{pointDifferential}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
