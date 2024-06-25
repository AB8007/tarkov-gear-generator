# Random Raid Generator

**What is this?**

Random Raid Generator is an application for randomizing your raids in a video game called Escape From Tarkov.

**How can I use it?**

The application is hosted [here](https://tarkov-gear-generator.onrender.com/).

**Techs used?**

In short:
- React with JS
- Redux
- Axios
- GraphQL

**Basic Functionality**

The data required is fetched from the API upon page load and saved into global state. The app has functions for randomizing an item from each category. Randomization of each item is initiated by the user by pressing a button. The logic for randomization is as follows: a list containing all the items from the category is passed to the function from the global state and a random item with an index ranging from 0 to length value of the said list is saved into a global state and rendered in the UI. 

The user can alter the randomization process should they want, for example by forcing a fitting pair of headphones and headwear.

**The API?**

The API used is the free GraphQL [API](https://tarkov.dev/api) provided by [TARKOV.DEV](https://tarkov.dev/). 