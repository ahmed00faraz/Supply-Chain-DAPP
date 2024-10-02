# Blockchain-Powered Supply Chain Management System

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

A comprehensive supply chain management solution leveraging blockchain technology and IoT integration for enhanced data integrity and tamper-proof operations.

## 👥 Contributors
- **Zohra Shaikh**
- **Ahmed Faraz** - [GitHub](https://github.com/ahmed00faraz)

## 🎯 Overview

This enterprise-grade solution combines blockchain technology with IoT capabilities to revolutionize supply chain transparency and security. By implementing smart contracts on the Ethereum network, we ensure immutable record-keeping and real-time tracking of supply chain operations.

### Core Components

- **Smart Contract Layer**: Ethereum-based contracts written in Solidity
- **IoT Integration**: Arduino implementation with DHT11 sensor arrays
- **Frontend Interface**: Modern React.js application with Ethers.js integration
- **Backend Services**: High-performance FastAPI implementation

## 🛠 Technology Stack

### Blockchain Infrastructure
- Ethereum Network
- Solidity Smart Contracts
- Hardhat Development Environment

### IoT Architecture
- Arduino Microcontrollers
- DHT11 Temperature & Humidity Sensors
- Node-RED Integration Platform

### Application Stack
- **Backend**: FastAPI (Python)
- **Frontend**: React.js, Ethers.js
- **Development Tools**: Docker, MetaMask

## 🚀 Deployment Information

> **Important**: The system now operates on the Goerli testnet following Ropsten's deprecation.

- **Smart Contract**: [View on Etherscan (Goerli)](https://goerli.etherscan.io/address/0xE4b876ed393E19FbD18eC99118647BcbFE5300F3#code)
- **Live Demo**: [psupplychain.netlify.app](https://psupplychain.netlify.app/)

## 📦 Installation & Setup

### Backend Configuration

1. **Prerequisites**
   ```bash
   # Install dependencies
   pip install -r requirements.txt
   ```

2. **Environment Setup**
   ```python
   # Update contract.py with your credentials
   w3 = Web3(Web3.HTTPProvider('<ALCHEMY_API_KEY>'))
   key = '<PRIVATE_KEY>'
   account = w3.toChecksumAddress('<ACCOUNT_ADDRESS>')
   address = w3.toChecksumAddress('<CONTRACT_ADDRESS>')
   ```

3. **Launch Backend**
   ```bash
   uvicorn main:app --reload
   ```
   Access the API documentation at `http://localhost:8000/docs`

### Frontend Setup

1. **Install Dependencies**
   ```bash
   cd client
   npm install
   ```

2. **Configuration**
   ```javascript
   // Update contract address in client/components/Display.js
   const ContractAddress = '<CONTRACT_ADDRESS>';
   ```

3. **Launch Application**
   ```bash
   npm start
   ```
   Access the frontend at `http://localhost:3000`

### IoT Configuration

1. **Hardware Setup**
   - Connect DHT11 sensor to Arduino board
   - Configure serial communication via COM3

2. **Node-RED Integration**
   - Import provided flow configuration
   - Configure data transmission endpoints
   - Verify sensor data pipeline

### Docker Deployment

```bash
# Build and launch containers
docker-compose up --build

# For background execution
docker-compose up -d
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
