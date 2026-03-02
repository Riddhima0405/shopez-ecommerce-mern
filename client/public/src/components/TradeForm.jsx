import React from 'react';

const TradeForm = () => {
  return (
    <div className="card bg-dark text-white border-secondary">
      <div className="card-body">
        <h5 className="mb-3 text-secondary">Execute Trade</h5>
        <div className="btn-group w-100 mb-3">
          <button className="btn btn-success">Buy</button>
          <button className="btn btn-outline-danger">Sell</button>
        </div>
        <div className="mb-3">
          <label className="form-label small">Quantity</label>
          <input type="number" className="form-control bg-secondary text-white border-0" placeholder="0" />
        </div>
        <div className="d-flex justify-content-between mb-3">
          <span>Total:</span>
          <span className="fw-bold">$0.00</span>
        </div>
        <button className="btn btn-primary w-100">Confirm Order</button>
      </div>
    </div>
  );
};

export default TradeForm;