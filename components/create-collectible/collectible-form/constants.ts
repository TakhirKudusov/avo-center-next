import { SelectItem } from '../../ui-kit/Select/types';
import { CollectibleFormItemName } from './types';
import * as Yup from 'yup';
import { NFTType } from '../../../common/enums/nftType.enum';

const NETWORKS: SelectItem[] = [
  {
    label: 'BNB Smart Chain',
    value: 'BSC',
  },
];

const NFT_TYPES: SelectItem[] = [
  {
    label: 'Audio',
    value: NFTType.Audio,
  },
  {
    label: 'Video',
    value: NFTType.Video,
  },
  {
    label: 'Image',
    value: NFTType.Image,
  },
];

const CATEGORIES: SelectItem[] = [
  {
    label: 'Art',
    value: 'art',
  },
  {
    label: 'Game',
    value: 'game',
  },
  {
    label: 'Photography',
    value: 'photography',
  },
  {
    label: 'Music',
    value: 'music',
  },
  {
    label: 'Video',
    value: 'video',
  },
];

const FORM_SCHEMA = Yup.object().shape({
  [CollectibleFormItemName.File]: Yup.array()
    .length(1)
    .required('Field file is required'),
  [CollectibleFormItemName.Type]: Yup.string().required(
    'Field type is required',
  ),
  [CollectibleFormItemName.Description]: Yup.string().required(
    'Field description is required',
  ),
  [CollectibleFormItemName.Category]: Yup.string().required(
    'Field category is required',
  ),
  [CollectibleFormItemName.Name]: Yup.string().required(
    'Field itemName is required',
  ),
  [CollectibleFormItemName.Total]: Yup.string().required(
    'Field total is required',
  ),
  [CollectibleFormItemName.Royalties]: Yup.number()
    .min(1)
    .required('Field royalties is required'),
});

export { NETWORKS, FORM_SCHEMA, NFT_TYPES, CATEGORIES };
