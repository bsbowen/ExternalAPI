// Add an event listener to the form to handle submissions
document.getElementById('movieForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the values from the form inputs
    const query = document.getElementById('query').value; // Get the movie title or ID entered by the user
    const type = document.getElementById('type').value;   // Get the selected type (movie, series, episode)
    const year = document.getElementById('year').value;   // Get the optional year of release
    const plot = document.getElementById('plot').value;   // Get the selected plot length (short, full)

    try {
        // Make a POST request to the server with the form data
        const response = await fetch('/get-movie', {
            method: 'POST', // Use POST method
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded', // Specify the content type
            },
            body: new URLSearchParams({
                query: query, // Add the query parameter
                type: type,   // Add the type parameter
                year: year,   // Add the year parameter
                plot: plot   // Add the plot parameter
            }),
        });

        if (response.ok) {
            // Parse the JSON response from the server
            const data = await response.json();

            // Clear previous results
            document.getElementById('result').innerHTML = '';

            // Check if the response contains search results
            if (data.Search && data.Search.length > 0) {
                // Iterate over each movie in the search results
                data.Search.forEach(movie => {
                    // Create a new div element to hold the movie details
                    const movieElement = document.createElement('div');
                    movieElement.classList.add('movie'); // Add a class for styling

                    // Set the inner HTML of the div to display the movie details
                    movieElement.innerHTML = `
                        <img src="${movie.Poster}" alt="${movie.Title} Poster"> <!-- Movie poster -->
                        <div>
                            <h2>${movie.Title}</h2> <!-- Movie title -->
                            <p><strong>Year:</strong> ${movie.Year}</p> <!-- Movie year -->
                            <p><strong>Type:</strong> ${movie.Type}</p> <!-- Movie type -->
                        </div>
                    `;

                    // Append the movie div to the result container
                    document.getElementById('result').appendChild(movieElement);
                });
            } else {
                // Display a message if no results are found
                document.getElementById('result').textContent = 'No results found.';
            }
        } else {
            // Display an error message if the server response is not ok
            document.getElementById('result').textContent = 'Error retrieving data from server';
        }
    } catch (error) {
        // Display a network error message if the fetch fails
        document.getElementById('result').textContent = 'Network error';
    }
});
