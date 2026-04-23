'use client'

import { Toast, toast, ToastProvider } from '@heroui/react';

import React from 'react';

const ToastPr = ({children}) => {
    return (
       <ToastProvider>
        {children}
       </ToastProvider>
    );
};

export default ToastPr;