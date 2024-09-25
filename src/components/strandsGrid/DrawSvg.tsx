import { StrandNodeType } from "@/types";

interface DrawSvgProps {
  column: number;
  row: number;
  buttonSize: number;
  currentPlot: StrandNodeType[];
  type?: "current" | "correct" | "spangram";
}

const DrawSvg = ({
  buttonSize,
  column,
  currentPlot,
  row,
  type = "current"
}: DrawSvgProps) => {
  //-----------------------------------
  // Computed
  const height = row * buttonSize + (row - 1) * 12;
  const width = column * buttonSize + (column - 1) * 12;
  // Generate polyline points string from currentPlot
  const polylinePoints = currentPlot
    .map(
      node =>
        `${(node.column + 1) * buttonSize + (node.column - 2) * 12},${
          (node.row + 1) * buttonSize + (node.row - 2) * 12
        }`
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
          cx={(node.column + 1) * buttonSize + (node.column - 2) * 12}
          cy={(node.row + 1) * buttonSize + (node.row - 2) * 12}
          fill={color}
          r={buttonSize / 2}
        />
      ))}
      Sorry, your browser does not support inline SVG.
    </svg>
  );
};

export default DrawSvg;
