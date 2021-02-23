import styles from '../styles/components/Profile.module.css'

export function Profile(){
 return(
  <div className={styles.profileContainer}>
   <img src="https://github.com/diegodavitoria.png" alt="Diego da Vitoria"/>
    <div>
     <strong>Diego da Vitoria</strong>
     <p>
      <img src="icons/level.svg" alt="level"/>
      Level</p>
    </div>
  </div>
 );
}