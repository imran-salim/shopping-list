# Shopping List App

A simple, modern shopping list application built with React, TypeScript, and Vite.

## Features

- Add items to your shopping list with name and quantity
- Mark items as purchased or unpurchased
- Clear the entire list with one click
- Responsive design for desktop and mobile
- Automatic dark and light mode support based on your system settings

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/your-username/shopping-list.git
    cd shopping-list
    ```

2. Install dependencies:

    ```sh
    npm install
    # or
    yarn install
    ```

### Running the App

Start the development server:

```sh
npm run dev
# or
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the app.

### Building for Production

To build the app for production:

```sh
npm run build
# or
yarn build
```

The output will be in the `dist` folder.

## Project Structure

```
shopping-list/
├── src/
│   ├── components/
│   │   └── Item.tsx
│   ├── App.tsx
│   ├── App.css
│   └── main.tsx
├── public/
├── package.json
└── README.md
```

## Customization

- **Styling:** The app uses CSS with automatic dark/light mode support. You can customize styles in `src/App.css`.
- **Font:** For a playful, child-like font, update the font-family in the CSS as desired.

## License

This project is licensed under the MIT License.

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements or bug fixes.

## Acknowledgements

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
