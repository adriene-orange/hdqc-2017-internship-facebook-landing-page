import React, { PropTypes } from 'react';
import ListItems from '../ListItems/listItems';
import './list.css';

const List = (props) => {
  const { userData } = props;
  return (
    <div className="list">
      <div className="list-header">
        Interests
      </div>
      <ListItems userData={userData} />
    </div>
  );
};

List.propTypes = {
  userData: PropTypes.objectOf(PropTypes.array).isRequired,
};

export default List;
