import React from 'react';
import styles from './Hero.scss';

const Hero = () => (
  <header className={styles.component}>
    <h2 className={styles.subtitle}>Things to do</h2>
    <img className={styles.picture} src="http://uploads.kodilla.com/bootcamp/fer/11.react/space.png"></img>     
  </header>
);

export default Hero;