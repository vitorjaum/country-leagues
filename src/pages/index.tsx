import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import LeagueButton from "@/components/LeagueButton";
import { Footer } from "@/components/Footer";

interface leagueProps {
  id: string;
  name: string;
  logos: { dark: string; light: string };
}

type dataApi = {
  leagues: {
    data: Array<leagueProps>;
  };
};

export async function getStaticProps() {
  const res = await fetch("http://api-football-standings.azharimm.dev/leagues");
  const data = await res.json();

  data.data.map((league: leagueProps) => {
    league.id == "bra.1" && (league.name = "Brasileirão Serie A");
  });

  return {
    props: {
      leagues: data,
    },
  };
}

export default function Home({ leagues }: dataApi) {
  const leaguesInfo = leagues?.data;

  return (
    <>
      <Head>
        <title>Country Leagues</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={styles.main}>
        <nav className={styles.nav_buttons}>
          {leaguesInfo.map((league, idx) => {
            return <LeagueButton info={league} key={idx} />;
          })}
        </nav>
      </main>
    </>
  );
}
