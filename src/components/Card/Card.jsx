import styles from "./Card.module.css"
import CodeMirror from '../Codemirror/Codemirror'

function TrashIcon() {
    return (
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"></path></svg>
    )
}

export default function Card({ title, desc, value, mode, theme, color, keyel, onDelete }) {
    const deleteThis = () => {
        onDelete(keyel);
    }

    return (
        <div className={styles.card}>
            <div style={{backgroundColor: color}} className={styles.codebackground}>
                <div className={styles.codeblockheader}>
                    <img src="./icons/Ellipse 1.svg"/>
                    <img src="./icons/Ellipse 2.svg"/>
                    <img src="./icons/Ellipse 3.svg"/>
                </div>
                {<CodeMirror
                    className={"shadow" + ' ' + styles.textcode}
                    value={value}
                    options={{ 
                        readOnly: true,
                        lineWrapping: true,
                        mode: mode,
                        theme: theme
                    }}
                />}
            </div>
            <div className={styles.cardbody}>
                <div className={styles.bodytitle}><b>{title}</b></div>
                <div className={styles.bodydescription}>{desc}</div>
            </div>
            <div className={styles.cardactions}>
                <div className={styles.iconbutton} onClick={deleteThis}>
                    <TrashIcon/>
                    Deletar
                </div>
            </div>
        </div>
    )
}