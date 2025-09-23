import styles from './Heading.module.css';

type HeadingProps={
children: string
};

 export function Heading({ children }: HeadingProps){ // fazendo a desisturação com o children assim é mais facil

    return <h1 className={styles.heading}>{children}</h1>; 
}



