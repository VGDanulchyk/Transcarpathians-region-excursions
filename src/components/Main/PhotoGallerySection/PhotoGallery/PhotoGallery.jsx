import React from 'react';
import Gallery from 'react-grid-gallery';

import styles from './PhotoGallery.module.scss';

const IMAGES = [
  {
    src: 'https://mail.google.com/mail/u/0?ui=2&ik=213d62e8c1&attid=0.8&permmsgid=msg-f:1709236928983261863&th=17b86dee5506e2a7&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ_RDH6wghPZHt0xWovWh7nqxor9KB36UPfA9y5Irb-5w1DYbtjkqDn3e2QeWFby52w18eCY--e3JUDgi5On7duVxNp2LJ_aB-yoflBWFHnLgWZowoK6PJs8Z9M&disp=emb&realattid=ii_kst4p44f0',
    thumbnail:
      'https://mail.google.com/mail/u/0?ui=2&ik=213d62e8c1&attid=0.8&permmsgid=msg-f:1709236928983261863&th=17b86dee5506e2a7&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ_RDH6wghPZHt0xWovWh7nqxor9KB36UPfA9y5Irb-5w1DYbtjkqDn3e2QeWFby52w18eCY--e3JUDgi5On7duVxNp2LJ_aB-yoflBWFHnLgWZowoK6PJs8Z9M&disp=emb&realattid=ii_kst4p44f0',
    // thumbnailWidth: 300,
    // thumbnailHeight: 220,

    // caption: 'Boats (Jeshu John - designerspics.com)',
  },

  {
    src: 'https://mail.google.com/mail/u/0?ui=2&ik=213d62e8c1&attid=0.4&permmsgid=msg-f:1709236928983261863&th=17b86dee5506e2a7&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ9eU1LY8AcoXcIq5MydVxJaHwO79O-yQZix8gUAwLP1erkUKgVbedDEhHQBm0aBqeGQofTMa4R-XPrSNY4Ep16WRr7jn8XXA6N35soq8aE__Phz2LOTC2lp1wg&disp=emb&realattid=ii_kst4p46a2',
    thumbnail:
      'https://mail.google.com/mail/u/0?ui=2&ik=213d62e8c1&attid=0.4&permmsgid=msg-f:1709236928983261863&th=17b86dee5506e2a7&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ9eU1LY8AcoXcIq5MydVxJaHwO79O-yQZix8gUAwLP1erkUKgVbedDEhHQBm0aBqeGQofTMa4R-XPrSNY4Ep16WRr7jn8XXA6N35soq8aE__Phz2LOTC2lp1wg&disp=emb&realattid=ii_kst4p46a2',
    // thumbnailWidth: 300,
    // thumbnailHeight: 212,
  },
  {
    src: 'https://mail.google.com/mail/u/0?ui=2&ik=213d62e8c1&attid=0.3&permmsgid=msg-f:1709237166838931433&th=17b86e25b6545fe9&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ9m8USpn18_Tq-nhEijB5VU8bv2fU6xUx_HjYam26bdBdQXGTZ1jJFBDjwGkqLUFBdw0Sy4_-qCgxk13noENeJYa7BkwAICCcKeKDhT6vjzOhpE8BpgJ_X_bBk&disp=emb&realattid=ii_kst4jm7i5',
    thumbnail:
      'https://mail.google.com/mail/u/0?ui=2&ik=213d62e8c1&attid=0.3&permmsgid=msg-f:1709237166838931433&th=17b86e25b6545fe9&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ9m8USpn18_Tq-nhEijB5VU8bv2fU6xUx_HjYam26bdBdQXGTZ1jJFBDjwGkqLUFBdw0Sy4_-qCgxk13noENeJYa7BkwAICCcKeKDhT6vjzOhpE8BpgJ_X_bBk&disp=emb&realattid=ii_kst4jm7i5',
    // thumbnailWidth: 320,
    // thumbnailHeight: 220,
    // caption: 'After Rain (Jeshu John - designerspics.com)',
  },
  {
    src: 'https://mail.google.com/mail/u/0?ui=2&ik=213d62e8c1&attid=0.1&permmsgid=msg-f:1709237166838931433&th=17b86e25b6545fe9&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ-j3LLjzN3ajcVrhX3APmC_1G50om-zhL9lvWG5qH2V6ZpAjOBfzr51zuU9xtKXO_FKaEDB7ZcAo7a0WoGTT8DMNxqdSko-2Z3jmy1CYLtcE3oJxMm-2OB2TPo&disp=emb&realattid=ii_kst4jm582',
    thumbnail:
      'https://mail.google.com/mail/u/0?ui=2&ik=213d62e8c1&attid=0.1&permmsgid=msg-f:1709237166838931433&th=17b86e25b6545fe9&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ-j3LLjzN3ajcVrhX3APmC_1G50om-zhL9lvWG5qH2V6ZpAjOBfzr51zuU9xtKXO_FKaEDB7ZcAo7a0WoGTT8DMNxqdSko-2Z3jmy1CYLtcE3oJxMm-2OB2TPo&disp=emb&realattid=ii_kst4jm582',
    // thumbnailWidth: 340,
    // thumbnailHeight: 310,

    // caption: 'Boats (Jeshu John - designerspics.com)',
  },

  {
    src: 'https://mail.google.com/mail/u/0?ui=2&ik=213d62e8c1&attid=0.3&permmsgid=msg-f:1709237219884126928&th=17b86e321011d2d0&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ_GVRnF3bMGDBvYvWaRVwiGlIX_1GxGJ-G8hKkWXb5vRYy9LmqOcg2AXUuoWL1y1cTfkP6m26xowjlmU-uqKMTiVpC6k4pwi8rfFrBFZEhMmbybtoO8uxjxrh8&disp=emb&realattid=ii_kst4gq1c1',
    thumbnail:
      'https://mail.google.com/mail/u/0?ui=2&ik=213d62e8c1&attid=0.3&permmsgid=msg-f:1709237219884126928&th=17b86e321011d2d0&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ_GVRnF3bMGDBvYvWaRVwiGlIX_1GxGJ-G8hKkWXb5vRYy9LmqOcg2AXUuoWL1y1cTfkP6m26xowjlmU-uqKMTiVpC6k4pwi8rfFrBFZEhMmbybtoO8uxjxrh8&disp=emb&realattid=ii_kst4gq1c1',
    // thumbnailWidth: 340,
    // thumbnailHeight: 310,
  },
  {
    src: 'https://mail.google.com/mail/u/0?ui=2&ik=213d62e8c1&attid=0.5&permmsgid=msg-f:1709237219884126928&th=17b86e321011d2d0&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ87qt6626H0mmnjGDac73Wly8KT942GlTJKTrv5LDmQDBJiSOspZldCPnIhHjwBArlus0-OpEZPGHW-TKqGdLZizstfZ51UHHzQR6d3SaTJEbVmWSfC8ym0o3s&disp=emb&realattid=ii_kst4gq2q3',
    thumbnail:
      'https://mail.google.com/mail/u/0?ui=2&ik=213d62e8c1&attid=0.5&permmsgid=msg-f:1709237219884126928&th=17b86e321011d2d0&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ87qt6626H0mmnjGDac73Wly8KT942GlTJKTrv5LDmQDBJiSOspZldCPnIhHjwBArlus0-OpEZPGHW-TKqGdLZizstfZ51UHHzQR6d3SaTJEbVmWSfC8ym0o3s&disp=emb&realattid=ii_kst4gq2q3',
    // thumbnailWidth: 340,
    // thumbnailHeight: 310,
    // caption: 'After Rain (Jeshu John - designerspics.com)',
  },
  {
    src: 'https://mail.google.com/mail/u/0?ui=2&ik=213d62e8c1&attid=0.5&permmsgid=msg-f:1709237561598600423&th=17b86e819fd6e4e7&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ-incPaAEamnp0_gNRRtwlmdbTcHXzS7kQVT8jNVBBdePatGusKTUlXga0E6W7yjqSPryCdDmec5cb9sTZNaBh2e-yubcGzaTwv_tHvPZWb44Qg9qQwX2PwvmM&disp=emb&realattid=ii_kst46vmi0',
    thumbnail:
      'https://mail.google.com/mail/u/0?ui=2&ik=213d62e8c1&attid=0.5&permmsgid=msg-f:1709237561598600423&th=17b86e819fd6e4e7&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ-incPaAEamnp0_gNRRtwlmdbTcHXzS7kQVT8jNVBBdePatGusKTUlXga0E6W7yjqSPryCdDmec5cb9sTZNaBh2e-yubcGzaTwv_tHvPZWb44Qg9qQwX2PwvmM&disp=emb&realattid=ii_kst46vmi0',
    // thumbnailWidth: 340,
    // thumbnailHeight: 310,

    // caption: 'Boats (Jeshu John - designerspics.com)',
  },

  {
    src: 'https://mail.google.com/mail/u/0?ui=2&ik=213d62e8c1&attid=0.4&permmsgid=msg-f:1709237219884126928&th=17b86e321011d2d0&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ_N_wG9uJhvGH858F7IPAlimWTPNVr7nmJlUWJftUtuckefzWqQ4yfBykcMZEfB7SSRIq5YXXwFgBPyoC1hM5hpX70pToaArmbeea_7nfSYmqknq0Tiu9qnSHM&disp=emb&realattid=ii_kst4gq4n6',
    thumbnail:
      'https://mail.google.com/mail/u/0?ui=2&ik=213d62e8c1&attid=0.4&permmsgid=msg-f:1709237219884126928&th=17b86e321011d2d0&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ_N_wG9uJhvGH858F7IPAlimWTPNVr7nmJlUWJftUtuckefzWqQ4yfBykcMZEfB7SSRIq5YXXwFgBPyoC1hM5hpX70pToaArmbeea_7nfSYmqknq0Tiu9qnSHM&disp=emb&realattid=ii_kst4gq4n6',
    // thumbnailWidth: 340,
    // thumbnailHeight: 310,
  },
  {
    src: 'https://mail.google.com/mail/u/0?ui=2&ik=213d62e8c1&attid=0.2&permmsgid=msg-f:1709237561598600423&th=17b86e819fd6e4e7&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ9Pr4CLsNB3Gx1-pl-471_Cxt4d9JFBZRpZ58z-uUsEThqBX-_OXqlejAIpFilEkrEHgtT-ku8tMg6bcOSHpMbayvjNbE6HH6NVNtdlN5RindOaD-MjooWm9xQ&disp=emb&realattid=ii_kst46vrd6',
    thumbnail:
      'https://mail.google.com/mail/u/0?ui=2&ik=213d62e8c1&attid=0.2&permmsgid=msg-f:1709237561598600423&th=17b86e819fd6e4e7&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ9Pr4CLsNB3Gx1-pl-471_Cxt4d9JFBZRpZ58z-uUsEThqBX-_OXqlejAIpFilEkrEHgtT-ku8tMg6bcOSHpMbayvjNbE6HH6NVNtdlN5RindOaD-MjooWm9xQ&disp=emb&realattid=ii_kst46vrd6',
    // thumbnailWidth: 320,
    // thumbnailHeight: 174,
    // caption: 'After Rain (Jeshu John - designerspics.com)',
  },
  {
    src: 'https://mail.google.com/mail/u/0?ui=2&ik=213d62e8c1&attid=0.6&permmsgid=msg-f:1709237561598600423&th=17b86e819fd6e4e7&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ8k8VtV_c-jnSjryM8r8rI5EGDaicO3zK4Icjp5po-_nEFvy5wQg3I-dW_mJbh7IYY1nn1fCSJiMd2KeHnJEf8ht_2Lt__h6G2dlp61edo-Gp5oECruYXHhUoE&disp=emb&realattid=ii_kst46vnl1',
    thumbnail:
      'https://mail.google.com/mail/u/0?ui=2&ik=213d62e8c1&attid=0.6&permmsgid=msg-f:1709237561598600423&th=17b86e819fd6e4e7&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ8k8VtV_c-jnSjryM8r8rI5EGDaicO3zK4Icjp5po-_nEFvy5wQg3I-dW_mJbh7IYY1nn1fCSJiMd2KeHnJEf8ht_2Lt__h6G2dlp61edo-Gp5oECruYXHhUoE&disp=emb&realattid=ii_kst46vnl1',
    // thumbnailWidth: 320,
    // thumbnailHeight: 212,

    // caption: 'Boats (Jeshu John - designerspics.com)',
  },

  {
    src: 'https://mail.google.com/mail/u/0?ui=2&ik=213d62e8c1&attid=0.1&permmsgid=msg-f:1709237561598600423&th=17b86e819fd6e4e7&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ8qVbMEAHrGtYczUONIVU2kn2hUSC9KN0p_s4cU7BiJXuYmK6VzQSBLTFS2F3Ny9pNE9pu2r4AOW9Ubh8XrBu9Rti_Ps3qEHAdX9kqMKtum56IVDBZYuPZlYIg&disp=emb&realattid=ii_kst46voz3',
    thumbnail:
      'https://mail.google.com/mail/u/0?ui=2&ik=213d62e8c1&attid=0.1&permmsgid=msg-f:1709237561598600423&th=17b86e819fd6e4e7&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ8qVbMEAHrGtYczUONIVU2kn2hUSC9KN0p_s4cU7BiJXuYmK6VzQSBLTFS2F3Ny9pNE9pu2r4AOW9Ubh8XrBu9Rti_Ps3qEHAdX9kqMKtum56IVDBZYuPZlYIg&disp=emb&realattid=ii_kst46voz3',
    // thumbnailWidth: 720,
    // thumbnailHeight: 212,
  },

  {
    src: 'https://mail.google.com/mail/u/0?ui=2&ik=213d62e8c1&attid=0.3&permmsgid=msg-f:1709237561598600423&th=17b86e819fd6e4e7&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ_SECzaUUh55iuWBLTY7YA4P69JhMLmgjxIRcJx9I4vMm4PqxLsRERWjG5pRxswULA1wtKI49CuzeXDXshYjiunm8XMkmn5tdZ9i2iw2JXW59Uz_vebmzpd2dI&disp=emb&realattid=ii_kst46vpr4',
    thumbnail:
      'https://mail.google.com/mail/u/0?ui=2&ik=213d62e8c1&attid=0.3&permmsgid=msg-f:1709237561598600423&th=17b86e819fd6e4e7&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ_SECzaUUh55iuWBLTY7YA4P69JhMLmgjxIRcJx9I4vMm4PqxLsRERWjG5pRxswULA1wtKI49CuzeXDXshYjiunm8XMkmn5tdZ9i2iw2JXW59Uz_vebmzpd2dI&disp=emb&realattid=ii_kst46vpr4',
    // thumbnailWidth: 320,
    // thumbnailHeight: 212,
  },
  {
    src: 'https://mail.google.com/mail/u/0?ui=2&ik=213d62e8c1&attid=0.1&permmsgid=msg-f:1709237698666129203&th=17b86ea189b36733&view=att&disp=safe&realattid=f_kst4032w1',
    thumbnail:
      'https://mail.google.com/mail/u/0?ui=2&ik=213d62e8c1&attid=0.1&permmsgid=msg-f:1709237698666129203&th=17b86ea189b36733&view=att&disp=safe&realattid=f_kst4032w1',
    // thumbnailWidth: 320,
    // thumbnailHeight: 212,
  },
  {
    src: 'https://mail.google.com/mail/u/0?ui=2&ik=213d62e8c1&attid=0.5&permmsgid=msg-f:1709237698666129203&th=17b86ea189b36733&view=att&disp=safe&realattid=f_kst418ju3',
    thumbnail:
      'https://mail.google.com/mail/u/0?ui=2&ik=213d62e8c1&attid=0.5&permmsgid=msg-f:1709237698666129203&th=17b86ea189b36733&view=att&disp=safe&realattid=f_kst418ju3',
    // thumbnailWidth: 320,
    // thumbnailHeight: 212,
  },
];

const PhotoGallery = () => {
  return (
    <div
      style={{
        display: 'block',
        minHeight: '1px',
        width: '100%',
        border: '1px solid #ddd',
        overflow: 'auto',
      }}
    >
      {' '}
      <Gallery
        images={IMAGES}
        enableLightbox={true}
        backdropClosesModal
        enableImageSelection={false}
      />
    </div>
  );
};

export default PhotoGallery;
