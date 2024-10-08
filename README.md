# no_market_injections (NoSQL Injection Lab)

A NoSQL Injection Lab developed with NodeJS and Express JS to understand and practice NoSQL injection vulnerabilities.

## Technologies Used

- **NodeJS:** 20.0
- **ExpressJS:** 4.19.2
- **MongoDB:** 6.8
- **Nodemon:** 3.1.4
- **jsonwebtoken:** 9.0.2
- **docker**

## Requirements

- NodeJS 20.0 or higher
- MongoDB 6.8
- Jsonwebtoken 9.0 or higher
- Nodemon 3.0 or higher
- ExpressJS 4.0 or higher
- Docker

## Installation and Execution

1. Clone the repository:
    ```bash
    git clone https://github.com/EdsonSaldivar/no_market_injections.git
    ```
2. Navigate to the project directory:
    ```bash
    cd no_market_injections
    ```
3. Edit utils/db.js with your mongodb uri adn your database name:
    ```bash
    nano utils/db.js
    ```
4. Enable execution permissions to build_docker.sh:
    ```bash
    chmod 755 build_docker.sh
    ```
5. Run build_docker.sh:
   ```bash
    bash build_docker.sh
    ```
## Usage

Once the server is running, access the lab through your browser at `http://localhost:3000`. Explore the exercise of NoSQL injections to understand how they work and how to protect your applications from these vulnerabilities.

## Creator

Created by Edson Sebastian Saldivar Mujica.

## Contributions

Contributions are welcome. If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.
