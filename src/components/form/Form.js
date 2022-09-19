export default function Form({ setCity, handleClick, setTime }) {

    return (
        <div className="row  my-3">
            <div className="col-sm-6 d-flex align-items-center">
                <input type="text" className="text-end form-control form-control-sm w-75 h-75" placeholder="شهر مورد نظر..." onChange={(e) => setCity(e.target.value) }/>
            </div>
            <div className="col-sm-6 my-2 d-flex">
                <div className="input-group w-50">
                    <div className="input-group-prepend">
                        <label htmlFor="time" className="input-group-text">زمان</label>
                    </div>
                    <select defaultValue={'default'} className="custom-select" id="time" onChange={(e) => setTime(e.target.value)}>
                        <option value='default'>هم اکنون</option>
                        <option value={0}>صبح</option>
                        <option value={1}>ظهر</option>
                        <option value={3}>شب</option>
                    </select>
                </div>
                <div className="">
                    <button className="btn btn-sm btn-primary text-white mx-3" onClick={handleClick}>جست و جو</button>
                </div>
            </div>
        </div>
    )
}