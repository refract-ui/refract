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

  label {
    align-self: flex-start;
    margin: 20px 0;
  }
`;

const StateLog = styled.pre`
  background-color: #444444;
  border-radius: 8px;
  color: #ffffff;
  padding: 10px;
`;

storiesOf('Checkbox', module)
  .add('default', () => {
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
  })
  .add('sizes', () => {
    function Parent({ children }: any): any {
      const [state, setState] = useState({
        smallBox: false,
        mediumBox: false,
        largeBox: false
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
                  isChecked={state.smallBox}
                  onChange={() =>
                    setState({ ...state, smallBox: !state.smallBox })
                  }
                  name="checkbox-1"
                  size="sm"
                  value={state.smallBox}
                >
                  Small
                </Checkbox>
                <Checkbox
                  isChecked={state.mediumBox}
                  onChange={() =>
                    setState({ ...state, mediumBox: !state.mediumBox })
                  }
                  name="checkbox-1"
                  size="md"
                  value={state.mediumBox}
                >
                  Medium / Default
                </Checkbox>
                <Checkbox
                  isChecked={state.largeBox}
                  onChange={() =>
                    setState({ ...state, largeBox: !state.largeBox })
                  }
                  name="checkbox-3"
                  size="lg"
                  value={state.largeBox}
                >
                  Large
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
