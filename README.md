# Culinary Quest

**A MERN Stack platform for discovering, sharing, and managing food recipes with secure user authentication and robust admin controls.**

## Overview

Culinary Quest is a full-stack web application designed to help users explore, create, and manage food recipes. The platform supports user registration, recipe management, feedback submission, and administrative oversight, all within a modern, responsive interface.

## Features

- **User Authentication:** Secure registration, login, and profile management.
- **Recipe Management:** Create, edit, delete, and view detailed recipes.
- **Recipe Search:** Filter and search recipes by ingredients or categories.
- **Feedback System:** Submit and manage user feedback on recipes.
- **Admin Panel:** Admins can manage users, recipes, and review feedback.
- **Responsive Design:** Optimized for both desktop and mobile devices.

## Tech Stack

- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT, bcrypt
- **Other:** CORS, dotenv, Mongoose

## Folder Structure

```
api/           # Backend (Express, MongoDB)
 ├── models/   # Mongoose models (User, Recipe, Feedback)
 ├── routes/   # Express routes (auth, recipes, admin, feedback)
client/        # Frontend (React)
 └── src/      # React components and services
```

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB instance (local or cloud)

### Installation

1. **Clone the repository:**
    ```sh
    git clone https://github.com/yourusername/culinary-quest.git
    cd culinary-quest
    ```

2. **Backend Setup:**
    ```sh
    cd api
    npm install
    # Configure your .env file with MongoDB URI and other secrets
    npm start
    ```

3. **Frontend Setup:**
    ```sh
    cd ../client
    npm install
    npm start
    ```

4. **Access the app:**  
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

[MIT](LICENSE)
