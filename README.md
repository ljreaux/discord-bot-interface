# Discord Bot Admin Dashboard

This is an admin dashboard for controlling commands for a Discord.js bot. The dashboard is built with Next.js, TypeScript, Tailwind CSS, shadcn, Clerk for authentication, MongoDB for data storage, and deployed on Vercel.

## Table of Contents

- [Discord Bot Admin Dashboard](#discord-bot-admin-dashboard)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Configuration](#configuration)
    - [Usage](#usage)
    - [Screenshots](#screenshots)
    - [Contributing](#contributing)
    - [License](#license)

## Features

- **Command Management**: Create, update, delete, and list commands for your Discord.js bot.
- **User Authentication**: Secure login and registration with Clerk.
- **Responsive Design**: Mobile-friendly interface with Tailwind CSS.
- **Prebuilt Components**: Utilize prebuilt components from shadcn for faster development.
- **Real-time Updates**: Dynamic updates to commands using MongoDB.
- **Deployment**: Easily deployable with Vercel.

## Getting Started

### Prerequisites

Ensure you have the following installed on your development machine:

- Node.js (>= 14.x)
- npm or yarn
- MongoDB instance (local or remote)
- Clerk account for authentication setup

### Installation

1. **Clone the repository**

```bash
   git clone https://github.com/ljreaux/discord-bot-interface.git
   cd discord-bot-interface
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

### Configuration

1. Create a .env.local file in the root of the project and add the following environment variables:

```shell
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<your-clerk-publishable-key>
CLERK_SECRET_KEY=<your-clerk-secret-key>
MONGO_URI=<your-mongodb-connection-string>
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
orgId=<your-clerk-org-id>
```

Replace `<your-clerk-publishable-key>`, `<your-clerk-secret-key>`, `<your-mongodb-connection-string>`, and `<your-clerk-org-id>` with your actual Clerk and MongoDB credentials.

2. Run the development server

```bash
npm run dev
# or
yarn dev
```

Open http://localhost:3000 with your browser to see the dashboard.

### Usage

- Login/Register: Use the Clerk authentication system to log in or register.
- Manage Commands: Navigate to the commands section to create, update, delete, or list bot commands.
- Real-time Updates: Changes are instantly reflected in your MongoDB database.

### Screenshots

Here are some screenshots of the admin dashboard:

![Home page]("/Screen Shot 2024-06-17 at 2.03.25 PM.png")
![Edit Command form]("/Screen Shot 2024-06-17 at 2.03.11 PM.png")
![Edit/Cancel]("/Screen Shot 2024-06-17 at 2.03.25 PM.png")

### Contributing

1. Fork the repository.
2. Create a new branch: `git checkout -b my-feature-branch`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-feature-branch`
5. Submit a pull request.

### License

This project is licensed under the MIT License.
