# Random Raid Generator

**What is this?**

Random Raid Generator is a half-stack application for randomizing your raids in a video game called Escape From Tarkov.

**How can I use it?**

The application is hosted [here](https://tarkov-gear-generator.onrender.com/).

You can also clone yourself a local copy by doing the following:
1. Navigate to a directory you wish to clone into:
`git clone https://github.com/AB8007/tarkov-gear-generator.git`
2. Change directory: 
`cd tarkov-gear-generator`
3. Install required dependencies:
`npm install`
4. Run the development server:
`npm run dev`
5. Access the app in browser (Default port) 
`http://localhost:5173`


**Techs used?**

In short:
- React
- React Redux
- Axios
- GraphQL

The UI is built with JS React, global states are managed with React Redux and GraphQL queries to the API endpoint are handled with Axios.

**Basic Functionality**

The data required is fetched from the endpoint upon the page load and saved as a global state. The app has functions for randomizing an item from each category. Randomization of each item is initiated by the user through buttons. The logic for randomization is as follows: a list containing all the items from the category is passed to the function from the global state and a random item with an index ranging from 0 to length value of the said list is saved into a global state and rendered in the UI. 

The user can alter the randomization process should they want, for example by forcing a fitting pair of headphones and headwear.

**The API?**

The API used is the free GraphQL [API](https://tarkov.dev/api) provided by [TARKOV.DEV](https://tarkov.dev/). 