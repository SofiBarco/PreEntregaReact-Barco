import React from 'react';

const Nosotros = () => {
    return (
        <>
            <main className="container Home">
                <section className="nosotros">
                    <h2 className="shadow p-3 mb-5 bg-body rounded text-center">¿Quiénes somos?</h2>
                    <p>
                        Somos Farmacia La Guardia, una empresa familiar, y trabajamos para brindar lo mejor de nosotros, lo cual nos ha permitido
                        ganar la confianza y estima de numerosos clientes en Catamarca Capital.
                        Nuestro servicio implica el trabajo y la dedicación de personal comprometido a cumplir
                        con sus requerimientos en lo que respecta a la distribución de medicamentos.
                    </p>
                    <h2 className="shadow p-3 mb-5 bg-body rounded text-center">¿Qué hacemos?</h2>
                    <p>
                        En Farmacia La Guardia ofrecemos la más variada oferta en venta de medicamentos, así como en todo lo referente a:
                    </p>
                    <ul>
                        <li>
                            Preparados magistrales.
                        </li>
                        <li>
                            Accesorios y descartables.
                        </li>
                        <li>
                            Perfumería y regalería.
                        </li>
                        <li>
                            Insumos de ortopedia.
                        </li>
                        <li>
                            Accesorios hospitalarios.
                        </li>
                        <li>
                            Nos caracterizamos por ofrecer una atención responsable y personalizada. No dude en contactarnos,
                            estaremos encantados de atenderlo.
                        </li>
                    </ul>
                </section>
            </main>
        </>
    );
}

export default Nosotros;
