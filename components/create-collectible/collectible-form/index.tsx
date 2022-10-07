import styled from 'styled-components';
import { FormItem, FormItemTitle } from '../../common';
import FileUpload from '../../ui-kit/FileUpload';
import Input from '../../ui-kit/Input';
import Select from '../../ui-kit/Select';
import { SelectItemSize } from '../../ui-kit/Select/enums';
import { SelectItem } from '../../ui-kit/Select/types';

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
        <FormItemTitle>Network</FormItemTitle>
        <Input placeholder={'e. g. "Redeemable Bitcoin Card with logo"'} />
      </FormItem>
      <FormItem>
        <FormItemTitle>Item name</FormItemTitle>
        <Input
          placeholder={
            'e. g. “After purchasing you will able to recived the logo...”'
          }
        />
      </FormItem>
      <FormItem>
        <FormItemTitle>License</FormItemTitle>
        <Select items={NETWORKS} size={SelectItemSize.Medium} />
      </FormItem>
    </CollectibleFormWrapper>
  );
};

const CollectibleFormWrapper = styled.form`
  padding-top: 40px;
`;

const SectionTitle = styled.div`
  margin-top: 40px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #23262f;
`;

export default CollectibleForm;
