import SectionTitle from '../components/sectionTitle';
import styles from '../styles/PrincipalCard.module.css';
import Link from 'next/link';
import wSize from '../util/windowSize'

function convertDate(stringDate) {
  const date = new Date(stringDate)

  const day = date.getDate().toString().padStart(2, '0')
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const year = date.getFullYear()

  const formatted = `${day}/${month}/${year}`
  return formatted
}

export default function principalCard({ dados }) {
  const sectionTitle = "Edição Atual"

  function isActual(data) {
    return data.atual == 'true'
  }

  let edicao_atual = dados.filter(isActual)

  return (
    <div className={styles.container}>
      <SectionTitle title={sectionTitle} />
      <Link href={edicao_atual[0].link}><a target="_blank">
        <div className={styles.card}>
          <img className={styles.cardImg} src={edicao_atual[0].img} />
          <div className={styles.infoCard}>
            <div className={styles.title}>{edicao_atual[0].titulo}</div>
            <div className={styles.date}>{convertDate(edicao_atual[0].data)}</div>
            {wSize().width > 425 ? <div className={styles.abstract}>{edicao_atual[0].resumo}</div> : <></>}
          </div>
        </div>
      </a></Link>
    </div>
  )
}