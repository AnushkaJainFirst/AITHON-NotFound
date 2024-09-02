import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Spinner, Alert } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const HistoricalTrends = () => {
  const [chartData, setChartData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchHistoricalData = async () => {
    try {
      const response = await axios.get(
        'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart',
        {
          params: {
            vs_currency: 'usd',
            days: '365',
          },
        }
      );

      const prices = response.data.prices;
      const dates = prices.map((price) => new Date(price[0]).toLocaleDateString());
      const values = prices.map((price) => price[1]);

      setChartData({
        labels: dates,
        datasets: [
          {
            label: 'Bitcoin Price (USD)',
            data: values,
            fill: false,
            backgroundColor: 'rgba(255, 159, 64, 0.2)',
            borderColor: 'rgba(255, 159, 64, 1)',
          },
        ],
      });
      setLoading(false);
    } catch (err) {
      console.error('Error fetching historical data:', err);
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHistoricalData();
  }, []);

  return (
    <Card>
      <Card.Body>
        <Card.Title>Historical Bitcoin Price Trends (1 Year)</Card.Title>
        {loading && <Spinner animation="border" />}
        {error && <Alert variant="danger">Error fetching historical data.</Alert>}
        {!loading && !error && (
          <Line
            data={chartData}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: 'top',
                },
              },
              scales: {
                x: {
                  display: true,
                  title: {
                    display: true,
                    text: 'Date',
                  },
                },
                y: {
                  display: true,
                  title: {
                    display: true,
                    text: 'Price in USD',
                  },
                },
              },
            }}
          />
        )}
      </Card.Body>
    </Card>
  );
};

export default HistoricalTrends;
