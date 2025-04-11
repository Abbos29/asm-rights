import React from 'react'
import s from './Footer.module.scss'
import Container from '@/components/ui/Container/Container'
import Link from 'next/link'
import Button from '@/components/ui/Button/Button'

const Footer = () => {
    return (
        <>
            <footer className={s.footer}>
                <Container>
                    <div className={s.wrapper}>
                        <div className={s.item}>
                            <Link href={'/'} className={s.logo}>
                                <img src="/logo-footer.svg" alt="logo" />
                            </Link>

                            <Button>Обратный звонок</Button>

                            <div className={s.socs}>
                                <a target='_blank' href=""><img src="/icon-yt.svg" alt="icon" /></a>
                                <a target='_blank' href=""><img src="/icon-insta.svg" alt="icon" /></a>
                                <a target='_blank' href=""><img src="/icon-tg.svg" alt="icon" /></a>
                                <a target='_blank' href=""><img src="/icon-vk.svg" alt="icon" /></a>
                            </div>
                        </div>

                        <div className={s.box}>
                            <Link href={'/'}>Главная</Link>
                            <Link href={'/'}>Каталог</Link>
                            <Link href={'/'}>Услуги</Link>
                            <Link href={'/'}>О компании</Link>
                        </div>

                        <div className={s.box}>
                            <Link href={'/'}>Новости</Link>
                            <Link href={'/'}>Реклама</Link>
                            <Link href={'/'}>Правовая база</Link>
                            <Link href={'/'}>Контакты</Link>
                        </div>

                        <div className={s.box_left}>
                            <Link href={`/`}>
                                <img src="/icon-map.svg" alt="map" />

                                125315, Россия, г. Москва, Ленинградский проспект, д.70
                            </Link>

                            <Link href={`/`}>
                                <img src="/icon-tel.svg" alt="tel" />

                                8-800-100-55-44
                            </Link>
                            <Link href={`/`}>
                                <img src="/icon-tel.svg" alt="icon" />

                                8-800-100-55-02
                            </Link>

                            <Link href={`/`}>
                                <img src="/icon-mail.svg" alt="icon" />

                                asmrightsholder@gmail.com
                            </Link>
                        </div>
                    </div>


                </Container>

                <div className={s.inner}>
                    <Container>
                        <div className={s.inner_wrap}>
                            <Button>
                                Обучение
                            </Button>
                        </div>
                    </Container>
                </div>
            </footer>
        </>
    )
}

export default Footer