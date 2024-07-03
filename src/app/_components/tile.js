"use client";
import styles from "@components/tile.module.css";
import Image from "next/image";

function Tile({
  link,
  date,
  jobTitle,
  company,
  picture,
  projectName,
  skills,
  children,
}) {
  // const { link, date, jobTitle, company } = job;
  // const { picture, name } = project;

  // console.log(job);
  return (
    <li className={`${styles.tile}`}>
      <a href={link} target="_blank">
        <div className={`${styles.jobTile}`}>
          <div className={`${styles.hover}`}></div>
          <div className={`${styles.leftPane}`}>
            {picture ? (
              <Image
                className={`${styles.image}`}
                src={picture.src}
                alt={`${picture.alt}`}
              />
            ) : (
              <header>{date}</header>
            )}
          </div>
          <div className={`${styles.rightPane}`}>
            <h1 className={`${styles.name}`}>
              {jobTitle ? `${jobTitle} · ${company}` : `${projectName}`}
            </h1>

            <p>{children}</p>
            {skills ? (
              <ul className={styles.skillList}>
                {skills.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            ) : (
              ""
            )}
          </div>
        </div>
      </a>
    </li>
  );
}

export default Tile;
