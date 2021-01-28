import React, { useState } from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import Checkbox from './index';

const OuterWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SectionWrapper = styled.div`
  border: 1px solid rgba(243, 245, 250, 1);
  border-radius: 16px;
  box-shadow: 0 7px 11px 0 rgba(45, 45, 49, 0.1);
  display: flex;
  flex-direction: column;
  margin: 1rem;
  padding: 1rem;
`;

storiesOf('Checkbox', module).add('default', () => {
  function Parent({ children }: any): any {
    const [state, setState] = useState({ one: false, two: false });
    return <div>{children(state, setState)}</div>;
  }

  return (
    <OuterWrapper>
      <Parent>
        {(state: any, setState: any) => (
          <>
            <SectionWrapper>
              <Checkbox
                isChecked={state.one}
                onChange={() => setState({ one: !state.one })}
                name="checkbox-1"
                value={state.one}
              >
                Normal
              </Checkbox>
              <Checkbox
                isChecked={state.two}
                isDisabled
                onChange={() => setState({ value: !state.two })}
                name="checkbox-1"
                value={state.two}
              >
                Disabled
              </Checkbox>
            </SectionWrapper>
            <pre>Checkbox State in Story: {JSON.stringify(state)}</pre>
          </>
        )}
      </Parent>
    </OuterWrapper>
  );
});
