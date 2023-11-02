import React from 'react';
import { FaAlignLeft, FaSearch } from "react-icons/fa"
import "../searchbox/SearchBox.scss"

function SearchBox() {

  return (
    <div>
      <div className="input-wrapper">
        <FaSearch id="search-icon" />
        <input placeholder="Search here..." type='search'></input>
        <i className='bx bx-bell' style={{ float: 'right', fontSize: '24px', marginRight: '10px' }} id='bell'></i>
        <i className='bx bx-user-circle' style={{ float: 'right', fontSize: '24px',marginRight: '10px' }}></i>
      </div>
    </div>
  );
}

export default SearchBox;
