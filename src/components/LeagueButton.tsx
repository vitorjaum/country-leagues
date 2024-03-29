import Link from "next/link";
import styles from "../styles/LeagueButton.module.css";

type leagueProps = {
  info: {
    name: string;
    id: string;
    logos: { dark: string; light: string };
  };
};

export default function LeagueButton({ info }: leagueProps) {
  const { name, id, logos } = info;

  const trophy = logos?.light;
  return (
    <>
      <Link legacyBehavior href={`/${id}`} style={{ backgroundColor: "red" }}>
        <div
          className={styles.league_container}
          style={{ backgroundImage: `url(${trophy})` }}
        >
          <p>{name}</p>
        </div>
      </Link>
    </>
  );
}
