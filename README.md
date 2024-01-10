# Project Overview

As there were so many countries for a single page, I made two pages, one where you can click on a continent, then the other a list of countries from there. The data was downloaded from https://github.com/samayo/country-json and placed in the data folder in `json format`. Pages are linked using `React Router Dom`.

Once a country is clicked, an information panel appears 'InfoBar.tsx' which `displays the capitol and languages of that country`, by filtering through both the 'Country by Language' and 'Country by Capitol' data sets with whichever Country is stored in the state. useContext() is used to store the state of whatever country is selected.

There is `search panel` beneath the navigation, which filters through either capitols or countries with whatever is in the input. 

Currently I am integratng a `Debounce and Map feature`, the latter allowing the user to click on countries on a map graphic, which also provides city and language data same as the list view, using the context. This is being done on a seperate git branch: https://github.com/alexnyebuchan/agate-test/tree/debounce-and-map-integration

# Questions

How would you optimize the performance of the list rendering, in these 2 or 3 combined lists.
- Query the data to only extract the relevant information. If this were a fetch request, we could query the API to reduce the amount of unnecessary data recived, reducing load times. In ths case howevever, we can simply use .filter() to locate capitols and languages from countries, and countries from continents. 

Can you explain the difference between state and props in React, and how would you use them for the search?
- When data is passed from a parent to child component, props are used. For data management within a single component, state is used with the useState() hook. 

How does TypeScript enhance the development experience in a React application?
- Firstly, it helps with `debugging`, as errors are shown prior to running the development server or deployment. IDE's like VS Code make this very easy. Secondly, it is easier to code `collaboratively`, as you can see what types their variables should be, bettering your understanding of their components and avoiding errors in the process. 

How would you handle pagination or infinite scrolling for a large list of countries? Assume only 10 per page are allowed.
- I would create a variable to store the amount of countries per page (10). Then calculate the total pages by dividing the `countries.length` by this number. Once this is done, `slice or filter` through the countries array to extract only the relevant elements for the selected page. Change the map to only iterate over this variable in the return. Create a useState() to handle which page is selected, and a button in the return which can increment or decrement the page number. 

What are some advanced TypeScript features that could be useful in this project?
-

Can you explain how context API or Redux can be integrated into this project for state management?
- For the sake of this question, I implemented two contexts and one reducer to illustrate my knowledge of Context API's. Perhaps it's overkill for this simple application, but it means I can access country information at any part of the app. For instance, in the Nav there is a globe icon, which changes whenever a new continent is clicked. The new continent name is dispatched to the reducer in the component, retrieved in the contex in the nav. 
