import React, { useContext } from 'react';

import { useEffectOnce } from 'hooks';

import { ModalManagerContext } from 'contexts/modal-manager';

import WelcomeMessage from 'components/modals/welcome';

export default function Home() {
  const modalManager = useContext(ModalManagerContext);

  useEffectOnce(async () => {
    await modalManager.showModal({
      title: 'Welcome Message',
      message: <WelcomeMessage />,
      okButton: {
        enabled: false,
      },
      cancelButton: {
        enabled: false,
      },
    });
  });

  return <section>Home</section>;
}
