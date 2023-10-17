import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAction } from '@wasp/actions';

export function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    sendContactMessage({ name, email, message });
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className='p-4'>
      <h1 className='text-2xl mb-4'>Contact Me</h1>
      <form className='flex flex-col gap-y-2' onSubmit={handleFormSubmit}>
        <label htmlFor='name'>Name:</label>
        <input type='text' id='name' className='border px-2 py-1 rounded' value={name} onChange={(e) => setName(e.target.value)} />

        <label htmlFor='email'>Email:</label>
        <input type='email' id='email' className='border px-2 py-1 rounded' value={email} onChange={(e) => setEmail(e.target.value)} />

        <label htmlFor='message'>Message:</label>
        <textarea id='message' className='border px-2 py-1 rounded' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>

        <button
          type='submit'
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        >
          Submit
        </button>
      </form>
    </div>
  );
}