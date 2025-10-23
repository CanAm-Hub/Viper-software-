import { useState } from 'react';

export default function Home() {
  const [to, setTo] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const sendMessage = async () => {
    setStatus('Sending...');
    try {
      const res = await fetch(`/api/send?to=${encodeURIComponent(to)}`);
      const data = await res.json();

      if (data.success) {
        setStatus('✅ Message sent successfully!');
      } else {
        setStatus(`❌ Failed: ${data.error}`);
      }
    } catch (err) {
      setStatus('⚠️ Error sending message');
    }
  };

  return (
    <div style={{
      fontFamily: 'sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      background: 'black',
      color: 'white'
    }}>
      <h1>📱 Viper Software - SMS Sender</h1>

      <input
        type="text"
        placeholder="Enter phone number (+1...)"
        value={to}
        onChange={(e) => setTo(e.target.value)}
        style={{
          padding: '10px',
          margin: '10px',
          width: '250px',
          borderRadius: '8px',
          border: '1px solid #555',
        }}
      />

      <textarea
        placeholder="Enter message text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={{
          padding: '10px',
          margin: '10px',
          width: '250px',
          height: '80px',
          borderRadius: '8px',
          border: '1px solid #555',
        }}
      />

      <button
        onClick={sendMessage}
        style={{
          padding: '10px 20px',
          background: 'hotpink',
          color: 'white',
          border: 'none',
          borderRadius: '10px',
          cursor: 'pointer',
          marginTop: '10px',
        }}
      >
        Send Message
      </button>

      <p style={{ marginTop: '20px' }}>{status}</p>
    </div>
  );
}
