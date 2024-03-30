// AddressCard.jsx
import React from 'react';

function AddressCard({ address }) {
  if (!address) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div className="space-y-3">
        <p className="font-semibold">{address.firstName} {address.lastName}</p>
        <p>{address.streetAddress} {address.city} {address.state} {address.zipCode}</p>
        <div className="space-y-1">
          <p>{address.mobile}</p>
        </div>
      </div>
    </div>
  );
}

export default AddressCard;
