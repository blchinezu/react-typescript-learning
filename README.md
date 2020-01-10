# react-typescript-learning

This is just a basic project I made while learning React with TypeScript and Material UI.  

--------------------------------------------------------------------------------

### Install dependencies

```shell script
npm install
```

--------------------------------------------------------------------------------

### Run dev env

```shell script
npm start
```

--------------------------------------------------------------------------------

### inotify issues

If you get any `inotify` related errors run this in your host:

```shell script
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```

This should increase the max number of files that your system is allowed to monitor at once.
