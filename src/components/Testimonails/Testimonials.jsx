import React from 'react'
import styles from './testimonials.module.css'

const Testimonials = () => {

  const dataTestimonials = [
    {
      id: 1,
      desc: '“Im a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers review you and tell their friends how great you are.”',
      title: 'Deena Levies',
      address: 'Mission Bay'
    },
    {
      id: 2,
      desc: '“Im a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers review you and tell their friends how great you are.”',
      title: 'Tom Smithenson',
      address: 'Parkmerced'
    },
    {
      id: 3,
      desc: '“Im a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers review you and tell their friends how great you are.”',
      title: 'Tilly Green',
      address: 'Hayes Valley'
    },
    {
      id: 4,
      desc: '“Im a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers review you and tell their friends how great you are.”',
      title: 'MD TAUFIK',
      address: 'Sea View'
    },


  ]
  return (
    <div className={styles.container}>
      {dataTestimonials.map((data) => {
        return <div className={styles.cardContainer} key={data.id}>
        <div className={styles.cardHeader}>
            <div className={styles.bullet}></div>
            <div className={styles.bullet}></div>
            <div className={styles.bullet}></div>
        </div>
        <div className={styles.cardContent}>
            <p className={styles.para}>
                {data.desc}
            </p>
            <div>
            <h1 className={styles.title}>{data.title},</h1>
            <h1 className={styles.title}>{data.address}</h1>
            </div>
        </div>
      </div>
      })}
      
    </div>
  )
}

export default Testimonials
