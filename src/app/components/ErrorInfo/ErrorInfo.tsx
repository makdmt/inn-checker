import styles from './ErrorInfo.module.css'

type Props = {
  errMessage: string;
}

export const ErrorInfo = ({ errMessage }: Props) => {

  return (
    <div className={styles.container}>
      <h2>Произошла ошибка</h2>
      <p>{errMessage}</p>
    </div>
  )
}