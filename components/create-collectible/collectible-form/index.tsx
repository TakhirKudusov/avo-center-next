import { FormikProps } from 'formik';
import { useRouter } from 'next/router';
import { FormEventHandler, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { devices, screenSizes } from '../../../common/constants';
import { useAdaptiveSlider } from '../../../common/hooks/useAdaptiveSlider';
import { useFileUrl } from '../../../common/hooks/useFileUrl';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { fetchCategories } from '../../../redux/slicers/discoverSlicer/discoverSlicer';
import { TDiscoverState } from '../../../redux/slicers/discoverSlicer/types';
import { addAttachment } from '../../../redux/slicers/ipfsSlicer/ipfsSlicer';
import { TIpfsState } from '../../../redux/slicers/ipfsSlicer/types';
import { createNft } from '../../../redux/slicers/nftsSlicer/nftSlicer';
import { Counter, FileUpload, Form, FormItem, Input } from '../../ui-kit';
import Button from '../../ui-kit/Button/Button';
import { ButtonSize, ButtonType } from '../../ui-kit/Button/enums';
import Select from '../../ui-kit/Select';
import { SelectItemSize } from '../../ui-kit/Select/enums';
import { SelectItem } from '../../ui-kit/Select/types';
import CollectibleItem from '../collectible-item';
import { FORM_SCHEMA, NETWORKS, NFT_TYPES } from './constants';
import { CollectibleFormItemName } from './types';

const CollectibleForm = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const formRef = useRef<FormikProps<any>>(null);

  const { fileUrl } = useAppSelector<TIpfsState>((state) => state.ipfs);
  const { categories } = useAppSelector<TDiscoverState>(
    (state) => state.discover,
  );
  const [formValues, setFormValues] = useState<any>(undefined);
  const imageUrl = useFileUrl(formValues?.file);

  const { screenSize } = useAdaptiveSlider();

  const categoryOptions: SelectItem[] = categories.map((category) => ({
    label: category.name,
    value: category._id,
  }));

  const initialValues = {};

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    (async () => {
      if (fileUrl) {
        await dispatch(
          createNft({
            ...formValues,
            file: fileUrl,
          }),
        );

        router.push('/');
      }
    })();
  }, [fileUrl]);

  const onSubmit = () => async (values: any) => {
    dispatch(addAttachment(values.file[0]));
  };

  const handleChange: FormEventHandler<HTMLFormElement> = (e) => {
    setFormValues(formRef.current?.values);
  };

  return (
    <ContentWrapper>
      <CollectibleFormWrapper>
        <Form
          innerRef={formRef}
          initialValues={initialValues}
          formSchema={FORM_SCHEMA}
          onSubmit={onSubmit()}
          onChange={handleChange}
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
                name={CollectibleFormItemName.Network}
                component={Select}
                items={NETWORKS}
                style={{ width: 'calc(50% - 10px)' }}
                size={SelectItemSize.Medium}
              />
              <FormItem
                title="Type"
                name={CollectibleFormItemName.Type}
                component={Select}
                style={{ width: 'calc(50% - 10px)' }}
                items={NFT_TYPES}
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
              items={categoryOptions}
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
                fullSize={screenSize <= screenSizes.mobileL}
                type="submit"
              >
                Create item
              </Button>
              {/* <AutoSaving>
              Auto saving <LoadingSVG color="#23262F" />
            </AutoSaving> */}
            </FormFooter>
          </>
        </Form>
      </CollectibleFormWrapper>
      {screenSize > screenSizes.mobileL && (
        <CollectibleItemWrapper>
          <CollectibleItem
            bid={
              {
                name: formValues?.name,
                total: formValues?.total,
                available: formValues?.royalties,
                file: imageUrl as string,
              } as any
            }
          />
          <ServiceFee>
            <ServiceFeeLabel>Service fee:</ServiceFeeLabel>
            <ServiceFeeValue>0.0%</ServiceFeeValue>
          </ServiceFee>
        </CollectibleItemWrapper>
      )}
    </ContentWrapper>
  );
};

const ContentWrapper = styled.div`
  display: flex;
  gap: 128px;
  width: 100%;
`;

const CollectibleFormWrapper = styled.div`
  padding-top: 16px;
  width: 100%;
`;

const FormFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 54px;
`;

const SectionTitle = styled.div`
  margin-top: 40px;
  font-family: 'Nasalization';
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #fcfcfd;
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
  display: flex;
  justify-content: space-between;

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
  width: 100%;
`;

const CollectibleItemWrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 768px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const ServiceFee = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 24px;
  font-family: 'Montserrat';
  font-size: 14px;
  line-height: 17px;
`;

const ServiceFeeLabel = styled.span`
  font-weight: 600;
  color: #ffffff;
`;

const ServiceFeeValue = styled.span`
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
`;

export default CollectibleForm;
