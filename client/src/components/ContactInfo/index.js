import './styles.css'

export default function ContactInfo({ data, setData }) {
    return (
        <div className="container containerPadding">
            <h2>Contact Information:</h2>
            <form autoComplete="off">
                <div className="row">
                    <input value={data.firstName} onChange={(e) => setData({...data, firstName: e.target.value })} placeholder="First Name:"></input>
                    <input value={data.lastName} onChange={(e) => setData({...data, lastName: e.target.value })} placeholder="Last Name:"></input>
                </div>
                <div className="row">
                    <input value={data.email} onChange={(e) => setData({...data, email: e.target.value })} placeholder="Email Address:"></input>
                    <input value={data.phone} onChange={(e) => setData({...data, phone: e.target.value })} placeholder="Phone:"></input>
                </div>
                <div className="row">
                    <select value={data.language} onChange={(e) => setData({...data, language: e.target.value })}>
                        <option value="">Language:</option>
                        <option value="English">English</option>
                        <option value="Portuguese">Portuguese</option>
                    </select>
                    <select value={data.country} onChange={(e) => setData({...data, country: e.target.value })}>
                        <option value="">Country:</option>
                        <option value="USA">United States</option>
                        <option value="Brazil">Brazil</option>
                    </select>
                </div>
            </form>
        </div>
    )
} 