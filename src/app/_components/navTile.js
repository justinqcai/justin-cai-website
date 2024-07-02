import styles from "./navTile.module.css";

function NavTile({ current, sectionName }) {
  return (
    <li className={`${styles.tile}`}>
      <a
        href={`#${sectionName}`}
        className={current == sectionName ? `${styles.current}` : ``}
      >
        <span className={`${styles.indicator}`}></span>
        <span>{sectionName}</span>
      </a>
    </li>
  );
}

export default NavTile;
