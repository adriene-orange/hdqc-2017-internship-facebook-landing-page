import React, { PropTypes } from 'react';
import './list.css';
import ListItems from './listItems';

const List = (props) => {
  const { func, store } = props;
  return (
    <div className="list">
      <div className="list-header">
        Interests
      </div>
      <ListItems func={func} store={store} />
    </div>
  );
};

List.propTypes = {
  func: PropTypes.func.isRequired,
  store: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default List;
