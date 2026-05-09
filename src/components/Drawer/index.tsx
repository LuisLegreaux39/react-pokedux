import './theme.css'
import React, { FC, PropsWithChildren, useState, ReactNode } from 'react'
import { Drawer } from '@base-ui/react/drawer';
import styles from './index.module.css';
import { useSelector } from 'react-redux';
import { pokemonDetailsSelector } from '../../state/Pokemons';
import DrawerContent from './DrawerContent';

interface Props {
  renderTrigger: (data: { open: () => void }) => ReactNode;
}

const DrawerWrapper: FC<PropsWithChildren<Props>> = ({ renderTrigger }) => {
  const [isOpen, setOpen] = useState(false);
  return <Drawer.Root open={isOpen} swipeDirection="right" modal={false} disablePointerDismissal>
    {renderTrigger({ open: () => setOpen(true) })}
    <Drawer.Portal>
      <Drawer.Viewport className={styles.Viewport}>
        <Drawer.Popup className={styles.Popup}>
          <DrawerContent />
          <div className={styles.Actions}>
            <Drawer.Close onClick={() => setOpen(!isOpen)} className={styles.Button}>Close</Drawer.Close>
          </div>
        </Drawer.Popup>
      </Drawer.Viewport>
    </Drawer.Portal>
  </Drawer.Root>
}

export default DrawerWrapper