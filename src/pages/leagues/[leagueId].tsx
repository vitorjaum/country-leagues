import { Table } from "@/components/Table";

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

export default function League({ standings }: any) {
  const standingsList = standings.standings;

  return (
    <div>
      <Table standings={standingsList} />
    </div>
  );
}
