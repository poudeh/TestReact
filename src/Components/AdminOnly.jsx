import React from 'react';

export default function AdminOnly({ user, children }) {
  if (user.Role !== "Admin") {
    return <p>Access Denied</p>; // Show message for non-admin users
  }
  return <>{children}</>; // Render content if admin
}



