import React from 'react';
import ExcursionPresentationItem from './ExcursionPresentationItem/ExcursionPresentationItem';
import { connect } from 'react-redux';
import styles from './ExcursionsPresentationSection.module.scss';
import Button from '../Button/Button';

import Play from '../../../img/MainImg/ExcursionImg/Play.jpg';
import VV2 from '../../../img/MainImg/ExcursionImg/VV2.jpg';
import Gemba from '../../../img/MainImg/ExcursionImg/Gemba.jpg';

import { NavLink } from 'react-router-dom';

const ExcursionsPresentationSection = () => {
  return (
    <section className={styles.wrapper}>
      <NavLink to="/excursions" className={styles.titleLink}>
        <h2 className={styles.titleText}>Екскурсії</h2>
      </NavLink>

      <article className={styles.itemContainer}>
        <ExcursionPresentationItem
          excursion={{
            img: Play,
            title: 'Маршрут на гору "Плай"',
            text:
              'Пізнавальна екскурсія до однієї з вершин Боржавського масиву,' +
              ' а саме гори Плай, де знаходяться діюча радіорелейна та метеостанція.' +
              ' Висота 1330 метрів над рівнем моря. В 60-ті роки ХХ століття на метеостанції' +
              ' працював Герой України - Вячеслав Чорновіл.',
          }}
        />
        <ExcursionPresentationItem
          excursion={{
            img: VV2,
            title: 'Маршрут на гору "Великий Верх"',
            text:
              'Надзвичайно цікавий похід до однієї із найвищих вершин Боржавського хребта,' +
              ' гори "Великий Верх" висота якої сягає 1598 метрів. Безмежні краєвиди, ' +
              'буково-смерековий ліс, вражаючі панорами Карпат, легенди, цілюще повітря та багато інших див ' +
              'чекають на учасників експедиції.',
          }}
        />
        <ExcursionPresentationItem
          excursion={{
            img: Gemba,
            title: 'Маршрут на гору "Гембу"',
            text:
              'Захоплююча мандрівка через села Подобовець та Пилипець до вершини Боржавського хребта' +
              ' висотою 1491 метр над рівнем моря. Знакова вершина для тих хто любить екстремальний відпочинок.' +
              ' Місце проведення міжнародних та національних змагань з парапланеризму, фрірайду, даунхілу.',
          }}
        />
      </article>

      <Button button={{ name: 'Більше Екскурсій', path: '/excursions' }} />
    </section>
  );
};

const mapStateToProps = state => ({
  excursionn: state.trips,
});

export default connect(mapStateToProps)(ExcursionsPresentationSection);
