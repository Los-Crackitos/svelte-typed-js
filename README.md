# svelte-typed-js

[![npm](https://img.shields.io/npm/v/@loscrackitos/svelte-typed-js.svg)](https://www.npmjs.com/package/@loscrackitos/svelte-typed-js)
[![npm](https://img.shields.io/npm/dm/@loscrackitos/svelte-typed-js.svg)](https://www.npmjs.com/package/@loscrackitos/svelte-typed-js)

Svelte Typed.js component

Typed.js is a library that types. Enter in any string, and watch it type at the speed you've set, backspace what it's typed, and begin a new sentence for however many strings you've set.

Checkout the official project [here](https://github.com/mattboldt/typed.js/).

## Table of contents

- [Installation](#installation)
- [Usage](#usage)
- [Example](#examples)

# Installation

```
npm i -D @loscrackitos/svelte-typed-js
```

## Default import

Import the component:

```javascript
import TypedJs from '@loscrackitos/svelte-typed-js';
```

# Usage

Import the `TypedJs` component inside your Svelte template and set the sentences that needs to be typed inside the `strings` props.

Simplest usage:

```html
<TypedJs strings="['Hello John', 'Hello Martin']">
  <h1 class="typing"></h1>
</TypedJs>
```

`typing` class also allows you to just animate certain parts of a string:

```html
<TypedJs strings="['John', 'Martin']">
  <h1>👋 <span class="typing"></span></h1>
</TypedJs>
```

## Props

| Property             | Type    | Description                                                          | Usage                              |
| -------------------- | ------- | -------------------------------------------------------------------- | ---------------------------------- |
| strings              | Array   | strings to be typed                                                  | `strings="{['Text 1', 'Text 2']}"` |
| stringsElement       | String  | ID of element containing string children                             | `stringsElement="myId"`            |
| typeSpeed            | Number  | type speed in milliseconds                                           | `typeSpeed={50}`                   |
| startDelay           | Number  | time before typing starts in milliseconds                            | `startDelay={1000}`                |
| backSpeed            | Number  | backspacing speed in milliseconds                                    | `backSpeed={10}`                   |
| smartBackspace       | Boolean | only backspace what doesn't match the previous string                | `smartBackspace={true}`            |
| shuffle              | Boolean | shuffle the strings                                                  | `shuffle={true}`                   |
| backDelay            | Number  | time before backspacing in milliseconds                              | `backDelay={100}`                  |
| fadeOut              | Boolean | Fade out instead of backspace                                        | `fadeOut={true}`                   |
| fadeOutClass         | String  | css class for fade animation                                         | `fadeOutClass="fadeOutClass"`      |
| fadeOutDelay         | Number  | fade out delay in milliseconds                                       | `fadeOutDelay={500}`               |
| loop                 | Boolean | loop strings                                                         | `loop={true}`                      |
| loopCount            | Number  | amount of loops                                                      | `loopCount={3}`                    |
| showCursor           | Boolean | show cursor                                                          | `showCursor={true}`                |
| cursorChar           | String  | character for cursor                                                 | `cursorChar="_"`                   |
| autoInsertCss        | Boolean | insert CSS for cursor and fadeOut into HTML                          | `autoInsertCss={true}`             |
| attr                 | String  | attribute for typing Ex: input placeholder, value, or just HTML text | `attr="placeholder"`               |
| bindInputFocusEvents | Boolean | bind to focus and blur if el is text input                           | `bindInputFocusEvents={true}`      |
| contentType          | String  | 'html' or 'null' for plaintext                                       | `contentType="html"`               |

## Events

Available events:

| Event                  | Description                                 | Usage                               |
| ---------------------- | ------------------------------------------- | ----------------------------------- |
| onComplete             | All typing is complete                      | `on:complete={handler}`             |
| preStringTyped         | Before each string is typed                 | `on:preStringTyped={handler}`       |
| onStringTyped          | After each string is typed                  | `on:stringTyped={handler}`          |
| onLastStringBackspaced | During looping, after last string is typed  | `on:lastStringBackspaced={handler}` |
| onTypingPaused         | Typing has been stopped                     | `on:typingPaused={handler}`         |
| onTypingResumed        | Typing has been started after being stopped | `on:typingResumed={handler}`        |
| onReset                | After reset                                 | `on:reset={handler}`                |
| onStop                 | After stop                                  | `on:stop={handler}`                 |
| onStart                | After start                                 | `on:start={handler}`                |
| onDestroy              | After destroy                               | `on:destroy={handler}`              |

## Features

Find every features documentation on the main library [page](https://github.com/mattboldt/typed.js/).

# Examples

Here are several examples:

```html
<!-- infinite loop -->
<TypedJs
  strings="{['awesome', 'brilliant']}"
  loop="{true}"
  on:complete="{handle}"
>
  <p>We are a <span class="typing"></span> company!</p>
</TypedJs>

<!-- type with some pause -->
<TypedJs
  strings="{['This is text ^1000 which gets paused for 1 second', 'wow, interesting']}"
>
  <p class="typing"></p>
</TypedJs>

<!-- render html from strings -->
<TypedJs
  strings="{['<p>Paragraph</p>', '<span>Span</span>']}"
  contentType="html"
>
  <p class="typing"></p>
</TypedJs>
```
