import React, { useState } from 'react';
import ExcursionItem from '../ExcursionItem/ExcursionItem';
import styles from './ExcursionsSection.module.scss';

const ExcursionsSection = () => {
  const [excursions, setExcursions] = useState([
    {
      id: 1,
      img: 'http://podobovec.com/img/Play.jpg',
      title: 'Маршрут на гору "Плай"',
      text:
        'Пізнавальна екскурсія до однієї з вершин Боржавського масиву, ' +
        'а саме гори Плай, де знаходяться діюча радіорелейна та метеостанція,' +
        ' Висота 1330 метрів над рівнем моря. В 60-ті роки ХХ століття на метеостанції' +
        ' працював Герой України - Вячеслав Чорновіл.',
      time: 'Тривалість походу: 5-7 годин',
      price: 'Ціна: 800 грн',
    },

    {
      id: 2,
      img: 'http://podobovec.com/img/VV2.jpg',
      title: 'Маршрут на гору "Великий Верх"',
      text:
        'Надзвичайно цікавий, пізнавальний похід до однієї із найвищих вершин Боржавського хребта,' +
        ' гори "Великий Верх" висота якої сягає 1598 метрів над рівнем моря. Безмежні краєвиди, ' +
        'буково-смерековий ліс, вражаючі панорами Карпат, легенди, цілюще повітря та багато інших див ' +
        'чекають на учасників експедиції.',
      time: 'Тривалість походу: 6-9 годин',
      price: 'Ціна: 900 грн',
    },

    {
      id: 3,
      img: 'http://podobovec.com/img/Gemba.jpg',
      title: 'Маршрут на гору "Гембу"',
      text:
        'Захоплююча мандрівка через села Подобовець та Пилипець до вершини Боржавського хребта' +
        ' висотою 1491 метр над рівнем моря. Знакова вершина для тих хто любить екстремальний відпочинок.' +
        ' Місце проведення міжнародних та національних змагань з парапланеризму, фрірайду, даунхілу.' +
        ' Унікальні краєвиди, безліч вражень та хорошого настрою, цікаві історії та бувальщини.',
      time: 'Тривалість походу: 8-10 годин',
      price: 'Ціна: 900 грн',
    },

    {
      id: 4,
      img: 'http://podobovec.com/img/Stoy.jpg',
      title: 'Маршрут на гору "Стой"',
      text:
        'Неповторна експедиція до найвищої вершини Боржавського масиву 1681 метр над рівнем моря.' +
        ' Прекрасні краєвиди, надзвичайні емоції та враження, маса адреналіну. ' +
        "Вершина гори Стой в часи СРСР була стратегічним військовим об'єктом. " +
        'Про все це і багато чого цікавого - в процесі мандрівки.',
      time: 'Тривалість походу: 10-14 годин',
      price: 'Ціна: 1000 грн',
    },

    {
      id: 5,
      img: 'http://podobovec.com/img/Pikyi.jpg',
      title: 'Маршрут на гору "Пікуй"',
      text:
        'Автобусно-пішохідний маршрут. Незабутня екскурсія-похід до найвищої вершини' +
        ' Львівської області, що знаходиться на висоті 1408 метрів над рівнем моря.' +
        ' Знакова гора, цікаві легенди, цікаве історичне минуле. В минулому столітті по вершині' +
        ' гори також проходив кордон між державами. Безліч позитивних вражень, захоплюючі природні' +
        ' ландшафти, легенди оповідання, гірські потічки, царство пралісів і ще багато приємних' +
        ' відкриттів чекає на Вас.',
      time: 'Тривалість походу: 10-14 годин',
      price: 'Ціна: 1000 грн',
    },
  ]);

  return (
    <section className={styles.container}>
      {excursions.map(excursion => (
        <ExcursionItem excursion={excursion} key={excursion.id} />
      ))}
    </section>
  );
};

export default ExcursionsSection;
