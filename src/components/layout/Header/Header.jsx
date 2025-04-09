import React, { useState } from 'react'
import s from './Header.module.scss'
import Container from '@/components/ui/Container/Container'
import Link from 'next/link'

const Header = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(prev => !prev)
    }

    const closeMenu = () => {
        setIsOpen(false)
    }


    return (
        <>
            <header className={s.header}>
                <Container>
                    <div className={s.nav}>
                        <Link href={'/'}>
                            <img src="/logo.svg" alt="logo" />
                        </Link>

                        <div className={`${s.menu} ${isOpen ? s.open : ''}`}>
                            <Link href={'/'} onClick={closeMenu}>Главная</Link>
                            <Link href={'/'} onClick={closeMenu}>Каталог</Link>
                            <Link href={'/'} onClick={closeMenu}>Услуги</Link>
                            <Link href={'/'} onClick={closeMenu}>О компании</Link>
                            <Link href={'/'} onClick={closeMenu}>Новости и статьи</Link>
                            <Link href={'/'} onClick={closeMenu}>Правовая база</Link>
                            <Link href={'/'} onClick={closeMenu}>Контакты</Link>
                        </div>

                        <div className={s.box}>
                            <Link href={'/'} className={s.login}>
                                <img src="/user-icon.svg" alt="icon" />
                            </Link>
                            <Link href={'/'} className={`${s.btn} ${s.btn__white}`}>
                                Обратный звонок
                            </Link>
                        </div>

                        <div className={s.burger} onClick={toggleMenu}>
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