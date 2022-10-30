import { SelectItem } from "../../ui-kit/Select/types";
import { CollectibleFormItemName } from "./types";
import * as Yup from 'yup';

const NETWORKS: SelectItem[] = [
  {
    label: 'Network',
    value: '1',
  },
  {
    label: 'Network 2',
    value: '2',
  },
];

const FORM_SCHEMA = Yup.object().shape({
  [CollectibleFormItemName.File]: Yup.array()
    .length(1)
    .required('Field file is required'),
  [CollectibleFormItemName.Network]: Yup.string().required(
    'Field network is required',
  ),
  [CollectibleFormItemName.Description]: Yup.string().required(
    'Field description is required',
  ),
  [CollectibleFormItemName.Name]: Yup.string().required(
    'Field itemName is required',
  ),
  [CollectibleFormItemName.Price]: Yup.string().required(
    'Field price is required',
  ),
  [CollectibleFormItemName.Royalties]: Yup.number()
    .min(1)
    .required('Field royalties is required'),
  [CollectibleFormItemName.License]: Yup.string().required(
    'Field license is required',
  ),
});

export { NETWORKS, FORM_SCHEMA };
