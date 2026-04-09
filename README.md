# Tejas Malokar Portfolio

A modern, high-performance software engineer portfolio built with React, Vite, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Tech Stack**: React 18, Vite, TypeScript, Tailwind CSS.
- **Animations**: Framer Motion for smooth transitions and scroll reveals.
- **Background**: Interactive particle background with `@tsparticles`.
- **UI/UX**: Dark mode, glassmorphism, custom cursor, and responsive design.
- **Typewriter Effect**: Animated introduction using `react-simple-typewriter`.
- **Contact**: Integrated contact form (ready for EmailJS).

## Project Structure

- `src/components`: UI components (Hero, Navbar, About, etc.).
- `src/data`: Centralized data file (`profile.ts`) for easy updates.
- `src/styles`: Tailwind configuration and global styles.

## Getting Started

1.  **Install dependencies**:
    ```bash
    npm install
    ```

2.  **Run the development server**:
    ```bash
    npm run dev
    ```

3.  **Build for production**:
    ```bash
    npm run build
    ```

## Deployment on Vercel

1.  Push the code to a GitHub repository.
2.  Go to [Vercel](https://vercel.com/) and click **New Project**.
3.  Import the repository.
4.  Vercel will automatically detect the Vite configuration. Click **Deploy**.

## Contact Form Setup

To enable the contact form:
1.  Sign up at [EmailJS](https://www.emailjs.com/).
2.  Replace the placeholder logic in `src/components/Contact.tsx` with your `SERVICE_ID`, `TEMPLATE_ID`, and `PUBLIC_KEY`.
