import AboutWrap from "@/components/layout/AboutWrap/AboutWrap";
import AdvBlock from "@/components/layout/AdvBlock/AdvBlock";
import Benefits from "@/components/layout/Benefits/Benefits";
import Hero from "@/components/layout/Hero/Hero";
import NewsWrap from "@/components/layout/NewsWrap/NewsWrap";
import Seo from "@/components/ui/Seo/Seo";
import instance from "@/lib/axios";

export async function getServerSideProps() {
  const aboutData = (await instance.get('/landing/about/')).data
  const featuresData = (await instance.get('/landing/features/')).data
  const newsData = (await instance.get('/landing/news/')).data

  return { props: { aboutData, featuresData, newsData } }
}

export default function Home({ aboutData, featuresData, newsData }) {

  return (
    <>
      <Seo
        title="ASM Rights Holder — Главная"
        description="Платформа ASM для управления авторскими правами и лицензиями. Создание договоров, защита собственности, маркетплейс прав."
      />

      <Hero />
      <AboutWrap data={aboutData} />
      <Benefits data={featuresData} />
      <AdvBlock />
      <NewsWrap data={newsData} />
    </>
  );
}
