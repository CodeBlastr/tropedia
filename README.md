# Folders and Components

- ``app/``: REST API built with [Strapi](https://strapi.io/).
- ``client/``: Frontend built as a Server-Side-Rendered (SSR) Web Application using [Nuxt.js](https://nuxtjs.org/).
- ``./data``: This folder is not stored in the repo, it gets created automatically by the [MongoDB](https://www.mongodb.com/) service when it is launched for the first time.

# Development Setup

The development setup uses 3 docker containers:
- Strapi
- MongoDB
- Frontend

## Requirements

- To install and run locally you will only need [Docker Desktop](https://www.docker.com/products/docker-desktop).

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
docker-compose up
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

### Add roles and permissions

After setting up your first admin user you will have to import the roles and permissions into Strapi. To do that, follow these steps:
1. Login to Strapi admin UI (http://localhost:1337/admin).
2. Click on the **Sync Roles And Permissions** menu option on the left side navigation bar.
3. Click on the **Browse** button under **Sync Roles And Permissions**, then browse to the `./app/strapi-roles-and-permissions.json` file and select it.
5. Then, click on the **Sync Roles And Permissions** button.

### Setup default role for new users
1. Click on the **Setings** menu option on the left side navigation bar.
2. Finally, click on the **Roles** link under the **USERS AND PERMISSIONS PLUGIN** group.
Click on the **Advanced Settings** menu option (under the **USERS AND PERMISSIONS PLUGIN** group), then set *Editor* as the *Default role for authenticated users* and then click on the **Save** button.

## 3. Open the frontend

Browse to http://localhost:3000