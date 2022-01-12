## Discord Bot Dashboard NestJS API (2022)

This is the NestJS API for the Discord Bot Dashboard project. You might also need the React & Discord Bot repositories, you can find them down below:

- [React Dashboard](https://github.com/stuyy/discord-dashboard-react)
- [Discord Bot](https://github.com/stuyy/discord-dashboard-bot)

Please do note all code provided in these projects are NOT for production use. They are only for eductional purposes only. These repositories are only a supplement to the new Discord Bot Dashboard Tutorial Series on my YouTube channel, which you can find [here](https://youtube.com/ansonthedeveloper). You can find the playlist with all episodes [here](https://www.youtube.com/playlist?list=PL_cUvD4qzbkyX4Wp8TAfjpttjUldDWJnp).

For any further questions, you may raise an issue or contact me on Discord here: https://discord.gg/3S68xJnqZt

# Instructions & Project Setup

Before you get started, there are a few pre-requisites that you MUST have. Please do not proceed until you have:

- Created a Discord Bot Application
- Installed MySQL Server and have it running

Additionally, you can find the whole project setup for the API in Episode 13.1, which you can reference [here](https://www.youtube.com/watch?v=jSd70thvbEg&list=PL_cUvD4qzbkyX4Wp8TAfjpttjUldDWJnp&index=20).

---

To setup this project, you need to clone this repository.

1. Clone using SSH or HTTPS

   `git clone git@github.com:stuyy/discord-dashboard-api.git`

The package manager I used for this project, and use generally, is `yarn`. You may use `npm` if you wish however if you run into any issues with installing dependencies or building, consider switching to `yarn`.

2. `cd` into the cloned project, and then install dependencies using `npm install` or `yarn install`.

3. Next, you need to create a `.env.development` file inside the root directory of the project.

4. Inside the `.env.development` file, copy and paste the following:

```
# Server Settings

PORT=3001

# Session/Cookie Settings

COOKIE_SECRET=some random string here

# Discord App Credentials

DISCORD_CLIENT_ID=
DISCORD_CLIENT_SECRET=
DISCORD_REDIRECT_URL=http://localhost:3001/api/auth/redirect
DISCORD_BOT_TOKEN=YOUR BOT TOKEN

# MySQL Server Settings

MYSQL_DB_HOST=
MYSQL_DB_USERNAME=
MYSQL_DB_PASSWORD=
MYSQL_DB_DATABASE=discord_dashboard
```

I've left some values blank, you need to fill them out yourself. All Discord related properties can be found on the Discord Developer Portal, under your application. One thing I want to note is I left the `DISCORD_REDIRECT_URL` variable with the value I used in the videos. You can change this if you want, but make sure it is the same value as the redirect url you set on your Discord application.

Fill out the MySQL properties based on your host, username, and password. If you're using MySQL server on your local machine, you can use `localhost` for `MYSQL_DB_HOST`. The database name I used in the video is `discord_dashboard`, but you can change that if you want.

For further questions, visit our Discord server (link is at the top).
