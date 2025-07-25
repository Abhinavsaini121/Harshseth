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
    <div className="p-6 space-y-8 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-semibold mb-6">Wallet & Payments</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Transaction History Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Transaction History</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-gray-600 bg-gray-100">
                  <th className="p-3">User</th>
                  <th className="p-3">Date</th>
                  <th className="p-3">Amount</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((txn) => (
                  <tr key={txn.id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="p-3">{txn.user}</td>
                    <td className="p-3">{txn.date}</td>
                    <td className="p-3 font-medium">{txn.amount}</td>
                    <td className="p-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold
                        ${txn.status === 'Success' ? 'bg-green-100 text-green-700' :
                          txn.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-red-100 text-red-700'}
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

        {/* Payout History Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Therapist / Listener Payouts</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-gray-600 bg-gray-100">
                  <th className="p-3">Name</th>
                  <th className="p-3">Role</th>
                  <th className="p-3">Amount</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {payouts.map((p) => (
                  <tr key={p.id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="p-3">{p.name}</td>
                    <td className="p-3 text-gray-600">{p.role}</td>
                    <td className="p-3 font-medium">{p.amount}</td>
                    <td className="p-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold
                        ${p.status === 'Approved' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}
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
    </div>
  );
};

export default Wallet;
