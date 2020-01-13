# react-typescript-learning

This is just a basic project I made while learning React with TypeScript and Material UI.  

--------------------------------------------------------------------------------

### Build environment

To develop I used the following env: [github.com/docker-things/intellij-ultimate-npm](https://github.com/docker-things/intellij-ultimate-npm)

Install docker-things:

```shell script
git clone https://github.com/docker-things/docker-things.git /tmp/dtrepo && bash /tmp/dtrepo/docker-things.sh self-install && rm -rf /tmp/dtrepo
```

Install env:

```shell script
docker-things install intellij-ultimate-npm
```

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
