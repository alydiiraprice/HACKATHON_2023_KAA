import { useRouter } from 'next/router';

const CustomButton = ({ text, onClick }) => {
  return (
    <button className="custom-button" onClick={onClick}>
      {text}
    </button>
  );
};

export default CustomButton;
