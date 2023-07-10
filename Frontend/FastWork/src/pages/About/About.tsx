
import styles from './About.module.scss';



export const About = () => {
  return (
    <>
    <div className= {styles.aboutcontainer}>
      <section>
        <div>
          <img src="src\assets\images\ProfilePhotos\nicoo.webp"  className={styles.imageprofile} alt="member" />

          <h2>Nicolas Loreto</h2>

          <ul>
            <li>
              <a href="https://github.com/NicoLoreto" target='_blank'>
              <img src="src\assets\icons\icon-github.svg" className={styles.icon} alt="icon-git" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/nico-loreto/" target='_blank'>
                <img src="src\assets\icons\icon-linkedin.svg" className={styles.icon} alt="icon-linkedin" />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <img src="src\assets\images\ProfilePhotos\hernan.webp" className={styles.imageprofile} alt="member" />

          <h2>Hernán Gobulin</h2>

          <ul>
            <li>
              <a href="https://github.com/hernan-go" className="github-icon" target='_blank'>
              <img src="src\assets\icons\icon-github.svg" className={styles.icon} alt="icon-git" />
              
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/h-l-g/" target='_blank'>
              <img src="src\assets\icons\icon-linkedin.svg" className={styles.icon} alt="icon-linkedin" />
              </a>
            </li>
          </ul>
        </div>

        <div>
          <img src="src\assets\images\ProfilePhotos\aronn.webp" className={styles.imageprofile} alt="member" />

          <h2>Arón Díaz</h2>

          <ul>
            <li>
              <a href="https://github.com/aron0ne" className="github-icon" target='_blank'>
                <img src="src\assets\icons\icon-github.svg" className={styles.icon} alt="icon-git" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/arondiaz/" target='_blank'>
              <img src="src\assets\icons\icon-linkedin.svg" className={styles.icon} alt="icon-linkedin" />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <img src="src\assets\images\ProfilePhotos\diego.webp" className={styles.imageprofile} alt="member" />

          <h2>Diego Hamui</h2>

          <ul>
            <li>
              <a href="https://github.com/DIEGOHAMUI" className="github-icon" target='_blank'>
             
                <img src="src\assets\icons\icon-github.svg" className={styles.icon} alt="icon-git" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/diegojesushamui/" target='_blank'>
              <img src="src\assets\icons\icon-linkedin.svg" className={styles.icon} alt="icon-linkedin" />
              </a>
            </li>
          </ul>
          
        </div>
      
      </section>
     
    </div>
    
    </>
  )
};
