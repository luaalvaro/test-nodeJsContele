export default function BillingAddress({ data, setData, errorsValidation }) {
    return (
        <div className="container containerPadding">
            <h2>Billing Address:</h2>
            <form autoComplete="off">
                <div className="row">
                    <div className="column">
                        <input value={data.address} onChange={(e) => setData({...data, address: e.target.value })} placeholder="Address Line 1:"></input>
                        {errorsValidation.billingAddress && <label>{errorsValidation.billingAddress}</label>}
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <input value={data.address2} onChange={(e) => setData({...data, address2: e.target.value })} placeholder="Address Line 2:"></input>
                        {errorsValidation.billingAddress2 && <label>{errorsValidation.billingAddress2}</label>}
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <input value={data.city} onChange={(e) => setData({...data, city: e.target.value })} placeholder="City" ></input>
                        {errorsValidation.billingCity && <label>{errorsValidation.billingCity}</label>}
                    </div>
                    <div className="column">
                        <input value={data.state} onChange={(e) => setData({...data, state: e.target.value })} placeholder="State" ></input>
                        {errorsValidation.billingState && <label>{errorsValidation.billingState}</label>}
                    </div> 
                    <div className="column">
                        <input value={data.zip} onChange={(e) => setData({...data, zip: e.target.value })} placeholder="Zip code"></input>
                        {errorsValidation.billingZip && <label>{errorsValidation.billingZip}</label>}
                    </div> 
                </div>
                <div className="row row-mark">
                    <input value={data.sameAddress} onChange={(e) => setData({...data, sameAddress: e.target.checked})} type="checkbox" className="checkmark"></input>
                    <span>Use shipping address same as billing address.</span>
                </div>
            </form>
        </div>
    )
} 