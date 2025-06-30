// src/components/Sidebar.js

import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import './index.css'; // Import the corresponding CSS file

const NewSidebar = () => {
  // Svelte's `let showMenu` becomes React's `useState` hook
  const [showMenu, setShowMenu] = useState(false);

  // Svelte's `bind:this` is replaced by React's `useRef` hook
  const sidebarRef = useRef(null);
  const navigate = useNavigate();


  // The toggle function now uses the state updater function
  const toggleMenu = () => {
    setShowMenu(prevShowMenu => !prevShowMenu);
  };

  // The smooth scroll function, adapted for a React event
  const scrollOnClick = (e) => {
    const target = e.currentTarget;
    const href = target.getAttribute('href');

    if (href && href.startsWith('#')) {
      e.preventDefault(); // Prevent the default jump

      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
        navigate(window.location.pathname, { replace: true });
      }
    }
  };

  // Svelte's `onMount` and `onDestroy` are handled by React's `useEffect`
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the menu is open and the click was outside the sidebar
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    // Add the event listener when the component mounts
    document.addEventListener('click', handleClickOutside, true);

    // Return a cleanup function to remove the listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []); // The empty array ensures this effect runs only once

  return (
    // The `ref` attribute connects the DOM element to our `sidebarRef`
    <aside ref={sidebarRef}>
      {/* Conditional rendering for the menu toggle icon */}
      {!showMenu && (
        <div
          className="sidebar"
          onClick={toggleMenu}
          role="button"
          tabIndex="0"
          aria-label="Toggle menu"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') toggleMenu();
          }}
        >
          <div className="circle-1"></div>
          <div className="circle-1"></div>
          <div className="circle-1"></div>
        </div>
      )}

      {/* Conditional rendering for the menu links */}
      {showMenu && (
        <ul
          className="space-y-1 py-4 px-2 fixed right-0 flex flex-col top-2 items-end z-20"
          onClick={toggleMenu}
          onKeyDown={(e) => {
            if (e.key === 'Escape') toggleMenu();
          }}
          role="menu"
          tabIndex="-1"
        >
          <li>
            <a href="#projects" onClick={scrollOnClick} className="sidebar-item md:hidden font-medium text-rolly-secondary-600 transition-colors duration-200" role="menuitem">
              Projects
            </a>
          </li>
          <li>
            <a href="#studio" onClick={scrollOnClick} className="sidebar-item md:hidden font-medium text-rolly-secondary-600 transition-colors duration-200" role="menuitem">
              Studio
            </a>
          </li>
          <li>
            <a href="#contact" onClick={scrollOnClick} className="sidebar-item md:hidden font-medium text-rolly-secondary-600 transition-colors duration-200" role="menuitem">
              Contact
            </a>
          </li>
        </ul>
      )}
    </aside>
  );
};

export default NewSidebar;