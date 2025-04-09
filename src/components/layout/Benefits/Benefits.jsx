import React from 'react'
import s from './Benefits.module.scss'
import Container from '@/components/ui/Container/Container'

const benefitsData = [
    {
        icon: '/benefits-icon-1.svg',
        title: 'Управление авторскими правами',
        text: '<span>Комплексная услуга</span>, которая помогает частным лицам и предприятиям регистрировать свои творческие работы и защищать права интеллектуальной собственности.',
    },
    {
        icon: '/benefits-icon-2.svg',
        title: 'Создание договоров',
        text: '<span>Экспертная проверка</span>. Наша команда экспертов проверит вашу заявку на предмет её соответствия всем требованиям. Получите свидетельство регистрации в течение нескольких дней.',
    },
    {
        icon: '/benefits-icon-3.svg',
        title: 'Управление проектами',
        text: '<span>Мы предлагаем услуги</span> по мониторингу и обеспечению соблюдения авторских прав для выявления и предотвращения нарушений авторских прав.',
    },
    {
        icon: '/benefits-icon-4.svg',
        title: 'Маркетплейс',
        text: '<span>Платформа, которая облегчает</span> покупку и продажу прав интеллектуальной собственности, особенно авторских прав, между создателями, владельцами и пользователями.',
    },
]


const Benefits = () => {
    return (
        <section className={s.benefits}>
            <Container>
                <div className={s.wrapper}>
                    {benefitsData.map((item, idx) => (
                        <div key={idx} className={s.item}>
                            <div className={s.top}>
                                <div className={s.icon}>
                                    <img src={item.icon} alt="icon" />
                                </div>
                                <h3>{item.title}</h3>
                            </div>
                            <p dangerouslySetInnerHTML={{ __html: item.text }} />
                        </div>
                    ))}

                    <div className={s.center_img}>
                        <img src="/benefits-icon-main.svg" alt="image" />
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Benefits
