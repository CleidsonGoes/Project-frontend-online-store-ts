import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

type FormData = {
  fullName: string;
  email: string;
  cpf: string;
  phone: string;
  cep: string;
  address: string;
  paymentMethod: string;
};

function CheckoutPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    cpf: '',
    phone: '',
    cep: '',
    address: '',
    paymentMethod: '',
  });

  const [formErrors, setFormErrors] = useState<Partial<FormData>>({
    fullName: '',
    email: '',
    cpf: '',
    phone: '',
    cep: '',
    address: '',
    paymentMethod: '',
  });

  const REQUIRED_FIELD_ERROR = 'Campo obrigatório';

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      navigate('/');
    } else {
      setFormErrors(errors);
    }
  };

  const validateForm = () => {
    const errors: Partial<FormData> = {};
    if (formData.fullName.trim() === '') {
      errors.fullName = REQUIRED_FIELD_ERROR;
    }
    if (formData.email.trim() === '') {
      errors.email = REQUIRED_FIELD_ERROR;
    }
    if (formData.cpf.trim() === '') {
      errors.cpf = REQUIRED_FIELD_ERROR;
    }
    if (formData.phone.trim() === '') {
      errors.phone = REQUIRED_FIELD_ERROR;
    }
    if (formData.cep.trim() === '') {
      errors.cep = REQUIRED_FIELD_ERROR;
    }
    if (formData.address.trim() === '') {
      errors.address = REQUIRED_FIELD_ERROR;
    }
    if (formData.paymentMethod === '') {
      errors.paymentMethod = 'Selecione uma opção de pagamento';
    }
    return errors;
  };

  const paymentMethodInput = (
    <input
      type="radio"
      name="paymentMethod"
      value="boleto"
      checked={ formData.paymentMethod === 'boleto' }
      onChange={ handleInputChange }
      data-testid="ticket-payment"
      className={ formErrors.paymentMethod ? 'error' : '' }
    />
  );

  return (
    <div>
      <h1>Finalizar Compra</h1>
      <form onSubmit={ handleSubmit }>
        <div>
          <label htmlFor="fullName">Nome completo:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={ formData.fullName }
            onChange={ handleInputChange }
            data-testid="checkout-fullname"
            className={ formErrors.fullName ? 'error' : '' }
          />
          {formErrors.fullName && (
            <span className="error-msg" data-testid="error-msg">
              {formErrors.fullName}
            </span>
          )}
        </div>
        <div>
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={ formData.email }
            onChange={ handleInputChange }
            data-testid="checkout-email"
            className={ formErrors.email ? 'error' : '' }
          />
          {formErrors.email && (
            <span className="error-msg" data-testid="error-msg">
              {formErrors.email}
            </span>
          )}
        </div>
        {/* Repita o padrão acima para os outros campos do formulário */}
        <div>
          <label htmlFor="paymentMethod">Método de pagamento:</label>
          <div>
            <label>
              {paymentMethodInput}
              {' '}
              Boleto
            </label>
            {/* Repita o padrão acima para as outras opções de pagamento */}
          </div>
          {formErrors.paymentMethod && (
            <span className="error-msg" data-testid="error-msg">
              {formErrors.paymentMethod}
            </span>
          )}
        </div>

        <button type="submit" data-testid="checkout-btn">
          Finalizar Compra
        </button>
      </form>
    </div>
  );
}

export default CheckoutPage;
