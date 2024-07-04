export const secondsAgo = (timestamp) => {
    const now = Date.now(); // Get the current timestamp in milliseconds
    const difference = now - timestamp; // Calculate the difference in milliseconds
    const seconds = Math.floor(difference / 1000); // Convert milliseconds to seconds
    return seconds;
  };