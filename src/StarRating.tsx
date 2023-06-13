import { FC } from "react";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const starContainerStyle = {
  display: "flex",
  gap: "4px",
};

const textStyle = {
  lineHeight: "1",
  margin: 0,
};

interface Props {
  children?: React.ReactNode;
  maxRating?: number;
}

export const StarRating: FC<Props> = ({ maxRating = 5 }) => {
  return (
    <div style={containerStyle}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <span key={i}>S{i}</span>
        ))}
      </div>
      <p style={textStyle}>{maxRating}</p>
    </div>
  );
};
