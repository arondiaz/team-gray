import styles from './About.module.scss';
import MemberCard from './MemberCards';
import BgLayout from '../../shared/BackgroundLayout';

export const About = () => {
  const text =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel dolor sed quam consequat pretium. Curabitur pulvinar feugiat dui sed commodo. Nullam efficitur consequat tellus, vel finibus enim condimentum a. Duis lacinia, elit sed tempor facilisis, nisl odio lacinia turpis, vitae varius lorem velit nec lectus. Vivamus eget quam quis sapien ultrices bibendum. Suspendisse nec mi vitae nisl gravida tempus sed sit amet enim. Cras congue lacus et sollicitudin efficitur. Pellentesque venenatis lacus in aliquam rhoncus. Curabitur semper auctor augue nec rutrum. Fusce ac orci id libero vulputate malesuada.';

  return (
    <div>
      <section>
        <div>
          <MemberCard
            name="Nicolás Loreto"
            imageUrl="src\assets\images\ProfilePhotos\nicolas.webp"
            githubUrl="https://github.com/NicoLoreto"
            linkedinUrl="https://www.linkedin.com/in/nico-loreto/"
          />
        </div>
        <div>
          <MemberCard
            name="Hernán Gobulin"
            imageUrl="src\assets\images\ProfilePhotos\hernan.webp"
            githubUrl="https://github.com/hernan-go"
            linkedinUrl="https://www.linkedin.com/in/h-l-g/"
          />
        </div>
        <div>
          <MemberCard
            name="Arón Díaz"
            imageUrl="src\assets\images\ProfilePhotos\aron.webp"
            githubUrl="https://github.com/arondiaz"
            linkedinUrl="https://www.linkedin.com/in/arondiaz/"
          />
        </div>
      </section>
      <div className={styles.text}>{text}</div>
      <BgLayout />
    </div>
  );
};
