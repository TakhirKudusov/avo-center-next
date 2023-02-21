import { useFormikContext } from 'formik';
import { useEffect } from 'react';

type Props = {
  onChange?: (values: any) => void;
};
const FormObserver: React.FC<Props> = ({ onChange }) => {
  const { values } = useFormikContext();

  useEffect(() => {
    if (onChange) {
      onChange(values);
    }
  }, [values]);

  return null;
};

export default FormObserver;
