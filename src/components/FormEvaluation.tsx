import { useState, useEffect, ChangeEvent } from 'react';

type InputRadio = React.ChangeEvent<HTMLInputElement>;
type InputButton = React.MouseEvent<HTMLButtonElement>;
type ProductReview = {
  email: string;
  text: string;
  rating: string;
};

function FormEvaluation() {
  const [emailValue, setEmailValue] = useState('');
  const [check, setCheck] = useState('');
  const [inputTextArea, setInputTextArea] = useState('');
  const [reviews, setReviews] = useState<ProductReview[]>([]);
  const [emailInvalido, setEmailInvalido] = useState(false);
  const [formInvalido, setFormInvalido] = useState(false);

  const validationEmail = () => {
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regexEmail.test(emailValue);
  };

  const saveReviewsToLocalStorage = (updatedReviews: ProductReview[]) => {
    localStorage.setItem('product-reviews', JSON.stringify(updatedReviews));
  };

  useEffect(() => {
    const savedReviews = localStorage.getItem('product-reviews');
    if (savedReviews) {
      setReviews(JSON.parse(savedReviews));
    }
  }, [setReviews]);

  useEffect(() => {
    saveReviewsToLocalStorage(reviews);
  }, [reviews]);

  const handleSubmit = (event: InputButton) => {
    event.preventDefault();

    if (emailValue === '' || check === '' || inputTextArea === '') {
      setFormInvalido(true);
      return;
    }

    if (validationEmail()) setEmailInvalido(true);

    const newReview: ProductReview = {
      email: emailValue,
      text: inputTextArea,
      rating: check,
    };

    setReviews([...reviews, newReview]);

    setEmailValue('');
    setInputTextArea('');
    setFormInvalido(false);
  };

  const handleRadioChange = (event: InputRadio) => {
    setCheck(event.target.value);
  };

  const handleTextAreaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputTextArea(event.target.value);
  };

  const renderRadioButtons = () => {
    const ratings = ['1', '2', '3', '4', '5'];

    return ratings.map((rating, index) => (
      <div key={ rating }>
        <input
          required
          type="radio"
          id={ `star${rating}` }
          name="rating"
          value={ rating }
          data-testid={ `${index + 1}-rating` }
          checked={ check === rating }
          onChange={ handleRadioChange }
        />
        <label htmlFor={ `star${rating}` }>&#9733;</label>
      </div>
    ));
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
        <div className="rating">{renderRadioButtons()}</div>
        <br />
        <label htmlFor="">
          <textarea
            name="product-detail-evaluation"
            id="product-detail-evaluation"
            data-testid="product-detail-evaluation"
            value={ inputTextArea }
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
      {formInvalido && (
        <h3 data-testid="error-msg">Campos obrigatórios não preenchidos</h3>
      )}
      {!emailInvalido && !check ? (
        <h3 data-testid="error-msg">Campos inválidos</h3>
      ) : (
        reviews.map((review, index) => (
          <div key={ index }>
            <p data-testid="review-card-email">{`Email: ${review.email}`}</p>
            <p data-testid="review-card-rating">{`Rating: ${review.rating}`}</p>
            <p data-testid="review-card-evaluation">{`Comment: ${review.text}`}</p>
          </div>
        ))
      )}
    </>
  );
}

export default FormEvaluation;
