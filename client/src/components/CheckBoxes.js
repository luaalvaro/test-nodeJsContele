export default function CheckBoxes({ data, setData, errorsValidation }) {
    return (
        <div className="container containerPadding">
            <h2>Check the boxes below:</h2>
            <form autoComplete="off">
                <div className="row">
                    <div className="row row-mark">
                    <input value={data.vehicleEquipedWithFuelOff} onChange={(e) => setData({...data, vehicleEquipedWithFuelOff: e.target.checked })} type="checkbox" className="checkmark"></input>
                    <span>Does any vehicle need to be equiped<br /> with a fuel off device?</span>
                    </div>
                    <div className="row row-mark">
                    <input value={data.bikeTruckOrMachinery} onChange={(e) => setData({...data, bikeTruckOrMachinery: e.target.checked })} type="checkbox" className="checkmark" ></input>
                    <span>Will any trackers be installed on a bike,<br /> truck or machinery?</span>
                    </div>
                </div>
                <div className="row row-mark">
                    <input value={data.identifyFleet} onChange={(e) => setData({...data, identifyFleet: e.target.checked })} type="checkbox" className="checkmark"></input>
                    <span>Will you need to identify the fleet drivers?</span>
                </div>
                <div className="row">
                    <div className="column">
                        <input value={data.manyTrackers} onChange={(e) => setData({...data, manyTrackers: e.target.value })} min="0" type="number" placeholder="How many trackers would like to purchase?"></input>
                        <label>{errorsValidation.manyTrackers}</label>
                    </div>
                </div>
            </form>
        </div>
    )
} 