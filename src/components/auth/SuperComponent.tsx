"use client"
import { getFromStorage } from '@/config/storageConfig';
import { getTokenFromStorage } from '@/redux/features/authSlice';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';

const SuperComponent = ({children}: {children: React.ReactNode}) => {
    const dispatch = useDispatch();
    const accessToken = getFromStorage("accessToken");
    
    useEffect(()=>{

    },[])
    
    if(accessToken){
        dispatch(getTokenFromStorage(accessToken))
    }
    return children;
}

export default SuperComponent
