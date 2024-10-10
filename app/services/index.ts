export function formatToNairaCurrency(number: number) {
  const formatter = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
  });
  return formatter.format(number);
}
