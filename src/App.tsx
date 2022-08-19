import React, { useRef, useState } from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { Stack } from './global/utils/utils';
import Home from './pages/home/Home';
import { NotFound } from './pages/notFound/NotFound';
import { DisplayField } from './ui/atoms/input/Input';
import { View } from './ui/atoms/view/View';

const Stacked = new Stack();

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
