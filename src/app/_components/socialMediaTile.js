import Image from "next/image";
import styles from "./socialMediaTile.module.css";

function SocialMediaTile({ icon, href }) {
  return (
    <li className={`${styles.tile}`}>
      <a href={href} target="_blank">
        <Image src={icon} alt={href} />
      </a>
    </li>
  );
}

export default SocialMediaTile;
