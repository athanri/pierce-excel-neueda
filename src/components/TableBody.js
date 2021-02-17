import TableRow from "./TableRow";

import { FaTimes, FaEdit } from 'react-icons/fa'
import { Link } from "react-router-dom";

const TableBody = ({ items, currentRows, onDelete, filename }) => {
    return (
        <tbody>
            {
                currentRows.map((data2, i) => (
                    <tr key={i}>
                        <td key={87866}>
                            <Link to={{
                                    pathname: `edit/rowNo${i}`,
                                    items: items,
                                    filename: filename,
                                    id: data2.id
                                }}
                            >
                                <FaEdit 
                                    style={{ color: 'green', cursor: 'pointer'}}
                                />
                            </Link>
                        </td>
                        <TableRow object={data2}/>
                        <td key={87867}>
                            <FaTimes 
                                style= {{ color: 'red', cursor: 'pointer'}} 
                                onClick={() => onDelete(data2)}
                            />
                        </td>
                    </tr>
                ))
            }
        </tbody>
    )
}

export default TableBody

