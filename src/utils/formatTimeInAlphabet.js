export const formatTimeInAlphabet = (timestamp) => {
  let date;

  if (typeof timestamp === "string") {
    date = new Date(timestamp);
  } else if (typeof timestamp === "number") {
    date = new Date(timestamp);
  } else {
    throw new Error("Invalid timestamp format");
  }

  return date.toLocaleDateString("en-US", {
    weekday: "short", // Day of the week in alphabetical form
    month: "long", // Month in alphabetical form
    day: "numeric", // Date in numeric form
    year: "numeric", // Year in numeric form
  });
};
