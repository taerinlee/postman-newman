### Newman Demo
So this is a demo to how to integrate newman with your node.js project, feel free to clone it and `hit npm run test` and voila!

Postman has been commonly used by all of us to check our API requests, send a body, preview a response body or check an error message is returned properly.

Probably maybe document your API.

But I am here to show you a bit of postman's hidden powers! Basically, you dream it, postman can do it!

## So why use postman more intensively?
Aside from the fact that postman has all of it's main features free, here are some things that might capture your attention..

Postman's test scripts are pretty easy to use, it's just javascript `¯\_(ツ)_/¯`
Some of us have notices the tests tab in postman and hence know that integration tests can be applied there too. But have you ever gave it a try?

After writing and executing your requests let's navigate to the tests tab.

There you will find a testing tab, you will find snippet examples provided by postman on the right, I will go through some of them just to show you how easy they are

`pm` - latest postman syntax is triggered using `pm` keyword, previous versions used `postman`

`pm.test(description, function)` marks a test case with the description and the function this test should execute, very similar to chai syntax.

Accessing the response would be through `pm.response`.

For example:

Checking status code 200 would go like this => `pm.response.to.have.status(200);`

Capturing the JSON response of your api would be => `var jsonData = pm.response.json();`

Assertions can be done by => `pm.expect(jsonData.value).to.eql(100);`

Postman's snippet cover many many examples and you can add the code to your tests tab just by clicking on the snippet.


## Defining Environments
So your urls might end up looking something like that => `{{host}}:{{port}}/{{path}}`
With variables set for each environment you have, dynamically shifting between your environments without applying any changed to your code, meaning you can deploy this code along with your env vars and run your test packages  based on the environment of your choice

How to do so?

- Navigate to the little **gear icon** of **Manage Environments**

- Press **Add** - to add variables related to your collection only

- or **Global** - to add variables related to everything!


## Postman detailed documentation
Postman has a how to and example for every single corner of their features and full examples collection in [Postman Echo Example](https://docs.postman-echo.com/)

## Postman console
Yes! you can console.log view errors, warnings and logs.. not convinced yet, here is the guru that brings it all to life!!

## Newman
So you have set your environments, wrote your docs and tests, now what?

Let's integrate those to our continuous integration and have them run with every build!

Boost our confidence in our produced code and avoid breaking APIs shipped to production

So it's quite simple, in this repo you can find the example

So adding it to your continuous integration server is as simple as adding an `npm run test` script.


