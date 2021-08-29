import React from 'react';
import styles from './ProfileText.module.scss';

const ProfileText = () => {
  return (
    <div className={styles.textContainer}>
      <h2 className={styles.titleText}>Про Себе</h2>
      <p>
        Життя - це постійний пошук та відкриття все нових, цікавих сторінок, а тому - подорож так
        приваблює людину. Запропонована Вам програма відпочинку - це бажання надати мандрівникові
        якомога більше інформації про географію, історію, культуру й туризм на території Воловецько
        - Міжгірської Верховини та й Закарпатті, загалом! Сподіваюсь, що моя інформація, допоможе
        Вам знайти щось цікаве для себе, спланувати відпочинок і зробити перший крок у відкритті та
        знайомстві з регіоном! Чудовою нагодою розпочати подорож Закарпаттям є знайомство з його
        наймальовничішим куточком - Воловеччиною та Міжгірщиною! Пішохідний туризм - найдоступніший
        вид активного відпочинку на Закарпатті. Незнайомі маршрути і важкопрохідні стежки -
        подарують Вам відчуття справжніх пригод! Пропоную гостям Воловеччини одноденні туристичні
        походи: пішохідні та комбіновані автобусно - пішохідні; а також велосипедні та
        квадроциклетні маршрути, рафтинг по Тисі, польоти на параплані, катання на конях, купання в
        чанах та термальних басейнах, дегустації вина, сиру, закарпатських страв, цікаву культурно -
        мистецьку програму та цілий спектр різноманітних напрямків туристичного відпочинку! В
        зимовий період запропоную не менш захоплюючий гірськолижний відпочинок!
      </p>
    </div>
  );
};

export default ProfileText;
