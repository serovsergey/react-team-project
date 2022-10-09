import s from './CheckDay.module.scss';

const CheckDay = () => {
    return (
        <>
            <div className={s.weekBox}>
                <form action="">
                <ul>
                    <li>
                        <label>
                            <input
                                type="checkbox"
                                name="day"
                                value="monday"
                            />
                            <span className={s.day}>Mo</span>
                        </label>
                    </li>
                    <li>
                        <label>
                            <input
                                type="checkbox"
                                name="day"
                                value="tuesday"
                            />
                            <span className={s.day}>Tu</span>
                        </label>
                    </li>
                    <li>
                        <label>
                            <input
                                type="checkbox"
                                name="day"
                                value="цednesday"
                            />
                            <span className={s.day}>We</span>
                        </label>
                    </li>
                    <li>
                        <label>
                            <input
                                type="checkbox"
                                name="day"
                                value="thursday"
                            />
                            <span className={s.day}>Th</span>
                        </label>
                    </li>
                    <li>
                        <label>
                            <input
                                type="checkbox"
                                name="day"
                                value="friday"
                            />
                            <span className={s.day}>Fr</span>
                        </label>
                    </li>
                    <li>
                        <label>
                            <input
                                type="checkbox"
                                name="day"
                                value="saturday"
                            />
                            <span className={s.day}>Sa</span>
                        </label>
                    </li>
                    <li>
                        <label>
                            <input
                                type="checkbox"
                                name="day"
                                value="sunday"
                            />
                            <span className={s.day}>Su</span>
                        </label>
                    </li>
                </ul>
                </form>
            </div>
        </>
    );
};

export default CheckDay;
