import Container from '@/components/ui/Container/Container'
import React, { useEffect, useState } from 'react'
import s from './AboutWrap.module.scss'

const AboutWrap = ({data}) => {
    console.log(data)

    return (
        <>
            <section className={s.aboutWrap}>
                <Container>
                    <div className={s.wrapper}>
                        <img className={s.image} src="/about-wrap-img.png" alt="image" />

                        <div className={s.box}>
                            <h2>О компании</h2>
                            <p>
                                {data?.full_text}
                                {/* <span>Author Rights Management</span> — это инновационная платформа, созданная для авторов, агентов, правообладателей и инвесторов, предоставляющая комплексное решение для управления авторскими правами и интеллектуальной собственностью. <br /> */}
                                {/* <span>Наша миссия</span> — упростить процесс управления авторскими правами, автоматизировать расчеты долей и расходов, а также обеспечить прозрачность и безопасность всех операций. <br /> */}
                                {/* <span>Идея создания Author Rights Management</span> родилась из потребности в эффективном и удобном инструменте для управления авторскими правами в цифровую эпоху. Мы объединили опыт специалистов в области права, IT и финансов, чтобы создать платформу, которая удовлетворяет все потребности участников рынка интеллектуальной собственности. */}
                            </p>

                            <div className={s.socs}>
                                <a target='_blank' href=""><img src="/icon-yt.svg" alt="icon" /></a>
                                <a target='_blank' href=""><img src="/icon-insta.svg" alt="icon" /></a>
                                <a target='_blank' href=""><img src="/icon-tg.svg" alt="icon" /></a>
                                <a target='_blank' href=""><img src="/icon-vk.svg" alt="icon" /></a>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default AboutWrap