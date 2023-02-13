import { FormikProps } from 'formik';
import { useRef } from 'react';
import styled from 'styled-components';
import ArrowRightSVG from '../../../assets/svg/arrow-right.svg';
import LoadingSVG from '../../../assets/svg/loading.svg';
import { devices } from '../../../common/constants';
import { useAppDispatch } from '../../../redux/hooks';
import { createNft } from '../../../redux/slicers/nftsSlicer/nftSlicer';
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
import CollectibleItem from '../collectible-item';
import { BID } from '../constants';
import { CATEGORIES, FORM_SCHEMA, NETWORKS } from './constants';
import { CollectibleFormItemName } from './types';

const CollectibleForm = () => {
  const dispatch = useAppDispatch();
  const formRef = useRef<FormikProps<any>>(null);

  const initialValues = {};

  const onSubmit = () => async (values: any, formikProps: any) => {
    // console.log(values, formikProps);

    console.log('formRef.current =', formRef.current);

    // console.log('values =', values);
    // dispatch(createNft(values));
  };

  // name: string;
  // description: string;
  // category: string;
  // type: string;
  // total: number;
  // royalties: number;
  // available: number;

  return (
    <ContentWrapper>
      <CollectibleFormWrapper>
        <Form
          innerRef={formRef}
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
            <NetworkWrapper>
              <FormItem
                title="Network"
                name={CollectibleFormItemName.Type}
                component={Select}
                items={NETWORKS}
                size={SelectItemSize.Medium}
              />
            </NetworkWrapper>
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
            <FormItem
              title="Category"
              name={CollectibleFormItemName.Category}
              component={Select}
              items={CATEGORIES}
              size={SelectItemSize.Medium}
            />
            <StyledFormRow>
              <RoyaltiesWrapper>
                <FormItem
                  title="Royalties"
                  name={CollectibleFormItemName.Royalties}
                  component={Counter}
                />
              </RoyaltiesWrapper>
              {/* <FormItem
              title="Price"
              name={CollectibleFormItemName.Price}
              component={Select}
              items={NETWORKS}
              placeholder="e. g. Size"
              size={SelectItemSize.Medium}
              style={{ width: '100%' }}
            /> */}
              <RoyaltiesWrapper>
                <FormItem
                  title="Total"
                  name={CollectibleFormItemName.Total}
                  component={Counter}
                />
              </RoyaltiesWrapper>
            </StyledFormRow>
            <FormItem
              title="License"
              name={CollectibleFormItemName.License}
              component={Select}
              items={[]}
              placeholder="License"
              size={SelectItemSize.Medium}
            />
            {/* TODO: add adaptivity for Timer and uncomment */}
            {/* <FormItem
            title="Timer"
            name={CollectibleFormItemName.Timer}
            component={DatePicker}
            width={260}
          /> */}
            <FormFooter>
              <Button
                style={{ color: '#fff' }}
                size={ButtonSize.Large}
                btnType={ButtonType.Secondary}
                type="submit"
              >
                Create item <ArrowRightSVG style={{ marginLeft: '15px' }} />
              </Button>
              {/* <AutoSaving>
              Auto saving <LoadingSVG color="#23262F" />
            </AutoSaving> */}
            </FormFooter>
          </>
        </Form>
      </CollectibleFormWrapper>
      <CollectibleItem
        bid={{
          name: formRef.current?.values.name,
          total: formRef.current?.values.total,
          available: formRef.current?.values.royalties,
        }}
      />
    </ContentWrapper>
  );
};

const ContentWrapper = styled.div`
  display: flex;
  gap: 128px;
  padding-top: 128px;
  width: 100%;
  padding-bottom: 112px;

  @media (${devices.mobile}) {
    padding-top: 80px;
  }
`;

const CollectibleFormWrapper = styled.div`
  padding-top: 40px;
  width: 100%;
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

// const AutoSaving = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 13px;
//   font-family: 'DM Sans';
//   font-weight: 700;
//   font-size: 16px;
//   line-height: 16px;
//   color: #23262f;
// `;

const NetworkWrapper = styled.div`
  width: 300px;

  @media (${devices.mobile}) {
    width: 100%;
  }
`;

const StyledFormRow = styled.div`
  display: flex;
  gap: 32px;

  @media (${devices.mobile}) {
    flex-direction: column;
  }
`;

const RoyaltiesWrapper = styled.div`
  width: 190px;

  @media (${devices.mobile}) {
    width: 100%;
  }
`;

export default CollectibleForm;
