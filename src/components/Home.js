import { useState } from "react";

import Table from "./Table";
import Upload from "./Upload";
import Export from "./Export"
// import CustomDropdown from "./CustomDropdown";

function Home() {
  const [filename,  setFileName] = useState([]);
  const [items, setItems] = useState([]);

  if (!localStorage.getItem('filename')) {
    const lsObj = {filename, items};
    const strObj = JSON.stringify(lsObj);
    localStorage.setItem('filename', strObj);
  }

  return (
    <div className="container mt-3">
      {/* <CustomDropdown items={items} setItems={setItems}/> */}
      <Upload filename={filename} setFileName={setFileName} items={items} setItems={setItems}/>
      <Table items={items} filename={filename} setItems={setItems}/>
      <Export items={items}/>
    </div>
  );
}

export default Home;
