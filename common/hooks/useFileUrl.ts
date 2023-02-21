import { useEffect, useState } from 'react';

const useFileUrl = (value: Array<File>) => {
  const [imageUrl, setImageUrl] = useState<
    string | ArrayBuffer | null | undefined
  >('');

  useEffect(() => {
    // TODO move to external function to follow DRY
    if (Array.isArray(value) && !!value?.length) {
      console.log('invoke!');
      const reader = new FileReader();

      reader.onload = (e: ProgressEvent<FileReader>) =>
        setImageUrl(e.target?.result);
      reader.readAsDataURL(new Blob([(value ?? [])[0]]));
    }
  }, [value]);

  return imageUrl;
};

export { useFileUrl };
