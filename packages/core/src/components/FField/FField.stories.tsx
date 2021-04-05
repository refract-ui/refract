// @ts-nocheck
import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import FField from '../../../../final-form/src/Field.js';
import FForm from '../../../../final-form/src/Form.js';
import FFormSpy from '../../../../final-form/src/FormSpy.js';

const OuterWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SectionWrapper = styled.div`
  border: 1px solid rgba(243, 245, 250, 1);
  border-radius: 16px;
  box-shadow: 0 7px 11px 0 rgba(45, 45, 49, 0.1);
  display: flex;
  flex-wrap: wrap;
  margin: 1rem;
  padding: 1rem;
`;

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async values => {
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};

storiesOf('FField', module).add('FField', () => (
  <OuterWrapper>
    <SectionWrapper>
      <FForm
        onSubmit={onSubmit}
        initialValues={{ stooge: 'larry', employed: false }}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label>First Name</label>
              <FField
                name="firstName"
                type="text"
                placeholder="First Name"
              />
            </div>
          </form>
        )}
      />
    </SectionWrapper>
  </OuterWrapper>
));
