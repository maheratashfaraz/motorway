export const formatCurrency = (amount) => {
    let formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'GBP',
        minimumFractionDigits: 0,
    });

    return formatter.format(amount);
}
