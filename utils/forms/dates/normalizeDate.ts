export function normalizeDate(inputDate: string): string {
    const date = new Date(inputDate)
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    return `${String(day).padStart(2, '0')}.${String(month).padStart(2, '0')}.${year}`;
}