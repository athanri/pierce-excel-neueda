import Dropdown from "react-bootstrap/Dropdown"
import DropdownButton from "react-bootstrap/DropdownButton"

import uuid from 'react-uuid';

function CustomDropdown({items, setItems}) {
  const selectFile = (f) => {
    let filename = f.target.innerHTML;
    // const items = JSON.parse(localStorage.getItem([`${filename}`]));
    // console.log(items);
    // setItems(items);
  }
  return (
    <DropdownButton
        title="Previously imported"
        id="dropdown-menu-align-right"
      >   
      {
        items.map((f, i) => (
          <Dropdown.Item eventKey="f.excel" key={uuid()} onClick={selectFile}>{f}</Dropdown.Item>
        ))
      }
    </DropdownButton>
  );
}

export default CustomDropdown;

