import React from 'react';
import { useForm } from 'react-hook-form';
import './App.css';

const App = () => {
    const { handleSubmit, register, errors } = useForm();
    const onSubmit = values => console.log(values);

  return (
    <div className="decjuba_form">
        <section className="perference">
            <h1>BECOME A DECJUBA INSIDER</h1>
            <p>As an INSIDER, be the first to see our new products, the biggest & best sales + so much MORE! PLUS! Shop with 10% OFF ALWAYS</p>
            <form className="perference__form">
                <label><input type="radio" name="womens" /> Women's</label>
                <label><input type="radio" name="kids"/> Kids</label>
                <label><input type="radio" name="both" /> Both</label>
                <button>Join Us</button>
                <label><input type="checkbox" name="privacypolicy"/> I accept Privacy Policy</label>
            </form>
        </section>

        <section className="sign_up">
            <h1>YOU'RE AN INSIDER!</h1>
            <p>your email is on its way so</p>
            <h2>Let's get personal...</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>First Name</label>
                <input name="firstname" ref={register({ required: true, maxLength: 20 })} />
                {errors.firstname && <span>This field is required</span>}

                <label>Last Name</label>
                <input name="lastname" ref={register({ required: true, maxLength: 20 })} />
                {errors.lastname && <span>This field is required</span>}

                <label>Country</label>
                <input name="country" ref={register} />

                <label>D.O.B</label>
                <input name="dateofbirth" ref={register} />

                <label>Postcode</label>
                <input name="postcode" ref={register} />

                <button type="submit">Join Us</button>
                <button type="cancel">No Thanks</button>
            </form>
        </section>
    </div>
  );
}

export default App;
