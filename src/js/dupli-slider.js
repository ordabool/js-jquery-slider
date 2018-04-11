export class SliderManager {
  constructor(){
  }

  function startSliders() {
    require('../css/dupli-slider.css');
    var $ = require('jquery');

    $(document).ready(function(){

        // Initialize all sliders on page
        var dupliSliders = $(".dupli-slider");
        var outputs = $(".slider-output");
        var dupliSlider, valuesString, values, length;

        for (var i = 0; i<dupliSliders.length; i++){
          dupliSlider = dupliSliders[i];
          valuesString = dupliSlider.getAttribute("slider-values");
          values = valuesString.split('~');


          var entryValue = dupliSlider.getAttribute("entry-value");
          
          if (values.length <= 1) {
            $(".js-duplitrade-slider")[i].setAttribute("class", "js-duplitrade-slider slider-disabled");
          } else {
            if (entryValue != null) {
              var entryIndex = values.indexOf(entryValue);
              dupliSlider.setAttribute("value",entryIndex);
            } else {
              dupliSlider.setAttribute("value",0);
            }
          }
          length = values.length - 1;
          dupliSlider.setAttribute("max",length);
          dupliSlider.setAttribute("min",0);
          dupliSlider.setAttribute("step",1);
          dupliSlider.setAttribute("current-value",values[0]);
          dupliSlider.setAttribute("current-index",0);
          outputs[i].innerHTML = "<strong>" + values[0] + "</strong>";
        }
        

      var dupliSlider, newPoint, newPlace, offset;
      var setupSlider = function($slider){
        width = dupliSlider.width();
        var valuesString = dupliSlider.attr("slider-values");
        var values = valuesString.split('~');
        length = values.length - 1;
        dupliSlider.attr("max",length);
        if (values.length > 1){
          newPoint = (dupliSlider.val() - dupliSlider.attr("min")) / (length - dupliSlider.attr("min"));
          offset = -6.5;
          // Prevent bubble from going beyond left or right (unsupported browsers)
          if (newPoint < 0) {
            newPlace = 0;
          } else if (newPoint > 1) {
            newPlace = width; 
          } else { 
            newPlace = width * newPoint + offset; offset -= newPoint;
          }
      
          var sliderHighlight = dupliSlider.prev("span");
          sliderHighlight.width(newPlace+5.8);
           
          var sliderOutput = dupliSlider.next("output");
      
          sliderOutput.html('<strong>'+values[dupliSlider.val()]+'</strong>');
            // .html('<strong>$'+values[dupliSlider.val()]+'</strong>&nbsp;/&nbsp;wk');
      
          dupliSlider.attr("current-value",values[dupliSlider.val()]);
          dupliSlider.attr("current-index",dupliSlider.val());
            
          if(newPoint <= .08){
            sliderOutput
              .css({
                left: 0,
                right: "unset",
                marginLeft: 0
              })
            } else if(newPoint > .8){
              sliderOutput
              .css({
                right: 0,
                left: "unset",
                marginLeft: 0
              })
            } else {
              sliderOutput
              .css({
                left: newPlace,
                right: "unset",
                marginLeft: offset + "%"
              })
            }
        }
        
      }

      // Select all range inputs, watch for change
      $(".dupli-slider").change(function() {
        dupliSlider = $(this);
        setupSlider(dupliSlider);
      })
      .trigger('change');	
      
      $(".dupli-slider").on('input', function() {
        dupliSlider = $(this);
        setupSlider(dupliSlider);
      })
      .trigger('change');	
    });
  };
}
