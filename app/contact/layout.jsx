"use client"
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Head from 'next/head'
import React from 'react'

export default function layout({children}) {
    return (
        <>
            <Head>
                <title>Darya Cargo - Reliable International Shipping & Logistics Solutions</title>
                <meta name="description" content="Darya Cargo offers fast, reliable, and affordable international shipping and logistics services. We specialize in cargo transport, freight forwarding, and supply chain management worldwide." />
                <meta name="keywords" content="Darya Cargo, international shipping, logistics, freight forwarding, cargo transport, supply chain management" />
                <meta name="author" content="Darya Cargo Team" />
                <meta property="og:title" content="Darya Cargo - Reliable International Shipping & Logistics Solutions" />
                <meta property="og:description" content="Darya Cargo offers fast, reliable, and affordable international shipping and logistics services." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://daryacargo.com" /> 
                <meta property="og:image" content="/public/images/logo.jpg" />
            </Head>
            
            <div className="font-[family-name:var(--font-geist-sans)]">
                <Navbar />
                {children}
                <Footer />
            </div>
        </>
    )
}
