# Mock-13

### `Instructions`

- Read entire question carefully for at-least 15 mins, understand it and then code it.
- Don’t jump directly into code.
- Commit your code every hour with proper commit message to your repository (we will monitor every commit)
- Use HTML, CSS and React to solve this question.
- No need to use redux for network requests.
- You can use any CSS library of your choice

### `Problem Overview`

- You need to create an e-commerce app with
    - Navbar
    - Showing Products Category from API ( index.html )
    - Showing Products based on the category from API ( products.html )
    - Users should able to search products ( search.html )
- You are given APIs to -
    - Fetch all category data
    - Fetch products data based on category
    - Fetch products data based on user search
- Navbar should be there in all the three page

### `All API Details`

```jsx
//1. For fetching all category name 
URL - https://dummyjson.com/products/categories

//2. For fetching all products based on category name 
URL - https://dummyjson.com/products/category/${categoryName}
- Hint - Here category name should be dynamic 

//3. For fetching all products based on user search result 
URL - https://dummyjson.com/products/search?q=${searchValue}
-Hint - Here search value should be dynamic based on search result

```

### `Navbar`

- Create a navbar, this navbar should be present on all the three pages
- The navbar should have one route for the search
- If user clicks on search , should be redirected to search.html page
- Refer the below image for UI

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2e0dca36-8916-44f6-83ed-1b234afc6307/Untitled.png)

### `Home page`

- Append all the category names on index.html page
- API Link - [https://dummyjson.com/products/categories](https://dummyjson.com/products/categories)
- Refer the bellow image for UI
- Each row should have three name
- Use CSS grid to implement this
- If the user clicks any card store the respective category name on local storage (key - category)
- Then redirect the user to products.html page to show all products related to that category

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/38d56ec7-c992-4487-a615-782be2beb8a9/Untitled.png)

### `products page`

- Make an API request to get all the products based on the category and append it
- Api Link - https://dummyjson.com/products/category/${categoryName}
- Make sure in API URL the category name should be dynamic based on users click
- refer to the below image for UI
- Each row should have three products ( Use CSS Grid )
- For each product show - thumbnail image , title , description and price on UI

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d8415487-e4eb-46a8-a2d6-1bdb9689ce3e/Untitled.png)

### `search page`

- Show one Input and button on search page
- If the user type something and click on the search button , show all the products details based on the search result
- Api Link - https://dummyjson.com/products/search?q=${searchValue}
- Make sure here search value should be dynamic based on user search
- Refer the bellow image for UI

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9e05ea09-892b-408f-8403-fe7fd4e4a02f/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/46469025-10f5-42dc-838d-8c66961d9b9a/Untitled.png)

- If users type some random word on the search page show them one message on UI
- Refer to the bellow image for UI
