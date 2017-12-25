
var search = instantsearch({
	appId: 'CYDOXRNTGN',
	apiKey: '4a966540d767ba819e5373aa67ffd0b1',
	indexName: 'brunoamaral.eu'
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
'  <article class="search-results mini-post stories">'+
'    <header>'+
'      <h3><a href="{{ ref }}">{{ title }}</a></h3>'+
'    </header>'+
'    <a href="{{ ref }}" class="image mini-featured-image" ><img src="{{image}}" alt="" /></a>'+
'  </article>';

var noResultsTemplate =
'<div class="text-center">No results found matching <strong>{{query}}</strong>.</div>';

search.addWidget(
  instantsearch.widgets.searchBox({
    container: '#search',
    placeholder: 'Search',
    cssClasses: {input: 'morphsearch-input hideInput'},
    autofocus: false,
    // poweredBy: true
  })
);

search.addWidget(
	instantsearch.widgets.hits({
//	container: '#hits-container',
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
          var morphSearch = document.getElementById( 'morphsearch' ),
            input = morphSearch.querySelector( 'input.morphsearch-input' ),
            ctrlClose = morphSearch.querySelector( 'span.morphsearch-close' ),
            isOpen = isAnimating = false,
            // show/hide search area
            toggleSearch = function(evt) {
              // return if open and the input gets focused
              if( evt.type.toLowerCase() === 'focus' && isOpen ) return false;

              var offsets = morphsearch.getBoundingClientRect();
              if( isOpen ) {
                classie.remove( morphSearch, 'open' );

                // trick to hide input text once the search overlay closes 
                // todo: hardcoded times, should be done after transition ends
                if( input.value !== '' ) {
                  setTimeout(function() {
                    classie.add( morphSearch, 'hideInput' );
                    setTimeout(function() {
                      classie.remove( morphSearch, 'hideInput' );
                      input.value = '';
                    }, 300 );
                  }, 500);
                }
                
                input.blur();
              }
              else {
                classie.add( morphSearch, 'open' );
              }
              isOpen = !isOpen;
            };

          // events
          input.addEventListener( 'focus', toggleSearch );
          ctrlClose.addEventListener( 'click', toggleSearch );
          // esc key closes search overlay
          // keyboard navigation events
          document.addEventListener( 'keydown', function( ev ) {
            var keyCode = ev.keyCode || ev.which;
            if( keyCode === 27 && isOpen ) {
              toggleSearch(ev);
            }
          } );
        })();