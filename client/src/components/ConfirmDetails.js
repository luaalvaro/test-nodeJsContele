export default function ConfirmDetails({ contactInformation, shippingAddress, billingAddress, additionals }) {
    return (
        <div className="formSectionConfirm">
            <h2>Confirm that everything is correct</h2>

            <h2>Contact Information:</h2>
            <p>{`First name: ${contactInformation.firstName}`}</p>
            <p>{`Last name: ${contactInformation.lastName}`}</p>
            <p>{`Email: ${contactInformation.email}`}</p>
            <p>{`Phone number: ${contactInformation.phone}`}</p>
            <p>{`Language: ${contactInformation.language}`}</p>
            <p>{`Country: ${contactInformation.country}`}</p>

            <h2>Shipping Address:</h2>
            <p>{`Address Line 1: ${shippingAddress.address}`}</p>
            <p>{`Address Line 2: ${shippingAddress.address2}`}</p>
            <p>{`City: ${shippingAddress.city}`}</p>
            <p>{`State: ${shippingAddress.state}`}</p>
            <p>{`Zip code: ${shippingAddress.zip}`}</p>

            <h2>Billing Address:</h2>
            <p>{`Address Line 1: ${billingAddress.address}`}</p>
            <p>{`Address Line 2: ${billingAddress.address2}`}</p>
            <p>{`City: ${billingAddress.city}`}</p>
            <p>{`State: ${billingAddress.state}`}</p>
            <p>{`Zip code: ${billingAddress.zip}`}</p>

            <h2>Additionals:</h2>
            <p>{`Does any vehicle need to be equiped with a fuel off device?: ${additionals.vehicleEquipedWithFuelOff}`}</p>
            <p>{`Will any trackers be installed on a bike, truck or machinery?: ${additionals.bikeTruckOrMachinery}`}</p>
            <p>{`Will you need to identify the fleet drivers?: ${additionals.identifyFleet}`}</p>
            <p>{`How many trackers would like to purchase: ${additionals.manyTrackers}`}</p>

        </div>
    )
} 