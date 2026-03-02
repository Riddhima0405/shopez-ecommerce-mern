import React from 'react';

const Dashboard = () => {
  return (
    <div className="container py-4">
      <h2 className="mb-4 text-white">Market Overview</h2>
      <div className="row g-4">
        <div className="col-12">
          <div className="table-responsive bg-dark rounded p-3 border border-secondary">
            <table className="table table-dark table-hover align-middle mb-0">
              <thead>
                <tr className="text-secondary">
                  <th>Asset</th>
                  <th>Price</th>
                  <th>24h Change</th>
                  <th className="text-end">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>GOOGL</strong> <small className="text-secondary ms-2">Alphabet Inc.</small></td>
                  <td>$142.10</td>
                  <td className="text-success">+2.4%</td>
                  <td className="text-end"><button className="btn btn-outline-primary btn-sm">View</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;