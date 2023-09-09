# FamilySearch Party Games

## Notes

Check out my cool notes [here](notes.md)

## Family History Party Games Startup Specifications

The idea of this application is to get more people excited about Family History by having fun together. The main idea is that a group of friends or a family can get together and play a family history party game similar to jackbox games together. Users will be able to authenticate with FamilySearch to be able to download their family tree, and then they will be ready to interact with their ancestors by asking and receiving auto-generated questions about their ancestors/tree in a trivia game-like manner. We could potentially add other games to play like guessing an ancestor based off of a picture, or guessing who the target player is when seeing a pedigree pie of the player's ancestory on the screen. With this app, we hope to show the world that studying and knowing your family history can be fun, and you can have a great time bonding with your friends and family at the same time!

## Basic Sketch of Design

![Sketch](images/Startup_Pitch_Sketch.jpg)

### Key Features

* FamilySearch authentication
* Trivia/guessing games involving ancestry
* Auto-generated questions
* Websocket created game rooms with randomly generated ids so other players can join in on the fun
* A scalable database to keep track of high scores or other interesting data

### Technologies

* **HTML** will be used to create the general layout of the frontend UI for users
* **CSS** will be implemented to bootstrap the app's styling and make it look good on all screen sizes
* **Javascript** will be used a lot for the backend and frontend logic for storing state, variables, etc, and allowing for the user to interact with the app
* Authentication through a nodejs backend auth service for authenticating with FamilySearch. This will require the user to have an account with FamilySearch and they will authenticate with their FamilySearch credentials by being redirected to FamilySearch's login page through **Oauth**. We could also potentially implement some other type of account creation system individually for this app that could allow users to receive emails or customize personal account settings more
* We could use either **MongoDB**, **DynamoDB**, or some other database to include high scores, users' favorite games, or user emails for automated emails. We will have a more concrete idea about this as we discuss it as a developer group
* We will use **websockets** for game creation/termination so we can create game rooms where other players can join and play. We may implement other features using **websockets** as well, but this will be a good starting point
* We will most likely use **Nextjs** or **React** for the frontend, and **NodeJs/Express** for the backend. We may try and use Rust for the backend, but we will discuss this more as a development team
* We will most likely use **Vercel**, **AWS Route53**, and **Terraform** to deploy this app's frontend. The backend may use **Terraform** and AWS resources such as a **load balancer** to be hosted, but it depends on how much traffic we expect this app to receive

