import type React from 'react';
import styles from './styles.module.css';

type HeadingProps = {
    children: React.ReactNode;
};

export function Heading(props: HeadingProps){
    // puxar uma chave dentro do objeto 
    const children = props.children;
    return <h1 className={styles.heading}>{children}</h1>;
 }