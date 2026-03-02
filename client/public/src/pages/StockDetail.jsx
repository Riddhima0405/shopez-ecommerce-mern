import React from 'react';
import StockChart from '../components/StockChart';
import TradeForm from '../components/TradeForm';

const StockDetail = () => {
  return (
    <div className="container py-4 text-white">
      <div className="row mb-4">
        <div className="col-md-8">
          <h1>NVDA <span className="h4 text-secondary">NVIDIA Corp</span></h1>
          <h2 className="text-success">$850.25 <small className="h6">+12.40 (1.5%)</small></h2>
        </div>
      </div>
      <div className="row g-4">
        <div className="col-md-8">
          <StockChart />
        </div>
        <div className="col-md-4">
          <TradeForm />
        </div>
      </div>
    </div>
  );
};

export default StockDetail;