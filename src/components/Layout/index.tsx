import React from "react";

import Menu from '@components/Menu';
import Footer from '@components/Footer'
import Head from "next/head";

export default function Layout(props){
    return(
        <>
        <Head>
            <link rel="icon" href="/img/favicon.ico" />
        </Head>
            <Menu/>
            <main>
                {props.children}
            </main>
           <Footer/>
        </>
    )
}