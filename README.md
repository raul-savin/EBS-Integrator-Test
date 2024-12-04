# Welcome to Product Catalog!

This Product Catalog offers a comprehensive and user-friendly interface that allows customers to easily sort and filter items according to their preferences. Its responsive design ensures optimal viewing across various devices, enhancing the shopping experience by providing quick access to relevant products. This efficient organization empowers users to find exactly what they need with minimal effort, making it an essential tool for any online retail platform.

## Getting started

- Clone this repository and run `npm install` to install the dependencies.
- Run `npm run dev` to start the development server.

### Create the Home Page:

- 1. Base layout was created for the application (header, footer, main content).
- 2. React Router was used for navigation between pages.
- 3. Context was used for state-management.
- 4. A total of 4 pages was created (home, cart, product & 404 page).
- 5. TailwindCSS was used to style this application.

### Home Page:

- 1. A list of products was created showing the image, name of the item, its price & and category it belongs to. There are also two buttons used for adding and removing items to or from the shopping cart.
- 2. There is a category filter and a sorting button.
- 3. A fixed Shopping cart icon showing the number of selected items was extra added to the home page.
- 4. Scroll to the top button was introduced to facilitate user experience.

### Shopping Cart Page:

- 1. A list of selected items are shown on the shopping cart page.
- 2. There are also two buttons used for adding and removing items to or from the shopping cart.
- 3. The total price is displayed, depending on the number of items in the shooping cart.
- 4. A Clear All Items button was added to the page.

### Product Page:

- 1. A full description of the item.
- 2. An Add To Cart button was added to the page.

### Extra:

- 1. Lazy loading was used for Product & Cart page.
- 2. Loading indicator for API usage was added.
- 3. In case of any API error a message is shown to the user.
- 4. Jest sanity test ( I wish I could have changed the tsconfig, eslint.config ,vite.config & jest.config write more tests, but i was running out of time. [ even though i know how to write unit testing with Jest ]).
- 5. Deployed to netlify.

The link to the website is:

(https://webdevraul-ebs-integrator-test.netlify.app)
