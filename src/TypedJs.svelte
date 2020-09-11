<script>
  import { createEventDispatcher, onMount } from 'svelte';
  import Typed from 'typed.js';

  const dispatch = createEventDispatcher();

  onMount(() => {
    let el = document.querySelector('.typing');

    const typed = new Typed(el, {
      strings,
      stringsElement,
      typeSpeed,
      startDelay,
      backSpeed,
      smartBackspace,
      shuffle,
      backDelay,
      fadeOut,
      fadeOutClass,
      fadeOutDelay,
      loop,
      loopCount,
      showCursor,
      cursorChar,
      autoInsertCss,
      attr,
      bindInputFocusEvents,
      contentType,
      onComplete: () => dispatch('complete'),
      onPreStringTyped: () => dispatch('preStringTyped'),
      onStringTyped: () => dispatch('stringTyped'),
      onLastStringBackspaced: () => dispatch('lastStringBackspaced'),
      onTypingPaused: () => dispatch('typingPaused'),
      onTypingResumed: () => dispatch('typingResumed'),
      onReset: () => dispatch('reset'),
      onStop: () => dispatch('stop'),
      onStart: () => dispatch('start'),
      onDestroy: () => dispatch('destroy'),
    });
  });

  export let strings = ['Hello World!'];
  export let stringsElement = null;
  export let typeSpeed = 50;
  export let startDelay = 0;
  export let backSpeed = 0;
  export let smartBackspace = true;
  export let shuffle = false;
  export let backDelay = 700;
  export let fadeOut = false;
  export let fadeOutClass = 'typed-fade-out';
  export let fadeOutDelay = 500;
  export let loop = false;
  export let loopCount = Infinity;
  export let showCursor = true;
  export let cursorChar = '|';
  export let autoInsertCss = true;
  export let attr = null;
  export let bindInputFocusEvents = false;
  export let contentType = 'html';
</script>

<div>
  <slot />
</div>
