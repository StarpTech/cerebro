# cerebro
Proof of concept - gRPC in a microservice architecture

## Install
To install, simply use npm.

```
npm install
```

## Test
To run tests, simply use npm:

```
npm run test
```

## What is my motivation?
There are just a few frameworks for NodeJs which provide a good way to built microservices but they comes with limitations and risks.
Risks in kind of:

* Small opensource community
* Not proved in production
* No or less documentation.

that's the reason why I look around me to find a better solution.


## Why I want to test this?
So that it's not up to you. How to

   * to transmitting the data over the wire.
   * to validate the correct response and request format.
   * to implement a driver in your favorite langauge because protos are language-neutral, platform-neutral. You can write services in any language.
   * to call them because gRPC follows the priciple of Services not Objects, Messages not References.
   * easy streaming interface.


Here's an example:

```shell
node server.js
node client.js
```