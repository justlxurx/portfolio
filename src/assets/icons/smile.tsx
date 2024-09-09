export const Smile = ({ size = "124" }) => {
  return (
    <svg
      // width={size}
      // height={size}
      // viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="17" y="17" width="124" height="124" rx="62" fill="#BEFF6B" />
      <rect
        x="8.88095"
        y="8.88095"
        width="140.238"
        height="140.238"
        rx="70.119"
        stroke="#BEFF6B"
        strokeOpacity="0.47"
        strokeWidth="16.2381"
      />
      <path
        d="M63.55 94.7974H73.8095V104.762H63.55V94.7974ZM63.55 67.4141H73.8095V77.3784H63.55V67.4141ZM85.2736 50.807C86.7498 53.1689 88.1276 55.6292 89.407 58.1879C90.6863 60.6974 91.7935 63.3546 92.7284 66.1593C93.7125 68.9149 94.4752 71.8427 95.0165 74.9427C95.607 78.0427 95.9022 81.3641 95.9022 84.907C95.9022 90.8609 94.9673 96.7165 93.0974 102.474C91.2768 108.231 88.6689 113.693 85.2736 118.859H78.4093C81.3617 113.594 83.6006 108.182 85.126 102.621C86.7006 97.0117 87.4879 91.107 87.4879 84.907C87.4879 78.707 86.7498 72.8022 85.2736 67.1927C83.7974 61.5831 81.5093 56.1212 78.4093 50.807H85.2736Z"
        fill="#182743"
      />
    </svg>
  );
};
