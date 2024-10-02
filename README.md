# Smart Contract-Based Supply Chain Management for Data Integrity and Anti-Tampering

This project was developed collaboratively by **Zohra Shaikh** and **Ahmed Faraz** ([GitHub: ahmed00faraz](https://github.com/ahmed00faraz)). It is a robust solution aimed at enhancing supply chain transparency and security through the integration of blockchain technology and IoT for data integrity and anti-tampering.

---

## Project Overview

The **Smart Contract-Based Supply Chain Management** system ensures data integrity and tamper prevention by utilizing blockchain technology on the Ethereum network. The project consists of:

- **Smart Contracts** (Solidity on Ethereum)
- **IoT Sensors** (Arduino with DHT11)
- **Frontend** (React.js and Ethers.js)
- **Backend** (FastAPI)

### Important Information

**Ropsten testnet is deprecated**. Please use the **Goerli network** for testing.

- **Smart Contract**: [View on Etherscan (Goerli)](https://goerli.etherscan.io/address/0xE4b876ed393E19FbD18eC99118647BcbFE5300F3#code)
- **Frontend Demo**: [psupplychain.netlify.app](https://psupplychain.netlify.app/)

---

## Tech Stack

- **Blockchain**: Ethereum, Solidity, Hardhat
- **IoT**: Arduino, DHT11 Sensor, Node-RED
- **Backend**: FastAPI (Python)
- **Frontend**: React.js, Ethers.js

---

## How to Run the Project

### 1. Backend Setup

- Install **MetaMask** and enable the Goerli testnet.
- Obtain test ethers from a faucet (Goerli network).
- Deploy the contract on **Polygon Mumbai Testnet** using **Remix IDE** or **Hardhat**.
- Create an application on [Alchemy](https://alchemy.com) for **Polygon Mumbai** to obtain your API key:

  ```text
  https://polygon-mumbai.g.alchemy.com/v2/<your_key>

# Update contract.py
w3 = Web3(Web3.HTTPProvider('<your_alchemy_key>'))
key = '<account-private-key>'
account = w3.toChecksumAddress('<your-account-address>')
address = w3.toChecksumAddress('<contract-address>')

# Install required dependencies
pip install -r requirements.txt

# Run the backend using FastAPI
uvicorn main:app --reload

# The backend API is now accessible at http://localhost:8000/docs, where you can add workers, products, statuses, etc.

# Frontend Setup (Client)
# Navigate to the client folder and install dependencies
npm install

# Update the contract address in client/components/Display.js
const ContractAddress = '<your_contract_address>';

# Modify the homepage content by editing Home.js as necessary.

# Start the frontend
npm start

# The frontend will be running at http://localhost:3000.

# IoT Integration
# Set up the DHT11 sensor with Arduino.
# Use Node-RED to capture and transmit sensor data to the blockchain. Node-RED is a low-code programming tool for event-driven applications.
# Data collected by the Arduino is sent via COM3 to Node-RED.
# Import the provided JSON flow in Node-RED and modify as needed.
# The flow ensures that sensor data is transmitted securely to the blockchain using APIs.

# Using Docker
# Install Docker and modify environment variables (e.g., contract address).
# Start the application using Docker Compose
docker-compose up

# Ensure the IoT setup is completed as described above.
