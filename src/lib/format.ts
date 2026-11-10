const usd = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

// 6500 -> "$65.00". Whole-dollar amounts drop the cents: 6500 -> "$65".
export function formatPrice(cents: number): string {
  const formatted = usd.format(cents / 100);
  return cents % 100 === 0 ? formatted.replace(/\.00$/, "") : formatted;
}
