import { useReducer } from 'react';

import styles from './ShortenLinksForm.module.css';

import Button from '../UI/Button';

const initialLinkInput = {
  value: '',
  valid: false,
  touched: false,
};

const linkInputReducer = (prevState, action) => {
  switch (action.type) {
    case 'CHANGE_INPUT': {
      return {
        value: action.value,
        valid: action.value.trim().length > 0,
        touched: false,
      };
    }

    case 'BLUR_INPUT': {
      return {
        ...prevState,
        touched: true,
      };
    }

    default: {
      return initialLinkInput;
    }
  }
};

const ShortenLinksForm = props => {
  const [linkInput, dispatchLinkInput] = useReducer(
    linkInputReducer,
    initialLinkInput
  );

  const isInvalidLinkInput = linkInput.touched && !linkInput.valid;

  const changeLinkInputHandler = event => {
    dispatchLinkInput({
      type: 'CHANGE_INPUT',
      value: event.target.value,
    });
  };

  const blurLinkInputHandler = () => {
    dispatchLinkInput({ type: 'BLUR_INPUT' });
  };

  const submitFormHandler = event => {
    event.preventDefault();

    if (!linkInput.valid) {
      dispatchLinkInput({ type: 'BLUR_INPUT' });
      return;
    }

    props.onShortenLink(linkInput.value.trim());

    dispatchLinkInput({ type: 'RESET_INPUT' });
  };

  return (
    <form className={styles['shorten-link-form']} onSubmit={submitFormHandler}>
      <div
        className={`${styles['form-control']} ${
          isInvalidLinkInput && styles.invalid
        }`}
      >
        <input
          type="text"
          placeholder="Shorten a link here..."
          value={linkInput.value}
          onChange={changeLinkInputHandler}
          onBlur={blurLinkInputHandler}
        />

        {isInvalidLinkInput && <p>Please add a link</p>}
      </div>

      <Button type="submit" className="btn2 filled">
        Shorten It!
      </Button>
    </form>
  );
};

export default ShortenLinksForm;
