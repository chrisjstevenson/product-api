# Product API - myRetail RESTful Service

## Getting started - running the server
First set your local mongodb connection string in ```src/server/config/env/development.js``` if different than localhost, and run ```npm install``` and ```node app.js```. Or, you can use Yarn
```
yarn
yarn start
```

## Overview
This is an example of a RESTful service that consumes product attribute data from a source system and then
hydrates that model with pricing data from an MongoDB database.

Once the server is started, you can test routes by supplying an id like so

```
GET http://localhost:8000/api/product/53589104	
```
##### Sample Response
```
{"id":"53589104","name":"Deadpool 2 (Blu-Ray + Digital)","current_price":{"value":22.99,"currency_code":"USD"}}
```
Prices can be updated by supplying an update like so


##### Sample Request
```
PUT http://localhost:8000/api/product/53589104

{"id":"13860428","price":22.99 }
```

##### Sample Response

```
{
    "message": "Product data updated successfully"
}
```


## User Stories with Acceptance Criteria
Given an API user  
When I navigate to a product route  
Then I should be able to see a product's id, name, and current price:

- Demonstrate that an API route exists for accessing product data
- Demonstrate that the API route can return resources by a unique id
- Demonstrate that the resource returned from the route represents a product by its id, name, and current price.

Given an API user  
When I view the current price for a product  
Then I should view the value and the currency code:
- Demonstrate that current price is represented as the monetary value and currency code

Given an API administrator  
When I send a price update to a product route  
Then I should view a success message
- Demonstrate that a message can be put to a product route to update the product price
- Demonstrate that only API administrators can update product prices


## Tests
Run all tests using
```
yarn test
```

##### Testing Methodology
I elected to use integration tests as the primary method of testing over unit - I did this because
I felt that the interaction between services was more important to the system under test that
the logic within each smaller component.