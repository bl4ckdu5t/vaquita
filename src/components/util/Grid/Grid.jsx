import React from 'react';
import styles from './Grid.scss';

const responsiveType = (selectedType) => {
  let types = {
    small: () => styles['responsive-sm'],
    medium: () => styles['responsive-md'],
    large: () => styles['responsive-lg'],
  }
  return types[selectedType]();
};

const Grid = (props) => (
  <div className={`
    ${styles.row}
    ${ props.responsive ? responsiveType(props.responsive) : '' }
    ${props.className}
    `}>
    {props.children}
  </div>
);

const GridCol = (props) => (
  <div className={`
    ${styles.col}
    ${ props.column ? styles[`col-${props.column}`] : '' }
    ${props.className}
    `}>
    {props.children}
  </div>
);


Grid.propTypes = {
  className: React.PropTypes.string,
  responsive: React.PropTypes.string,
};

GridCol.propTypes = {
  className: React.PropTypes.string,
  column: React.PropTypes.string,
};

Grid.defaultProps = {
  className: '',
  responsive: '',
};

GridCol.defaultProps = {
  className: '',
  column: '',
};

export { Grid, GridCol };
