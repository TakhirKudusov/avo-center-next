type Props = {
  children: JSX.Element;
  text: string;
};

const CoppyToClipboard = ({ children, text }: Props) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };

  return <div onClick={handleCopy}>{children}</div>;
};

export default CoppyToClipboard;
