//import $ from "jquery";

import instantsearch from 'instantsearch.js/es';

import { hits, searchBox } from "instantsearch.js/es/widgets";


const search = instantsearch({
	appId: 'CYDOXRNTGN',
	apiKey: '4a966540d767ba819e5373aa67ffd0b1',
	indexName: 'brunoamaral.eu',
  	searchFunction: function(helper) {
      var searchResults = $('.ais-hits');
      if (helper.state.query === '') {
        searchResults.hide();
        return;
      }
      helper.search();
      searchResults.show();
    }
});

var hitTemplate =
  '<div class="hit media">' +
    '<div class="media-left">' +
      '<img src="{{image}}" />'+
    '</div>' +
    '<div class="media-body">' +
      '<h4 class="media-heading">{{{_highlightResult.title.value}}} {{#stars}}<span class="ais-star-rating--star{{^.}}__empty{{/.}}"></span>{{/stars}}</h4>' +
      '<p class="content">{{_snippetResult.content.value}}</p>' +
    '</div>' +
'</div>';

var hitTemplateCard = 
'<div class="row"><div class="col">' +
'    <a href="{{ ref }}" title="{{ title }}" class="card mt-3 mx-auto">'+       
'        <img class="card-img-top" src="{{ image }}" alt="" />'+      
'      <h5 class="card-title px-3">{{ title }}</h5>'+
'      <p class="mb-0 px-3 card-footer"><time class="published" datetime=""></time></p>'+
'    </a>'+
'</div></div>';
// '  <article class="search-results mini-post stories">'+
// '    <header>'+
// '      <h3><a href="{{ ref }}">{{ title }}</a></h3>'+
// '    </header>'+
// '    <a href="{{ ref }}" class="image mini-featured-image" ><img src="{{image}}" alt="" /></a>'+
// '  </article>';




var noResultsTemplate =
'<div class="text-center">No results found matching <strong>{{query}}</strong>.</div>';

search.addWidget(
searchBox({
    container: '#search',
    placeholder: 'Search',
    cssClasses: {input: 'morphsearch-input hideInput'},
    autofocus: false,
    magnifier: false,
    reset: false
    //poweredBy: true
  })
);

search.addWidget(
hits({
	container: 'div.morphsearch-content',
	templates: {
		empty: noResultsTemplate,
		item: hitTemplateCard
		},
  hitsPerPage: 9
	})
);

// search.addWidget(
// 	instantsearch.widgets.pagination({
// //	container: '#pagination-container'
// 	container: '#intro',
// 	})
// );

search.start();

// HERE COMES THE MORPHING SEARCH

(function() {
    var morphSearch = $('#morphsearch'),
        input = $('input.morphsearch-input'),
        ctrlClose = $('span.morphsearch-close'),
        isOpen = false;
    // show/hide search area

    // Search (header).
    var $body = $('body'),
        $search = $('#search'),
        $search_input = $search.find('input');

    $body
        .on('click', '[href="#search"]', function(event) {

            event.preventDefault();

            // Not visible?
            if (!$search.hasClass('visible')) {

                // Reset form.
                //$search[0].reset();

                // Show.
                $search.addClass('visible');

                // Focus input.
                $search_input.focus();

            }

        });

    $search_input
        .on('keydown', function(event) {

            if (event.keyCode == 27)
                $search_input.blur();

        })
        .on('blur', function() {
            window.setTimeout(function() {
                $search.removeClass('visible');
            }, 100);
        });



    var toggleSearch = function(evt) {
        // return if open and the input gets focused
        if (evt.type.toLowerCase() === 'focus' && isOpen) return false;

        var offsets = morphsearch.getBoundingClientRect();
        if (isOpen) {
            morphSearch.removeClass('open');

            // trick to hide input text once the search overlay closes 
            // todo: hardcoded times, should be done after transition ends
            if (input.value !== '') {
                setTimeout(function() {
                    morphSearch.addClass('hideInput');
                    setTimeout(function() {
                        morphSearch.removeClass('hideInput');
                        input.value = '';
                    }, 300);
                }, 500);
            }

            input.blur();
        } else {
            morphSearch.addClass('open');
        }
        isOpen = !isOpen;
    };

    // events
    input.on('focus', toggleSearch);
    ctrlClose.on('click', toggleSearch);
    // esc key closes search overlay
    // keyboard navigation events
    $(document).on('keydown', function(ev) {
        var keyCode = ev.keyCode || ev.which;
        if (keyCode === 27 && isOpen) {
            toggleSearch(ev);
        }
    });
})();