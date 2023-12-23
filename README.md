# CodeShare 3.0

Codeshare is a code sharing platform built using `(Next.js, Prisma, Clerk Auth, TypeScript)` stack. It enables easy sharing of codes with multiple users. Users can create a new codeshare, save it to generate a unique link which can be shared with multiple users.

Live project can be viewed [here](https://codeshare-3.vercel.app/)

Codeshare 2.0 which was made using MERN Stack `MongoDB, Express.js, React.js, Node.js` can be viewed [here](https://github.com/Ayush0202/Codeshare-2.0/).

Codeshare 1.0 which was made using `EJS, Node.js, Express.js, MongoDB` can be viewed [here](https://github.com/Ayush0202/Codeshare).

## Features

- **Document Management** : Users can create and delete their codeshares
- **User Authentication** : Secure user registration and login functionality using `Clerk`
- **Dashboard** : Users have access to a personalized dashboard that displays their codeshare and allows quick navigation
- **Protected Routes** : Only authenticated users are allowed to access application features
- **Responsive Design** : Responsive design for Laptop, Tablet and Mobile Phones
- **Enhanced Type Safety**: Leveraging TypeScript results in robust and stringent type definitions, fortifying the application's security.

## Installation

Clone the repository:

```
git clone https://github.com/Ayush0202/Codeshare-3.git
```

Navigate to the project directory:

```
cd codeshare-3
```

Install dependencies

```
npm install
```

Set up the environment variables

- Create a `.env` file
- Specify the following variables in the `.env` file

```
DATABASE_URL=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
```

Start the next.js application

```
npm run dev
```

The server will be running at `http://localhost:3000`

### Technologies Used

- Next.js: React framework that facilitates server-side rendering, automatic code splitting, and streamlined development of production-ready web applications.
- Prisma: It is a modern database toolkit that simplifies database access and management with a type-safe and auto-generated query API.
- Clerk: It is an authentication and user management service for web applications, providing a simple developer experience with pre-built UI components.
- TypeScript: TypeScript is a statically typed superset of JavaScript that adds optional static typing and other features to help catch and prevent common programming errors.
- PostgreSQL: PostgreSQL is an open-source relational database management system (RDBMS) known for its extensibility and SQL compliance.
- Codemirror - A code editor component for the web
