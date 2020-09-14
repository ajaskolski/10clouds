#10cloud task

#Start

`npm install`

To run headless tests: `npm run cy:r` 

To open cypress gui: `npm run cy:o`


## Summary
Use cypress + typescript to resolve task.

Add whole configuration include eslint, tsconfig and prettier.

Showed one of possible approaches to the topic. Used piece of page object pattern and add some custom method to cy.

To locate elements used mixed of classes and text inside.

As web is react based You could possible add test locators to the elements in it next add them to shared file beetween 
src code and test code for test to be independent of classes/tags.
