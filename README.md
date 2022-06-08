# Backend Destination APIs Architecture
![Backend Destination API](https://user-images.githubusercontent.com/86970816/172515405-1fa5e3a5-8e51-4fb7-84fd-e4f4e758d9d4.png)

# API Description
This is source code of Destinations API of Travens team to GET and POST Destinations data who consume by our Travens Mobile Application.
Build using Node JS and Express framework, from open source software called [JSON Server](https://github.com/typicode/json-server) from Typicode and Server deployed at Heroku.

# API URL
[Destinations API](https://travens-api.herokuapp.com/)

# API Endpoint
| Endpoint |   Method   | Body Sent (JSON) |              Description              |
| :------: | :--------: | :--------------: | :-----------------------------------: |
|     /    |     GET    |Success Running Json Server|   HTTP GET REQUEST		       |
|   /destinations|    GET    |id, destinations_name, description, address, phone_number, latitude, longitude, operational_time|   HTTP GET REQUEST Show all of the destinations data who available at our JSON database |
|   /destinations/{id}| GET |id, destinations_name, description, address, phone_number, latitude, longitude, operational_time|HTTP GET REQUEST Show destinations data who have same id as a parameter from the url endpoint|
| /destinations|    POST    | Anything | HTTP POST REQUEST Post data to our JSON database |

# Security Concern
We understand that our server is have no security protection cause anyone can POST data to our server and causing a malfunction or overloading server, this is just temporary solution cause we lack of time but we will commit to build secure server soon if we pass to the next round of bangkit

# How to run this Express app
- Clone this repo
- Open terminal and go to this project's root directory
- Type `npm install` and hit enter
- Serve the Express app by typing `npm run dev`
- It will run on http://127.0.0.1:3000

![image](https://user-images.githubusercontent.com/86970816/172519527-15d7b24d-01cd-40df-a59a-034a855c4915.png)

# How to get destination information with Postman
- Open Postman
- Enter URL request bar with http://127.0.0.1:3000/destinations
- Select method GET
- Send the request
- You can also input the query parameter using `destination_name`

![image](https://user-images.githubusercontent.com/86970816/172520379-b5f5b3f3-1936-43a7-8dbd-39f410e22996.png)

![image](https://user-images.githubusercontent.com/86970816/172520499-1ee86dc1-73e8-4bb6-9116-03e7d4f27d9a.png)

![image](https://user-images.githubusercontent.com/86970816/172520587-5478e8de-11ef-4638-9b30-e6d88f9baca1.png)


