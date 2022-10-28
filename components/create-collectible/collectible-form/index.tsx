import styled from 'styled-components';
import * as Yup from 'yup';
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
import { NETWORKS } from './constants';

const CollectibleForm = () => {
  const formSchema = Yup.object().shape({
    network: Yup.string().required('Field network is required'),
    itemName: Yup.string().required('Field itemName is required'),
    price: Yup.string().required('Field price is required'),
    license: Yup.string().required('Field license is required'),
  });
  const initialValues = { network: '1' };

  const onSubmit = async (values: any, formikProps: any) => {
    console.log(values, formikProps);
  };

  return (
    <CollectibleFormWrapper>
      <Form
        initialValues={initialValues}
        formSchema={formSchema}
        onSubmit={onSubmit}
      >
        <>
          <FileUpload
            title="Upload file"
            description="Drag or choose your file to upload"
          />
          <SectionTitle>Item details</SectionTitle>
          <FormItem
            title="Network"
            name="network"
            component={Select}
            items={NETWORKS}
            width={300}
            size={SelectItemSize.Medium}
          />
          <FormItem
            title="Item name"
            name="itemName"
            placeholder='e. g. "Redeemable Bitcoin Card with logo"'
            component={Input}
          />
          <FormItem
            title="Description"
            name="description"
            placeholder="e. g. “After purchasing you will able to recived the logo...”"
            component={Input}
          />
          <FormRow>
            <FormItem
              title="Royalties"
              name="royalties"
              component={Counter}
              width={190}
            ></FormItem>
            <FormItem
              title="Price"
              name="price"
              component={Select}
              items={NETWORKS}
              placeholder="e. g. Size"
              size={SelectItemSize.Medium}
            />
          </FormRow>
          <FormItem
            name="license"
            title="License"
            component={Select}
            items={NETWORKS}
            placeholder="License"
            size={SelectItemSize.Medium}
          />
          <FormItem
            name="timer"
            title="Timer"
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
