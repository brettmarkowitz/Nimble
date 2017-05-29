Hey Nimble team,

I really enjoyed working on this project.  Here’s some notes on it:

This was my first time using React, so after reading the assignment and setting up the repo I realized I had to learn React first.

I probably spent 2-3 hours going through the following two guides / tutorials:

* [http://buildwithreact.com/tutorial](http://buildwithreact.com/tutorial)

* [https://facebook.github.io/react/docs/installation.html](https://facebook.github.io/react/docs/installation.html)

I ended up using the [Create React App project](https://github.com/facebookincubator/create-react-app) to create the app and did a little bit of customization from its guides to add SASS support.  It seems SASS isn’t as recommended as usual with React, but as a beginner it still seemed worth it for variables, simple math, and the organization and specific styling that nesting provides.

I know the expectation was to spend 2-3 hours on the project, but speed is not really my forte as  a developer, especially in something I have never used before.  I wasted a good chunk of that learning about React Portals.  Anyway, to not horribly abuse that expectation I made an initial commit at around the 4 hour mark of actually working on the project.

You can view the code at that point in time [here](https://github.com/brettmarkowitz/Nimble/commit/d06d5d855db6aab4fd0d9fe989ee1060a77bcb13).  You can reset to that commit to view the app at that point too.  I mostly just did some code cleanup, file organization, and wrote basic tests after that.

**My Process:**

Normally when I am given something to build I ask a lot of questions.   Since this was a 24 hour assignment and done on the weekend (and a new framework), I decided to just make some assumptions and mostly just build the mockup.

Ultimately I try to make sure I understand what problem the user is having / what the end goal of the feature is.  What is the user ultimately trying to achieve?

Here are some questions I would have asked:

* Who is a typical user?

    * Are there any accessibility requirements? (Section 508)

* How is the user typically viewing the app?

    * Is there a mobile app too?

    * Does it need to be responsive?

    * How important is older / cross browser suppport?

* Why does the user want to view a list of applicants?

* Does the user want to view a list of all applicants?  Or is only a subset ever important?

* Is there a sweet spot for number of applicants that aren’t overwhelming to view at once?

* Does the user want to be able to filter or sort applicants in some way?

* Which applicant attributes / data is most important?

* Does the applicant data need to update live?

* Will the applicant want to save, bookmark, export or share their list of applicants?

    * What type of exports would they want

    * For sharing, would a url work?  Should the app use routes / url’s to persist state?

* Are there any actions the viewer should be prompted or reminded to take?

* Is there any important data that is often overlooked?

* Do users want to be able to find similar candidates when viewing a single candidate?

* Are applicants that have been hired important to show by default?

* Are applicants from a long time ago worth showing still?

* Would users enjoy view applicants in card views? (kind of like Baseball cards)

**Design Decisions**

Since I was so restricted on time and so new to React, I opted to mostly just recreate the given mockup.  For the modal view however, I did decide to make it a little more interesting than an ordinary modal window.  I implemented the detail view as a fullscreen overlay.  I think this has several advantages over a traditional window modal:

* Significantly more mobile friendly

* Not artificially constrained for space

* Less distractions for the user

Note: The detail view itself does currently look terrible, but I ran out of time.  I have ideas for how to make it look pretty cool though.

**With More Time**

As I alluded to above, my strength as a developer is less in speed and more in thoroughness.  I pride myself on releasing very polished and well thought out features.  With more time I’d obviously polish up the applicant detail view, but here’s other chores, usability improvements and features I would add or improve:

* Fix tests to cover more and to be less prone to breaking

* Write more defensive code making less assumptions about complete data

* Add responsive styling

* App routing, so state is maintained in the url, and links can be shared / bookmarked

* View similar candidate feature linked to off the detail view

    * (View other candidates also from Philadelphia, Pa)

* Sorting on table columns for applicant table

* Filtering and Search on table columns for applicant table

* Estimated commute time (not sure this is worthwhile)

* Instead of showing absolute dates or in addition show time ago (Applied 5 days ago, last action 2 hours ago, people are bad at date and time math)

* Keyboard shortcuts (for exiting detail view, etc)

Lastly I didn't check in the build, but you can simply run npm run build to get a minified more production ready version.
