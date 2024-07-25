// src/components/TransitionWrapper.jsx
import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './Transition.css'; // Import CSS for transitions

const TransitionWrapper = ({ children, location }) => {
  return (
    <TransitionGroup>
      <CSSTransition
        key={location.pathname}
        timeout={400}
        classNames="fade"
      >
        {children}
      </CSSTransition>
    </TransitionGroup>
  );
};

export default TransitionWrapper;
