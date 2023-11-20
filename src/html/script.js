function shortenUrl() {
  const originalUrl = document.getElementById("original-url").value;
  const shortUrlElement = document.getElementById("shortened-url");

  // API endpoint
  const apiUrl = "https://is.gd/create.php";

  // Parameters for the API request
  const params = new URLSearchParams({
    format: "json",
    url: originalUrl,
    // Add other optional parameters as needed, e.g., shorturl, callback, logstats
  });

  // Make API request
  fetch(`${apiUrl}?${params.toString()}`)
    .then((response) => response.json())
    .then((data) => {
      // Check if the API request was successful
      if (data && data.shorturl) {
        // Display the shortened URL
        shortUrlElement.textContent = data.shorturl;
      } else if (data && data.errormessage) {
        // Display the error message
        shortUrlElement.textContent = `Error: ${data.errormessage}`;
      } else {
        // Handle other errors
        shortUrlElement.textContent = "Error: Unable to shorten the URL.";
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      shortUrlElement.textContent =
        "Error: Unable to connect to the URL shortening service.";
    });
}
