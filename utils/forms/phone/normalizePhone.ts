export function normalizePhone(phoneNumber: string): string {
    // Используем регулярное выражение для удаления всего, кроме цифр
    return phoneNumber.replace(/\D/g, "");
}