import React from 'react';
import s from './NewsWrap.module.scss';
import Container from '@/components/ui/Container/Container';
import Link from 'next/link';
import Button from '@/components/ui/Button/Button';

const newsList = [
    {
        id: 1,
        image: '/news-1.jpg',
        title: 'В России могут увеличить сроки подачи заявки на патент',
        description: 'Минэкономразвития предлагает увеличить до года сроки подачи заявок на патент на изобретение, которое уже демонстрировалось публично.',
        date: '30 июля 2014, 01:32',
        link: '/',
    },
    {
        id: 2,
        image: '/news-1.jpg',
        title: 'В России могут увеличить сроки подачи заявки на патент',
        description: 'Минэкономразвития предлагает увеличить до года сроки подачи заявок на патент на изобретение, которое уже демонстрировалось публично.',
        date: '30 июля 2014, 01:32',
        link: '/',
    },
    {
        id: 3,
        image: '/news-1.jpg',
        title: 'В России могут увеличить сроки подачи заявки на патент',
        description: 'Минэкономразвития предлагает увеличить до года сроки подачи заявок на патент на изобретение, которое уже демонстрировалось публично.',
        date: '30 июля 2014, 01:32',
        link: '/',
    },
];

const NewsWrap = () => {
    return (
        <section className={s.newsWrap}>
            <Container>
                <div className={s.top}>
                    <h2>Новости</h2>
                    <Link href={`/`}>
                        <Button>Все новости</Button>
                    </Link>
                </div>

                <div className={s.wrapper}>
                    {newsList.map((news) => (
                        <div className={s.item} key={news.id}>
                            <div className={s.item_top}>
                                <div className={s.item_image}>
                                    <img src={news.image} alt="img" />
                                </div>
                                <h3>{news.title}</h3>
                            </div>

                            <p>{news.description}</p>

                            <div className={s.item_bottom}>
                                <h5>{news.date}</h5>

                                <div className={s.item_bottom_right}>
                                    <Link href={news.link}>
                                        <Button>Подробнее</Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default NewsWrap;
