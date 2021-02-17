import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

import { useState } from "react";

import Pagination from './Pagination';

import Dropdown from "react-bootstrap/Dropdown"
import DropdownButton from "react-bootstrap/DropdownButton"

const Table = ({ items, setItems, filename }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(1);

    //get current rows
    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = items.slice(indexOfFirstRow, indexOfLastRow);

    //change page
    const paginate = (pageNumbers) => setCurrentPage(pageNumbers)

    const deleteRow = (data) => {
        setItems(items.filter((item, index) => item.id !== data.id))
    };

    const handleSelect=(e)=>{
        setRowsPerPage(e)
    }

    if (items.length === 0 || items === null) {
        return (
            <>
                <h2 className="text-center">No Data</h2>
            </>
        )
    } else {
        return (
            <div className="input-group container mt-3 mb-3">
                <DropdownButton
                    title="No. Of Rows"
                    id="dropdown-menu-align-right"
                    onSelect={handleSelect}
                >
                    <Dropdown.Item eventKey="1">1</Dropdown.Item>
                    <Dropdown.Item eventKey="5">5</Dropdown.Item>
                    <Dropdown.Item eventKey="10">10</Dropdown.Item>
                    <Dropdown.Item eventKey="15">15</Dropdown.Item>
                </DropdownButton>
                <table className="table container">
                    <TableHeader items={items} />
                    <TableBody filename={filename} items={items} currentRows={currentRows} setItems={setItems} onDelete={deleteRow}/>
                </table>
                <Pagination rowsPerPage={rowsPerPage} totalRows={items.length} paginate={paginate}/>
            </div>
        ) 
    }
}

export default Table