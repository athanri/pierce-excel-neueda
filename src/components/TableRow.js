const TableRow = ({ object }) => {
    return (
        Object.keys(object).map(key => {
            if (key !== 'id') {
                return <td key={key}>{object[key]}</td>
            }
        }
        )
    )
}

export default TableRow
