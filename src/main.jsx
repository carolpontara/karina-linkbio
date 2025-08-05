/* eslint-disable react/no-unescaped-entities */
"use client"
import React, { useState, useEffect } from 'react';
import './styles.css';
import { profile } from './config.js';
import { createRoot } from 'react-dom/client';

const icons = {
  linkedin: () => (
    <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zM8 8h3.8v2.2h.05C12.62 8.9 14.2 8 16.5 8 21 8 24 10.9 24 16v8h-4v-7c0-1.7-.03-3.9-2.4-3.9-2.4 0-2.8 1.8-2.8 3.8V24H8V8z"/>
    </svg>
  ),
  vsco: () => (
    <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2zm0 2a8 8 0 1 1-.001 16.001A8 8 0 0 1 12 4zm0 2a6 6 0 1 0 .001 12.001A6 6 0 0 0 12 6z"/>
    </svg>
  ),
  portfolio: () => (
    <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 6h-4V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2H4a2 2 0 0 0-2 2v1h20V8a2 2 0 0 0-2-2zM10 4h4v2h-4V4z"/>
      <path d="M22 11H2v7a2 2 0 0 0 2 2h6v-4h4v4h6a2 2 0 0 0 2-2v-7z"/>
    </svg>
  ),
  link: () => (
    <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3.9 12a5 5 0 0 1 5-5h3v2h-3a3 3 0 0 0 0 6h3v2h-3a5 5 0 0 1-5-5zm7-1h2v2h-2v-2zm4.2-4h-3v2h3a3 3 0 0 1 0 6h-3v2h3a5 5 0 0 0 0-10z"/>
    </svg>
  ),
  sun: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 4.75a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 12 4.75zM6.22 6.22a.75.75 0 0 1 1.06 0l.35.35a.75.75 0 1 1-1.06 1.06l-.35-.35a.75.75 0 0 1 0-1.06zM4.75 12a.75.75 0 0 1 .75-.75v-.5a.75.75 0 0 1 1.5 0v.5A.75.75 0 0 1 4.75 12zM6.22 17.78a.75.75 0 0 1 0-1.06l.35-.35a.75.75 0 1 1 1.06 1.06l-.35.35a.75.75 0 0 1-1.06 0zM12 19.25a.75.75 0 0 1-.75.75h-.5a.75.75 0 0 1 0-1.5h.5A.75.75 0 0 1 12 19.25zM17.78 17.78a.75.75 0 0 1-1.06 0l-.35-.35a.75.75 0 1 1 1.06-1.06l.35.35a.75.75 0 0 1 0 1.06zM19.25 12a.75.75 0 0 1-.75.75v.5a.75.75 0 0 1-1.5 0v-.5A.75.75 0 0 1 19.25 12zM17.78 6.22a.75.75 0 0 1 0 1.06l-.35.35a.75.75 0 1 1-1.06-1.06l.35-.35a.75.75 0 0 1 1.06 0z"/>
    </svg>
  ),
  moon: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
      <path d="M21.75 14.09A9 9 0 0 1 9.91 2.25a.75.75 0 0 0-.82.38 8.25 8.25 0 1 0 12.28 12.28.75.75 0 0 0-.38-.82z"/>
    </svg>
  )
};

function LinkButton({ label, href, icon }) {
  const Icon = icons[icon] || icons.link;
  return (
    <a className="btn" href={href} target="_blank" rel="noopener noreferrer">
      <Icon /> {label}
    </a>
  );
}

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="wrapper">
      <button
        className="theme-toggle"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        aria-label="Alternar tema"
      >
        {theme === 'light' ? icons.moon() : icons.sun()}
      </button>

      <header className="header">
        <div className="avatar">
          <img src={profile.avatar} alt={"Foto de " + profile.name} />
        </div>
        <div className="name">{profile.name}</div>
        <div className="role">{profile.role}</div>
      </header>

      <p className="bio">{profile.bio}</p>

      <div className="links">
        {profile.links.map((l, i) => (<LinkButton key={i} {...l} />))}
      </div>

      <div className="footer">© {new Date().getFullYear()} KG Design</div>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
