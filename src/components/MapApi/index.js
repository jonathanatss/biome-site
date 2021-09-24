import React from 'react';
import styles from './MapApi.module.css';

export default function MapApi() {
    return (
        <>
            <iframe style={{maxWidth:"100%", maxHeight:"100%"}} title="googleMap" id="googleMap" className={styles.googleMap} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15876.297607644668!2d-35.1979008!3d-5.8451386!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcac83da4daff8a49!2sBioME%20-%20PPGBioInfo%20-%20IMD%2FUFRN!5e0!3m2!1spt-BR!2sbr!4v1604006159617!5m2!1spt-BR!2sbr" ></iframe>
        </>
    )
}
