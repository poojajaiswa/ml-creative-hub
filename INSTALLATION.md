
# ML Creative Hub Installation Guide

This guide will help you set up and run the ML Creative Hub portfolio website locally on your machine.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v16.0 or higher)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)
- Git (optional, for cloning the repository)

## Installation Steps

### 1. Clone or Download the Repository

Either clone the repository using Git:

```bash
git clone <repository-url>
cd ml-creative-hub
```

Or download and extract the ZIP file from the repository.

### 2. Install Dependencies

Navigate to the project directory in your terminal and run:

```bash
npm install
```

This will install all the required dependencies listed in the `package.json` file.

### 3. Start the Development Server

Once the dependencies are installed, start the development server:

```bash
npm run dev
```

The application should now be running at [http://localhost:8080](http://localhost:8080) (or another port if 8080 is already in use).

## Project Structure

- `/src` - Contains the source code for the application
  - `/components` - React components used throughout the application
  - `/pages` - Page components for different routes
  - `/data` - Data files for projects and other content
  - `/hooks` - Custom React hooks
  - `/lib` - Utility functions and helpers

## Customization

### Modifying Project Data

To update the project information, edit the file at `src/data/projects.ts`.

### Updating Personal Information

Personal information such as contact details can be updated in the `Contact.tsx` component.

### Adding New Certificates

To add or modify certificates, update the certificate data in the `Certificates.tsx` component.

## Building for Production

To create a production build of the application, run:

```bash
npm run build
```

The built files will be available in the `dist` directory.

## Deployment

After building the project, you can deploy it to various platforms:

- For GitHub Pages, use the `gh-pages` package
- For Netlify or Vercel, connect your repository to their platform
- For traditional hosting, upload the contents of the `dist` directory

## Troubleshooting

If you encounter any issues:

1. Make sure all dependencies are correctly installed
2. Check the console for error messages
3. Ensure you're using a compatible Node.js version
4. Try clearing the npm cache: `npm cache clean --force`

## Additional Resources

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
