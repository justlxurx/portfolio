export const Profile = ({ width = "13", height = "17", color = "white" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 13 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.69966 4.19993C9.69966 5.9672 8.26697 7.39986 6.49973 7.39986C4.73246 7.39986 3.2998 5.9672 3.2998 4.19993C3.2998 2.43266 4.73246 1 6.49973 1C8.26697 1 9.69966 2.43266 9.69966 4.19993Z"
        fill={color}
        stroke={color}
        strokeWidth="1.12939"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.49978 10.4004C3.40706 10.4004 0.899902 12.9075 0.899902 16.0003H12.0997C12.0997 12.9075 9.59251 10.4004 6.49978 10.4004Z"
        fill={color}
        stroke={color}
        strokeWidth="1.12939"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
