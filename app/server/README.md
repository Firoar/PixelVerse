# Project Setup

## How to Set Up the Server

Follow these steps to get your server up and running.

### 1. Install Dependencies

Run the following command to install the required dependencies:

```bash
npm install
```

### 2. Set Up `.env` File

Create a `.env` file in the root directory of your project. Below is an example of what your `.env` file should look like:

```env
DB_DIALECT=""
DB_NAME=my-db
DB_USER=your-name
DB_PASS=pass
DB_HOST=./db.sqlite

PORT=""
FRONTEND_URL=""
SESSION_SECRET="some-random-secret"
NODE_ENV=development

DATABASE_URL='your-postgress-utrl => not necessary if u are using sqlite'
```

### 3. Start the Development Server

Once everything is set up, run the following command to start the server in development mode:

```bash
npm run dev
```

The server will start on the port specified in your `.env` file (default: `3000`).
