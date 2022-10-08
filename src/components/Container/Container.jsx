import s from '../Container/container.module.scss'


const Container = ({children}) => {
    return(
        <div className={s.container}>
            {children}
        </div>
    )
}


export default Container