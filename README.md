# tugas-API-todo-list
Todo List API Services using Express JS and MongoDB

## Installation and Setup Instructions

### Prequisites
1. Git
2. Node.js
3. NPM
4. MongoDB

### Cloning this repo
```cmd
> git clone https://github.com/hushus23/tugas-API-todo-list.git
> cd tugas-API-todo-list
```

### Editing the file
Edit the required value in .env file </br>
`PORT`: PORT localhost. </br>
`MONG_URl`: your MongoDb URI. </br>
`JWT_TOKEN`: your secret key.</br>

### Installing the dependencies
```cmd
> npm install
```

### Running App
```cmd
> npm run dev
```
The application will be available at: `http://localhost:8080`

## Domain Services

### Task
1. Register </br>
   -the method to regist the user `POST` </br>
   -the endpoint to regist the user `'/register'`</br>
3. Login </br>
   -the method to user login `POST` </br>
   -the endpoint to user login `'/login'` </br>
5. Create Task </br>
   -the method to create task `POST` </br>
   -the endpoint for create task `'/todos'` </br>
7. Get All Tasks </br>
   -the method to get all task `GET` </br>
   -the endpoint to get all task `'/todos'` </br>
9. Get Task By Id </br>
   -the method to get task filtered by id `GET` </br>
   -the endpoint to get task filtered by id `'/todos/:id'` </br>
11. Get Details Task By Id </br>
   -the method to get details task by id `GET` </br>
   -the endpoint to get details task by id `'/todos/:id/details'` </br>
13. Update Task </br>
    -the method to update task `PUT` </br>
    -the endpoint to update task `'/todos/:id'` </br>
15. Delete Task by Id </br>
    -the method to delete task `DELETE` </br>
    -the endpoint to delete task `'/todos/:id'` </br>
15. Delete All Tasks </br>
    -the method to delete all tasks `DELETE` </br>
    -the endpoint to delete all tasks `'/todos'` </br>
    
## Demo App
Link deploy on railway: https://tugas-api-todo-list.up.railway.app/

## API Documentation
API documentation on postman: https://documenter.getpostman.com/view/30478309/2s9YeHbBf6

## Author
- [Nurul Husna] 
