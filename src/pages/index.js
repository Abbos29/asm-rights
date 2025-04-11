import AboutWrap from "@/components/layout/AboutWrap/AboutWrap";
import AdvBlock from "@/components/layout/AdvBlock/AdvBlock";
import Benefits from "@/components/layout/Benefits/Benefits";
import Hero from "@/components/layout/Hero/Hero";
import NewsWrap from "@/components/layout/NewsWrap/NewsWrap";
import Seo from "@/components/ui/Seo/Seo";

export default function Home() {
  return (
    <>
      <Seo
        title="ASM Rights Holder — Главная"
        description="Платформа ASM для управления авторскими правами и лицензиями. Создание договоров, защита собственности, маркетплейс прав."
      />

      <Hero />
      <AboutWrap />
      <Benefits />
      <AdvBlock />
      <NewsWrap />
    </>
  );
}
