<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a>
    <img src="docs/images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">CloudDash</h3>

  <p align="center">
    A interactive cloud dashboard to interact with multiple cloud providers at one stop.
    <br />
    <strong>In Progress: Additional features will be added.</strong>
    <br />
    <br />
    ·
    <a href="https://pedantic-hawking-48252c.netlify.app">View Demo</a>
    ·
    
    A sample demo for UI is deployed on Netlify. It can be accessed using the link given above.

    Please Note: As just a static website is online to showcase the frontend, backend is not available. 
    All feature might not be available.
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#deployment">Deployment</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

![Homepage Screen Shot](docs/images/screenshot1.png)

The project is a full stack application with React frontend, Express backend, MySQL database and python scripts to interact with cloud providers.

In the application, user is able to perform following tasks:
* Create a new account through sign-up page.
* Create new resources.
* View the status of all the resources across multiple cloud providers.
* Create a template for all the required software instalation on the server during its creation.
* Schedule Start/Stop of the server at a specified date & time enabling a cost saving function.
* Schedule a custom script to be executed on the server at a designated time & date on the server.

Please refer below to view the project structure. 
![Project Struct.](docs/images/clouddash.png)

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

Major frameworks/libraries used to create the project. 

* [React.js](https://reactjs.org/)
* [Express.js](https://expressjs.com/)
* [Node.js](https://nodejs.org/en/)
* [Axios](https://axios-http.com/docs/intro)
* [MySQL](https://www.mysql.com/)
* [React Bootstrap](https://react-bootstrap.github.io/)
* [Ansible](https://www.ansible.com/)


<p align="right">(<a href="#top">back to top</a>)</p>

## Dashboard Page

The users will be able to get a overview of their infrastucture footprint through this page. 

![Dashboard.](docs/images/screenshot2.png)

## Create Resource Pages

* Virtual Machine
* Virtual Machine Scale Set
* Template

The users will be able to create compute resources by passing on all the required information. 

![VM](docs/images/screentshot3.png)

## Automations

* Instance Scheduler
* Script Scheduler

The users will be able to create custom automations for any particular resource.

![Scheduler](docs/images/screenshot4.png)

## Authentication

The sample Sign up & Signin pages are also showcased in the side navigation bar.

![Auth](docs/images/screentshot5.png)


## Deployment

A sample UI demo is deployed on Netlify. It can be viewed by clicking the link given at the begining of the Readme.

<!-- GETTING STARTED -->
## Getting Started

Please follow the given instructures to setup the application locally on your system.

### Prerequisites

Please install the given software using the steps given below. 
1. Node: Dowload the appropriate installation package from the given [link](https://nodejs.org/en/download/)

### Installation

1. Clone the repo
   ```sh
   git clone 
   ```
2. Navigate to cloned directory
3. Install all the NPM packages required for the directory
   ```sh
   npm install
   ```
4. Start the frontend React server by running the following command.

   ```sh
   npm start
   ```

The application should be accessible at http://localhost:3000/

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Samihan Nandedkar - svn2998@example.com

Email: svn2998@gmail.com

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Thesse resources were useful in the building of application. 

* [Axios Request](https://masteringjs.io/tutorials/axios/basic_auth)
* [Create React Application](https://reactjs.org/docs/create-a-new-react-app.html)
* [Express Generator](https://expressjs.com/en/starter/generator.html)
* [Environment Variables](https://stackoverflow.com/questions/48605484/environment-variables-env-in-node-js-express?rq=1)
* [GitHub Pages](https://pages.github.com)
* [Font Awesome](https://fontawesome.com)
* [React Icons](https://react-icons.github.io/react-icons/search)

<p align="right">(<a href="#top">back to top</a>)</p>





