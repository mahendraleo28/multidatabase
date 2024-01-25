import React, { useState } from 'react';

const App = () => {
  const [emails, setEmails] = useState(['']); // Initial email state with one empty string

  const handleAddEmail = (index) => {
    const newEmails = [...emails];
    newEmails.splice(index + 1, 0, ''); // Add a new empty string after the current index
    setEmails(newEmails);
  };

  const handleRemoveEmail = (index) => {
    const newEmails = [...emails];
    newEmails.splice(index, 1); // Remove the email at the current index
    setEmails(newEmails);
  };

  const handleEmailChange = (index, value) => {
    const newEmails = [...emails];
    newEmails[index] = value;
    setEmails(newEmails);
  };

  return (
    <div>
      {emails.map((email, index) => (
        <div key={index}>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => handleEmailChange(index, e.target.value)}
          />
          <button onClick={() => handleAddEmail(index)}>Add Email</button>
          {index > 0 && (
            <button onClick={() => handleRemoveEmail(index)}>Remove Email</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default App;
