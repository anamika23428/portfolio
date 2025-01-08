# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

The command installs several dependencies for a React project with the `--legacy-peer-deps` flag, which allows the installation to bypass peer dependency conflicts. Here's a breakdown of the packages:

### **Command**:
```bash
npm install --legacy-peer-deps @react-three/fiber @react-three/drei maath react-tilt react-vertical-timeline-component @emailjs/browser framer-motion react-router-dom
```

### **Packages**:
1. **@react-three/fiber**:
   - A React renderer for Three.js, used for building 3D graphics in React.

2. **@react-three/drei**:
   - A collection of useful helpers, abstractions, and shaders for use with @react-three/fiber.

3. **maath**:
   - A library for math utilities, often used in 3D rendering and physics simulations.

4. **react-tilt**:
   - A lightweight library for creating tilt effects on components (e.g., for interactive UI).

5. **react-vertical-timeline-component**:
   - A React component for creating vertical timelines, commonly used in portfolios or project showcases.

6. **@emailjs/browser**:
   - The EmailJS library for browser-based applications to send emails without a server.

7. **framer-motion**:
   - A popular animation library for React, offering declarative animations with simple syntax.

8. **react-router-dom**:
   - The DOM bindings for React Router, used for client-side routing in React applications.

### **Why `--legacy-peer-deps`?**
This flag is used to resolve dependency conflicts in projects where peer dependencies specified by one package conflict with others. It allows npm to install dependencies without enforcing strict peer dependency requirements.

### **Notes**:
- Ensure your Node.js and npm versions are compatible with the packages.
- If any package throws an error or is incompatible, check its specific version requirements in the documentation.
