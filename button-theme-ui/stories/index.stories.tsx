import React from 'react';
import { Button } from '../index';
import { decorators } from '~/story-decorator-theme-ui';

export default { decorators }

export const buttons = () => (
  <>
    <Button mr={2}>Beep</Button>
    <Button mr={2} bg="divriots">Boop</Button>
    <Button mr={2} disabled>Disabled</Button>
  </>
);
