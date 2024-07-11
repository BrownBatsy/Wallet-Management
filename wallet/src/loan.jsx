import React, { useState } from 'react';

const MyComponent = () => {
  const [formData, setFormData] = useState({
    username: '',
    useremail: '',
    walletId: '',
    preferredBankName: '',
    loanType: ''
  });

  const banks = ['Dhaka Bank', 'BRAC Bank', 'Shonali Bank', 'Rupali Bank', 'EastAsia Bank'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleBankChange = (e) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      preferredBankName: value === 'other' ? '' : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, we'll just log the form data to the console
    console.log('Form submitted:', formData);
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className = 'bg-white p-3 rounded w-25'> 
      <h1>Take a Loan</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-1">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-1">
          <label htmlFor="useremail">User Email:</label>
          <input
            type="email"
            id="useremail"
            name="useremail"
            value={formData.useremail}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-1">
          <label htmlFor="walletId">Wallet ID:</label>
          <input
            type="text"
            id="walletId"
            name="walletId"
            value={formData.walletId}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-1">
          <label htmlFor="preferredBankName">Preferred Bank Name:</label>
          <select
            id="preferredBankName"
            name="preferredBankName"
            value={formData.preferredBankName}
            onChange={handleBankChange}
            required
          >
            <option value="">Select a bank</option>
            {banks.map((bank) => (
              <option key={bank} value={bank}>
                {bank}
              </option>
            ))}
            <option value="other">Other</option>
          </select>
          {formData.preferredBankName === '' && (
            <input
              type="text"
              name="preferredBankName"
              value={formData.preferredBankName}
              onChange={handleChange}
              placeholder="Enter bank name"
              required
            />
          )}
        </div>
        <div className="mb-1">
          <label htmlFor="loanType">Loan Type:</label>
          <input
            type="text"
            id="loanType"
            name="loanType"
            value={formData.loanType}
            onChange={handleChange}
            placeholder='Enter loan type'
            required
          />
        </div>
        <div style={{ fontSize: '12px' }}>
            i.e: personal/home/education/car loan
        </div>
        <div>
        <button type="submit">Check Eligibility</button>
        </div>
        <div>
        <button type="submit">Submit</button>
        </div>
      </form>
      </div> 
    </div>
  );
};

export default MyComponent;