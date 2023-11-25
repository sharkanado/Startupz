import React, {Dispatch, SetStateAction, useState} from 'react';
import {useWindowSize} from 'react-use';
import {IoClose, IoMenu} from 'react-icons/io5';
import {AnimatePresence, motion} from 'framer-motion';
import {Button} from '@/components/UI';

import style from './Navbar.module.scss';

import startupzLogo from '/img/startupz_logo.svg';

const Navbar = () => {
  const {width} = useWindowSize();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return width > 768 ? (
    <div className={style.navbar}>
      <div className={style.navbar__inner_wrapper}>
        <img src={startupzLogo} />
        <div className={style.navbar__links_wrapper}>
          <a href="#our-works">Startups</a>
          <a href="#contact">Contact</a>
          <div>
            <Button variant="outlined">Work with us!</Button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>
      <div className={style.navbar}>
        <img height="30px" src={startupzLogo} />
        <div>
          <Button
            variant="icon"
            onClick={() => setIsMenuOpen(true)}
            className={style.navbar__mobile_menu_control}
          >
            <IoMenu size={30} />
          </Button>
        </div>
      </div>
      <MobileMenuDrawer isOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </div>
  );
};

export default Navbar;

const MobileMenuDrawer = ({
  isOpen,
  setIsMenuOpen,
}: {
  isOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div>
      <AnimatePresence>
        {isOpen ? (
          <div>
            <motion.div
              initial={{y: '100%'}}
              animate={{y: 0}}
              exit={{y: '100%'}}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 20,
                duration: 0.3,
              }}
              className={style.mobile_menu}
            >
              <div className={style.mobile_menu__topbar}>
                <img height="40px" src={startupzLogo} />
                <div>
                  <Button variant="icon" onClick={() => setIsMenuOpen(false)}>
                    <IoClose size={30} />
                  </Button>
                </div>
              </div>
              <div className={style.mobile_menu__links_wrapper}>
                <a href="#our-works">Startups</a>
                <a href="#contact">Contact</a>
                <div>
                  <Button
                    className={style.mobile_menu__cta_button}
                    variant="outlined"
                  >
                    Work with us!
                  </Button>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 0.4}}
              exit={{opacity: 0}}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 20,
                duration: 0.3,
              }}
              className={style.mobile_menu__overlay}
              onClick={() => setIsMenuOpen(false)}
            />
          </div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};
