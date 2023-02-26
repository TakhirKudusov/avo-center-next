import { useCallback, useEffect, useRef, useState } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { addAttachment } from '../../redux/slicers/ipfsSlicer/ipfsSlicer';
import { requestVerification } from '../../redux/slicers/verificationsSlicer/verificationsSlicer';

export const useVerifyAccount = () => {
  const dispatch = useAppDispatch();

  const verifyFormRef = useRef<any>(null);

  const [isVerifyPermitted, setIsVerifyPermitted] = useState(false);
  const [isVerifyModalOpen, setIsVerifyModalOpen] = useState(false);
  const [attachIdPhotoUrl, setAttachIdPhotoUrl] = useState<string | null>(null);
  const [attachFacePhotoUrl, setAttachFacePhotoUrl] = useState<string | null>(
    null,
  );

  const handlePermitVerification = () => {
    setIsVerifyPermitted(false);
    setTimeout(() => setIsVerifyModalOpen(true), 400);
  };

  const handleVerifyModalClose = () => {
    verifyFormRef.current = null;

    setIsVerifyModalOpen(false);
  };

  const handleVerifyAccount = async () => {
    const attachIdPhotoResult = await dispatch(
      addAttachment(verifyFormRef.current.values.idPhoto),
    );

    if (attachIdPhotoResult) {
      setAttachIdPhotoUrl(attachIdPhotoResult.payload?.path);
    }
  };

  const attachFacePhoto = useCallback(async () => {
    const attachFacePhotoResult = await dispatch(
      addAttachment(verifyFormRef.current.values.facePhoto),
    );

    if (attachFacePhotoResult) {
      setAttachFacePhotoUrl(attachFacePhotoResult.payload?.path);
    }
  }, [dispatch]);

  useEffect(() => {
    if (attachIdPhotoUrl) attachFacePhoto();
  }, [attachIdPhotoUrl, attachFacePhoto]);

  const handleRequestVerify = useCallback(async () => {
    if (attachIdPhotoUrl && attachFacePhotoUrl)
      dispatch(
        requestVerification({
          idPhoto: attachIdPhotoUrl,
          facePhoto: attachFacePhotoUrl,
        }),
      );
  }, [dispatch, attachIdPhotoUrl, attachFacePhotoUrl]);

  useEffect(() => {
    if (attachFacePhotoUrl) {
      handleRequestVerify();
    }
  }, [attachFacePhotoUrl, handleRequestVerify]);

  return {
    verifyFormRef,
    isVerifyPermitted,
    isVerifyModalOpen,
    handlePermitVerification,
    handleVerifyAccount,
    handleVerifyModalClose,
    setIsVerifyPermitted,
  };
};
