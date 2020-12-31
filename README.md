# InstaStore
Technical test for back-end and full-stack developers.
 - [Instructions](#instructions)
 - [Requirements](#requirements)
 - [Improvements and trade offs](#improvements-and-trade-offs)
 
## Instructions
 1. Fork this repo.
 2. Create a new branch.
 3. Understand the functional and non-functional requirements.
 4. Ask any questions to david.camargo@instaleap.io. (you have 1 chance, make it worthy)
 4. As your first commit, copy your questions and David's answers, and design the "architecture" of your service. Upload a
    sketch/photo/readme, etc explaining how your service is going to work, and when do you think you can deliver
    the final product (we expect you to deliver it in less than 2 days). If you are applying for a Fullstack position, send a wireframe with your proposed solution.
 5. Have fun coding this challenge. Take into account that the data provided could have inconsistencies, make sure to handle them.
 6. If you find blockers, keep moving and get them solved later, please write them down in a markdown file inside your repo.
 7. Answer the [Improvements and trade offs](#improvements-and-trade-offs) section.
 7. Create a Pull Request (in your own fork), add 'davidcp90' as a reviewer, and send an email to david.camargo@instaleap.io

## Requirements
InstaStore is a microservice in charge of selecting the closest "convenience" store to deliver a groceries order to our B2B clients.

### Non-functional
- We expect you to deliver idiomatic code in a way that is easy to read and follows the accepted guidelines in your area of expertise.
- You should write it on Node.js with Express.js. Libraries, transpilers , etc are up to you.
- If you are applying for a fullstack position, front-end must be build with React.
- Endpoints are fast (less than 300ms).
- Endpoints respond error codes that makes sense to the case.
- Please provide documentation for the endpoints you create.
- If you are applying for a fullstack position, front-end must be easy to use and it should have a nice look & feel.

### Functional
1. Our B2B clients should be able to consume an endpoint that provides them the following information:
  - storeId
  - storeName
  - isOpen
  - coordinates
  - nextDeliveryTime
2. The endpoint returns the closest store available
3. We need to keep track of each call to the endpoint
#### For full-stack developers
1. The UI should capture the address/position from a user
2. After capturing the address it should request the closest store and show the address captured and the closest store in a map, and their details (isOpen, next delivery time, coordinates, storeName, store phone number and email).
3. It should manage errors and unexpected requests. Users should always know what to do.
4. App should include a top bar with a logo (go nuts)
5. The app should be served through a CDN


## Questions & Answers

1. I must use SQL or No-SQL DB or may I choose? A: You can choose. Don't forget to write your reasons behind the decision.
2. Endpoints are fast (less than 300ms). in average or always? Do I need to validate this requirement with some tests? A: On average, a simple test in your machine would be enough.
3. Do I need to create mock up data or there is an example dataset? if i create the data i must create data with errors too? A: I am attaching a csv with mock data.
4. The API must be secure? A: Would be great if you secure the API
5. What is closest? Closest in distance or maybe the first store that can  successfully complete the delivery. A: Closest in terms of distance.
6. What is nextDeliveryTime? A: In this case, we are going to consider that each store can deliver 3 orders per hour, and according to that, you need to provide the next time (date+hour) in which the store can deliver an order (nextDeliveryTime)
7. A Store is available if it is open? A: Yes, available = open
8. The clients send their location (coordinates)? and if so do i need to check the coordinates validity? What other info do the requests have? A: You should expect to receive a json object with the following parameters
“destination": {
"name": "string”, // Name of the address given by user (required)
"address": "string”, // Address captured (required)
 "address_two": "string”, //Additional details for the address (line apt, house number, etc)
"description": "string”, //Instructions for the delivery
"country": "string”, // Country code according to ISO-3166-1 (required)
 "city": "string", // City name
"state": "string", // State name
"zip_code": "string",
"latitude": 0, //number indicating the latitude of the address provided
"longitude": 0, //number indicating the longitude of the address provided
}
8. to keep track of each call do i need to save this info in an external service? A: There is no need to use a external service, please keep it simple.
9. is there any format for the response (e.g. Json)? A: This has to be one of your implementations decisions

## Design

![Design](design.png)

The solution use a MongoDB to save the info of the stores and the tracking, we decide to use a MongoDB because in nodejs is easliy to connect this kind of databases, also in the tracking service we need to write more info and read exporadically.

## Expected delivery

I expect to complete the challenge the 30th of Decemeber of 2020.

## Endpoint documentation

the documentation of the endpoint is available on  [documentation](https://documenter.getpostman.com/view/1071586/TVt19k5d)

example token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.bwIlfhzHf9wj6lSMMvKiWg2fIpdz1sb9OnoB-s6xwQQ

## Blockers

I dont understand correctly how to handle the nextDeliveryTime of the store. 

## Improvements and trade offs
1. What would you improve from your code? why?
I would add unit testing and also would like to check some corner cases the i did not take into account.   
2. Which trade offs would you make to accomplish this on time? What'd you do next time to deliver more and sacrifice less?
In this test I sacrifice the use the info of the deliveries of the stores, Next time i like to implement the solution with some framework like TDD in order to secure satisfaction of the requirements. 
3. Do you think your service is secure? why?
From the client side is secure in terms that no unauthorized user can acces the API, however currently we are saving the token as plain text in the tracking service and that may lead to insecure behaviour.
4. What would you do to measure the behaviour of your product on a production environment?
I would add a time for request in the tacking service and with taht info i can evaluate the service in time.