export default function Row({ data, setData }) {
    return (
        <div className="container containerPadding">
            <h2>Shipping Address:</h2>
            <form autoComplete="off">
                <div className="row">
                    <input value={data.address} onChange={(e) => setData({...data, address: e.target.value })} placeholder="Address Line 1:"></input>
                </div>
                <div className="row">
                    <input value={data.address2} onChange={(e) => setData({...data, address2: e.target.value })} placeholder="Address Line 2:"></input>
                </div>
                <div className="row">
                    <select value={data.city} onChange={(e) => setData({...data, city: e.target.value })}>
                        <option>City:</option>
                        <option>English</option>
                        <option>Portuguese</option>
                    </select>
                    <select value={data.state} onChange={(e) => setData({...data, state: e.target.value })}>
                        <option value="">State:</option>
                        <option value="">United States</option>
                        <option value="">Brazil</option>
                    </select>
                    <input value={data.zip} onChange={(e) => setData({...data, zip: e.target.value })} placeholder="Zip code"></input>
                </div>
            </form>
        </div>
    )
}