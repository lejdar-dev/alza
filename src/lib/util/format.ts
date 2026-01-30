export function formatPrice(price: number): string {
    return price.toLocaleString('cs-CZ', { maximumFractionDigits: 0, style: 'currency', currency: 'CZK' });
}