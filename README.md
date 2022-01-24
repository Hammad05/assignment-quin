# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

# Documentation

## External Libraries Used

- React Query ( It gives you loading state and caching ability )
- Material UI ( Lightweight and easy to customize )
- Axios ( Very popular for rest APIs )
- React Simple Maps ( SVG based maps which is fast and lightweight )

## Improvements

1. There should be an Axios Response Interceptor to thorw back results object

2. In Home.tsx, I am using local states. Those states could have been moved to Context instead of passing top to down

3. Query fetching and Mutation could be moved into a Custom Hook. Mutations appears on filter change that is missing.

4. I have not styled the Modal and write test cases. It should have been a Table View. For testing, I should be checking the first column and the required Fields in that column.

5. I would be using date-fns as Date Utility for date formating and fetching the data for next 3 months.

6. I would change he Dialog that appears on marker click. There should've be custom tooltip instaed of dialog.

7. I would add Error Boundaries to Map Component that would be pure Class Component. Incase any error appear so user can change the filters back to their previous states.

8. I would use a flat global map with no curvatures. 

9. I would add map zoom interactions. Right now these are missing.


