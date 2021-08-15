import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';

const Hero = props => (
  <header className={styles.component}>
    <h2 className={styles.title}>{props.titleText}</h2>
    <h2 className={styles.image}>{props.imgNext}</h2>    
  </header>
);

Hero.propTypes = {
  titleText: PropTypes.node.isRequired,
  img: PropTypes.string.isRequired,
};

export default Hero;