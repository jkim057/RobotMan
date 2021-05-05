# ROBOT MAN

## Description

1. A guessing game where users have to guess a word one letter at a time. Users get 10 chances, each incorrect letter revealing a robot piece or a figure of a man.

## View the deployed version here!
https://jkim057.github.io/RobotMan/

## Wireframes
![Robotman-basic-display](https://user-images.githubusercontent.com/81879149/117162022-6bc68400-ad90-11eb-9137-f5b9cc5c6a32.png)



## Technology Used
1. HTML, CSS, Javascript

## Installation requirements/Special Requirements
1. Computer with updated browser.
1. Working connection to internet.

## User Stories
1. As the guessing player, I want the lost chances to be clearly understandable so that I know how many chances I have left.
1. As a student, I want to show that I can complete a project that I envisioned.
1. As a Instructor, I want to see that the student was learning and not sleeping in class.

## Major Hurdles/ Unresolved Issues
1. Could not get the letters to turn invisible while keeping letter styling displays visible. ✅ Edit: Was an issue with CSS formatting, has been resolved.
1. Could not get chance figures to show up after each failed guess attempt. ✅ Edit: Was an issue with overly broad query selectors, has been resolved.
1. Could not get chance remaining to display after each failed guess attempt. ✅ Edit: Was an issue with  CSS formatting, has been resolved.
1. Could not get chance figured positioned properly. ✅ Edit: Learned about grid in CSS formatting, has been resolved.
1. Have issue with Cross-Origin Read Blocking (CORB) blocking my image sources. Found work around, but not truly satisfied with it. ✅ Edit: Just put images in folder directly 
1. Images are not stretching out to fill out entire space properly. ✅ Edit: Jen helped my brain grow a little today by pointing out I restricted my images from making up more space by using max-width/max-height instead of regular width/height.
1. A. Can't get the robot head to fill out space.  ✅ Edit: See above for Jen's fix.
1. Can't get pilot head to set inside properly. ❌ EDIT: Saw what it looked like visually, decided to work around this by replacing head img w/ floating pilot face with head img with pilot inside already.
1. Display div was only showing overall array, also was inputting values into array twice. ✅  Edit: Removed double input push and seperated input code and display code which resolved both issues
1. Forgot how flexbox works ✅ Edit: Corrected flexbox formatting into parent element
1. Overlays were breaking my code ✅  Edit: Realized and corrected an input that only inputting a variable instead of the value of that input.
1. Considered setting up background images but not aesthetically pleasing. May save this for future update.
1. Attempts at modifying code to set up 2 player code has only lead to broken code. Currently attempting to narrow down the specific bug. Current estimate is that an variable array is not transfering over data properly. Need to revert all of the changes from 5/3 to earlier state to have functioning code. ❌ Will be having this issue in future update.
1. Reverted code has bug that prevents success from proceeding. ✅ Edit: Uncommented function call which allowed the code to run properly.

## Resources:
1. Used for intial styling: https://matthewjamestaylor.com/css-centred-menus#
1. Visibility Issues Resolved: https://stackoverflow.com/questions/6205148/changing-visibility-using-javascript 
1. Used for position styling: https://www.smashingmagazine.com/2018/02/generated-content-grid-layout/
1. Used for overlay setup: https://www.w3schools.com/howto/howto_css_overlay.asp
1. Used for overlay comprehension: http://jsfiddle.net/UHECE/291/


## Future Plans
### MVP
1. Players can input letters using a input box.✅
2. Letters guessed will be revealed if letters are guessed correctly.✅
3. Incorrect guessed letters will reduce chances in a direct 1 to 1 ratio.✅
4. When all chances are gone, players will be notified.✅
5. Edit: Words to guess will be preset and chosen at random.✅
### Bronze
1. Chances left countdown : ✅
1. Create input so players can enter words to guess. ❌ Broke code, will attempt in future update.
1. Update chance figures with actual artwork. ✅
### Silver
1. Background of town. : ❌ Attempted, but not able to produce at acceptable level.
1. Animation or visual effect accomplaying chance figure appearance.
1. Intro page. ✅
1. End screen.
### Gold
1. End screen animation of town being destroyed.
1. Time based scoring.
1. High score tracker.



## Special Thanks
1. Friends and family.
1. The wonderful intructors and cohortmates at GA
1. Bo, Aaron, and the homies for saving my sanity for pointing out common sense solutions for my overly complicated plans.
