import { useState } from 'react';

type InputRadio = React.ChangeEvent<HTMLInputElement>;
type InputButton = React.MouseEvent<HTMLButtonElement>;

function FormEvaluation() {
  const [reviews, setReviews] = useState(['']);
  const [emailValue, setEmailValue] = useState('');
  const [emailInvalido, setEmailInvalido] = useState(false);
  const [check, setCheck] = useState('');
  const [inputTextArea, setInputTextArea] = useState('');

  const validationEmail = () => {
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return regexEmail.test(emailValue);
  };

  if (validationEmail()) setEmailInvalido(true);

  const handleSubmit = (event:InputButton) => {
    event.preventDefault();

    const newReview = [emailValue, inputTextArea, check];

    setReviews([...reviews, newReview]);

    setEmailValue('');
    setInputTextArea('');
  };

  const handleRadioChange = (event:InputRadio) => {
    setCheck(event.target.value);
  };
  const handleTextAreaChange = (event) => {
    setInputTextArea(event.target.value);
  };

  return (
    <>
      <form action="">
        <label htmlFor="">
          <input
            type="email"
            placeholder="digite seu e-mail"
            data-testid="product-detail-email"
            required
            value={ emailValue }
            onChange={ (event) => setEmailValue(event.target.value) }
          />
        </label>
        <div className="rating">
          <input
            required
            type="radio"
            id="star5"
            name="rating"
            value="5"
            data-testid="5-rating"
            checked={ check === '5' }
            onChange={ handleRadioChange }
          />
          <label htmlFor="star5">&#9733;</label>
          <input
            required
            type="radio"
            id="star4"
            name="rating"
            value="4"
            data-testid="4-rating"
            checked={ check === '4' }
            onChange={ handleRadioChange }
          />
          <label htmlFor="star4">&#9733;</label>
          <input
            required
            type="radio"
            id="star3"
            name="rating"
            value="3"
            data-testid="3-rating"
            checked={ check === '3' }
            onChange={ handleRadioChange }
          />
          <label htmlFor="star3">&#9733;</label>
          <input
            required
            type="radio"
            id="star2"
            name="rating"
            value="2"
            data-testid="2-rating"
            checked={ check === '2' }
            onChange={ handleRadioChange }
          />
          <label htmlFor="star2">&#9733;</label>
          <input
            required
            type="radio"
            id="star1"
            name="rating"
            value="1"
            data-testid="1-rating"
            checked={ check === '1' }
            onChange={ handleRadioChange }
          />
          <label htmlFor="star1">&#9733;</label>
        </div>
        <br />
        <label htmlFor="">
          <textarea
            name=""
            id=""
            data-testid="product-detail-evaluation"
            onChange={ handleTextAreaChange }
          />
        </label>
        <label htmlFor="enviar">
          <button
            id="enviar"
            value="Enviar"
            data-testid="submit-review-btn"
            onClick={ handleSubmit }
          >
            Enviar
          </button>
        </label>
      </form>
      {
        !emailInvalido && !check ? (<h3 data-testid="error-msg">Campos inválidos</h3>)
          : reviews.map((review, index) => (
            <div key={ index }>
              <p data-testid="review-card-email">
                Email:
                {' '}
                {review}
              </p>
              <p data-testid="review-card-rating">
                Rating:
                {' '}
                {review}
              </p>
              <p data-testid="review-card-evaluation">
                Comment:
                {' '}
                {review}
              </p>
            </div>
          ))
        }
    </>
  );
}

export default FormEvaluation;