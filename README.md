# cerebro
Proof of concept - [gRPC](https://github.com/grpc/grpc) in a microservice architecture

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
There are just a few frameworks for NodeJs which provide a good way to built a distributed system but they comes with limitations and risks.
Risks in kind of:

* Small opensource community
* Not proved in production
* No or less documentation.

that's the reason why I look around me to find a more robust and standardized solution.


## Why I want to test this?
So that it's not up to you. How to

   * to transmitting the data over the wire.
   * to validate the correct response and request format.
   * to implement a driver in your favorite langauge because protos are language-neutral, platform-neutral. You can write services in any language.
   * to call them because gRPC follows the priciple of Services not Objects, Messages not References.
   * to implement a streaming interface.
   
[gRPC Motivation and Design Principles.](http://www.grpc.io/posts/principles)


Here's an example:

```shell
node server.js
node client.js
```

#Author

Dustin Deus <deusdustin@gmail.com>
