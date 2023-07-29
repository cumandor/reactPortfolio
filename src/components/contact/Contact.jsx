import { useForm } from 'react-hook-form';
import './contact.css';

function Contact() {
const {register, handleSubmit} = useForm()
const onSubmit = (data) => {
    alert(`your name ${data.name}`)
}

  return (
    <section className="contact">
      <div className="container">
        <div className="contact__inner">
      
        <form onSubmit={handleSubmit(onSubmit)}>

                <input {...register('name')} type="text" />
            </form>

        </div>
      </div>
    </section>
  );
}

export default Contact;
