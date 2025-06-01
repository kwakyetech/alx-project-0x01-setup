import React from 'react'

export default function Footer() {
  return (
    <div>
        <footer style={{ textAlign: 'center', padding: '20px', backgroundColor: '#333333' }}>
            <p>&copy; 2025 My Blog. All rights reserved.</p>
            <p>
            Follow us on {''}
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a> | 
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> | 
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            </p>
        </footer>
    </div>
  )
}
