import styles from '/.container.module.css'

type containerProps ={
    children: React.ReactNode
}

export function conatiner({children}:containerProps){ 
    return (
        <div className= {styles.container}>
        <div className= {styles.content}>{children}</div>
     </div>
    );
}