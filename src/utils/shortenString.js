export function shortenString(str) {
    if (str.length <= 8) {
        return str; // If the string is 8 characters or less, return it as is
    }
    const start = str.substring(0, 4); // First 4 characters
    const end = str.substring(str.length - 4); // Last 4 characters
    return `${start}...${end}`;
}

const longString = "PBhzDbe4jCUqhhC2S5UnEBKZKhyw978PrU";
const shortString = shortenString(longString);

console.log(shortString); // Output: PBhz...8PrU
