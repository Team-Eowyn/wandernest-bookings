# wandernest-bookings
Bookings module

Current functionality:
- when checkin is clicked, calendar modal pops open
- checkin can be clicked again to close modal
- if guest selection is clicked while calendar modal is open, calendar will close and guest modal will open
- if calendar is clicked while guest modal is open, guest modal closes and calendar opens
- when date is clicked for checkin, checkout date is default updated to next day until specific date is selected
- next buttons moves right side to the left side and updates right side to next month
- prev moves left side to right and updates left side to previous month
-


Missing functionality/bugs:
- if last day of month is selected for checkin, checkout date defaults to invalid because next day is a new month and code for this is missing
- blanks at beginning of month highlight on hover, code to limit highlight only to cells with dates is missing
- if dates selected include a weekend day (Fri, Sat, Sun), price should update to weekend price; code for this is missing
- next/prev buttons can move between March 2020 and Sept 2020; need to add code conditions for leap year for Feb and for double digit months
- calendar should be able to close when body of page outside modal is clicked

