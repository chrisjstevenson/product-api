# Product API - myRetail RESTful Service


## Overview
This is an example of a RESTful service that consumes product attribute data from a source system and then
hydrates that model with pricing data from an mongodb database.

The service is currently running in Kubernetes and can be accessed from any the following URLs, or any item additional item identifiers.

http://optmizr.io:8080/api/product/13860428  
http://optmizr.io:8080/api/product/53589104  
http://optmizr.io:8080/api/product/51000037

## Getting started locally - running the server
First set your local mongodb connection string in ```src/server/config/env/development.js``` if different than localhost, and run ```npm install``` and ```node app.js```. Or, you can use Yarn
```
yarn
yarn start
```

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

{"id":"53589104","name":"Deadpool 2 (Blu-Ray + Digital)","current_price":{"value":2.99,"currency_code":"USD"}}
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

Given an API user
When I send a price update to a product route  
Then I should view a success message

- Demonstrate that a message can be put to a product route to update the product price


## Tests
Run all tests using
```
yarn test
```

##### Testing Methodology
I elected to use integration tests as the primary method of testing over unit - I felt that the interaction between services was more important to the system than
the logic within each smaller component.

## Deployments
This service is deployed to Kubernetes and connects to a 3-node mongodb instance which is hosted in the
same cluster.

For more information on the project that manages this, ask me!
```
λ ~ kubectl get services
NAME                   TYPE           CLUSTER-IP     EXTERNAL-IP      PORT(S)          AGE
kubernetes             ClusterIP      10.0.0.1       <none>           443/TCP          270d
mongodb                ClusterIP      None           <none>           27017/TCP        50d
product-api            LoadBalancer   10.0.214.160   xx.xx.xxx.xx    8080:31085/TCP    2m
```

## Backlog
Below is a list of items that made it onto the backlog but due to time constraints I didn't get to... yet:

- Authentication and Authorization: It would be nice if updates were restricted to an administrative user
- Caching of resources: There is probably a model that could be used to reduce the hits on the system of record.
- Logging: Outside of 404's / 500's, there's not a lot of additional error handling or recovery - it would be nice
if logs could be visible outside the context of the running container.