# Folders and Components

- **./app**: REST API built with [Strapi](https://strapi.io/). It runs in a docker container.
- **./client**: Server-Side-Rendered Web Application built with [Nuxt.js](https://nuxtjs.org/). Runs using npm.
- **./data**: This folder is not stored in the repo, it gets created automatically by the [MongoDB](https://www.mongodb.com/) service when it is launched for the first time. MongoDb runs in a docker container.


# Development Setup

## Requirements

- You will need to have [Docker Desktop](https://www.docker.com/products/docker-desktop) installed.
- You will also need to have [Node.js](https://nodejs.org/en/) installed (version 14.16.1 preferrably) as well as npm.

## 1. Clone the GitHub Repository

Clone the repo locally.
```
git clone https://github.com/CodeBlastr/tropedia
```

## 2. Setup the Strapi and MongoDB services

Pull the latest images.
```
docker-compose pull
```

Run the stack.
```
docker-compose up -d
```

It may take several minutes when you launch it for the first time as it will build the admin UI and complete its setup. It is important to let this process finish. You will know it is ready when you get this message:

>```
>strapi_1  |  Project information
>strapi_1  | 
>strapi_1  | ?????????????????????????????????????????????????????????????????????????
>strapi_1  | ? Time               ? Fri Apr 23 2021 03:28:30 GMT+0000 (Coordinated ? ?
>strapi_1  | ? Launched in        ? 12423 ms                                         ?
>strapi_1  | ? Environment        ? development                                      ?
>strapi_1  | ? Process PID        ? 187                                              ?
>strapi_1  | ? Version            ? 3.6.0 (node v12.20.1)                            ?
>strapi_1  | ? Edition            ? Community                                        ?
>strapi_1  | ?????????????????????????????????????????????????????????????????????????
>strapi_1  | 
>strapi_1  |  Actions available
>strapi_1  | 
>strapi_1  | One more thing...
>strapi_1  | Create your first administrator ? by going to the administration panel at:
>strapi_1  | 
>strapi_1  | ???????????????????????????????
>strapi_1  | ? http://localhost:1337/admin ?
>strapi_1  | ???????????????????????????????
>```

Visit [http://localhost:1337/admin](http://localhost:1337/admin) to open the Strapi UI. You will be prompted to setup a new admin user.

### Add user roles (only for first time setup)
After setting up your first admin user you will have to create the three user roles specific to Tropedia. To do that, follow these steps:
1. Login to Strapi admin UI (http://localhost:1337/admin) using your newly created administrator user and password.
2. On the left side menu bar click on the **Setings** menu option.
3. Click on the **Roles** menu under the **USERS AND PERMISSIONS PLUGIN** group.
4. You will see there are 2 default roles: Authenticated and Public. Go ahead and create the following Roles using the **+ AddNew Role** button:
    - *Editor*
    - *Moderator*
    - *Restricted*
5. Finally, click on the **Advanced Settings** menu option (under **USERS AND PERMISSIONS PLUGIN**) and set *Editor* as the *Default role for authenticated users* and then click on the **Save** button.

## 3. Setup the Nuxt.js Web App

NOTE: Don't terminate the strapi process. You will have to run the client in a separate terminal instance.

Install the dependencies.

```
cd client
npm install
```

Launch the web application.

```
npm run dev
```

You are all set.