import { ReactComponent as HandFooterIcon } from '../../assets/svg/Hand-header.svg';
import s from './Footer.module.scss';

const Footer = () => {
    return (
        <>
            <footer className={s.footer}>
                <div className={s.wrapper_info}>
                    <ul className={s.footer_list}>
                        <li className={s.footer_item}>
                            <p className={s.footer_text}>KidsLike</p>
                            <HandFooterIcon
                                className={s.footer_icon}
                                width="14"
                                height="18"
                            />
                        </li>
                        <li className={s.footer_item}>
                            <p className={s.footer_text}>
                                | Making the life of parents and children isy :)
                            </p>
                        </li>
                        <li className={s.footer_item}>
                            <p className={s.footer_text}>| 2022</p>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    );
};

export default Footer;
