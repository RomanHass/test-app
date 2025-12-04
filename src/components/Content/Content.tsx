import s from './content.module.css'

export const Content = () => {
  return (
    <div className={s.container}>
      <div className={s.content}>
        <h1>Основной контент</h1>
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos eum fugiat id laborum quam quos ratione velit
            voluptas? Dolores impedit inventore maiores natus nihil perferendis, quaerat quos ratione repellendus
            voluptas.</p>
        </div>
      </div>
    </div>
  )
}