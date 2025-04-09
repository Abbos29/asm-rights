import React from 'react'
import s from './Hero.module.scss'
import Container from '@/components/ui/Container/Container'

const Hero = () => {
    return (
        <>
            <section className={s.hero}>
                <Container>
                    <h1 className={s.title}>Правообладатель</h1>

                    <div className={s.wrapper}>
                        <div className={s.top}>
                            <img src="/hero-title-bg.svg" alt="img" />
                            <h2>Автоматизированная система менеджмента</h2>
                        </div>
                        <div className={s.btns}>
                            <button>Обучение</button>
                        </div>
                        <img className={s.image} src="/hero-bg.jpg" alt="img" />
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Hero