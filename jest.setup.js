import '@testing-library/jest-dom'
import {IntersectionObserver} from 'intersection-observer'

if (typeof window !== 'undefined' && !window.IntersectionObserver) {
    require('intersection-observer');
  }


// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
    constructor() {}
  
    observe() {
      return null;
    }
  
    unobserve() {
      return null;
    }
  
    disconnect() {
      return null;
    }
  };