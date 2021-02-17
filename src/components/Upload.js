import * as XLSX from "xlsx";
import uuid from 'react-uuid';

const Upload = ({ setItems, setFileName, filename, items }) => {
    const readExcel=(file)=>{
        if (!file) {
            let yesNo = window.confirm('No file Selected, Delete Data?');
             if (yesNo) {
                setItems([]);
             } else {
                 //do nothing                
             }
            
        } else {
            setFileName(file.name);
                const promise= new Promise((res, rej) => {
                    const fileReader = new FileReader();
                    fileReader.readAsArrayBuffer(file);
            
                    fileReader.onload = (e) => {
                        const bufferArray = e.target.result;
            
                        const workBook=XLSX.read(bufferArray, {type: 'buffer'});
            
                        const workSheetName = workBook.SheetNames[0];
            
                        const workSheet = workBook.Sheets[workSheetName];
            
                        const data = XLSX.utils.sheet_to_json(workSheet);
            
                        res(data);
                    };
            
                    fileReader.onerror=((error) => {
                        rej(error);
                    })
                });
            
                promise.then((data) => {
                    data.map((obj) => {
                        obj.id = uuid();
                        return obj;
                    })
                    setItems(data);
                });
            }
    };

    return (
        <div className="input-group container mt-3 mb-3">
            <input id="inputGroupFile02" className="form-control" type="file" onChange={(e) => {
                const file = e.target.files[0];
                readExcel(file);
            }}/>
            <label className="input-group-text" htmlFor="inputGroupFile02">Upload</label>
        </div>
    )
}

export default Upload