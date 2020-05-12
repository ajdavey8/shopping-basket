# Shopping Basket

## Outline

React.js web application to display a list of products, build a shopping basket, and submit the basket to a server. A website that shows the products to users, allows them to shop by adding products to a basket, then checkout the basket.

## Run the app

Install the main dependencies

```sh
$ yarn
```

To run the app with both webapp and server in root

```sh
$ yarn dev
```

## Tests

To run the webapp unit tests

```sh
$ cd client
$ yarn test
```

To check the types

```sh
$ cd client
$ yarn check-types
```


## Approach/Decisions

All the requirements for this have been meet as I understand them. There are some edge cases to fix, one in particular is to block users from trying to remove items that haven't been added to the basket yet.

I switched out the create-react-app setup for my own that allows the use of TypeScript. It doesn't use the TS compiler this means the TypeErrors do not break compiling I personally find this useful and still shows the errors in my text editor plus the `check-types` script.

It is quite a small app so think that use the Context API is enough for state management rather than redux for this app.

It is reasonable well tested although I would like to add some integration tests and end to end tests (using Cypress.io).

A minimal amount of styling has been done only enough to make the app clear enough use.

I did not make any changes to the server, apart from changing the port for CORs.