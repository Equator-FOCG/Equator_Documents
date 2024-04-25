import styles from "./card.module.css";
import Link from "@docusaurus/Link";
import WebLogo from "@site/static/img/web.svg";

export const WebCard = ({ link, title }) => {
  return (
    <Link href={link} className={styles.GithubLink}>
      <div>
        <WebLogo className={styles.GithubLinkImg} title="github" />
      </div>
      <div>
        <span className={styles.GithubLinkText}> {title} </span>
      </div>
    </Link>
  );
};
