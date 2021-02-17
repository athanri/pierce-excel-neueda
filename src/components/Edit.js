import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

const Edit = ({ location }) => {
    const { filename } = location;
    const { id } = location;
    let { items } = location;
    let itemData = items.filter((key) => key.id === id);

    const inputChangedHandler = (editItem, e, key) => {
        editItem[key] = e.target.value;
        itemData[0] = editItem;
    }

    // const saveItems = () => {
    //     items.map((item, i) => {
    //         if (item.id === itemData[0].id) {
    //             return item = itemData[0]
    //         }
    //     })

    //     localStorage.setItem(filename, JSON.stringify(items));
    // }
    const deleteItem = () => {
        const yesNo = window.confirm('Delete Item?');
        if (yesNo) {
            items.splice(id, 1);
            localStorage.setItem(filename, JSON.stringify(items));
        }
    }

    return (
        <div className="container mt-3">
            <Form>
                {
                    Object.keys(itemData[0]).map((key, i) => {
                        if (key !== 'id') {
                            return <Form.Group key={i} controlId="formBasicEmail">
                                        <Form.Label>{key}</Form.Label>
                                        <Form.Control type="text" defaultValue={itemData[0][key]} onChange={(event)=>inputChangedHandler(itemData[0], event, key)}/>
                                    </Form.Group>       
                        }
                    }

                    )
                }
                <Button className="mt-3" variant="primary" type="button">
                    Save
                </Button>
                <Button className="mt-3 mx-2" variant="danger" type="button" onClick={deleteItem}>
                    Delete
                </Button>
            </Form>
        </div>
    )
}

export default Edit