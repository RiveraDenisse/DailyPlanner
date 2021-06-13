# WorkDayScheduler
Week 5 project was to create a work day planner with the following criteria:
-Current day must be displayed at the top of the calendar
-The planner must show timeblocks for std business hours
-Timeblocks must be color-coded to indicate whether it is in the past,present or future
-When the user clicks on a time-block, the application must allow the user to enter an event
-When the 'save' button is clicked the text for that event is saved in local storage
-When the page is refreshed the data in local storage must be retrieved

In order to complete this challenge the first step was to use momentjs to insert the current time to the calendar; once this was complete then I created a single time-block and create logic to save the input to local storage and retrieve information when 'refresh' is pressed (so if there was a mistake I could fix it without going thru all the code). Once this was working the next step was to create the logic to compare the present time and the timeblock time using momentJS and then based on that addClass for present, future and past. Once the logic was correct a timer to refresh the page was included (so time-blocks could change based on color-code as well as timedisplayed) the rest of the time-blocks were hardcoded to the HTML and finished assigning the corresponding css.

Link to live website: https://riveradenisse.github.io/DailyPlanner/

Github Repository : https://github.com/RiveraDenisse/DailyPlanner.git

Daily Planner
*![screenshot](/Assets/WorkDayScheduler.png)

Daily Planner
*![video](/Assets/DailyPlanner.gif)