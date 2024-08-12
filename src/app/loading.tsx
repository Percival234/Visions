export default function Loading() {
  return (
    <div className="flex-1 flex items-center justify-center">
      <div className="spinner">
        <div className="bg-muted-foreground absolute rounded-full w-full h-full"></div>
        <div className="bg-muted-foreground absolute rounded-full w-full h-full"></div>
        <div className="bg-muted-foreground absolute rounded-full w-full h-full"></div>
        <div className="bg-muted-foreground absolute rounded-full w-full h-full"></div>
      </div>
    </div>
  );
}
