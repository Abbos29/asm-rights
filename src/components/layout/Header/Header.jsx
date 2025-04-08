import React from 'react'
import s from './Header.module.scss'
import Container from '@/components/ui/Container/Container'
import Link from 'next/link'

const Header = () => {
    return (
        <>
            <header className={s.header}>
                <Container>
                    <div className={s.nav}>
                        <Link href={'/'}>
                            <img src="/logo.svg" alt="logo" />
                        </Link>

                        <div className={s.menu}>
                            <Link href={'/'}>Главная</Link>
                            <Link href={'/'}>Каталог</Link>
                            <Link href={'/'}>Услуги</Link>
                            <Link href={'/'}>О компании</Link>
                            <Link href={'/'}>Новости и статьи</Link>
                            <Link href={'/'}>Правовая база</Link>
                            <Link href={'/'}>Контакты</Link>
                        </div>

                        <div className={s.box}>
                            <Link href={'/'} className={s.login}>
                                <img src="/user-icon.svg" alt="icon" />
                            </Link>
                            <Link href={'/'} className={`${s.btn} ${s.btn__white}`}>
                                Обратный звонок
                            </Link>
                        </div>

                        <div className={s.burger}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </Container>
            </header>
        </>
    )
}

export default Header