# ExternalAPI
For this assignment, you will develop a simple web application using Node.js, Express, and an external API of your choice. The goal is to create a dashboard that allows users to enter a query and receive information based on the API's data, demonstrating real-time integration and data processing

Assignment: Using External APIs
Due Friday by 11pm Points 100 Submitting a text entry box or a website url

Requirements
Setup and Initialization:

Initialize a new Node.js project.
Install necessary packages like Express and Axios.
Set up an Express server in an app.js file.
API Integration:

Select an external API that provides data of interest (e.g., weather, news, financial data) and obtain an API key if required.
Here's a list of free APIs: https://rapidapi.com/collection/list-of-free-apisLinks to an external site.
Become familiar with the API documentation, especially the endpoints that retrieve data based on user inputs.
Create a Front-End:

Develop a simple HTML form that allows users to input data relevant to your chosen API (e.g., city name for a weather API, keyword for a news API).
Use static files middleware in Express to serve this HTML file.
Server-Side Logic:

Create an Express route that handles form submissions and fetches data using the input provided by the user.
Utilize Axios to make HTTP requests to the chosen API from your server.
Display Data:

On the server, parse the API response to extract and format relevant information.
Send this formatted data back to the client and display it dynamically on the webpage.
Error Handling:

Implement error handling on both the client and server sides to manage issues like incorrect input, API failures, or network problems.
Submission
Once you've completed all the requirements, upload your app to a GitHub repo and submit the repo link for grading.