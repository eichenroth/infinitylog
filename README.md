# Infinity Log

This is Infinity Log.

_There is still a lot of work to do._

## Why - What is the problem we are going to solve.

_This section needs attention!_

__I, personally, find note taking hard.__
There are multiple note taking solutions, but any solutions has its own flaws.

1. Advanced tools like evernote come with a rich featureset but they are overwelming.

1. The Problem of note taking does not seems so hard, that you need an extra tool.

1. The user needs to organize its data in tools.

## Philosophy

1. __There is just one log.__ Everything you write, you write in one consecutive log, that gets increasingly longer. There are no pages, there are no folders. Everything is flat.

1. __Do not care about structure.__ The text you write ist completely unstructured. The software should be able to find, sort, and structure the text.

1. __Search is key.__ Search should be the only thing that matters to finding things. Therefore it needs to be blazingly fast and very easy to use.

1. __There is no formatting.__ _Maybe..._

## Features

This list contains some of the features, that seem to be relevant to me at the moment.

- __Date-Tag__:
  - The date-tag is visible in the left bar.
  - The date tag is placed next to the first line that was written on a specific date.
  - When the first line is not visible the date tag should be visible nevertheless, but should indicate, that there is more text above.
  - The date is changable.
  - The date of subsections is changable.
  - The date tag is visually unexciting.
  - It should be possible to sort by date, if that is what the user wants.

- __Tags__:
  - Every substring is taggable.
  - I do not know where to put the tags yet. There are four posibilities: The left bar, the right bar, inplace within the text, at the end of the line.
  - Tags have colors.
  - Tag colors are generated automatically, the user has no influence on them.
  - Tag colors are beautiful.
  - Tag colors are not too exiting.
  - The colors are choosen to give the user small visual clues but they should fit nicely into the design.
  - Tags are more visually prominent when the user searches for them.

- __Search__:
  - Search is the key element to find things.
  - Tags have priority during search.
  - Search gives some autocompletion hints
  - Text that has been found is displayed in the editor. Text that is irrelevant for the search is hidden.
  - Double-clicking on a search result should reopen all hidden text.

- __Autosave__:
  - The complete text is saved ASAP to the database. It is just text, therefore this shouldnt be that expensive.
  - The position of the user is saved too. When a user enters the page he can pickup where he left.

## To-do

- Remove line numbers.
- Remove autocompletion and Ctrl+Space behaviour.
- Add top bar with some actions like, logout, usersettings, search, help, ...
- Smooth scroll
- Disable native search
- Remove right bar
 