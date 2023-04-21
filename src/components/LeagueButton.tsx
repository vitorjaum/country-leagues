import Link from "next/link";
import styles from "../styles/LeagueButton.module.css";

type leagueProps = {
  name: string;
  id: string;
};

export default function LeagueButton(leagueProps: leagueProps) {
  const { name, id } = leagueProps;

  return (
    <>
      <Link legacyBehavior href={`/leagues/${id}`}>
        <div className={styles.league_button}>
          <p className={styles.leagues_button}>{name}</p>
        </div>
      </Link>
    </>
  );
}
