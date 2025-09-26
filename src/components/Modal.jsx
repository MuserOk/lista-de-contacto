export default function Modal() {
    return(
        <div id="modal" className="modal">
            <div className="modal-content">
                <span className="close">&times;</span>
                <h2>Agregar Contacto</h2>
            <form id="contactForm">
                <label htmlFor="name">Nombre:</label>
                <input type="text" id="name" name="name" required/>
                <label htmlFor="email">Correo:</label>
                <input type="email" id="email" name="email" required/>
                <label htmlFor="phone">Teléfono:</label>
                <input type="text" id="phone" name="phone" required/>
                <button type="submit">Agregar</button>
            </form>
        </div>
    </div>
    )
};
