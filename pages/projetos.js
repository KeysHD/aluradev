import { useEffect, useState } from 'react'
import Card from '@components/Card/Card'
import styles from '../styles/Project.module.css'
import Link from 'next/link'

function BlueprintIcon() {
  return (
    <svg id="Capa_1" enable-background="new 0 0 609.637 609.637" height="512" viewBox="0 0 609.637 609.637" width="512" xmlns="http://www.w3.org/2000/svg"><g><g id="Page-1_5_"><g id="_x30_06---Draw-Blueprint"><path id="Shape_33_" d="m363.419 204.933-4.169 37.046c-.244 2.271.557 4.53 2.177 6.14 1.607 1.681 3.922 2.491 6.227 2.177l37.122-4.224c.74-.087 1.383-.435 2.09-.588l-42.881-42.881c-.234.765-.423 1.543-.566 2.33z"/><path id="Rectangle-path_3_" d="m376.376 115.742h167.756v67.353h-167.756z" transform="matrix(.707 -.707 .707 .707 29.212 369.333)"/><path id="Rectangle-path_1_" d="m531.61 32.969h22.817v67.32h-22.817z" transform="matrix(.707 -.707 .707 .707 111.921 403.472)"/><path id="Shape_32_" d="m606.225 51.013c2.172-2.096 3.402-4.983 3.407-8.001.005-3.065-1.223-6.003-3.407-8.154l-31.429-31.44c-2.142-2.185-5.072-3.416-8.132-3.418-2.998.011-5.866 1.227-7.958 3.375l-16.024 15.992 47.594 47.594z"/><path id="Shape_31_" d="m65.322 457.22h21.772c6.012 0 10.886-4.874 10.886-10.886v-435.448c.001-6.012-4.873-10.886-10.886-10.886h-21.772c-36.059.036-65.281 29.258-65.317 65.317v421.448c16.508-18.786 40.308-29.552 65.317-29.545z"/><path id="Shape_30_" d="m68.479 609.627h530.267c6.012 0 10.886-4.874 10.886-10.886v-435.448c0-6.012-4.874-10.886-10.886-10.886h-63.14l-103.354 103.419c-6.784 6.653-15.597 10.848-25.038 11.92-36.741 4.126-37.078 4.409-40.257 4.409h-160.114v119.748h261.269v-54.431c0-6.012 4.874-10.886 10.886-10.886s10.886 4.874 10.886 10.886v163.293c0 12.025-9.748 21.772-21.772 21.772h-217.725c-6.012 0-10.886-4.874-10.886-10.886s4.874-10.886 10.886-10.886h76.203v-87.09h-119.747v152.407c0 6.012-4.874 10.886-10.886 10.886s-10.886-4.874-10.886-10.886v-293.927h-32.659c-6.012 0-10.886-4.874-10.886-10.886s4.874-10.886 10.886-10.886h186.252c-1.008-3.49-1.352-7.139-1.012-10.756l4.126-37.089c1.062-9.64 5.423-18.616 12.345-25.408l24.723-24.723h-259.093v293.927c0 18.037-14.622 32.659-32.659 32.659h-21.772c-36.059.036-65.281 29.258-65.317 65.317v2.395c2.43 35.861 32.536 63.526 68.474 62.922z"/><path id="Rectangle-path_2_" d="m348.363 413.676h119.748v87.09h-119.748z"/></g></g></g></svg>
  )
}

export default function MeusProjetos() {
  const [ projects, setProjects ] = useState([])

  useEffect(() => {
    const lS = window.localStorage
    var myProjects = lS.getItem('projetos');
    if(myProjects == null) return;
    setProjects(JSON.parse(myProjects))
  }, [])

  const deleteThis = (i) => {
    var objects = [];
    
    const lS = window.localStorage
    if(lS.getItem('projetos')) {
      const arr = JSON.parse(lS.getItem('projetos'));
      arr.map( el => objects.push(el))
    }
    
    objects.splice(i, 1);
    setProjects(objects);

    if(objects.length == 0) {
      return lS.removeItem('projetos')
    } else {
      return lS.setItem('projetos', JSON.stringify(objects))
    }
  }

  const list = (
    projects.map((value, index) => {
      return (
        <Card 
          key={index} 
          keyel={index}
          title={value.title} 
          desc={value.desc} 
          value={value.code}
          mode={value.mode.toLowerCase()}
          theme={value.theme.toLowerCase()}
          color={value.color}
          onDelete={deleteThis}
        />
      )
    })
  )

  const nolist = (
    <div className={styles.nolist}>
      <div className={styles.nolist_card}>
        <div className={styles.nolist_card_icon}>
          <BlueprintIcon/>
        </div>
        <div className={styles.nolist_card_title}>Nenhum projeto foi encontrado</div>
        <Link href="/">
          <button className={"button-outline"}>Criar um projeto</button>
        </Link>
      </div>
    </div>
  )

  return (
    <div className={styles.container}>
        <main className={styles.main}>
          {projects.length > 0 ? list : nolist}
        </main>
    </div>
  )
}
