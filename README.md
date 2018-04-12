# Usage
After including the JavaScript component, use the following structure to show a
slider:

```html
<form class="js-duplitrade-slider">
   <p class="dupli-slider-container">
     <span class="dupli-slider-highlight"></span>
     <input class="dupli-slider" type="range" slider-values="1~2~3~4~5~6~7" />
     <output class="slider-output"></output>
  </p>
</form>
```

Use the `slider-values=""` to pass the values to the slider. Separate the values by using `~`.

The input element will have 2 attributes you can use: **current-index** and **current-value**.

**Tip:** use `Document.getElementsByClassName('dupli-slider')` to get an array of all the sliders in the page.
