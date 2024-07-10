export const convertingDateTimeToDayMonth = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are 0-based in JavaScript
    return `${day}/${month}`;
}