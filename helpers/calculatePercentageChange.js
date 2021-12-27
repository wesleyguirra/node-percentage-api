/**
 * 
 * @param {*} baseValue The initial value
 * @param {*} newValue The new value
 */
const calculatePercentageChange = (baseValue, newValue) => {
    if (baseValue > newValue) {
        // We have a discount
        return ((baseValue - newValue) / baseValue) * 100
    } else if (newValue > baseValue) {
        // We have an increase
        return ((newValue - baseValue) / baseValue) * 100
    }
    return 0
}

module.exports = calculatePercentageChange