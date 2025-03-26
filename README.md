## Subscript Todo List

Hi Subscript! My name is Jay and this is my third attempt at doing this properly. I'm not entirely sure why my Loom was having so much trouble, so instead I just decided to make a quick writeup instead. Hope this suffices for now!

### Getting Started

Because this repo is so old I initially tried to update the dependencies, but thought it would be more interesting to see if I could just work with an older version. I had to do a bit of searching on Stack Overflow since the repo wouldn't even start, but with a simple addition to the scripts in package.json, I got it working without any issues. 🎉

You can start the app with the following command in your terminal:

```
npm run dev
```

### Down to Business

1. Please describe (in any form you like - document, words, pseudo-code, slides, whatever) what you think should be the most important features to add to this app in the process of building a group todo app.
2. Convert the app from class components to functional components.
3. Pick a feature (or more) from step 1 above (ex: add tags, assigning users, having multiple lists, adding comments, organizing projects) and implement it:
   1. Please commit frequently.
   2. _Please show us the extent of our React knowledge! We want to know what all you know, so the more you can show your knowledge the better!_
   3. Remember to talk through your decisions. Tell us about alternate approaches you're considering, and why you're picking the approach you are.
   4. This is really all about seeing how you work, so seeing you look up reference docs or using AI or looking at guides is great - it gives us a sense for how you use the internet as a reference manual.
4. Add automated tests (whatever framework you want) to test the feature(s), as well as any other non functional requirements you’d like to cover.

This should look familiar, since it's the requirements given to me.

To answer the first question, I realized that there were a few good things to add to a todo list like this that would make it more functional for a group. There were a lot of good ideas given as examples, but I opted to go with the ability to create multiple lists (and rename their titles). My reasoning here was:

- The current state of the list is just a regular todo list that can't really handle being used by more than one person.
- Having the ability to add more lists instantly makes it more usable for more people.
  - Users can simply just make a new list for their own purpose and it's now much more readable.
- In comparison, if I added a tagging feature to the todo list, it would perform essentially the same function, but the list would be more cluttered and might be more difficult to find tasks that are relevant to the user, unless I added a near-mandatory filtering feature. But even then I personally think it would not be as good.
