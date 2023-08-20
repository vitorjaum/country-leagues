import styles from "../styles/LeaguePage.module.css";

interface standingsProps {
  standings: [
    {
      team: { name: string };
      stats: [{ name: string; value: string | number }];
    }
  ];
}

export function Table({ standings }: standingsProps) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <td></td>
          <td>Name:</td>
          <td>Points:</td>
          <td>Games Played:</td>
          <td>Losses:</td>
          <td>Goal Difference:</td>
          <td>Goals Against:</td>
          <td>Goals For:</td>
          <td>Draws:</td>
        </tr>
      </thead>
      <tbody>
        {standings.map((club, idx) => {
          const name = club.team.name;
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
          } = itemsInfo;

          return (
            <tr key={idx}>
              <td>{rank}</td>
              <td>{name}</td>
              <td>{points}</td>
              <td>{gamesPlayed}</td>
              <td>{losses}</td>
              <td>{pointDifferential}</td>
              <td>{pointsAgainst}</td>
              <td>{pointsFor}</td>
              <td>{ties}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
