import styles from "./ProjectTile.module.css";

type ProjectTileProps = {
  name: string;
  logoUrl?: string;
  caption?: string;
};

/*
 * Square logo tile with the project name underneath.
 * Used on the profile page and the projects page.
 */
export default function ProjectTile({ name, logoUrl, caption }: ProjectTileProps) {
  return (
    <figure className={styles.tile}>
      <div className={styles.media}>
        {logoUrl ? (
          <img
            src={logoUrl}
            alt=""
            className={styles.logo}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
          />
        ) : (
          <span className={styles.fallback} aria-hidden="true">
            {name.slice(0, 1).toUpperCase()}
          </span>
        )}
      </div>

      <figcaption className={styles.caption}>
        <span className={styles.name}>{name}</span>
        {caption && <span className={styles.meta}>{caption}</span>}
      </figcaption>
    </figure>
  );
}
