import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    img: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  }

  static defaultProps = {
    children: <p>I can do all the things!!!</p>,
  }

  render() {

    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title}
          src={this.props.img}>
        </Hero>
        <div className={styles.description}>
          {this.props.children}
        </div>
      </section>  
    )
  }
}

export default List;