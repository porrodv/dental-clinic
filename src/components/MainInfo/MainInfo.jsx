import CustomButton from '../CustomButton/CustomButton';

import './styles.css';

export default function MainInfo () {
  return (
    <>
      <main className='main'>
        <img
          src='/public/doctor_body.png'
          alt='doctor body background'
          className='main__background'
        />
        <section className='main__content'>
          <div className='main__left'>
            <div className='main__title title__color'>
              <h2>Clínica</h2>
              <h1 className='primary'>Dental Cayetano</h1>
            </div>
            <article className='main__info'>
              <p>
                Lorem iarticlesum dolor sit amet consectetur adipisicing elit.
                Reprehenderit ut modi at minima soluta asperiores distinctio
                nemo impedit vel, deserunt molestias optio. Commodi, iusto ea
                eaque laborum vero nemo tempora! lore
              </p>
              <article className='main__extra'>
                <CustomButton text='Contáctanos' link='#' id='main__contact' animationStyle={1} />
                <div className='main__schedule'>
                  <i className='fa-solid fa-stopwatch' />
                  <h4 className='primary'>Horarios de atención</h4>
                  <h6 className='secondary'>Lun-Vier | 8:00 - 21:00</h6>
                </div>
              </article>
            </article>
          </div>
          <div className='main__right'>
            <img
              src='public/doctor1.png'
              alt='generic doctor'
              className='main__img'
            />
          </div>
        </section>
      </main>

      <section className='about'>
        <div className='abbout__left'>
          <img
            src='public/doctor2.png'
            alt='generic doctor'
            className='main__img'
          />
        </div>
        <div className='about__right'>
          <div className='about__title title__color'>
            <h2>Acerca de</h2>
            <h1 className='primary'>Nosotros</h1>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dicta
            facilis a eum est minus velit quisquam sed deserunt nesciunt id,
            delectus ad quaerat accusamus nam porro quasi dolorem veniam.
          </p>
          <CustomButton text='Leer más' link='#' id='about__more' animationStyle={2} />
          <aside className='about__colab'>
            <div className='title__color'>
              <h1 className='primary'>Colaboradores</h1>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
