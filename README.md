# Magic Match - A Pokémon Memory Game

This is a simple and fun memory matching game built with React. The objective is to find all matching pairs of Pokémon cards by flipping them over.

## Features

-   **Dynamic Card Grid**: Cards are dynamically fetched from the [PokeAPI](https://pokeapi.co/).
-   **Card Flip Animation**: Smooth CSS animations for flipping cards.
-   **Match Tracking**: The game keeps track of matched pairs.
-   **Turn Counter**: Counts the number of attempts made.
-   **New Game**: A "New Game" button to shuffle the deck and start a new round.

## Technologies Used

-   **React**: A JavaScript library for building user interfaces.
-   **Vite**: A modern frontend build tool.
-   **PokeAPI**: The RESTful Pokémon API for fetching card data.
-   **CSS**: Custom styling for the game board and card animations.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) (or yarn) installed on your machine.

### Installation

1.  Clone the repository to your local machine:
    ```sh
    git clone <YOUR_REPOSITORY_URL>
    ```
2.  Navigate into the project directory:
    ```sh
    cd memory-game
    ```
3.  Install the required dependencies:
    ```sh
    npm install
    ```

### Running the Application

To start the development server, run the following command:

```sh
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) (or the port specified in your console) to view it in your browser.

## Project Structure

```
/src
|-- assets/         # Static assets like images
|-- components/     # Reusable React components
|   |-- Card.jsx
|   |-- CardGrid.jsx
|   `-- ...
|-- App.jsx         # Main application component
|-- main.jsx        # Entry point of the application
`-- ...
```
