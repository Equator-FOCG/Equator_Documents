import styles from "./card.module.css";
import Link from "@docusaurus/Link";
import GithubLogo from "@site/static/img/github.svg";

export const GithubCard = ({ link, title }) => {
  return (
    <Link href={link} className={styles.GithubLink}>
      <div>
        <GithubLogo className={styles.GithubLinkImg} title="github" />
      </div>
      <div>
        <span className={styles.GithubLinkText}> {title} </span>
      </div>
    </Link>
  );
};
