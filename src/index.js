import React from 'react';
import RDC from 'react-dom/client';
import AppRoot from './appRoot'

import './reset.css';

const ROOT_ELM = 'root'
const FOUND_ELM = document.getElementById(ROOT_ELM)

if (FOUND_ELM) { 
  RDC.createRoot(FOUND_ELM).render(<AppRoot />)
}