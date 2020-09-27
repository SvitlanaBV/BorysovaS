import React from 'react';
import './App.scss';
import HeroBlock from "./components/HeroBlock/HeroBlock";
import shidLogo from "./assets/logo1.svg";
import gcLogo from "./assets/logo3.svg";
import ITNLogo from "./assets/logo2.svg";
import heroBg from "./assets/hero-bg.jpg"
import Facts from "./components/Facts/Facts";
import SectorsList from "./components/SectorsList/SectorsList";
import Footer from "./components/Footer/Footer";
import Airquality from "./components/Airquality/Airquality";

function App() {
    const partners = [
        shidLogo,
        ITNLogo,
        gcLogo
    ];
    const links = [
        {
            title: "Основные факты",
            href: "#facts"
        },
        {
            title: "Индекс качества воздуха",
            href: "#index"
        },
        {
            title: "Политика по уменьшению загрязнений",
            href: "#police"
        }
    ];
    const factsSlides = [
        {
            id: "1332",
            imgUrl: require("./assets/factsSlider/slide1.jpg"),
            desc: "Женщины и дети – главные жертвы загрязнения воздуха"
        },
        {
            id: "1333",
            imgUrl: require("./assets/factsSlider/slide2.jpg"),
            desc: "Защитники окружающей среды подвергаются преследованиям"
        },
        {
            id: "1334",
            imgUrl: require("./assets/factsSlider/slide3.jpg"),
            desc: "Загрязнение воздуха – нарушение прав человека"
        },
        {
            id: "1335",
            imgUrl: require("./assets/factsSlider/slide4.jpg"),
            desc: "4,2 миллиона случаев преждевременной смерти людей из-за загрязнения атмосферного воздуха"
        },
        {
            id: "1336",
            imgUrl: require("./assets/factsSlider/slide5.jpg"),
            desc: "Согласно оценкам, суммарный объем затрат в связи с загрязнением воздуха превышает 5 трлн долл. в год."
        }
    ];
    const sectors = [
        {
         name: "Промышленность",
            imgUrl: require("./assets/prom1.jpg"),
            description: "Чистые технологии"
        },
        {
            name: "Транспорт",
            imgUrl: require("./assets/prom2.jpg"),
            description: "Переход к чистым способам выработки энергии; уделение приоритетного внимания скоростному городскому транспорту, пешеходным и велосипедным сетям в городах, а также железнодорожным междугородным грузовым и пассажирским перевозкам; переход к использованию более чистых большегрузных дизельных транспортных средств и автомобилей с низким уровнем выбросов, а также более чистых видов топлива, включая топливо со сниженной концентрацией серы"
        },
        {
            name: "Городское планирование",
            imgUrl: require("./assets/prom3.jpg"),
            description: "Улучшение энергетической эффективности зданий и обеспечение более зеленых и компактных и тем самым более энергоэффективных городов"
        },
        {
            name: "Энергия",
            imgUrl: require("./assets/prom4.jpg"),
            description: "Обеспечение доступа к недорогостоящим источникам энергии в быту для приготовления пищи, отопления и освещения"
        },
        {
            name: "Энергетика",
            imgUrl: require("./assets/prom5.jpg"),
            description: "Более широкое использование видов топлива с низким уровнем выбросов и возобновляемых источников энергии, не основанных на сжигании (таких как энергия солнца, ветра или гидроэнергия); комбинированная выработка тепла и энергии; и распределенная выработка энергии (например, энергетические минисистемы и размещаемые на крыше установки для выработки энергии из солнечной энергии)"
        },
        {
            name: "Утилизация отходов",
            imgUrl: require("./assets/prom6.jpg"),
            description: "Стратегии уменьшения отходов, сортировки отходов, рециклирования, повторного использования или переработки отходов; а также улучшенные методы биологической утилизации отходов, такие как анаэробная переработка отходов для производства биогаза, являются практически осуществимыми, недорогими альтернативными вариантами открытому сжиганию твердых отходов"
        },
    ];
    const author = "Никитой Ямником";
    const designer = "Валерией Бубырь";
  return (
    <>
      <HeroBlock title="Качество атмосферного воздуха и здоровье"
                 logos={partners}
                 bgImg={heroBg}
                 links={links}/>
      <Facts title="Основные факты" slides={factsSlides}/>
      <Airquality/>
      <SectorsList title="Политика по уменьшению загрязнений"
      subtitle="Есть много примеров успешной политики по уменьшению загрязнения воздуха в таких секторах, как транспорт, городское планирование, энергетика и промышленность:"
      items={sectors}/>
      <Footer links={links}
              partners={partners}
              author={author}
              designer={designer}/>
    </>
  );
}

export default App;
