type XMarkIconProps = {
  className?: string;
  onClick?: () => void;
};

const XMarkIcon = (props: XMarkIconProps) => {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
      onClick={props.onClick}
    >
      <path
        d="M1 12L12 1M1 1L12 12"
        stroke="#858585"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default XMarkIcon;
