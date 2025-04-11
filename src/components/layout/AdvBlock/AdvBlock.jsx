import React from 'react'
import s from './AdvBlock.module.scss'
import Container from '@/components/ui/Container/Container'

const AdvBlock = () => {
    return (
        <>
            <section className={s.advblock}>
                <Container>
                    <div className={s.wrapper}>
                        <div className={s.top}>
                            <h2>Рекламный блок</h2>
                        </div>
                        <div className={s.btns}>
                            <button>Подробнее</button>
                        </div>
                        <img className={s.image} src="/advblock-bg.jpg" alt="img" />
                    </div>
                </Container>
            </section>
        </>
    )
}

export default AdvBlock