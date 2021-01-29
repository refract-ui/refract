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

const StateLog = styled.pre`
  background-color: #444444;
  border-radius: 8px;
  color: #ffffff;
  padding: 10px;
`;

storiesOf('Checkbox', module).add('default', () => {
  function Parent({ children }: any): any {
    const [state, setState] = useState({
      normalBox: false,
      disabledBox: false,
      errorBox: false
    });
    return <div>{children(state, setState)}</div>;
  }

  return (
    <OuterWrapper>
      <Parent>
        {(state: any, setState: any) => (
          <>
            <SectionWrapper>
              <Checkbox
                isChecked={state.normalBox}
                onChange={() =>
                  setState({ ...state, normalBox: !state.normalBox })
                }
                name="checkbox-1"
                value={state.normalBox}
              >
                Normal
              </Checkbox>
              <Checkbox
                isChecked={state.disabledBox}
                isDisabled
                onChange={() =>
                  setState({ ...state, disabledBox: !state.disabledBox })
                }
                name="checkbox-1"
                value={state.disabledBox}
              >
                Disabled
              </Checkbox>
              <Checkbox
                hasErrors
                isChecked={state.errorBox}
                onChange={() =>
                  setState({ ...state, errorBox: !state.errorBox })
                }
                name="checkbox-3"
                value={state.errorBox}
              >
                Has Errors
              </Checkbox>
              <StateLog>
                Checkbox State in Story: {JSON.stringify(state)}
              </StateLog>
            </SectionWrapper>
          </>
        )}
      </Parent>
    </OuterWrapper>
  );
});
