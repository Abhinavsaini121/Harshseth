import React from 'react';

const Wallet = () => {
  const transactions = [
    { id: 1, user: 'John Doe', date: '2025-07-20', amount: '₹1,200', status: 'Success' },
    { id: 2, user: 'Jane Smith', date: '2025-07-18', amount: '₹950', status: 'Pending' },
    { id: 3, user: 'Ravi Kumar', date: '2025-07-15', amount: '₹2,500', status: 'Failed' },
  ];

  const payouts = [
    { id: 1, name: 'Therapist A', role: 'Therapist', amount: '₹3,000', status: 'Approved' },
    { id: 2, name: 'Listener B', role: 'Listener', amount: '₹1,200', status: 'Pending' },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6">Wallet & Payments</h2>

      {/* User Transactions */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Transaction History</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left p-3">User</th>
                <th className="text-left p-3">Date</th>
                <th className="text-left p-3">Amount</th>
                <th className="text-left p-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((txn) => (
                <tr key={txn.id} className="border-t">
                  <td className="p-3">{txn.user}</td>
                  <td className="p-3">{txn.date}</td>
                  <td className="p-3">{txn.amount}</td>
                  <td className="p-3">
                    <span className={`px-2 py-1 rounded text-white text-sm
                      ${txn.status === 'Success' ? 'bg-green-500' :
                        txn.status === 'Pending' ? 'bg-yellow-500' : 'bg-red-500'}
                    `}>
                      {txn.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Therapist/Listener Payouts */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Therapist/Listener Payouts</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left p-3">Name</th>
                <th className="text-left p-3">Role</th>
                <th className="text-left p-3">Amount</th>
                <th className="text-left p-3">Payout Status</th>
              </tr>
            </thead>
            <tbody>
              {payouts.map((p) => (
                <tr key={p.id} className="border-t">
                  <td className="p-3">{p.name}</td>
                  <td className="p-3">{p.role}</td>
                  <td className="p-3">{p.amount}</td>
                  <td className="p-3">
                    <span className={`px-2 py-1 rounded text-white text-sm
                      ${p.status === 'Approved' ? 'bg-green-500' : 'bg-yellow-500'}
                    `}>
                      {p.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
