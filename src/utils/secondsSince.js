export function secondsSince(timestamp) {
    // Parse the timestamp
    const date = new Date(timestamp);
    // Get the current time
    const now = new Date();
    // Calculate the difference in seconds
    const difference = Math.floor((now - date) / 1000);

    // Calculate minutes and seconds
    const minutes = Math.floor(difference / 60);
    const seconds = difference % 60;

    return { minutes: minutes, seconds: seconds };
}

// Example usage
const timestamp = "2024-07-05T05:35:42.720Z";
const result = secondsSince(timestamp);
console.log(`${result.minutes} minutes and ${result.seconds} seconds ago`);


