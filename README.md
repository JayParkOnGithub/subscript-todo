## Subscript Todo List

Hi Subscript! My name is Jay and this is my third attempt at doing this properly. I'm not entirely sure why my Loom was having so much trouble, so instead I just decided to make a quick writeup instead. Hope this suffices for now!

### Getting Started

Because this repo is so old I initially tried to update the dependencies, but thought it would be more interesting to see if I could just work with an older version. (EDIT: I actually had to update some things because Jest wouldn't work otherwise.) I had to do a bit of searching on Stack Overflow since the repo wouldn't even start, but with a simple addition to the scripts in package.json, I got it working without any issues. 🎉

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

#### Requirement 1

To answer the first question, I realized that there were a few good things to add to a todo list like this that would make it more functional for a group. There were a lot of good ideas given as examples, but I opted to go with the ability to create multiple lists (and rename their titles). My reasoning here was:

- The current state of the list is just a regular todo list that can't really handle being used by more than one person.
- Having the ability to add more lists instantly makes it more usable for more people.
  - Users can simply just make a new list for their own purpose and it's now much more readable.
- In comparison, if I added a tagging feature to the todo list, it would perform essentially the same function, but the list would be more cluttered and might be more difficult to find tasks that are relevant to the user, unless I added a near-mandatory filtering feature. But even then I personally think it would not be as good.

#### Requirement 2

I admittedly took some more time on this than I would like to admit, considering there are only four components. It's been quite a while since I've even looked at class components and even though it's more or less changing a few lines of code, there were some quirks with props that I had forgotten back when I first learned React in 2020.

#### Requirement 3

Like I mentioned earlier, my feature was adding more lists.

The basic premise behind it is quite simple:

1. We originally started off with an array of objects which each contained a unique id using uuidv4, a title, and a completed status.
2. To convert this into multiple lists, I created a new array of objects containing all the lists (with its own uuid of course) and then put the original list into a key-value pair called todos.
3. This way we keep the style of the original list but we can now add new lists.
4. I created a button above the rendered lists and the input box. Pressing the button appends a new list on the bottom. Easy!
   4a. However, I came across a small issue. Each new list created is made with the title "New List." Not very functional if everything is called New List, so I went looking for a way to make the titles editable.
   4b. My original thought was to have an editable header tag, and a project I had worked on previously actually had this functionality but it came from a library which I embarrassingly forgot the name of. I ended up making it a simple input without the border so it looks more "natural" than a standard text box.
   4c. I did some research afterwards and the `contenteditable` tag technically could work, but apparently it's a bit frowned upon to do so. Also apparently Gmail's email text box is just a `contenteditable` div, which is pretty cool.
5. One thing (among many) things I didn't have time to implement (but probably will after submitting this assessment) is the ability to delete lists.
   5a. Obviously it makes sense to delete the lists, and it would be as simple as finding the listid and slicing out the appropriate one.

#### Requirement 4

I haven't had the opportunity to work with robust testing, but I have done some simple automated tests with Jest, so that's what I went with.

I wasn't able to get a robust set of tests done, but I've done the basic ones so you guys can see where my head's at when it comes to tests. I had a bit of help from AI just to get a sanity check since I was having a few issues with selecting specific buttons and lists.

You can run the tests with the following command:

```
npm run jest
```

### Extra

Non functional stuff I wasn't able to get done (it's almost 4AM and my brain is a bit fried from this week 😵‍💫) was having a nice looking drag and drop functionality. I did a bit of research while I was at work this week and found there are quite a few drawbacks with using the standard HTML drag and drop API, namely some bugs with the accuracy of the drag and drop, not to mention the confusing API.

There's also a really neat video about Swapy by Theo from t3.gg that you can take a look at [here](https://www.youtube.com/watch?v=gaNLnuwoFRI) which I watched when it first came out. It was also one of the first things that came to mind, but due to time constraints I'm just going to leave it here for now.

If you've managed to read this to the very end, thank you very much! I actually had more fun with this than I thought and got a great refresher on testing.
