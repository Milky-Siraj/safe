import React, { useState } from 'react';
import { Bell, Plus, ChevronDown, Clock, CheckCircle, AlertTriangle, Wallet } from 'lucide-react';

const DashboardPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('transactions');
  const [showNewTransactionForm, setShowNewTransactionForm] = useState(false);
  const [transactionAmount, setTransactionAmount] = useState('');
  const [transactionDescription, setTransactionDescription] = useState('');
  const [transactionTerms, setTransactionTerms] = useState('');

  const handleNewTransaction = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    setShowNewTransactionForm(false);
    // Reset form
    setTransactionAmount('');
    setTransactionDescription('');
    setTransactionTerms('');
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
            <p className="text-gray-600">Welcome back, Abebe Kebede</p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center space-x-4">
            <div className="relative">
              <button className="p-2 bg-white rounded-full shadow-sm relative">
                <Bell size={20} className="text-gray-600" />
                <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">3</span>
              </button>
            </div>
            <button 
              onClick={() => setShowNewTransactionForm(true)}
              className="px-4 py-2 bg-green-700 text-white rounded-md hover:bg-green-800 transition-colors flex items-center"
            >
              <Plus size={18} className="mr-1" />
              New Transaction
            </button>
          </div>
        </div>

        {/* Dashboard Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-gray-500 text-sm mb-2">Escrow Balance</h3>
            <div className="flex items-center">
              <Wallet size={24} className="text-green-700 mr-2" />
              <p className="text-2xl font-bold">ETB 25,000</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-gray-500 text-sm mb-2">Active Transactions</h3>
            <p className="text-2xl font-bold">5</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-gray-500 text-sm mb-2">Completed Transactions</h3>
            <p className="text-2xl font-bold">12</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-gray-500 text-sm mb-2">Total Transaction Value</h3>
            <p className="text-2xl font-bold">ETB 120,500</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-md mb-8">
          <div className="flex border-b">
            <button 
              onClick={() => setActiveTab('transactions')}
              className={`px-6 py-3 text-sm font-medium ${
                activeTab === 'transactions' 
                  ? 'text-green-700 border-b-2 border-green-700' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Transactions
            </button>
            <button 
              onClick={() => setActiveTab('notifications')}
              className={`px-6 py-3 text-sm font-medium ${
                activeTab === 'notifications' 
                  ? 'text-green-700 border-b-2 border-green-700' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Notifications
            </button>
            <button 
              onClick={() => setActiveTab('settings')}
              className={`px-6 py-3 text-sm font-medium ${
                activeTab === 'settings' 
                  ? 'text-green-700 border-b-2 border-green-700' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Settings
            </button>
          </div>

          {/* Transactions Tab Content */}
          {activeTab === 'transactions' && (
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Your Transactions</h2>
                <div className="flex items-center">
                  <span className="text-sm text-gray-500 mr-2">Filter by:</span>
                  <div className="relative">
                    <button className="px-3 py-1 bg-gray-100 rounded-md text-sm flex items-center">
                      All Transactions
                      <ChevronDown size={16} className="ml-1" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Transaction Cards */}
              <div className="space-y-4">
                {/* Pending Transaction */}
                <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center mb-2">
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full flex items-center">
                          <Clock size={12} className="mr-1" />
                          Pending
                        </span>
                      </div>
                      <h3 className="font-medium">Purchase of iPhone 13 Pro</h3>
                      <p className="text-sm text-gray-500">Transaction ID: #ETH12345</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">ETB 45,000</p>
                      <p className="text-sm text-gray-500">Created: May 15, 2025</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                    <div className="text-sm">
                      <span className="text-gray-500">Seller:</span> Dawit Haile
                    </div>
                    <button className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded-md hover:bg-green-200 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>

                {/* Completed Transaction */}
                <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center mb-2">
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full flex items-center">
                          <CheckCircle size={12} className="mr-1" />
                          Completed
                        </span>
                      </div>
                      <h3 className="font-medium">Website Development Services</h3>
                      <p className="text-sm text-gray-500">Transaction ID: #ETH12344</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">ETB 25,000</p>
                      <p className="text-sm text-gray-500">Completed: May 10, 2025</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                    <div className="text-sm">
                      <span className="text-gray-500">Seller:</span> Tech Solutions Ltd
                    </div>
                    <button className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>

                {/* Disputed Transaction */}
                <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center mb-2">
                        <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full flex items-center">
                          <AlertTriangle size={12} className="mr-1" />
                          Disputed
                        </span>
                      </div>
                      <h3 className="font-medium">Used Toyota Corolla (2018)</h3>
                      <p className="text-sm text-gray-500">Transaction ID: #ETH12343</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">ETB 850,000</p>
                      <p className="text-sm text-gray-500">Disputed: May 5, 2025</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                    <div className="text-sm">
                      <span className="text-gray-500">Seller:</span> Addis Auto Dealers
                    </div>
                    <button className="px-3 py-1 text-sm bg-red-100 text-red-700 rounded-md hover:bg-red-200 transition-colors">
                      Resolve Dispute
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Notifications Tab Content */}
          {activeTab === 'notifications' && (
            <div className="p-6">
              <h2 className="text-lg font-semibold mb-4">Notifications</h2>
              <div className="space-y-4">
                <div className="p-4 border-l-4 border-yellow-500 bg-yellow-50 rounded-r-lg">
                  <p className="font-medium">Transaction #ETH12345 is awaiting your approval</p>
                  <p className="text-sm text-gray-600 mt-1">The seller has marked the item as delivered. Please inspect and approve.</p>
                  <p className="text-xs text-gray-500 mt-2">2 hours ago</p>
                </div>
                <div className="p-4 border-l-4 border-green-500 bg-green-50 rounded-r-lg">
                  <p className="font-medium">Funds released for transaction #ETH12344</p>
                  <p className="text-sm text-gray-600 mt-1">The escrow funds have been successfully released to the seller.</p>
                  <p className="text-xs text-gray-500 mt-2">2 days ago</p>
                </div>
                <div className="p-4 border-l-4 border-blue-500 bg-blue-50 rounded-r-lg">
                  <p className="font-medium">New message from Dawit Haile</p>
                  <p className="text-sm text-gray-600 mt-1">Regarding transaction #ETH12345: "The item will be delivered tomorrow."</p>
                  <p className="text-xs text-gray-500 mt-2">3 days ago</p>
                </div>
              </div>
            </div>
          )}

          {/* Settings Tab Content */}
          {activeTab === 'settings' && (
            <div className="p-6">
              <h2 className="text-lg font-semibold mb-4">Account Settings</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-md font-medium mb-2">Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">Full Name</label>
                      <input 
                        type="text" 
                        className="w-full p-2 border border-gray-300 rounded-md" 
                        defaultValue="Abebe Kebede"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">Email Address</label>
                      <input 
                        type="email" 
                        className="w-full p-2 border border-gray-300 rounded-md" 
                        defaultValue="abebe.kebede@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">Phone Number</label>
                      <input 
                        type="tel" 
                        className="w-full p-2 border border-gray-300 rounded-md" 
                        defaultValue="+251911234567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">City</label>
                      <input 
                        type="text" 
                        className="w-full p-2 border border-gray-300 rounded-md" 
                        defaultValue="Addis Ababa"
                      />
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-md font-medium mb-2">Notification Preferences</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input type="checkbox" id="email_notif" className="mr-2" defaultChecked />
                      <label htmlFor="email_notif" className="text-sm text-gray-600">Email Notifications</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="sms_notif" className="mr-2" defaultChecked />
                      <label htmlFor="sms_notif" className="text-sm text-gray-600">SMS Notifications</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="app_notif" className="mr-2" defaultChecked />
                      <label htmlFor="app_notif" className="text-sm text-gray-600">In-App Notifications</label>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-200">
                  <button className="px-4 py-2 bg-green-700 text-white rounded-md hover:bg-green-800 transition-colors">
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* New Transaction Modal */}
      {showNewTransactionForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">New Transaction</h2>
              <button 
                onClick={() => setShowNewTransactionForm(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={20} />
              </button>
            </div>
            
            <form onSubmit={handleNewTransaction}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Transaction Amount (ETB)
                </label>
                <input 
                  type="number" 
                  value={transactionAmount}
                  onChange={(e) => setTransactionAmount(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter amount"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <input 
                  type="text"
                  value={transactionDescription}
                  onChange={(e) => setTransactionDescription(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="What are you buying/selling?"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Transaction Terms
                </label>
                <textarea 
                  value={transactionTerms}
                  onChange={(e) => setTransactionTerms(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Specify delivery timeline, condition expectations, etc."
                  rows={4}
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Counterparty Email or Phone
                </label>
                <input 
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter email or phone number"
                  required
                />
              </div>
              
              <div className="flex justify-end space-x-2">
                <button 
                  type="button"
                  onClick={() => setShowNewTransactionForm(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="px-4 py-2 text-sm font-medium text-white bg-green-700 rounded-md hover:bg-green-800 transition-colors"
                >
                  Create Transaction
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;