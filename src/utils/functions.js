export const formatCurrency = (num) =>
  Math.sign(num) === -1
    ? `-₦${num
        .toFixed(2)
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
        .slice(1)}`
    : `₦${num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}`;
