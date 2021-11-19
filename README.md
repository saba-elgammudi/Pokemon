# Approach
- The API endpoint with the data was consumed but the image to be displayed is in another url returned by the request made to the first endpoint.
- To solve the challenge state above, after getting the response from the first call, the response was nested through, and the url it returns was used to make another api call.
- The response from both calls were used in creating an array of object, from which we display the output.

# Challenges
- While nesting through the endpoints, useState hook didn't work as expected when the image was pushed into the state. The temporary walkthrough I made to this blocker was to use the array push with the useState inroder to ensure that the new object created was added to the array and used useState to update it. Due to time constraint and my schedule for other activities, I couldn't spend much time to look into alternatives.
- Also, the search functionality wasn't implemented due to time constraint, since the data we are getting from the endpoint is big. My approach, if time permit, would have been making a paginated call to the endpoint e.g we have 1000 records, i will make a pagination of 100 using a loop and a Promise.all, to emsure that all promise resolve, and merging the search result gotten from the filter.

# Technologies
- React Js

# Instructions

This is a pokeman take home challenge, consuming API from https://pokeapi.co/api/v2/pokemon

## Installation

Inorder to start the project (in development mode), navigate to the project directory, and run the commands below via terminal:

### `npm install`
### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

To run a production build(It correctly bundles React in production mode and optimizes the build for the best performance), run the script below.
### `npm install`
### `npm run build`

For questions and enquiry, please do not hesitate to reach out to me on sababaset97@gmail.com