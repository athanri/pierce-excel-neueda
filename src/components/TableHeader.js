const TableHeader = ({ items }) => {
    return (
        <thead>
            <tr key={1234}>
                <th>Edit</th>
                {
                    Object.keys(items[0]).map(key => {
                        if (key !== 'id') {
                            return <th key={key}>{key}</th>
                        }
                    }   
                    )
                }  
                <th>Delete</th>
            </tr>
        </thead>
    )
}

export default TableHeader