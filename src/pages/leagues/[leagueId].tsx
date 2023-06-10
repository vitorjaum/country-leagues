type leagueProps = {
  name: string;
  id: string;
  slug: string;
};

type contextProps = {
  params: {
    leagueId: string;
  };
};

export async function getStaticPaths() {
  const res = await fetch("http://api-football-standings.azharimm.dev/leagues");
  const data = await res.json();

  const paths = data.data.map((league: leagueProps) => {
    return {
      params: { leagueId: league.id },
    };
  });
  return { paths, fallback: false };
}

export async function getStaticProps(context: contextProps) {
  const id = context.params.leagueId;

  const res = await fetch(
    `http://api-football-standings.azharimm.dev/leagues/${id}/standings`
  );
  const data = await res.json();

  return { props: { standings: data.data } };
}

type teamProps = {
  team: {
    name: string;
  };
  stats: Array<statsProps>;
};

type statsProps = {
  losses: number;
  gamesPlayed: number;
};

type itemsInfo = {
  name?: string;
  logos?: string;
  gamesPlayed: string;
  losses: string;
  pointDifferential: string;
  points: string;
  goalsAgainst: string;
  goalsFor: string;
  drawns: string;
};

export default function League({ standings }: any) {
  const teamList = standings.standings;
  // console.log(standings);
  const itemsInfo: itemsInfo = {};
  console.log({ teamList });

  console.log({ itemsInfo });
  return (
    <>
      <table>
        <thead>
          <tr>
            <td>Name:</td>
            <td>Games Played:</td>
            <td>Losses:</td>
            <td>Goal Difference:</td>
            <td>points:</td>
            <td>Goals Against:</td>
            <td>Goals For:</td>
            <td>Draws:</td>
            <td>:</td>
          </tr>
        </thead>
        <tbody>
          {teamList.map((currTeam, idx) => {
            const teamInfo = currTeam.team;
            const teamStats = currTeam.stats;
            itemsInfo.name = teamInfo.name;
            itemsInfo.logos = teamInfo.logos;

            teamStats.map((stats) => {
              itemsInfo[stats.name as keyof itemsInfo] = stats.value;
            });

            const {
              gamesPlayed,
              losses,
              pointDifferential,
              points,
              goalsAgainst,
              goalsFor,
              drawns,
              name,
            } = itemsInfo;

            return (
              <tr key={idx}>
                <td>{name}</td>
                <td>{gamesPlayed}</td>
                <td>{losses}</td>
                <td>{pointDifferential}</td>
                <td>{points}</td>
                <td>{goalsAgainst}</td>
                <td>{goalsFor}</td>
                <td>{drawns}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
