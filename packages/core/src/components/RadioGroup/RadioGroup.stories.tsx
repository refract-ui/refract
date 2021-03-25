import React, { useState } from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import RadioGroup from './index';
import Radio from '../Radio/index';

const OuterWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const NestedBoxes = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
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
  }
`;

const StateLog = styled.pre`
  background-color: #444444;
  border-radius: 8px;
  color: #ffffff;
  padding: 10px;
`;

storiesOf('RadioGroup', module)
  .add('Default / States', () => {
    function Parent({ children }: any): any {
      const [state, setState] = useState({
        selectedItem1: null,
        selectedItem2: null,
        selectedItem3: null,
        selectedItem4: 'radio-4-2-readonly'
      });
      return <div>{children(state, setState)}</div>;
    }

    return (
      <OuterWrapper>
        <Parent>
          {(state: any, setState: any) => (
            <>
              <SectionWrapper>
                <RadioGroup
                  onChange={evt =>
                    setState({ ...state, selectedItem1: evt.target.name })
                  }
                >
                  <Radio name="radio-1-1-normal">Normal</Radio>
                  <Radio name="radio-1-2-normal">Disabled</Radio>
                  <Radio name="radio-1-3-normal">Has Errors</Radio>
                </RadioGroup>
                <RadioGroup
                  onChange={evt =>
                    setState({ ...state, selectedItem2: evt.target.name })
                  }
                  isDisabled
                >
                  <Radio name="radio-2-1-disabled">Normal</Radio>
                  <Radio name="radio-2-2-disabled">Disabled</Radio>
                  <Radio name="radio-2-3-disabled">Has Errors</Radio>
                </RadioGroup>
                <RadioGroup
                  onChange={evt =>
                    setState({ ...state, selectedItem3: evt.target.name })
                  }
                  hasErrors
                >
                  <Radio name="radio-3-1-has-errors">Normal</Radio>
                  <Radio name="radio-3-2-has-errors">Disabled</Radio>
                  <Radio name="radio-3-3-has-errors">Has Errors</Radio>
                </RadioGroup>
                <RadioGroup>
                  <Radio
                    isReadOnly
                    onChange={evt =>
                      setState({ ...state, selectedItem4: evt.target.name })
                    }
                    name="radio-4-1-readonly"
                  >
                    Read Only
                  </Radio>
                  <Radio
                    isReadOnly
                    isChecked
                    onChange={evt =>
                      setState({ ...state, selectedItem2: evt.target.name })
                    }
                    name="radio-4-2-readonly"
                  >
                    Read Only Checked
                  </Radio>
                </RadioGroup>
                <StateLog>
                  Radio State in Story: {JSON.stringify(state, undefined, 2)}
                </StateLog>
              </SectionWrapper>
            </>
          )}
        </Parent>
      </OuterWrapper>
    );
  })
  .add('Sizes', () => {
    function Parent({ children }: any): any {
      const [state, setState] = useState({
        smallSelectedIndex: null,
        mediumSelectedIndex: null,
        lgSelectedIndex: null
      });
      return <div>{children(state, setState)}</div>;
    }

    return (
      <OuterWrapper>
        <Parent>
          {(state: any, setState: any) => (
            <>
              <SectionWrapper>
                <RadioGroup
                  onChange={evt =>
                    setState({
                      ...state,
                      smallSelectedIndex: evt.target.name
                    })
                  }
                  size="sm"
                >
                  <Radio name="radio-1-sm">Small 1</Radio>
                  <Radio name="radio-2-sm">Small 2</Radio>
                </RadioGroup>
                <RadioGroup
                  onChange={evt =>
                    setState({
                      ...state,
                      smallSelectedIndex: evt.target.name
                    })
                  }
                  size="md"
                >
                  <Radio name="radio-1-md">Medium / Default 1</Radio>
                  <Radio name="radio-2-md">Medium / Default 2</Radio>
                </RadioGroup>
                <RadioGroup
                  onChange={evt => {
                    setState({ ...state, lgSelectedIndex: evt.target.name });
                  }}
                  size="lg"
                >
                  <Radio name="radio-1-lg">Large1</Radio>
                  <Radio name="radio-2-lg">Large2</Radio>
                </RadioGroup>
                <StateLog>
                  Radio State in Story: {JSON.stringify(state, undefined, 2)}
                </StateLog>
              </SectionWrapper>
            </>
          )}
        </Parent>
      </OuterWrapper>
    );
  });
