export default function validateInfo(contactInformation, shippingAddress, billingAddress, additionals) {
    let errors = {};
    
    // contactInformation
    if (!contactInformation.firstName.trim()) { errors.firstName = "First name cannot be blank"} else {errors.firstName = ""}
    if (!contactInformation.lastName.trim()) { errors.lastName = "Last name cannot be blank"} else {errors.lastName = ""}
    if (!contactInformation.email.trim()) { errors.email = "Email cannot be blank"} else {errors.email = ""}
    if (!contactInformation.phone.trim()) { errors.phone = "Phone cannot be blank"} else {errors.phone = ""}
    if (!contactInformation.language.trim()) { errors.language = "Language cannot be blank"} else {errors.language = ""}
    if (!contactInformation.country.trim()) { errors.country = "Country cannot be blank"} else {errors.country = ""}

    if (contactInformation.email.indexOf("@") === -1) { errors.email = "Email must be valid"} else {errors.email = ""}
    // shippingAddress
    if (!shippingAddress.address.trim()) { errors.shippingAddress = "Shipping address cannot be blank"} else {errors.shippingAddress = ""}
    if (!shippingAddress.address2.trim()) { errors.shippingAddress2 = "Shipping address cannot be blank"} else {errors.shippingAddress2 = ""}
    if (!shippingAddress.city.trim()) { errors.shippingCity = "Shipping city cannot be blank"} else {errors.shippingCity = ""}
    if (!shippingAddress.state.trim()) { errors.shippingState = "Shipping state cannot be blank"} else {errors.shippingState = ""}
    if (!shippingAddress.zip.trim()) { errors.shippingZip = "Shipping zip code cannot be blank"} else {errors.shippingZip = ""}
 
    if (billingAddress.sameAddress === false) {
        // billingAddress
        if (!billingAddress.address.trim()) { errors.billingAddress = "Billing address cannot be blank"} else {errors.billingAddress = ""}
        if (!billingAddress.address2.trim()) { errors.billingAddress2 = "Billing address cannot be blank"} else {errors.billingAddress2 = ""}
        if (!billingAddress.city.trim()) { errors.billingCity = "Billing city cannot be blank"} else {errors.billingCity = ""}
        if (!billingAddress.state.trim()) { errors.billingState = "Billing state cannot be blank"} else {errors.billingState = ""}
        if (!billingAddress.zip.trim()) { errors.billingZip = "Billing zip code cannot be blank"} else {errors.billingZip = ""}
    }
    // additionals
    if (!additionals.manyTrackers) { errors.manyTrackers = "Please, how many trackers would you like to purchase?"} else {errors.manyTrackers = ""}


    return errors;
}