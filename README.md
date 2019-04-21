

## Sorting
![](gif1.gif)

## Filtering
![](gif2.gif)

## Technology Stack
* React
* Node.js
* MySQL
* Selenium (python)


### Database
* install mySQL server
* navigate to database.sql inside database folder
* import schema from database.sql to create database with included mock data

Database Config Info
```
{
    "host": "localhost",
    "user": "root",
    "password": "",
    "database": "performance"
}
```

### Backend
* ensure MySql server is up and running
* navigate into backend folder: cd backend
* install dependent libraries: npm install
* run backend: nodemon app.js
* default backend url: http://localhost:5000/
* backend url for benchmark data: http://localhost:5000/benchmarks


### Frontend
* ensure backend is up and running
* navigate into frontend folder: cd frontend
* install dependent libraries: npm install
* run frontend: npm start
* default frontend url: http://localhost:3000/


## Web Testing Automation

* Selenium Python Install Instructions: https://selenium-python.readthedocs.io/installation.html
* install selenium package: pip3 install selenium
* download stable chromedriver: https://sites.google.com/a/chromium.org/chromedriver/home
* open up test.py and edit the path to chromedriver in variable named: PATH_TO_CHROMEDRIVER
* make sure backend and frontend is running first
* navigate to test.py in testing
* run test.py script and it should begin opening up Google chrome to run tests
