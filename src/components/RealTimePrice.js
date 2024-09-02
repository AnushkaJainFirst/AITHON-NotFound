import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Spinner, Alert } from 'react-bootstrap';

const RealTimePrice = () => {
  const [price, setPrice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchPrice = async () => {
    try {
      const response = await axios.get(
        'https://api.coingecko.com/api/v3/simple/price',
        {
          params: {
            ids: 'bitcoin',
            vs_currencies: 'usd',
          },
        }
      );
      setPrice(response.data.bitcoin.usd);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching price:', err);
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPrice();
    const interval = setInterval(fetchPrice, 60000); // Update every 60 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <Card>
      <Card.Body>
        <Card.Title className='card-title-custom'>Real-time Bitcoin Price</Card.Title>
        {loading && <Spinner animation="border" />}
        {error && <Alert variant="danger">Error fetching price.</Alert>}
        {price && <Card.Text style={{ fontSize: '2rem' }}>${price.toLocaleString()}</Card.Text>}
      </Card.Body>
    </Card>
  );
};

export default RealTimePrice;
