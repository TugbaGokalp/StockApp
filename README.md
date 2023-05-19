# STOCK APP

## `Installation`

```
npm install veya yarn
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

## `Libraries`

- `@reduxjs/toolkit`
- `react-redux`
- `axios`
- `react-router-dom`
- `@mui/material-ui`
- `yup`
- `@mui/icons-material`
- `@mui/x-data-grid`
- `@tremor/react`
- `formik`
- `react-persist`
- `react-toastify`



