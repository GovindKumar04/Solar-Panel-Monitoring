# Solar Panel Monitoring

A Node.js application for monitoring and managing solar panel systems with real-time data tracking and management.

## Overview

Solar Panel Monitoring is a backend service built with Express.js that provides API endpoints for tracking solar panel performance, energy generation, and system health. The application uses PostgreSQL for data persistence and is designed to handle large-scale monitoring operations.

## Features

- Real-time solar panel performance monitoring
- Energy generation tracking and analytics
- RESTful API endpoints for data management
- PostgreSQL database integration
- Environment-based configuration
- Scalable architecture

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v14 or higher)
- **npm** (v6 or higher)
- **PostgreSQL** (v12 or higher)

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/GovindKumar04/Solar-Panel-Monitoring-.git
   cd Solar-Panel-Monitoring-
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Setup environment variables:**
   Create a `.env` file in the root directory and configure the following variables:
   ```env
   PORT=4000
   DATABASE_URL=postgresql://username:password@localhost:5432/solar_panel_db
   ```

4. **Setup the database:**
   Run the database migrations to create necessary tables:
   ```bash
   npm run migrate
   ```

## Project Structure

```
Solar-Panel-Monitoring/
├── src/
│   ├── config/          # Configuration files (database connection, etc.)
│   └── migrations/      # Database migration scripts
├── app.js               # Express application setup
├── server.js            # Server entry point
├── package.json         # Project dependencies and scripts
└── README.md            # This file
```

## Configuration

### Database Configuration
The application connects to PostgreSQL via the connection pool defined in `src/config/db.js`. Update your `.env` file with the correct database credentials.

### Port Configuration
By default, the server runs on port 4000. You can change this by setting the `PORT` environment variable.

## Running the Application

Start the server:
```bash
npm start
```

Or use Node directly:
```bash
node server.js
```

The server will:
1. Load environment variables from `.env`
2. Initialize the Express application
3. Connect to the PostgreSQL database
4. Start listening on the specified PORT

You should see `connected` in the console when the database connection is successful.

## API Endpoints

The application provides RESTful API endpoints for solar panel monitoring. Detailed endpoint documentation will be available as the project develops.

## Development

### Running Tests
```bash
npm test
```

### Adding Dependencies
To add new dependencies:
```bash
npm install <package-name>
```

## Dependencies

- **express** (^5.2.1) - Web framework for building REST APIs
- **pg** (^8.21.0) - PostgreSQL client for Node.js
- **dotenv** (^17.4.2) - Environment variable management

## Database Migrations

Migration scripts are located in `src/migrations/`. To run migrations:
```bash
npm run migrate
```

## Error Handling

The application includes proper error handling for database connections and API requests. Check the console output for error messages if the server fails to start or connect to the database.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request to the repository.

## License

This project is licensed under the ISC License - see the `package.json` file for details.

## Repository

For more information and to report issues, visit the [GitHub repository](https://github.com/GovindKumar04/Solar-Panel-Monitoring-).

## Troubleshooting

### Database Connection Issues
- Ensure PostgreSQL is running and accessible
- Verify the `DATABASE_URL` in your `.env` file
- Check that the database user has proper permissions

### Port Already in Use
- Change the `PORT` environment variable to an available port
- Or kill the process using the current port

### Module Not Found Errors
- Run `npm install` to ensure all dependencies are installed
- Clear the `node_modules` folder and reinstall if issues persist: `rm -rf node_modules && npm install`

## Contact

For questions or support, please open an issue on the [GitHub repository](https://github.com/GovindKumar04/Solar-Panel-Monitoring-/issues).