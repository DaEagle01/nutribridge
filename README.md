# Nutribridge

**Live Link:** [https://nutribridge.vercel.app/](https://nutribridge.vercel.app/)

The project aims to develop a comprehensive Food Distribution and Supplies Management System using React, Redux for state management, RTK Query for efficient data fetching, and React Router DOM for navigation. This platform will serve as a vital tool for coordinating and managing the distribution of food and essential supplies to communities in need, ensuring accessibility to nutritious meals and basic necessities.

## Project Decisions

The following libraries and frameworks were used for this project:

- React.js: A popular library for building user interfaces with components and hooks.
- Tailwind CSS: A utility-first CSS framework.
- React Router DOM: A declarative routing library for React that enables navigation between different pages or components.
- Framer Motion: A Tailwind based animation library for React that enables seamless animations.
- Daisy UI: Daisy UI simplifies styling in Tailwind CSS by adding component class names to common UI elements. It promotes cleaner HTML with semantic class names.
- Redux Toolkit: Redux Toolkit streamlines Redux development. It provides good defaults, simplifies store setup, and includes commonly used Redux addons resulting in seamless data flow throughout the application.
- Rtk Query: RTK Query, built on Redux Toolkit, simplifies data fetching and caching. It defines entire API in one place and uses auto-generated React hooks.
- Redux Persist: Redux Persist is a powerful library that enables you to persist and rehydrate your Redux store. It allows you to save the state of your application to persistent storage (such as local storage or AsyncStorage) and retrieve it when needed.
- React Icons: Easily include popular icons in your React projects using React Icons. Customize color, size, and style with ES6 imports.
- jwt-decode: jwt-decode is a lightweight library used to decode JSON Web Tokens (JWTs). It allows extracting information from JWTs, such as user claims or metadata.

These libraries and frameworks were chosen based on their popularity, documentation, compatibility, and functionality. They provide a solid foundation for developing a high-quality React application that meets the project requirements.

## Installation and Usage

To run this project, you need to have Node.js and npm installed on your machine. Then, follow these steps:

Clone this repository:

```bash
git clone https://github.com/DaEagle01/nutribridge.git
```

Go to the project directory

```bash
cd  nutribridge
```

Install dependencies

```bash
npm  install
```

Create the `.env.local` file in the projects root directory and add the following variables

```bash
  - VITE_SERVER_URL_DEV: Port number the server listens on. Default: 5000.
  - VITE_SERVER_URL_PROD: Deployed server URL.
```

Start the development server:

```bash
npm  run  dev
```

- Open your browser and go to `http://localhost:3000` to see the landing page
