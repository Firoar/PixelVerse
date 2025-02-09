# Client Setup for Pixel Verse

This is the frontend for the **Pixel Verse** project, built with **Vite** and **React**. The client communicates with a custom backend server and integrates some parts of the [Alfa Leetcode API](https://github.com/alfaarghya/alfa-leetcode-api).

## Prerequisites

Before you begin, make sure the following are set up:

1. **Backend Setup**: The backend server is located in the `server` directory and should be running locally on port 3000.

2. **Alfa Leetcode API**: The **Alfa Leetcode API** is included in the `alfa-leetcode-api` directory. It needs to be running locally on port 5000.

## Setup Instructions

### 1. Install Dependencies

Navigate to the `client` directory and install the necessary dependencies:

```bash
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the root of the client directory and add the following configuration:

```bash
VITE_SERVER_URL=http://localhost:3000/
VITE_LEETCODE_URL=http://localhost:5000/
```

**Explanation**:

- `VITE_SERVER_URL`: Points to your **Pixel Verse server** (running locally on port 3000).
- `VITE_LEETCODE_URL`: Points to the **Alfa Leetcode API** (running locally on port 5000).

### 3. Run the Alfa Leetcode API

Since the **Alfa Leetcode API** is included in your project, navigate to the `alfa-leetcode-api` directory and follow the instructions to run it locally on port 5000:

### 4. Run the Pixel Verse Server

Navigate to the `server` directory and and follow the instructions to run it locally on port 3000:

### 5. Run the Pixel Verse Client

Once both the **Pixel Verse server** and **Alfa Leetcode API** are up and running, start the Pixel Verse frontend client:

```bash
cd ../client
npm run dev
```

This will launch the development server for the client, accessible at `http://localhost:5173/`.

## Troubleshooting

- Ensure that both the **Pixel Verse server** (from the `server` directory) and the **Alfa Leetcode API** (from the `alfa-leetcode-api` directory) are running on their respective ports (`3000` for your server and `5000` for the API).
- If you experience issues with API calls, double-check your environment variables in the `.env` file to ensure that the URLs are correct and accessible.
