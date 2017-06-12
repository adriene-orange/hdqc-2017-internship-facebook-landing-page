import React, { PropTypes } from 'react';
import './list.css';
import ListItems from './listItems';

const List = (props) => {
  const { func, userData } = props;
  return (
    <div className="list">
      <div className="list-header">
        Interests
      </div>
      <ListItems func={func} userData={userData} />
    </div>
  );
};

List.propTypes = {
  func: PropTypes.func.isRequired,
  userData: PropTypes.objectOf(PropTypes.array).isRequired,
};

export default List;
