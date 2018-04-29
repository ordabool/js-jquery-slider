# Include
To use the package, get the `sliderManager` object by using:
```javascript
const { sliderManager } = require('js-jquery-slider')
```

After including the `sliderManager` run either functions:
```javascript
sliderManager.startSliders() //To run all sliders on page
sliderManager.startSliderById(id) //To run only a specific slider
```

### Styles
The slider is completely hackable, meaning that you can implement your own
design.

If you want however, there are 2 styles inclueded in the package: `blueSlider`
and `greenSlider`.

Include them from the dist/styles/ folder as so:
```javascript
import styles from 'js-jquery-slider/dist/styles/blueSlider.css';
```

# Usage
After including the package, use the following structure to show a
slider:

```html
<div class="sliderDiv">
   <p class="sliderContainer">
     <span class="sliderHighlight"></span>
     <input class="slider" type="range" sliderValues="1~2~3~4~5~6~7"
     sliderEntryValue="3" />
     <output class="sliderOutput"></output>
  </p>
</div>
```

Use the `sliderValues=""` to pass the values to the slider, and `sliderEntryValue=""` to choose the default value. Separate the values by using `~`.

The input element will have 2 attributes you can use: **sliderCurrentIndex** and **sliderCurrentValue**.
