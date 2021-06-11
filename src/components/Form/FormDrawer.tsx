import * as React from 'react';

import { Button } from '../Elements/Button';
import { Drawer } from '../Elements/Drawer';

type FormDrawerProps = {
  isDone: boolean;
  triggerButton: React.ReactElement;
  submitButton: React.ReactElement;
  title: string;
  children: React.ReactNode;
};

export const FormDrawer = ({
  title,
  children,
  isDone,
  triggerButton,
  submitButton,
}: FormDrawerProps) => {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    if (isDone) {
      setVisible(false);
    }
  }, [isDone]);

  return (
    <>
      {React.cloneElement(triggerButton, { onClick: () => setVisible(true) })}
      <Drawer
        isOpen={visible}
        onClose={() => setVisible(false)}
        title={title}
        renderFooter={() => (
          <>
            <Button variant="inverse" size="sm" onClick={() => setVisible(false)}>
              Cancel
            </Button>
            {submitButton}
          </>
        )}
      >
        {children}
      </Drawer>
    </>
  );
};