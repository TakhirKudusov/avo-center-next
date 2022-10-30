import styled from 'styled-components';
import ArrowRightSVG from '../../../assets/svg/arrow-right.svg';
import LoadingSVG from '../../../assets/svg/loading.svg';
import { FormRow } from '../../common';
import {
  Counter,
  DatePicker,
  FileUpload,
  Form,
  FormItem,
  Input,
} from '../../ui-kit';
import Button from '../../ui-kit/Button/Button';
import { ButtonSize, ButtonType } from '../../ui-kit/Button/enums';
import Select from '../../ui-kit/Select';
import { SelectItemSize } from '../../ui-kit/Select/enums';
import { FORM_SCHEMA, NETWORKS } from './constants';
import { CollectibleFormItemName } from './types';

const CollectibleForm = () => {
  const initialValues = {};

  const onSubmit = () => async (values: any, formikProps: any) => {
    console.log(values, formikProps);
  };

  return (
    <CollectibleFormWrapper>
      <Form
        initialValues={initialValues}
        formSchema={FORM_SCHEMA}
        onSubmit={onSubmit()}
      >
        <>
          <FormItem
            label="Upload file"
            name={CollectibleFormItemName.File}
            description="Drag or choose your file to upload"
            marginTop={0}
            component={FileUpload}
          />
          <SectionTitle>Item details</SectionTitle>
          <FormItem
            title="Network"
            name={CollectibleFormItemName.Network}
            component={Select}
            items={NETWORKS}
            width={300}
            size={SelectItemSize.Medium}
          />
          <FormItem
            title="Item name"
            name={CollectibleFormItemName.Name}
            placeholder='e. g. "Redeemable Bitcoin Card with logo"'
            component={Input}
          />
          <FormItem
            title="Description"
            name={CollectibleFormItemName.Description}
            placeholder="e. g. “After purchasing you will able to recived the logo...”"
            component={Input}
          />
          <FormRow>
            <FormItem
              title="Royalties"
              name={CollectibleFormItemName.Royalties}
              component={Counter}
              width={190}
            ></FormItem>
            <FormItem
              title="Price"
              name={CollectibleFormItemName.Price}
              component={Select}
              items={NETWORKS}
              placeholder="e. g. Size"
              size={SelectItemSize.Medium}
            />
          </FormRow>
          <FormItem
            title="License"
            name={CollectibleFormItemName.License}
            component={Select}
            items={NETWORKS}
            placeholder="License"
            size={SelectItemSize.Medium}
          />
          <FormItem
            title="Timer"
            name={CollectibleFormItemName.Timer}
            component={DatePicker}
            width={191}
          />
          <FormFooter>
            <Button
              style={{ color: '#fff' }}
              size={ButtonSize.Large}
              type={ButtonType.Secondary}
            >
              Create item <ArrowRightSVG style={{ marginLeft: '15px' }} />
            </Button>
            <AutoSaving>
              Auto saving <LoadingSVG color="#23262F" />
            </AutoSaving>
          </FormFooter>
        </>
      </Form>
    </CollectibleFormWrapper>
  );
};

const CollectibleFormWrapper = styled.div`
  padding-top: 40px;
`;

const FormFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 40px;
  border-top: 1px solid #e6e8ec;
  margin-top: 40px;
`;

const SectionTitle = styled.div`
  margin-top: 40px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #23262f;
`;

const AutoSaving = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;
  font-family: 'DM Sans';
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  color: #23262f;
`;

export default CollectibleForm;
