interface IArrowIcon {
  className: string
}

const ArrowIcon = ({ className }: IArrowIcon) => (
  <svg
    className={className}
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_1156_7939)">
      <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="black" />
      <g clip-path="url(#clip1_1156_7939)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M20.707 11.2929C20.5184 11.1108 20.2658 11.01 20.0036 11.0122C19.7414 11.0145 19.4906 11.1197 19.3052 11.3051C19.1198 11.4905 19.0146 11.7413 19.0123 12.0035C19.01 12.2657 19.1108 12.5183 19.293 12.7069L25.586 18.9999H12C11.7348 18.9999 11.4804 19.1053 11.2929 19.2928C11.1054 19.4803 11 19.7347 11 19.9999C11 20.2651 11.1054 20.5195 11.2929 20.707C11.4804 20.8946 11.7348 20.9999 12 20.9999H25.586L19.293 27.2929C19.1975 27.3852 19.1213 27.4955 19.0689 27.6175C19.0165 27.7395 18.9889 27.8707 18.9877 28.0035C18.9866 28.1363 19.0119 28.268 19.0622 28.3909C19.1125 28.5138 19.1867 28.6254 19.2806 28.7193C19.3745 28.8132 19.4861 28.8875 19.609 28.9377C19.7319 28.988 19.8636 29.0133 19.9964 29.0122C20.1292 29.011 20.2604 28.9834 20.3824 28.931C20.5044 28.8786 20.6148 28.8024 20.707 28.7069L28.707 20.7069C28.8945 20.5194 28.9998 20.2651 28.9998 19.9999C28.9998 19.7348 28.8945 19.4804 28.707 19.2929L20.707 11.2929Z"
          fill="black"
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_1156_7939">
        <rect width="40" height="40" rx="20" fill="white" />
      </clipPath>
      <clipPath id="clip1_1156_7939">
        <rect
          width="18"
          height="18"
          fill="white"
          transform="translate(11 11)"
        />
      </clipPath>
    </defs>
  </svg>
)

export default ArrowIcon
