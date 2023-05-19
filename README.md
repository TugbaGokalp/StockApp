# STOCK APP

- This application is designed to manage a company's products, companies, and brands, enabling sales and purchases, and providing inventory tracking. Below, you will find the key features and usage instructions for the application.

## `Installation`

```
npm install or yarn
```


## Project Skeleton

```
009 - Stock App (folder)
|
|----README.md         # (Definition of the project)
SOLUTION
├── public
│     ├── favicon.ico
│     ├── index.html
│     ├── logo192.png
│     └── logo512.png
├── src
│    ├── app
│    │     └── store.jsx
│    ├── assets
│    │     ├── loading.gif
│    │     └── result.svg
│    ├── components
│    │     └── modals
│    │     │      ├── loading.gif
│    │     │      ├── BrandModal.jsx
│    │     │      ├── FirmModal.jsx
│    │     │      ├── ProductModal.jsx
│    │     │      ├── PurchaseModal.jsx
│    │     │      ├── SaleModal.jsx
│    │     │      └── result.svg
│    │     ├── BrandCard.jsx
│    │     ├── Charts.jsx
│    │     ├── FirmCard.jsx
│    │     ├── MenuItemList.jsx
│    │     ├── ProductCard.jsx
│    │     └── RegisterForm.jsx
│    │     
│    ├── features
│    │     ├── AuthSlice.jsx
│    │     └── StockSlice.jsx
│    ├── helper
│    │     └── ToastNotify.js
│    ├── hooks
│    │     ├── useAuthCall.jsx
│    │     ├── useAxios.jsx
│    │     └── useStockCall.jsx
│    ├── pages
│    │     ├── Brand.jsx
│    │     ├── Dashboard.jsx
│    │     ├── Firms.jsx
│    │     ├── Home.jsx
│    │     ├── Login.jsx
│    │     ├── Products.jsx
│    │     ├── Purchases.jsx
│    │     ├── Register.jsx
│    │     └── Sales.jsx
│    ├── router
│    │     ├── AppRouter.jsx
│    │     └── PrivateRouter.jsx
│    ├── styles
│    │     ├── globalStyle.jsx
│    │     └── PrivateRouter.jsx
│    ├── App.js
│    ├── index.js
│    └── index.css
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── yarn.lock
```

![Project Snapshot](StockApp.gif)

## The project is developed using various libraries, and the libraries used and their purposes are listed below:

- `@reduxjs/toolkit`: Used for managing application state with Redux toolkit.
- `react-redux`: Used to integrate Redux into the React application.
- `axios`: Used for making HTTP requests.
- `react-router-dom`: Used for navigation and page routing within the application.
- `@mui/material-ui`: Material UI component library used for creating user interface elements.
- `yup`: Used for schema validation.
- `@mui/icons-material`: Used for using Material UI icons.
- `@mui/x-data-grid`: Used for creating data table components.
- `@tremor/react`: Used for creating charts.
- `formik`: Used for form handling and validation.
- `react-persist`: Used for storing application state in local storage.
- `react-toastify`: Used for displaying notification messages.

## General

- Adding, editing, and deleting products, companies, and brands.
- Updating stock quantities of products and tracking stock movements.
- Recording sales, managing customer information, and generating sales reports.
- Recording purchases, managing supplier information, and generating procurement reports.
- User authorization and access rights management.
- Displaying overview graphs and statistics on the dashboard page.


## Utilization

If an account does not exist, an account must be created first. Then it can used be as dashboard panel.
## Hooks

- `useAxios.jsx` includes a module where a custom hook called "useAxios" is defined using the "axios" and "react-redux" libraries. The purpose of the hook is to create a customized HTTP client and return two separate Axios instances for making requests with and without authorization tokens. The "axiosPublic" variable is used to access an API that doesn't require an authorization token, while the "axiosWithToken" variable is used to access an API protected with an authorization token. By using these customized Axios instances, it becomes easier to communicate with APIs that have different authorization requirements. 
- `useAuthCall.jsx`defines a custom hook for handling authentication API calls, including login, logout, and registration processes. It uses Axios, Redux actions, and navigation functions to handle requests, dispatch actions, display notifications, and navigate between pages.
- `useStockCall.jsx`includes a module that defines a custom hook called "useStockCall". The hook uses Axios for making API requests, React Redux's useDispatch hook for dispatching actions, and helper functions for displaying success and error notifications. It also utilizes another custom hook called "useAxios" to get an Axios instance with authorization headers.

The hook provides several functions for handling stock-related API calls. The "getStockData" function performs a GET request to retrieve stock data from a specified URL and dispatches the received data to the Redux store. The "deleteStockData" function sends a DELETE request to delete an item with a given URL and ID, and updates the stock data after successful deletion. The "postStockData" function sends a POST request to add new stock data, and updates the stock data after successful posting. The "putStockData" function sends a PUT request to update existing stock data, and updates the stock data after successful updating.

Additionally, the hook includes a "getProCatBrand" function that sends three simultaneous GET requests to fetch products, categories, and brands data, and dispatches the retrieved data to the Redux store.

The hook returns these functions, allowing components to easily make stock-related API calls and handle the responses accordingly.


## Store

`store.jsx`configures a Redux store using the configureStore function. It includes two reducers, authReducer and stockReducer. Additionally, it utilizes Redux Persist to store data in the browser's memory. The code sets up persistence configuration using the persistStore and persistReducer functions from the redux-persist package, applying it to the authReducer. This ensures that data from the auth reducer is persisted.

The configureStore function also allows configuring Redux middleware using the getDefaultMiddleware function. In this example, the serializableCheck option is configured for actions that do not affect serializability (FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER).

Finally, the configured store and persistor objects are exported. The store represents the main data store of the Redux application, while the persistor manages the persistence configuration and ensures data persistence using the features provided by Redux Persist.

This code configures the Redux store, utilizes Redux Persist for persistence, and includes two reducers.
