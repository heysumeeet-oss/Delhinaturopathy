# Delhi Wellness Haven - Next.js Website

This is a Next.js project for the Delhi Wellness Haven clinic website.

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd delhi
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

### Environment Variables

Before running the application, you need to set up the environment variables.

1.  Create a `.env.local` file in the `delhi` directory by copying the example file:
    ```bash
    cp .env.local.example .env.local
    ```

2.  Open `.env.local` and add your Google Generative AI API key:
    ```
    GEMINI_API_KEY="YOUR_API_KEY_HERE"
    ```

### Running the Development Server

To start the development server, run:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

-   `npm run dev`: Starts the development server.
-   `npm run build`: Builds the application for production.
-   `npm run start`: Starts a production server.
-   `npm run lint`: Runs the linter.
