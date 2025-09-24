import styles from './styles.module.css';

type HeadingProps={
children: React.ReactNode;
};

 export function Heading({ children }: HeadingProps){ // fazendo a desisturação com o children assim é mais facil
    return <h1 className={styles.heading}>{children}</h1>; 
}



