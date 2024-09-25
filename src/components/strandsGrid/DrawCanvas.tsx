// import { useRef } from "react";

// Constants
// const LINE_WIDTH = 5;

interface DrawCanvasProps {
  column: number;
  row: number;
  size: number;
}

const DrawCanvas = ({ column, row, size }: DrawCanvasProps) => {
  // const canvasRef = useRef<HTMLCanvasElement>(null);
  // const contextRef = useRef<any>(null);

  //-----------------------------------
  // Computed
  const height = row * size + (row - 1) * 12;
  const width = column * size + (column - 1) * 12;

  // const resetCanvas = useCallback(() => {
  //   clearCanvas();
  //   // setRemotePlot([]);
  //   // setLocalPlot([]);
  //   // setPlotsList([]);
  // }, [clearCanvas]);

  //-----------------------------------
  // Functions
  // const clearCanvas = useCallback(() => {
  //   if (!contextRef.current) return;
  //   // white background
  //   contextRef.current.fillStyle = "white";
  //   contextRef.current.fillRect(
  //     0,
  //     0,
  //     canvasRef?.current?.width,
  //     canvasRef?.current?.height
  //   );
  //   contextRef.current.fillStyle = "black";
  // }, []);

  //-----------------------------------
  // initialize
  // const init = useCallback(() => {
  //   const canvas = canvasRef.current;

  //   if (!canvas) return;

  //   canvas.width = window.innerWidth;
  //   canvas.height = window.innerHeight;
  //   canvas.style.height = `${window.innerHeight}px`;
  //   canvas.style.width = `${window.innerWidth}px`;

  //   const context = canvas.getContext("2d");

  //   if (!context) return;

  //   context.lineCap = "round";
  //   context.strokeStyle = "black";
  //   context.lineWidth = LINE_WIDTH;
  //   contextRef.current = context;
  //   clearCanvas();
  // }, [clearCanvas]);

  return (
    <canvas
      className={`absolute top-0 left-0 -z-10 w-[${width}px] h-[${height}px]`}
    />
  );
};

export default DrawCanvas;
