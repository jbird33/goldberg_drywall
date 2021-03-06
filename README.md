# Goldberg Drywall Application

## Description:

The Goldberg Drywall application was designed and implemented, to be used by a small business contractor at Goldberg Drywall. Most private business owners on this scale cannot afford, would not even come close to using all the features, or even want to take the time to learn large scale commercial products. This app allows for the regular Joe/Jill, to keep track of basic _Customer_ information and the current list of Jobs they have going at the time. The user can **Create**, **Read**, **Update**, or even **Delete** the data as they see fit, without having to train on how to do so.

## Brief Example:

![homepage image](https://raw.githubusercontent.com/jbird33/goldberg_drywall/main/images/Homepage.PNG)

## List of Features / User Stories

I wanted to create an application where your non-IT orientated contractor could easily keep track of their _Customers_. The _Customer_ data would include but, not limited to:

 - Name
 - Email
 - Phone Number
 - Address

Next, the user should be keeping track of each _Job(s)_ they have for each of their _Customers_. It should be said that there is the potential for one _Customer_ to have more than one _Job_ listing. This too will be readily available to the user. I wanted to capture these data points for each _Job_:

- Address
- Square Footage of the Job (needed to configure bid amts)
- Bid Amount (total amount sent to customer via contract)
- Contact (Commonly not the Customer direct i.e., Superintendent, Foreman)

Each of these collected bits of information is formatted so that the user can view the data in a profile type setting, or in a complete list of all. This will be so for both the _Customer_, and the _Job_ listings. The complete list page will have limited information shown but, have the capability to move to the profile. In the profile setting, the user can see the more detailed information, edit the selected fields, or delete the profile altogether.

**Here is the ERD Diagram I used for my Database Model:**

![ERD Diagram](https://raw.githubusercontent.com/jbird33/goldberg_drywall/main/images/DB%20Diagram.PNG)

### Future features

As is noted in the diagram above, I would like to add a table to track the current _Employees_ at Goldberg Drywall. The atrributes that I would think the user could get the most benefit from are the Name, Address, Phone, Email, and Current Wage. This can be done at a later point and could lead to an assigning _Jobs_ to a _Employee_ relationship.

I would also like to add some functionality features of maybe a 'Home" button or 'Back'. This would allow for more cognitive maneuverability thru the application. Instead of using the browser's back button, the user could traverse thru to each page as they saw fit or as they needed data to show on screen.

## List of Technologies Used / Dependencies

**Here is a list of technologies I used to design and implement this application:**
- Visual Studio Code
- Node.js
- Sequelize
- Git Bash
- CMD
- Express
- Postgres
- Lucid Diagram

**Here is the a list of my installed dependencies:**
- ejs
- method-override
- body-parser
- nodemon
- sequelize-cli
- pg

## Installation Instructions / Getting Started: 

**To set up and use this application:**

    1. Fork and clone the repository
    2. Use your console and install the listed dependencies
    3. For example: npm install sequelize-cli
    4. npx sequelize db:migrate
    5. npx sequelize db:seed:all
