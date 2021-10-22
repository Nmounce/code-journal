Partials (views/partials) in handlebars are some reusable templates, that can be accessed from any other templates. Partials must be registered via Handlebars.registerPartial.

    breaks down templates into further component parts - ach section of the HTML is a partial then pulled together

    EXAMPLE:
    <!-- For each gallery, the 'gallery-details' partial is used to render the gallery data -->
    {{#each galleries as |gallery|}}
    {{> gallery-details}} //carrot lets system know that you are trying to render a partial, without it wont render anything
{ { /each}}

looping over each gallery as 'gallery' and rendering the galleries details