export default function Loading() {
  return (
    <div className="flex-1 flex items-center justify-center">
      <div className="spinner">
        <div className="bg-muted-foreground"></div>
        <div className="bg-muted-foreground"></div>
        <div className="bg-muted-foreground"></div>
        <div></div>
      </div>
    </div>
  );
}
