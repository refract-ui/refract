import React, { useState } from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import Checkbox from './index';

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
  .add('Default / States', () => {
    function Parent({ children }: any): any {
      const [state, setState] = useState({
        normalBox: false,
        disabledBox: false,
        errorBox: false,
        readOnlyOneBox: false,
        readOnlyTwoBox: true
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
                <Checkbox
                  isChecked={state.readOnlyOneBox}
                  isReadOnly
                  onChange={() =>
                    setState({
                      ...state,
                      readOnlyOneBox: !state.readOnlyOneBox
                    })
                  }
                  name="checkbox-3"
                  value={state.readOnlyOneBox}
                >
                  Read Only
                </Checkbox>
                <Checkbox
                  isChecked={state.readOnlyTwoBox}
                  isReadOnly
                  onChange={() =>
                    setState({
                      ...state,
                      readOnlyTwoBox: !state.readOnlyTwoBox
                    })
                  }
                  name="checkbox-3"
                  value={state.readOnlyTwoBox}
                >
                  Read Only Checked
                </Checkbox>
                <StateLog>
                  Checkbox State in Story: {JSON.stringify(state, undefined, 2)}
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
                  Checkbox State in Story: {JSON.stringify(state, undefined, 2)}
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
                <Checkbox
                  iconColor="orange"
                  isChecked={state.firstBox}
                  onChange={() =>
                    setState({ ...state, firstBox: !state.firstBox })
                  }
                  name="checkbox-1"
                  value={state.firstBox}
                >
                  First
                </Checkbox>
                <Checkbox
                  checkedColor="#cccccc"
                  iconName="Close"
                  isChecked={state.secondBox}
                  onChange={() =>
                    setState({ ...state, secondBox: !state.secondBox })
                  }
                  name="checkbox-1"
                  value={state.secondBox}
                >
                  Second
                </Checkbox>
                <Checkbox
                  iconName="Menu"
                  iconColor="violet"
                  isChecked={state.thirdBox}
                  onChange={() =>
                    setState({ ...state, thirdBox: !state.thirdBox })
                  }
                  name="checkbox-3"
                  value={state.thirdBox}
                >
                  Third
                </Checkbox>
                <Checkbox
                  checkedColor="yellow"
                  iconName="Person"
                  isChecked={state.fourthBox}
                  onChange={() =>
                    setState({ ...state, fourthBox: !state.fourthBox })
                  }
                  name="checkbox-1"
                  value={state.fourthBox}
                >
                  Fourth
                </Checkbox>
                <Checkbox
                  checkedColor="chartreuse"
                  iconName="Dollar"
                  isChecked={state.fifthBox}
                  onChange={() =>
                    setState({ ...state, fifthBox: !state.fifthBox })
                  }
                  name="checkbox-1"
                  value={state.fifthBox}
                >
                  Fifth
                </Checkbox>
                <Checkbox
                  checkedColor="#111111"
                  iconName="Delete"
                  isChecked={state.sixthBox}
                  onChange={() =>
                    setState({ ...state, sixthBox: !state.sixthBox })
                  }
                  name="checkbox-3"
                  value={state.sixthBox}
                >
                  Sixth
                </Checkbox>
                <StateLog>
                  Checkbox State in Story: {JSON.stringify(state, undefined, 2)}
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
                <Checkbox
                  isChecked={allChecked}
                  isIndeterminate={isIndeterminate}
                  onChange={e =>
                    setCheckedItems([e.target.checked, e.target.checked])
                  }
                  name="checkbox-1"
                >
                  Outer Checkbox
                </Checkbox>
                <NestedBoxes>
                  <Checkbox
                    isChecked={checkedItems[0]}
                    onChange={e =>
                      setCheckedItems([e.target.checked, checkedItems[1]])
                    }
                    name="checkbox-1"
                  >
                    First Nested Checkbox
                  </Checkbox>
                  <Checkbox
                    isChecked={checkedItems[1]}
                    onChange={e =>
                      setCheckedItems([checkedItems[0], e.target.checked])
                    }
                    name="checkbox-3"
                  >
                    Second Nested Checkbox
                  </Checkbox>
                </NestedBoxes>
                <StateLog>
                  Checkbox State in Story:{' '}
                  {JSON.stringify(checkedItems, undefined, 2)}
                </StateLog>
              </SectionWrapper>
            </>
          )}
        </Parent>
      </OuterWrapper>
    );
  });
