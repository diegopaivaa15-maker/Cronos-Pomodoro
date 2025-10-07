import styles from './styles.module.css'

type DefaultButtonProps={
   icon: React.ReactNode
   color?: 'green' |'red';

} & React.ComponentProps<'button'>;

export function DefaultButton({ icon, ...props}: DefaultButtonProps){
    return( 
    <>  
     <button className={styles.button} {...props}> 
     {icon}
     </button>
     </>
    );
} 