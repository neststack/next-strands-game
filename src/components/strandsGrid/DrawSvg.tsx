import { StrandNodeType } from "@/types";

interface DrawSvgProps {
  column: number;
  row: number;
  buttonSize: number;
  blockSize: number;
  currentPlot: StrandNodeType[];
  type?: "current" | "correct" | "spangram";
}

const DrawSvg = ({
  blockSize,
  buttonSize,
  column,
  currentPlot,
  row,
  type = "current"
}: DrawSvgProps) => {
  //-----------------------------------
  // Computed
  const height = row * blockSize;
  const width = column * blockSize;
  // Generate polyline points string from currentPlot
  const polylinePoints = currentPlot
    .map(
      node =>
        `${blockSize / 2 + node.column * blockSize},${blockSize / 2 + node.row * blockSize}`
    )
    .join(" ");
  const color =
    type === "correct" ? "skyblue" : type === "spangram" ? "orange" : "gray";

  return (
    <svg
      className={`absolute top-0 left-0 -z-10 w-[${width}px] h-[${height}px]`}
      height={height}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
    >
      {currentPlot.length > 0 && (
        <polyline
          points={polylinePoints}
          style={{
            fill: "none",
            stroke: color,
            strokeWidth: "10"
          }}
        />
      )}
      {currentPlot.map((node, i) => (
        <circle
          key={i}
          cx={blockSize / 2 + node.column * blockSize}
          cy={blockSize / 2 + node.row * blockSize}
          fill={color}
          r={buttonSize / 2}
        />
      ))}
      Sorry, your browser does not support inline SVG.
    </svg>
  );
};

export default DrawSvg;
