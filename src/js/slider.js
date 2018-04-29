class SliderManager {
  constructor(){
  }

  startSliders() {
    var $ = require('jquery');

    $(document).ready(function(){

        // Initialize all sliders on page
        var sliders = $(".slider");
        var outputs = $(".sliderOutput");
        var slider, valuesString, values, length;

        for (var i = 0; i<sliders.length; i++){
          slider = sliders[i];
          valuesString = slider.getAttribute("sliderValues");
          values = valuesString.split('~');


          var entryValue = slider.getAttribute("sliderEntryValue");
          
          if (values.length <= 1) {
            $(".sliderDiv")[i].setAttribute("class", "sliderDiv sliderDisabled");
          } else {
            if (entryValue != null) {
              var entryIndex = values.indexOf(entryValue);
              slider.value = entryIndex;
              slider.setAttribute("sliderCurrentValue",values[entryIndex]);
              slider.setAttribute("sliderCurrentIndex",entryIndex);
            } else {
              slider.value = 0;
              slider.setAttribute("sliderCurrentValue",values[0]);
              slider.setAttribute("sliderCurrentIndex",0);
            }
          }
          length = values.length - 1;
          slider.setAttribute("max",length);
          slider.setAttribute("min",0);
          slider.setAttribute("step",1);
          outputs[i].innerHTML = "<strong>" + values[0] + "</strong>";
        }

      var slider, newPoint, newPlace, offset;
      var setupSlider = function($slider){
        var width = slider.width();
        var valuesString = slider.attr("sliderValues");
        var values = valuesString.split('~');
        length = values.length - 1;
        slider.attr("max",length);
        if (values.length > 1){
          newPoint = (slider.val() - slider.attr("min")) / (length - slider.attr("min"));
          offset = -6.5;
          // Prevent bubble from going beyond left or right (unsupported browsers)
          if (newPoint < 0) {
            newPlace = 0;
          } else if (newPoint > 1) {
            newPlace = width; 
          } else { 
            newPlace = width * newPoint + offset; offset -= newPoint;
          }

          var sliderHighlight = slider.prev("span");
          sliderHighlight.width(newPlace+5.8);

          var sliderOutput = slider.next("output");

          sliderOutput.html('<strong>'+values[slider.val()]+'</strong>');

          slider.attr("sliderCurrentValue",values[slider.val()]);
          slider.attr("sliderCurrentIndex",slider.val());

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
      $(".slider").change(function() {
        slider = $(this);
        setupSlider(slider);
      })
      .trigger('change');	
      $(".slider").on('input', function() {
        slider = $(this);
        setupSlider(slider);
      })
      .trigger('change');	
    $( window ).resize(function() {
      $(".slider").each(function() {
        slider = $(this);
        setupSlider(slider);
      })
        .trigger('change');
    });
    });
  };

  startSliderById(sliderId) {
    let $ = require('jquery');

    // Initialize all sliders on page
    let slider, valuesString, values, length;

    slider = $("#"+sliderId);
    let sliderOutput = slider.next("output");
    valuesString = slider.attr("sliderValues");
    values = valuesString.split('~');
    var entryValue = slider.attr("sliderEntryValue");

    if (values.length <= 1) {
    length = values.length - 1;
      // slider.prev(".sliderDiv").addClass("sliderDisabled");
      slider.closest(".sliderDiv").addClass("sliderDisabled");

    } else {
      if (entryValue != null) {
        var entryIndex = values.indexOf(entryValue);
        slider.val(entryIndex);
        slider.attr("sliderCurrentValue",values[entryIndex]);
        slider.attr("sliderCurrentIndex",entryIndex);
      } else {
        slider.val(0);
        slider.attr("sliderCurrentValue",values[0]);
        slider.attr("sliderCurrentIndex",0);
      }
    }
    length = values.length - 1;
    slider.attr("max",length);
    slider.attr("min",0);
    slider.attr("step",1);
    sliderOutput.html("<strong>" + values[0] + "</strong>");

    let newPoint, newPlace, offset;
    function setupSlider($slider){
      var width = slider.width();
      var valuesString = slider.attr("sliderValues");
      var values = valuesString.split('~');
      length = values.length - 1;
      slider.attr("max",length);
      if (values.length > 1){
        newPoint = (slider.val() - slider.attr("min")) / (length - slider.attr("min"));
        offset = -6.5;
        // Prevent bubble from going beyond left or right (unsupported browsers)
        if (newPoint < 0) {
          newPlace = 0;
        } else if (newPoint > 1) {
          newPlace = width; 
        } else { 
          newPlace = width * newPoint + offset; offset -= newPoint;
        }

        var sliderHighlight = slider.prev("span");
        sliderHighlight.width(newPlace+5.8);

        sliderOutput.html('<strong>'+values[slider.val()]+'</strong>');

        slider.attr("sliderCurrentValue",values[slider.val()]);
        slider.attr("sliderCurrentIndex",slider.val());

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
    slider.change(function() {
      slider = $(this);
      setupSlider(slider);
    })
      .trigger('change');	

    slider.on('input', function() {
      slider = $(this);
      setupSlider(slider);
    })
      .trigger('change');

    $( window ).resize(function() {
      $(".slider").each(function() {
        slider = $(this);
        setupSlider(slider);
      })
        .trigger('change');
    });
  }
}

export let sliderManager = new SliderManager();
