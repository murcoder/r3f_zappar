# Web AR React Boilerplate with ZappAR

Boilerplate for a WebAR React app using [Zappar for React-Three-Fiber](https://www.npmjs.com/package/@zappar/zappar-react-three-fiber) with a modern tech stack:

## Tech Stack
| Dependency                                        | Version | Description |
|----------------------------------------------------|---------|-------------|
| [React](https://reactjs.org/)                      | 18.2.0 | UI library for building reactive components |
| [React Three Fiber (R3F)](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction) | 8.15.12 | React renderer for ThreeJS, enables 3D graphics in React |
| [ThreeJS](https://threejs.org/)                    | 0.159.0 | 3D graphics library for WebGL |
| [Vite](https://vitejs.dev/)                        | 7.1.3  | Fast frontend build tool and development server |
| [Tailwind CSS](https://tailwindcss.com/)          | 4.1.12 | Utility-first CSS framework for styling |
| [Shadcn/UI](https://ui.shadcn.com/)               | 2.10.0 | Optional UI component library built on Tailwind |
| [Zappar for R3F](https://www.npmjs.com/package/@zappar/zappar-react-three-fiber) | 2.1.0 | WebAR SDK for React Three Fiber, image & face tracking |


## Preview
Scan the QR code below using your native camera app or QR code reader to view the example:
​
![Preview QR Code"](preview-qr-code.png)


The project has been set up to use webpack for bundling assets and code. To get started, install the project's dependencies by running the following command:
```
npm install
```

During development, you can use the following command to run a `webpack server` for testing on your computer or a device on your local network:
```
npm run start
```

And when you're ready to publish your site, run the following command. The resulting `dist` folder can be uploaded to ZapWorks for publishing. If you'd like to self-host your site, be sure to check out the documentation on the [Zappar for React Three Fiber](https://www.npmjs.com/package/@zappar/zappar-react-three-fiber) page.
```
npm run build
```

## Target Image
![Target Image](example-tracking-image.png)
