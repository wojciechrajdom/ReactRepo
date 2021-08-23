import React from 'react';
import styles from './Column.scss';


class Column extends React.Component {
    render() {
        return (

            <section className={styles.component}>
                <h3 className={styles.title}>Things I want to check out</h3>
                    <columns className={styles.columns} titleText={this.props.title} />
                    <columns className={styles.columns} titleText={this.props.title} />
                    <columns className={styles.columns} titleText={this.props.title} />
            </section>     
        )            
    }
}

Column.propTypes = {
    titleText: PropTypes.string.isRequired,
    
};

export default Column;
