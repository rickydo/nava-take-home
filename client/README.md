# Nava Front End Take Home Exercise

1. First install all the packages with yarn.
```
yarn install
```

2. Then, run the app with yarn.
```
yarn start
```

3. When the application runs for the first time, it will check if there are any household members in localstorage. If not then it will populate with the members in my household.


## Description 
I chose to build the application using React via Create-React-App because I was familiar with React and this would get the app setup quickly. For styling I used **CMSGOV** and **Reactstrap** because it was a great way to learn a new styling library which had accepted standards for government applications. I have never personally used CMSGOV, but I did quickly review over the the library beforehand. I used Reactstrap because I currently use it in the projects I code for.

I did my best to stick with the wireframe because my it was the source of truth until the customers' opinions sway design decisions after MVP, or even during the building of MVP.

While working on this, I wasn't sure if I could pull in Bootstrap or even other styling libraries to get the styles and layout close enough to the mockup. Eventually, I decided to pull in Reactstrap towards the end so that I could have a more responsive form for adding new household members. If I had more time I probably would have used the Reactstrap classes for Card instead of creating one myself.

### Removing a household member
If I were to add the feature of removing household members I would add a delete button (red fill colored) on the cards of the household members. When the button is clicked it would take the user to a "confirmation" page which would display details of the household member. All fields would be disabled but visible and a user is able to go back or delete the member via buttons.

### Editing a household member
Editing a household member would work similarly as deleting a member. An edit button would be visible on the member's card to the left of the delete button. Once clicked, a form is displayed allowing the user to edit the fields. Submitting the form should update the appropriate member.

### Localstorage
While I did create an API with a MySQL database to run with this app, I did not have the time to bring in Axios and tie the two together. Instead, localstorage was used so that it could replicated on other machines as well without the dependencies of runing a MySQL server. When finding or deleting members, I would have to construct functions to [].find the appropriate member in localstorage by member id.

### Feedback
This exercise was a good challenge. Not only was I able to expand my knowledge of the CMSGOV design library I did have a refresher on what it is like to start a new React from scratch. I found myself rushing through a lot of the code in order to get the app as close as possible to the mockup and found it little challenging to squeeze everything in. This is probably due to the back and forth I had with finding the appropriate CMS class names/format.
This was fun!


