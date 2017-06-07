import React, { PropTypes } from 'react';
import './list.css';
import ListItems from './listItems';

const List = (props) => {
  const func = props.func;
  return (
    <div className="list">
      <div className="list-header">
        Interests
      </div>
      <ListItems func={func} />
    </div>
  );
};

List.propTypes = {
  func: PropTypes.func.isRequired,
};

export default List;
