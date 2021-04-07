export default function ContactInfo({ data, setData, errorsValidation }) {
    return (
        <div className="container containerPadding">
            <h2>Contact Information:</h2>
            <form autoComplete="off">
                <div className="row">
                    <div className="column">
                        <input value={data.firstName} onChange={(e) => setData({...data, firstName: e.target.value })} placeholder="First Name:"></input>
                        {errorsValidation.firstName && <label>{errorsValidation.firstName}</label>}     
                    </div>
                    <div className="column">
                        <input value={data.lastName} onChange={(e) => setData({...data, lastName: e.target.value })} placeholder="Last Name:"></input>
                        {errorsValidation.lastName && <label>{errorsValidation.lastName}</label>}     
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <input value={data.email} onChange={(e) => setData({...data, email: e.target.value })} placeholder="Email Address:"></input>
                        {errorsValidation.email && <label>{errorsValidation.email}</label>}     
                    </div>
                    <div className="column">
                        <input value={data.phone} onChange={(e) => setData({...data, phone: e.target.value })} placeholder="Phone:"></input>
                        {errorsValidation.phone && <label>{errorsValidation.phone}</label>}     
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <select value={data.language} onChange={(e) => setData({...data, language: e.target.value })}>
                            <option value="">Language:</option>
                            <option value="English">English</option>
                            <option value="Portuguese">Portuguese</option>
                        </select>
                        {errorsValidation.language && <label>{errorsValidation.language}</label>}     
                    </div>
                    <div className="column">
                        <select value={data.country} onChange={(e) => setData({...data, country: e.target.value })}>
                            <option value="">Country:</option>
                            <option value="USA">United States</option>
                            <option value="Brazil">Brazil</option>
                        </select>
                        {errorsValidation.country && <label>{errorsValidation.country}</label>}     
                    </div>
                </div>
            </form>
        </div>
    )
}
