import style from './BgLayout.module.scss';

export const BgLayout: React.FC = () => {
  return (
    <>
      <div className={style.isotipoLogoContainer}>
        <img
          src="../isotype_bg_layout.svg"
          alt="Logo"
          className={style.isotipoLogo}
        />
      </div>
    </>
  );
};

export default BgLayout;
