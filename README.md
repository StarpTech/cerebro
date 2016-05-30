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


## Why I want to test this?

So that it's not up to you. How to

   * to transmitting the data over the wire.
   * to validate the correct response and request format.
   * to implement a driver in your favorite langauge because protos are language-neutral, platform-neutral. You can write services in any language.
   * to call them because gRPC follows the priciple of Services not Objects, Messages not References.


Here's an example:

```shell
node server.js
node client.js
```