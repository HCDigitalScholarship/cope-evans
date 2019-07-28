### The Cope Evans Project: *Exploring the lives of a Quaker family during the industrial age*
[Site](http://165.227.217.17) |  [Map](http://165.227.217.17/letters/) 

This project explores the Cope Evans Family Papers curated by Haverford Special Collections. The Cope Evans were a Quaker family in Philadelphia during the nineteenth century. The majority of papers in the collection are from that time period. The collection now also includes some letters from the twentieth century (donated by J. Morris Evans). This site will include data visualizations, essays, and snippets of the Cope Evans Family Papers Collection.

#### Core frameworks/Languages
- Django
- Python

#### Summer 2019 Technologies/Tools
- Mapbox
- Chart.js
- JQuery 
- Bootstrap
- django-flatpages
- CKEditor

#### Previously used Technologies
- JQuery 
- D3 
- FancyBox
- Mapbox 
- Arc.js 

#### Technologies I had trouble with
- Google Maps geocoding API: The size of the output was greater than the number of requests made, so the data was no longer associative. I switched to Mapbox.
- Dash: I couldn't get the Dash app to integrate. I switched to Chart.js.
- Wagtail
- [django flatcontent](https://github.com/orcasgit/django-flatcontent): too old, very broken.

#### Requirements
Not all of the packages in the requirements file were used. Some, like Wagtail and Dash were never properly configured. Integrating a dash app into the rest of the project was very troublesome (even with the [cookbook entries](https://github.com/HCDigitalScholarship/ds-cookbook/tree/master/dash) and an [example](https://github.com/HCDigitalScholarship/dashboard) to work from), so I switched to Chart.js. Wagtail appeared to be missing some dependencies when I first tried to install it in lieu of CKEditor. CKEditor started working once we brought its js into the project static folder (I suspect this is a server configuration issue that is very easy to fix). 
