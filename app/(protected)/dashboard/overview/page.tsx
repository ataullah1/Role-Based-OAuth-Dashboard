export default function DashboardPage() {
  return (
    <div>
      <div className="flex flex-col gap-4 p-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="aspect-video rounded-xl bg-muted/50 p-4">Card 1</div>
          <div className="aspect-video rounded-xl bg-muted/50 p-4">Card 2</div>
          <div className="aspect-video rounded-xl bg-muted/50 p-4">Card 3</div>
        </div>
        <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 p-4">
          Main Content Area
        </div>
      </div>
    </div>
  );
}
