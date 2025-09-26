export default function ContactItem({ contact, onDelete }) {
  return (
    <li className="contact">
      <div>
        <span className="name">{contact.name}</span>
        <span className="details">
          {contact.email} - {contact.phone}
        </span>
      </div>
      <button onClick={() => onDelete(contact.id)}>Eliminar</button>
    </li>
  );
}
