import { useState, useEffect } from 'react';
import styles from '../styles/components/Countdown.module.css';

let countdownTimeout: NodeJS.Timeout;


export function Countdown(){
 const [time, setTime] = useState(0.1 * 60);
 const [isActive, setActive] = useState(false);
 const [hasFinished, setHasFinished] = useState(false);

 const minutes = Math.floor(time / 60);
 const seconds = time % 60;

 const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
 const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

 function starCountdown() {
  setActive(true);
 }

 function resetCountdown() {
  clearTimeout(countdownTimeout)
  setActive(false);
  setTime(0.1 * 60);
 }

 useEffect(() => {
  if (isActive && time > 0) {
   countdownTimeout = setTimeout(() =>{
    setTime(time - 1);
   }, 1000)
  } else if (isActive && time === 0) {
   setHasFinished(true);
   setActive(false);
  }
 }, [isActive, time])

 return(
  <div>
   <div className={styles.countdownContainer}>
   <div>
    <span>{minuteLeft}</span>
    <span>{minuteRight}</span>
   </div>
   <span>:</span>
   <div>
    <span>{secondLeft}</span>
    <span>{secondRight}</span>
   </div>
  </div>

   {hasFinished ? (
     <button 
     disabled
     className={styles.countdownButton}
     
     >
    
     Encerrado
     
    </button>
    ) : (

     <>
     {isActive ? (
    <button 
    type="button" 
    className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
    onClick={resetCountdown}
    >
   
    Cancelar
    
   </button>
   ): (
    <button 
    type="button" 
    className={styles.countdownButton}
    onClick={starCountdown}
    >
   
    Iniciar
    
   </button>
   )}
     </>
    ) }

  </div>
 );
}