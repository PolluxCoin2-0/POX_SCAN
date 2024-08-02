export function extractSiteName(url) {
  // Remove the protocol (http, https, etc.)
  let siteName = url.split("//")[1];

  // Split by '/' to get the domain part
  siteName = siteName.split("/")[0];

  // Optionally, remove 'www.' if it exists
  if (siteName.startsWith("www.")) {
    siteName = siteName.substring(4);
  }

  // Remove the domain extension (.com, .net, etc.)
  siteName = siteName.split(".")[0];

  return siteName;
}

const url = "http://Blockdot.com";
const siteName = extractSiteName(url);
console.log(siteName); // Output: "Blockdot"
