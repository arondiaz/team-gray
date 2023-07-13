import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <span className={styles.text}>© GrayTeam_MiracleLab_2023</span>
        <div className={styles.icons}>
          <a href='https://github.com/labmiracle/team-gray' target='_blank'>
            <img src='src\assets\icons\icon-github.svg' alt='' className={styles.icon} />
          </a>

          <a href=''>
            <img src='src\assets\icons\icon-linkedin.svg' alt='' className={styles.icon} />
          </a>

          <a href=''>
            <img src='src\assets\icons\icon-ig.svg' alt='' className={styles.icon} />
          </a>
        </div>
      </footer>
    </>
  );
};
