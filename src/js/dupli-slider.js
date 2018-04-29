class SliderManager {
  constructor(){
  }

  startSliders() {
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
              dupliSlider.value = entryIndex;
              dupliSlider.setAttribute("current-value",values[entryIndex]);
              dupliSlider.setAttribute("current-index",entryIndex);
            } else {
              dupliSlider.value = 0;
              dupliSlider.setAttribute("current-value",values[0]);
              dupliSlider.setAttribute("current-index",0);
            }
          }
          length = values.length - 1;
          dupliSlider.setAttribute("max",length);
          dupliSlider.setAttribute("min",0);
          dupliSlider.setAttribute("step",1);
          outputs[i].innerHTML = "<strong>" + values[0] + "</strong>";
        }

      var dupliSlider, newPoint, newPlace, offset;
      var setupSlider = function($slider){
        var width = dupliSlider.width();
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
    $( window ).resize(function() {
      $(".dupli-slider").each(function() {
        dupliSlider = $(this);
        setupSlider(dupliSlider);
      })
        .trigger('change');
    });
    });
  };

  startSliderById(sliderId) {
    let $ = require('jquery');

    // Initialize all sliders on page
    let dupliSlider, valuesString, values, length;

    dupliSlider = $("#"+sliderId);
    let sliderOutput = dupliSlider.next(".slider-output");
    valuesString = dupliSlider.attr("slider-values");
    values = valuesString.split('~');
    var entryValue = dupliSlider.attr("entry-value");

    if (values.length <= 1) {
    length = values.length - 1;
      // dupliSlider.prev(".js-duplitrade-slider").addClass("slider-disabled");
      dupliSlider.closest(".js-duplitrade-slider").addClass("slider-disabled");

    } else {
      if (entryValue != null) {
        var entryIndex = values.indexOf(entryValue);
        dupliSlider.val(entryIndex);
        dupliSlider.attr("current-value",values[entryIndex]);
        dupliSlider.attr("current-index",entryIndex);
      } else {
        dupliSlider.val(0);
        dupliSlider.attr("current-value",values[0]);
        dupliSlider.attr("current-index",0);
      }
    }
    length = values.length - 1;
    dupliSlider.attr("max",length);
    dupliSlider.attr("min",0);
    dupliSlider.attr("step",1);
    sliderOutput.html("<strong>" + values[0] + "</strong>");

    let newPoint, newPlace, offset;
    function setupSlider($slider){
      var width = dupliSlider.width();
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

        sliderOutput.html('<strong>'+values[dupliSlider.val()]+'</strong>');

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
    dupliSlider.change(function() {
      dupliSlider = $(this);
      setupSlider(dupliSlider);
    })
      .trigger('change');	

    dupliSlider.on('input', function() {
      dupliSlider = $(this);
      setupSlider(dupliSlider);
    })
      .trigger('change');

    $( window ).resize(function() {
      $(".dupli-slider").each(function() {
        dupliSlider = $(this);
        setupSlider(dupliSlider);
      })
        .trigger('change');
    });
  }
}

export let sliderManager = new SliderManager();
