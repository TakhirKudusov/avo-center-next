import styled from 'styled-components';
import { FormItem, FormItemTitle, FormRow } from '../../common';
import Button from '../../ui-kit/Button/Button';
import { ButtonSize, ButtonType } from '../../ui-kit/Button/enums';
import Counter from '../../ui-kit/Counter';
import FileUpload from '../../ui-kit/FileUpload';
import Input from '../../ui-kit/Input';
import Select from '../../ui-kit/Select';
import { SelectItemSize } from '../../ui-kit/Select/enums';
import { SelectItem } from '../../ui-kit/Select/types';
import ArrowRightSVG from '../../../assets/svg/arrow-right.svg';
import LoadingSVG from '../../../assets/svg/loading.svg';
import DatePicker from '../../ui-kit/DatePicker';

const CollectibleForm = () => {
  const NETWORKS: SelectItem[] = [
    {
      label: 'Network',
      value: '1',
    },
  ];
  return (
    <CollectibleFormWrapper>
      <FileUpload
        title={'Upload file'}
        description={'Drag or choose your file to upload'}
      />
      <SectionTitle>Item details</SectionTitle>
      <FormItem>
        <FormItemTitle>Network</FormItemTitle>
        <Select
          items={NETWORKS}
          style={{ width: '300px' }}
          size={SelectItemSize.Medium}
        />
      </FormItem>
      <FormItem>
        <FormItemTitle>Item name</FormItemTitle>
        <Input placeholder={'e. g. "Redeemable Bitcoin Card with logo"'} />
      </FormItem>
      <FormItem>
        <FormItemTitle>Description</FormItemTitle>
        <Input
          placeholder={
            'e. g. “After purchasing you will able to recived the logo...”'
          }
        />
      </FormItem>
      <FormRow>
        <FormItem>
          <FormItemTitle>Royalties</FormItemTitle>
          <Counter style={{ width: '191px' }} />
        </FormItem>
        <FormItem style={{ width: '100%' }}>
          <FormItemTitle>Price</FormItemTitle>
          <Select
            items={NETWORKS}
            placeholder={'e. g. Size'}
            size={SelectItemSize.Medium}
          />
        </FormItem>
      </FormRow>
      <FormItem>
        <FormItemTitle>License</FormItemTitle>
        <Select items={NETWORKS} size={SelectItemSize.Medium} />
      </FormItem>
      <FormItem>
        <FormItemTitle>Timer</FormItemTitle>
        <DatePicker style={{ width: '191px' }} />
      </FormItem>
      <FormFooter>
        <Button
          style={{ color: '#fff' }}
          size={ButtonSize.Large}
          type={ButtonType.Secondary}
        >
          Create item <ArrowRightSVG style={{ marginLeft: '15px' }} />
        </Button>
        <AutoSaving>
          Auto saving <LoadingSVG />
        </AutoSaving>
      </FormFooter>
    </CollectibleFormWrapper>
  );
};

const CollectibleFormWrapper = styled.form`
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
