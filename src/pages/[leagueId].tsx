import styles from "../styles/LeaguePage.module.css";
import { Table } from "@/components/Table";
import Head from "next/head";
import Image from "next/image";

type leagueProps = {
  name: string;
  id: string;
  slug: string;
};

type contextProps = {
  params: {
    leagueId: string;
  };
  items: {
    name: string;
  };
};

type compProps = {
  standings: [
    {
      team: { name: string; logos: [{ href: string }] };
      stats: [{ name: string; value: string | number }];
    }
  ];
  leagueData: { name: string; logos: { light: string } };
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

  const res2 = await fetch(
    `http://api-football-standings.azharimm.dev/leagues/${id}`
  );
  const data2 = await res2.json();

  return { props: { standings: data.data.standings, leagueData: data2.data } };
}

export default function League({ standings, leagueData }: compProps) {
  const standingsList = standings;
  const leagueName = leagueData.name;
  const leagueTrophy = leagueData.logos.light;

  return (
    <>
      <Head>
        <title>{leagueName}</title>
      </Head>
      <div className={styles.main}>
        <Image
          src={leagueTrophy}
          width={120}
          height={120}
          alt="League Trophy"
        />
        <Table standings={standingsList} />
      </div>
    </>
  );
}
