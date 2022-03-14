import { useContext, useState } from 'react';

import styles from './Navbar.module.css';

import logo from '../../../assets/logo.svg';

import Button from '../../UI/Button';
import MenuButton from '../../UI/MenuButton';
import UList from '../../UI/UList';

import WindowSizeContext from '../../../store/window-size-context';

const Navbar = props => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const windowSizeCtx = useContext(WindowSizeContext);

  const { width: winWidth } = windowSizeCtx.size;

  const toggleMenuHandler = () => {
    setIsMenuOpened(prevState => !prevState);
  };

  return (
    <header className={styles.navbar}>
      <img className={styles.logo} src={logo} alt="shortly-logo" />

      {winWidth <= 768 && (
        <MenuButton isOpened={isMenuOpened} onToggleMenu={toggleMenuHandler} />
      )}

      {(winWidth > 768 || isMenuOpened) && (
        <nav>
          <UList
            list={[
              { id: 'features', val: 'Features' },
              { id: 'pricing', val: 'Pricing' },
              { id: 'resources', val: 'Resources' },
            ]}
          />

          {winWidth <= 768 && <div className={styles['border-line']}></div>}

          <UList>
            <li>
              <Button className={styles.btn}>Login</Button>
            </li>
            <li>
              <Button className="btn1 filled">Sign Up</Button>
            </li>
          </UList>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
