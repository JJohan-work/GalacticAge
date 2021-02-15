# Galactic Age Calculator

#### See how old you are on other planets. Epicodus Week 5 Project

#### By Jonah Johansen

## Technologies Used
* _HTML_
* _CSS_
*_JavaScript_
* _Git_
* _Github_
* _Node and Node Package Manager_
* _Jest_
* _Webpack_

## Description
Webpack build of program can be viewed [Here](https://jjohan-work.github.io/GalacticAge/), hosted on the gh_pages branch of repo.   
This program takes your birthdate on Earth and converts it to your age on other planets in the solar system. This project uses TDD and an enviroment built with npm, jest, and webpack. A user interface exists for this program and can be accesed with index.html after building. Planet object is used for all functions and variable storage for converting ages to other planets.

## Setup/Installation
* Download or clone repository.
* Open repo and run ```npm install```.
* Run ```npm run build``` to build to dist.
* Open dist/index.html to see webpage.

## How to use program
* Open program by either going to [Github Pages](https://jjohan-work.github.io/GalacticAge/) or by opening dist/index.html as described in setup/installation.
* Enter Age and press calculate. The rest of the interface will appear after this.
* Default planet is earth, press planets to the left and right to switch between planets and output will automatically appear.
* If wanting to test a different birthday a new one can be entered at any time.

## How to use Jest testing
* Follow setup/installation instructions above.
* Run ```npm run test``` in console and jest will output to the terminal.
* Tests should all execute green.
* Currently there is two test suites in planet.test.js and display.test.js. Each function is inside its own describe with each branch of functionality as its own test.

* * *
## Known Bugs

* __Next Birthday is sometimes 1 day off. likely from errors caused by float accuracy__

## License:
> *&copy; Jonah Johansen, 2021*

Licensed under [MIT license](https://mit-license.org/)

* * *

## Contact Information
_Jonah Johansen: [Email](johansenjonah+git@gmail.com)_