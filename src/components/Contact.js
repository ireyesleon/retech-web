import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [btnText, setBtnText] = useState('Enviar');
  const [fadeIn, setFadeIn] = useState(false);
  const form = useRef();

  useEffect(() => {
    setFadeIn(true); // Dispara animación al montar
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zrhgbbw', 'template_pclyt0o', form.current, 'ueI3w2L6G7N_KAGOS')
      .then((result) => {
        setBtnText('¡Correo enviado!');
        setTimeout(() => {
          setBtnText('Enviar');
        }, 5000);
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    form.current.reset();
  };

  return (
    <section className={`py-5 main bg-light ${fadeIn ? 'fade-in' : ''}`}>
      <h2 className="text-center fw-bold mb-4">Contáctanos</h2>
      <p className="text-center mb-5">
        ¿Tienes dudas o quieres más información? Escríbenos y te responderemos a la brevedad.
      </p>
      <div className="row justify-content-center">
        <form 
          onSubmit={sendEmail} 
          ref={form} 
          className="col-12 col-md-6 p-4 bg-white rounded shadow contact-form"
        >
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Correo electrónico</label>
            <input 
              type="email" 
              name='email_address' 
              required 
              className="form-control" 
              id="email" 
              placeholder="nombre@ejemplo.com" 
            />
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Nombre completo</label>
            <input 
              type="text" 
              name="name" 
              required 
              className="form-control" 
              id="name" 
              placeholder="Ej. Fox Mulder" 
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Mensaje</label>
            <textarea 
              className="form-control" 
              required 
              name="message" 
              id="message" 
              rows="5" 
              placeholder="Escribe tu mensaje aquí"
            ></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary btn-lg px-5">
              {btnText}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
