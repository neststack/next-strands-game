import { StrandNodeType } from "@/types";

interface DrawSvgProps {
  column: number;
  row: number;
  buttonSize: number;
  temporaryPlot: StrandNodeType[];
}

const DrawSvg = ({ buttonSize, column, row }: DrawSvgProps) => {
  //-----------------------------------
  // Computed
  const height = row * buttonSize + (row - 1) * 12;
  const width = column * buttonSize + (column - 1) * 12;

  return (
    <svg
      className={`absolute top-0 left-0 -z-10 w-[${width}px] h-[${height}px]`}
      height={height}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
    >
      <polyline
        points="0,0 50,150 100,75 150,50 200,140 250,140"
        style={{
          fill: "none",
          stroke: "gray",
          strokeWidth: "10"
        }}
      />
      Sorry, your browser does not support inline SVG.
    </svg>
  );
};

export default DrawSvg;
