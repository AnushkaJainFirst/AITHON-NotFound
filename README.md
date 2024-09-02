
# Crypto Portal Dummy with Interactive Elements

Welcome to the **Crypto Portal Dummy** project! This interactive portal provides a comprehensive view of Bitcoin, including real-time price updates, recent news, historical price trends, and a fun quiz to test your Bitcoin knowledge. Dive in to explore and interact with Bitcoin data like never before!

## 🚀 Objective

The goal of this project is to create an engaging Bitcoin portal with the following features:
- **Real-time Bitcoin Price**: Get the latest Bitcoin price from a public API.
- **Recent News**: Stay updated with the latest Bitcoin-related news headlines.
- **Historical Price Trends**: Visualize Bitcoin price trends over the past year with interactive charts.
- **Quiz**: Test your Bitcoin knowledge with a fun and educational quiz.

## 📦 Features

### Real-time Price

- **Description**: Displays the current price of Bitcoin using a public API.
- **API Used**: [CoinGecko API](https://coingecko.com/api) or similar.
- **Endpoint**: `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd`

### Recent News

- **Description**: Shows the latest Bitcoin-related news headlines.
- **API Used**: [NewsAPI](https://newsapi.org/).
- **Endpoint**: `https://newsapi.org/v2/everything?q=bitcoin&apiKey=YOUR_API_KEY`

### Historical Trends

- **Description**: Interactive charts showing Bitcoin price trends over the past year.
- **Library Used**: [Chart.js](https://www.chartjs.org/) or [D3.js](https://d3js.org/).

### Quiz

- **Description**: A fun quiz to educate users about Bitcoin and test their knowledge.
- **Features**: Multiple-choice questions, scoring, and instant feedback.

## 🌟 How to Get Started

1. **Clone the Repository**

   ```bash
   git clone https://github.com/AnushkaJainFirst/AITHON-NotFound
   ```

2. **Navigate to the Project Directory**

   ```bash
   cd AITHON-NotFound
   ```

3. **Install Dependencies**

   ```bash
   npm install
   ```

4. **Run the Application**

   ```bash
   npm start
   ```

   The application will be accessible at `http://localhost:3000`.

## 🔧 Configuration

- **API Keys**: Make sure to replace `YOUR_API_KEY` with your actual API key from NewsAPI in the configuration file.
- **Environment Variables**: Create a `.env` file in the root directory and add the following:

   ```env
   REACT_APP_NEWS_API_KEY=your_news_api_key
   ```

## 🛠️ Development

To contribute or make changes:

1. **Create a Feature Branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make Your Changes**

3. **Commit Your Changes**

   ```bash
   git commit -m "Add your commit message here"
   ```

4. **Push to the Repository**

   ```bash
   git push origin feature/your-feature-name
   ```

5. **Open a Pull Request**

   Visit the GitHub repository and open a pull request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 💬 Feedback

If you have any feedback or suggestions, please feel free to [open an issue](https://github.com/yourusername/crypto-portal-dummy/issues) or contact me directly.

---

Happy exploring! 🚀

