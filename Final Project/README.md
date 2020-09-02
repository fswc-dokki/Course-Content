# Workspace Organizer

Many workspaces are out there using hand-written based solutions for organization. We need to create a website for them because it's much better, easier, faster and less error-prone.

Here you can find :
- [Entities and their relations](#entities)
- [Users and their privilages](#users)
- [Screens and functionality needed](#screens)
- [Technology usage requirements](#technology)
- [Deployment requirements](#deployment)
- [Schedule for Phases and support](#schedule)
- [BONUS WORK ! 🎉](#bonus-work-!-🎉)

## Entities
0. Table
1. Guest
2. Visit
3. Room
5. Reservation
6. Event
- Table represents the unit of the shared area and is reserved by a Guest's Visit for a defined amount of time for a certain price per hour, when the Visit reaches a certain amount no. of hours, the fare (total amount of money a Visitor should pay for a Visit) doesn't increase more.

- Room is another entity that is reserved by a Guest's Reservation for a defined amount of time for a certain price per hour

- Event is a group of reservations for different reasons by a single or multiple Guests

## Users
- _admin_
- _viewer_

## Screens
> \*  :  _admin_ only
1. Auth pages (login - signup - forgot password)
2. Landing page (Logo and Navbar with links - Total no. of Visitor in the current time - No of free Tables - Promotion banners for the available services (events - rooms) with HD photos from of Rooms, shared area and visitors)
3. Add Visit page (Here an _admin_ can add a new visit) (*)
4. Manage visits pages (_admin_ can see all Visits, visitors also edit or delete a Visit) (*)
5. All Rooms page (user can see a list of all the rooms)
6. Single room page (Photos from inside - info about the room - Price/hr - Schedule)
7. Request Reservation page (Here a Reserver request a room reservation)
8. Manage Reservations page (Here _admin_ can see all reservations, edit or remove any of them)
9. Events page (_viewer_ can show all events)
10. Single Event page (Event info - Schedule )
11. Add Event page (here an admin can add Event as group of Reservations) (*)
12. Event Management Page (_admin_ can show, edit or delete Events) (*)
13. Admin Dashboard (landing page for admin) (*)
14. About us / Contact us pages

## Technology

- CSR using Axios to connect FE with BE
- GitHub for project management (Both FE and BE should be on the same repo having BE in a folder called `api`)
- React for Frontend (use create-react-app to create it)
- NodeJS for backend
- MongoDB
- ESLint for linting (Airbnb style guide)

## Deployment

- Database on Atlas
- BE and FE on the same Dino on Heroku

## Schedule

1. Phase 1 (First 7 pages (50%))
2. Final phase (The rest pages (50%) + BONUS)
> Timing to be determined

## BONUS WORK ! 🎉

- Add Courses and Instructors to the websites. A course is a special type of an Event (multiple reservation) and Instructor is a special type of Guests. You should add the entities and the screens for _viewers_ (like show all courses - show single course) also _admin_ pages (add course, add instructor, manage Courses)

- Dockerize db, BE and FE and run them locally !