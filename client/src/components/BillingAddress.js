export default function BillingAddress({ data, setData }) {
    return (
        <div className="container containerPadding">
            <h2>Billing Address:</h2>
            <form autoComplete="off">
                <div className="row">
                    <input value={data.address} onChange={(e) => setData({...data, address: e.target.value })} placeholder="Address Line 1:"></input>
                </div>
                <div className="row">
                    <input value={data.address2} onChange={(e) => setData({...data, address2: e.target.value })} placeholder="Address Line 2:"></input>
                </div>
                <div className="row">
                <input value={data.city} onChange={(e) => setData({...data, city: e.target.value })} placeholder="City" ></input>
                    <input value={data.state} onChange={(e) => setData({...data, state: e.target.value })} placeholder="State" ></input>
                    <input value={data.zip} onChange={(e) => setData({...data, zip: e.target.value })} placeholder="Zip code"></input>
                </div>
                <div className="row row-mark">
                    <input value={data.sameAddress} onChange={(e) => setData({...data, sameAddress: e.target.checked})} type="checkbox" className="checkmark"></input>
                    <label>Use shipping address same as billing address.</label>
                </div>
            </form>
        </div>
    )
} 