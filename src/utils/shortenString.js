export function shortenString(str,value) {
    if (str.length <= 8) {
        return str; // If the string is 8 characters or less, return it as is
    }
    const start = str.substring(0, value); // First 4 characters
    const end = str.substring(str.length - value); // Last 4 characters
    return `${start}...${end}`;
}
