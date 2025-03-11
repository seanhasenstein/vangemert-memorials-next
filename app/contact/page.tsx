'use client';

import { useActionState, useState, useTransition } from 'react';
import styled from 'styled-components';

import StoreInformation from '@/components/StoreInformation';
import PhoneInput from '@/components/PhoneInput';

import { sendContactMessage } from '@/lib/actions';

export default function Contact() {
  const [state, formAction] = useActionState(sendContactMessage, null);
  const [isPending, startTransition] = useTransition();
  const [phoneNumber, setPhoneNumber] = useState(state?.phone || '');

  const handleSubmit = (formData: FormData) => {
    formData.set('phone', phoneNumber);

    startTransition(() => {
      formAction(formData);
    });
  };

  return (
    <ContactStyles>
      <div className="grid">
        <div className="grid-item-1">
          <h2>Contact Us</h2>
          <p>
            How can we help you? Let us know if you have any questions or if you
            would like to schedule an appointment.
          </p>
        </div>
        <div className="grid-item-2">
          <h3>
            <span>Please fill out this form</span>
          </h3>
          <form action={handleSubmit}>
            <div className="form-item">
              <label htmlFor="customer">Your name</label>
              <input
                defaultValue={state?.customerName}
                id="customerName"
                name="customerName"
                required
              />
            </div>
            <div className="grid-col-2">
              <div className="form-item">
                <label htmlFor="email">Email address</label>
                <input
                  defaultValue={state?.email}
                  type="email"
                  id="email"
                  name="email"
                  required
                />
              </div>
              <PhoneInput
                name="phone"
                value={state?.phone}
                onChange={setPhoneNumber}
                required
                className="form-item"
              />
            </div>
            <div className="form-item">
              <label htmlFor="message">How can we help you?</label>
              <textarea
                defaultValue={state?.message}
                id="message"
                name="message"
                required
              />
            </div>
            <button type="submit" disabled={isPending}>
              {isPending ? <span className="spinner" /> : 'Send your message'}
            </button>
            {!!state?.error && <p className="server-error">{state.error}</p>}
          </form>
        </div>
        <div className="grid-item-3">
          <CustomStoreInfo />
        </div>
      </div>
    </ContactStyles>
  );
}

const ContactStyles = styled.div`
  padding: 5rem 1.5rem;

  h2 {
    margin: 0 0 1.5rem;
  }

  p {
    margin: 0;
    line-height: 1.65;
  }

  .grid {
    margin: 0 auto;
    max-width: 1024px;
    width: 100%;
    display: grid;
    grid-template-areas:
      'grid-1 grid-3'
      'grid-2 grid-3';
    gap: 0 4rem;
    align-items: center;
  }

  .grid-item-1,
  .grid-item-2 {
    max-width: 28rem;
    width: 100%;
  }

  .grid-item-1 {
    grid-area: grid-1;
  }

  .grid-item-2 {
    margin: 1.5rem 0 0;
    grid-area: grid-2;

    h3 {
      display: none;
    }
  }

  .grid-item-3 {
    grid-area: grid-3;
    margin-left: auto;
    max-width: 22rem;
    width: 100%;
  }

  .grid-col-2 {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(11rem, 1fr));
    gap: 0 1rem;
  }

  .form-item {
    margin: 1rem 0 0;
  }

  label {
    margin: 0 0 0.375rem;
    display: block;
    color: #4b5563;
    font-family: 'Inter', sans-serif;
    font-size: 0.8125rem;
    font-weight: 500;
    line-height: 1.25rem;

    &:first-of-type {
      margin-top: 0;
    }
  }

  input,
  textarea {
    display: block;
    width: 100%;
    appearance: none;
    background-color: #fff;
    border: 1px solid #d1d5db;
    border-radius: 0.375rem;
    padding: 0.625rem 0.75rem;
    font-family: 'Inter', sans-serif;
    font-size: 0.875rem;
    line-height: 1.5;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    border-radius: 0.25rem;

    &:focus {
      outline: 2px solid transparent;
      outline-offset: 2px;
      border-color: #4f46e5;
      box-shadow: rgb(255, 255, 255) 0px 0px 0px 0px, #4338ca 0px 0px 0px 1px,
        rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
    }
  }

  textarea {
    resize: vertical;
    min-height: 12rem;
  }

  button {
    margin: 1.25rem auto 0;
    padding: 0 1.75rem;
    position: relative;
    height: 42px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Inter', sans-serif;
    font-size: 0.875rem;
    font-weight: 500;
    background-color: #377e96;
    color: #fff;
    border: 1px solid #2c6679;
    box-shadow: inset 0 1px 1px #4ba0bd;
    letter-spacing: 0.025em;
    border-radius: 0.25rem;
    transition: all 250ms ease-in-out;

    &:hover {
      background-color: #3c8aa4;
    }

    &:focus {
      outline: 2px solid transparent;
      outline-offset: 2px;
    }

    &:focus-visible {
      box-shadow: rgb(255, 255, 255) 0px 0px 0px 2px, #4338ca 0px 0px 0px 4px,
        rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
    }
  }

  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }

  .spinner:before {
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 20px;
    margin-top: -10px;
    margin-left: -10px;
    border-radius: 50%;
    border-top: 2px solid #fff;
    border-right: 2px solid transparent;
    animation: spinner 0.6s linear infinite;
  }

  .server-error {
    margin: 1rem 0 0;
    display: flex;
    align-items: center;
    color: #b91c1c;
    font-size: 0.8125rem;
    font-weight: 500;
    line-height: 1.25rem;
  }

  @media (max-width: 767px) {
    .grid {
      grid-template-areas:
        'grid-1'
        'grid-3'
        'grid-2';
    }

    .grid-item-1,
    .grid-item-2 {
      max-width: unset;
    }

    .grid-item-2 {
      margin: 0;

      h3 {
        margin: 0 0 2rem;
      }
    }

    .grid-item-2 h3,
    .store-info h3 {
      display: block;
      position: relative;

      span {
        padding: 0 1.25rem 0 0;
        position: relative;
        background-color: #f9faf9;
        z-index: 200;
      }

      &::after {
        content: '';
        position: absolute;
        left: 0;
        top: 0.75rem;
        width: 100%;
        height: 1px;
        background-color: #d1d5db;
        z-index: 10;
      }
    }

    .grid-item-3 {
      margin-left: 0;
      max-width: unset;
    }
  }

  @media (max-width: 500px) {
    input,
    textarea {
      font-size: 1rem;
    }
  }
`;

const CustomStoreInfo = styled(StoreInformation)`
  @media (max-width: 767px) {
    .store-info {
      margin: 4rem 0;
      padding: 0;
      background-color: transparent;
      border: none;
      box-shadow: none;
    }
  }
`;
