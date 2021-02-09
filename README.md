# gensolve-coding-test Project purpose

- To Build an angular application to allow the user to view the appointment list and appointment detail.
- The application will be responsive when running in different browser resolution and on mobile.
- Application uses the material component library to display the appointment list.

## Required Tools

- You need to install NodeJs: `https://nodejs.org/en/`
- You need to install angular cli: `https://cli.angular.io/`

## How to run the application

### Run dev server

- Go to the root folder of the project then run `yarn install`.
- Then run `yarn start`, it then starts a dev server.
- Open the browser and use the URL: `http://localhost:4200/` to view the application.

### Run testing

- Go to the root folder and run `yarn test`.

## Application design

- Components: Application has two screen which are home screen(under `app/home-screen` folder) and appointment detail screen(under `app/appointment-detail-screen`). When clicking into the appointment row(or edit button) on the Home screen, it then navigates to the Appointment detail screen.

- Services: We have two services as below
	1. appointment-list.service: 
		* It takes care of loading appointment list data and appointment detail data for both the Home screen and the Appointment detail screen.
		* Currently, it loads mock data which are under `assets/` folder.
	2. appointment-table.service: 
		* It takes care of defining the data structure for displaying in the table on the Home screen.
		* Home screen renders the appointment table dynamically. If we want to reduce or add more information, so just change the code here without changing the component.

- Responsive: 
	1. Home screen: 
		* When the resolution of the user's device is small(which is below `600px`), instead of displaying the table, we use the vertical list. In this way, we can display all the information about appointments on the screen.
		* It has two separate templates for small resolution and higher resolution. In the small resolution, we don't use the material library table.
	2. Appointment detail screen: 
		* The content is always in the center of the screen.
		
- We have an `appointment-pipe` pipe that formats the data of appointments. For example, the date follows  `ddd DD/MM/YY hh:mm A` format.

- Unit Test: We implement unit test for `appointment-list.service`, `appointment-table.service`, `appointment-pipe` and `appointment-detail-screen`.


