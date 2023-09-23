# Airbrb

## Airbnb Clone using NextJS 13, TailwindCSS, MongoDB, Prisma, Next-Auth, Zustand, Leaflet, ... Inspired by [Code with Antonio](https://www.codewithantonio.com/)

![Airbrb](https://github.com/r3m00n/airbrb/blob/main/public/og.png?raw=true)

### Prerequisites

**Node version 14.x**

### Cloning the repository

```shell
git clone https://github.com/r3m00n/airbrb.git
```

### Install packages

```shell
npm i
```

### Setup .env file

```js
DATABASE_URL=
GITHUB_ID=
GITHUB_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
NEXTAUTH_URL=
NEXTAUTH_SECRET=
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
```

### Setup Prisma

```shell
npx prisma db push
```

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command | description                              |
| :------ | :--------------------------------------- |
| `dev`   | Starts a development instance of the app |
| `build` | Builds the app for production            |
| `start` | Starts the production build              |
