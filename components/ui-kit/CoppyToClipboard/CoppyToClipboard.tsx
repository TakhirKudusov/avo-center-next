type Props = {
  text: string;
  children: JSX.Element;
};

const CoppyToClipboard = ({ children, text }: Props) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };

  return <div onClick={handleCopy}>{children}</div>;
};

export default CoppyToClipboard;
