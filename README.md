Insurance Price Calculator - Full Stack Application

This repository hosts a full stack insurance calculator application designed to streamline the insurance pricing process. The application empowers sales agents to quickly input customer details, select coverage options, apply discounts, and calculate a precise insurance premium instantly. The application's frontend and backend work in harmony to provide real-time updates and pricing information.
🎯 Project Objective

The goal is to develop an intuitive, responsive application that allows users to:

    Input customer data via a main form.
    Select optional coverages and discounts.
    Calculate and display the insurance price, which updates dynamically based on selections.
    Adjust and apply a voucher or price-match option to modify the total price.

Example Use Case

When a customer visits an agent’s office, the agent inputs the customer’s details into a simple form. As data is submitted:

    Sidebar updates to display selected coverages.
    Header shows available discounts and the total calculated price.
    Price Details are displayed below the form, including a breakdown of discounts and coverages.

🛠 Implementation

This project is split into two main components: Frontend and Backend.
1️⃣ Frontend

The frontend provides an interactive interface where agents can enter details, select coverages, and see immediate price calculations.
Main Form

The form includes:

    Fields: Name, Birthdate, City, Vehicle Power, Voucher, Price Match (required where specified)
    Price Details: Shows the basic price, applied discounts, coverages, and final total price

Header

Displays:

    Available Discounts: Selectable options to apply customer-specific discounts
    Total Price: Reflects the calculated insurance premium after adjustments

Sidebar

Shows:

    Available Coverages: Checkboxes for selecting additional coverages, with immediate application to the total price

Real-Time Interactivity

Changes to checkboxes in the header or sidebar apply instantly and are reflected in all sections for consistency.
2️⃣ Backend

The backend handles business logic and interacts with the database to store, retrieve, and process insurance configurations.
Key Features:

    Configurations: Stores coverages, discounts, and other options in MongoDB
    Pricing Endpoint: Calculates insurance prices based on city, customer age, coverages, and discounts
    Price Adjustments:
        Applies age and city-based calculations for base prices
        Calculates coverage and discount prices based on conditions (e.g., AO+ pricing by age, VIP discount for powerful vehicles)

Pricing Rules

The backend applies rules to calculate the final price:

    Coverages:
        Bonus Protection - 12% of base price
        AO+ - Fixed price based on age
        Glass Protection - 80% of vehicle power
    Discounts/Surcharges:
        Various discounts and surcharges are applied based on selections and vehicle power
        Price matching feature adjusts the total price to match a specified value, recalculating the base price as needed

Technology Stack

    Frontend: React with TypeScript (strict type checking), Redux-toolkit state management, CSS
    Backend: Node.js with RESTful or GraphQL API, MongoDB

🧩 Extra Points

    Unit Tests: Using a testing library of choice
    Data Logging: Save data to the database and present it on a separate route
    Developer-Friendly: Easy to set up and run in development mode; embedded database for local testing

🚀 Getting Started
Prerequisites

    Node.js
    MongoDB

Installation

    Clone the repository:

git clone https://github.com/dvch162/insurance-price-calculator.git
cd insurance-price-calculator

Install dependencies for frontend and backend:

npm install

Start the application in development mode:

    npm start

✅ Evaluation Criteria

    Accurate behavior based on requirements
    Ease of installation & configuration
    Production-quality, well-documented code

Future Improvements

Enhancements could include authentication, expanded coverage options, and user analytics.