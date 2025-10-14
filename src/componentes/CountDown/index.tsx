
import type { HomeProps } from '../../PAGES';
import styles from './styles.module.css';


export function CountDown({state}: HomeProps) {
    return ( 
    <div className={styles.container}>{state.formattedSecondsRemaining}</div>
);
}

