import Head from "next/head";
import styles from "@/styles/Home.module.css";
import LeagueButton from "@/components/LeagueButton";

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
