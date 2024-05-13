import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter bgColor='dark' className='text-center text-lg-start text-muted'>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary' icon='gem' className='me-3' />
                БрГТУ
              </h6>
              <p>
              Кафедра интеллектуальных информационных технологий
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Страницы</h6>
              <p>
                <a href='/' className='text-reset'>
                  Главная
                </a>
              </p>
              <p>
                <a href='/news' className='text-reset'>
                  Новости
                </a>
              </p>
              <p>
                <a href='/schedule' className='text-reset'>
                Рассписание
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Контакты</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                ул. Московская 267, Брест, 224017
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                <a href='https://www.bstu.by' className='text-reset'>
                bstu.by
                </a>
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> 8 0162 32-17-32
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 КИИТ:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          KIIT.by
        </a>
      </div>
    </MDBFooter>
  );
}