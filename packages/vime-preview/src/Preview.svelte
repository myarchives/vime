<svelte:options accessors />

<div 
  class="preview"
  use:vAspectRatio={isEnabled ? aspectRatio : null}
  bind:this={el}
>
  <img
    src={currentPoster} 
    alt={currentPoster ? `Preview for ${currentPoster}` : null}
    use:vIf={isEnabled}
    use:vShow={!isLoading}
    on:load={onPosterLoad}
    on:error={onPosterLoad}
    bind:this={img}
  />
</div>

<script context="module">
  const cache = {};
</script>

<script>
  import { tick, createEventDispatcher, onMount } from 'svelte';
  import {
    is_string, vAspectRatio, vIf, vShow,
  } from '@vime-js/utils';
  
  // --------------------------------------------------------------
  // Setup
  // --------------------------------------------------------------

  const dispatch = createEventDispatcher();

  // --------------------------------------------------------------
  // Props
  // --------------------------------------------------------------

  let el;
  let img;
  let nativePoster = null;
  let isLoading = false;

  export let src = null;
  export let isEnabled = true;
  export let aspectRatio = '16:9';
  export let backgroundColor = '#dfdfdf';

  // --------------------------------------------------------------
  // Methods
  // --------------------------------------------------------------

  export const getNativePoster = () => nativePoster;

  // --------------------------------------------------------------
  // Lifecycle
  // --------------------------------------------------------------

  let hasMounted = false;
  onMount(() => { hasMounted = true; });
  
  // --------------------------------------------------------------
  // State
  // --------------------------------------------------------------

  const fetchNativePoster = async () => {
    await tick();
    console.log('fetch attempt');
    isLoading = true;
    nativePoster = null;
    if (!cache[src]) cache[src] = nativePoster;
  };

  const onPosterLoad = async () => {
    await tick();
    isLoading = false;
  };

  const onPosterChange = async () => {
    if (!is_string(src)) return;
    isLoading = true;
    await tick();
    if (img && img.complete) onPosterLoad();
  };

  const onSrcChange = () => { nativePoster = null; };

  $: if (el) el.style.backgroundColor = backgroundColor;

  $: onSrcChange(src);
  $: isPosterFromExternalProvider = is_string(src) && !(/^(http|https|ftp|\.|\/)/.test(src));
  $: currentPoster = isPosterFromExternalProvider ? nativePoster : src;
  $: onPosterChange(currentPoster);
  $: if (hasMounted && is_string(src) && isPosterFromExternalProvider) fetchNativePoster();

  // --------------------------------------------------------------
  // Events
  // --------------------------------------------------------------
  
  const Event = {
    POSTER_CHANGE: 'posterchange',
    LOADING: 'loading',
  };

  $: if (hasMounted) dispatch(Event.LOADING, isLoading);
  $: if (hasMounted) dispatch(Event.POSTER_CHANGE, currentPoster);
</script>

<style type="text/scss">
  .preview {
    position: relative;
    width: 100%;
  }

  img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    object-fit: cover;
  }
</style>