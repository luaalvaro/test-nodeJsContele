export default function Row({ data, setData, errorsValidation }) {
    return (
        <div className="container containerPadding">
            <h2>Shipping Address:</h2>
            <form autoComplete="off">
                <div className="row">
                    <div className="column">
                        <input value={data.address} onChange={(e) => setData({...data, address: e.target.value })} placeholder="Address Line 1:"></input>
                        {errorsValidation.shippingAddress && <label>{errorsValidation.shippingAddress}</label>}
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <input value={data.address2} onChange={(e) => setData({...data, address2: e.target.value })} placeholder="Address Line 2:"></input>
                        {errorsValidation.shippingAddress2 && <label>{errorsValidation.shippingAddress2}</label>}

                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <input value={data.city} onChange={(e) => setData({...data, city: e.target.value })} placeholder="City" ></input>
                        {errorsValidation.shippingCity && <label>{errorsValidation.shippingCity}</label>}

                    </div>
                    <div className="column">
                        <input value={data.state} onChange={(e) => setData({...data, state: e.target.value })} placeholder="State" ></input>
                        {errorsValidation.shippingState && <label>{errorsValidation.shippingState}</label>}

                    </div>
                    <div className="column">
                        <input value={data.zip} onChange={(e) => setData({...data, zip: e.target.value })} placeholder="Zip code"></input>
                        {errorsValidation.shippingZip && <label>{errorsValidation.shippingZip}</label>}
                    </div>
                </div>
            </form>
        </div>
    )
}