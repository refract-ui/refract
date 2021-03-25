import React, { useState } from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import Radio from './index';
import RadioGroup from '../RadioGroup/index';

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

storiesOf('Radio', module)
  .add('Default / States', () => {
    function Parent({ children }: any): any {
      const [state, setState] = useState({
        selectedItem1: null,
        selectedItem2: 'radio-2-2-readonly'
      });
      return <div>{children(state, setState)}</div>;
    }

    return (
      <OuterWrapper>
        <Parent>
          {(state: any, setState: any) => (
            <>
              <SectionWrapper>
                <RadioGroup>
                  <Radio
                    onChange={evt =>
                      setState({ ...state, selectedItem1: evt.target.name })
                    }
                    name="radio-1-1-normal"
                  >
                    Normal
                  </Radio>
                  <Radio
                    isDisabled
                    onChange={evt =>
                      setState({ ...state, selectedItem1: evt.target.name })
                    }
                    name="radio-1-2-disabled"
                  >
                    Disabled
                  </Radio>
                  <Radio
                    hasErrors
                    onChange={evt =>
                      setState({ ...state, selectedItem1: evt.target.name })
                    }
                    name="radio-1-3-has-errors"
                  >
                    Has Errors
                  </Radio>
                </RadioGroup>
                <RadioGroup>
                  <Radio
                    isReadOnly
                    onChange={evt =>
                      setState({ ...state, selectedItem2: evt.target.name })
                    }
                    name="radio-2-1-readonly"
                  >
                    Read Only
                  </Radio>
                  <Radio
                    isReadOnly
                    isChecked
                    onChange={evt =>
                      setState({ ...state, selectedItem2: evt.target.name })
                    }
                    name="radio-2-2-readonly"
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
                <RadioGroup>
                  <Radio
                    onChange={evt =>
                      setState({
                        ...state,
                        smallSelectedIndex: evt.target.name
                      })
                    }
                    name="radio-1-sm"
                    size="sm"
                  >
                    Small 1
                  </Radio>
                  <Radio
                    onChange={evt =>
                      setState({
                        ...state,
                        smallSelectedIndex: evt.target.name
                      })
                    }
                    name="radio-2-sm"
                    size="sm"
                  >
                    Small 2
                  </Radio>
                </RadioGroup>
                <RadioGroup>
                  <Radio
                    onChange={evt =>
                      setState({
                        ...state,
                        mediumSelectedIndex: evt.target.name
                      })
                    }
                    name="radio-1-md"
                    size="md"
                  >
                    Medium / Default 1
                  </Radio>
                  <Radio
                    onChange={evt =>
                      setState({
                        ...state,
                        mediumSelectedIndex: evt.target.name
                      })
                    }
                    name="radio-2-md"
                    size="md"
                  >
                    Medium / Default 2
                  </Radio>
                </RadioGroup>
                <RadioGroup>
                  <Radio
                    onChange={evt => {
                      setState({ ...state, lgSelectedIndex: evt.target.name });
                    }}
                    name="radio-1-lg"
                    size="lg"
                  >
                    Large1
                  </Radio>
                  <Radio
                    onChange={evt => {
                      setState({ ...state, lgSelectedIndex: evt.target.name });
                    }}
                    name="radio-2-lg"
                    size="lg"
                  >
                    Large2
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
  .add('Colors & Icons', () => {
    function Parent({ children }: any): any {
      const [state, setState] = useState({
        firstBox: false,
        secondBox: false,
        thirdBox: false,
        fourthBox: false,
        fifthBox: false,
        sixthBox: false
      });
      return <div>{children(state, setState)}</div>;
    }

    return (
      <OuterWrapper>
        <Parent>
          {(state: any, setState: any) => (
            <>
              <SectionWrapper>
                <Radio
                  iconColor="orange"
                  isChecked={state.firstBox}
                  onChange={() =>
                    setState({ ...state, firstBox: !state.firstBox })
                  }
                  name="radio-1"
                  value={state.firstBox}
                >
                  First
                </Radio>
                <Radio
                  checkedColor="#cccccc"
                  iconName="Close"
                  isChecked={state.secondBox}
                  onChange={() =>
                    setState({ ...state, secondBox: !state.secondBox })
                  }
                  name="radio-1"
                  value={state.secondBox}
                >
                  Second
                </Radio>
                <Radio
                  iconName="Menu"
                  iconColor="violet"
                  isChecked={state.thirdBox}
                  onChange={() =>
                    setState({ ...state, thirdBox: !state.thirdBox })
                  }
                  name="radio-3"
                  value={state.thirdBox}
                >
                  Third
                </Radio>
                <Radio
                  checkedColor="yellow"
                  iconName="Person"
                  isChecked={state.fourthBox}
                  onChange={() =>
                    setState({ ...state, fourthBox: !state.fourthBox })
                  }
                  name="radio-1"
                  value={state.fourthBox}
                >
                  Fourth
                </Radio>
                <Radio
                  checkedColor="chartreuse"
                  iconName="Dollar"
                  iconColor="violet"
                  isChecked={state.fifthBox}
                  onChange={() =>
                    setState({ ...state, fifthBox: !state.fifthBox })
                  }
                  name="radio-1"
                  value={state.fifthBox}
                >
                  Fifth
                </Radio>
                <Radio
                  checkedColor="#111111"
                  iconName="Delete"
                  isChecked={state.sixthBox}
                  onChange={() =>
                    setState({ ...state, sixthBox: !state.sixthBox })
                  }
                  name="radio-3"
                  value={state.sixthBox}
                >
                  Sixth
                </Radio>
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
  .add('Indeterminate', () => {
    function Parent({ children }: any): any {
      const [checkedItems, setCheckedItems] = React.useState([false, false]);

      const allChecked = checkedItems.every(Boolean);
      const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

      return (
        <div>
          {children(checkedItems, setCheckedItems, allChecked, isIndeterminate)}
        </div>
      );
    }

    return (
      <OuterWrapper>
        <Parent>
          {(
            checkedItems: any,
            setCheckedItems: any,
            allChecked: any,
            isIndeterminate: any
          ) => (
            <>
              <SectionWrapper>
                <Radio
                  isChecked={allChecked}
                  isIndeterminate={isIndeterminate}
                  onChange={e =>
                    setCheckedItems([e.target.checked, e.target.checked])
                  }
                  name="radio-1"
                >
                  Outer Radio
                </Radio>
                <NestedBoxes>
                  <Radio
                    isChecked={checkedItems[0]}
                    onChange={e =>
                      setCheckedItems([e.target.checked, checkedItems[1]])
                    }
                    name="radio-1"
                  >
                    First Nested Radio
                  </Radio>
                  <Radio
                    isChecked={checkedItems[1]}
                    onChange={e =>
                      setCheckedItems([checkedItems[0], e.target.checked])
                    }
                    name="radio-3"
                  >
                    Second Nested Radio
                  </Radio>
                </NestedBoxes>
                <StateLog>
                  Radio State in Story:{' '}
                  {JSON.stringify(checkedItems, undefined, 2)}
                </StateLog>
              </SectionWrapper>
            </>
          )}
        </Parent>
      </OuterWrapper>
    );
  });
