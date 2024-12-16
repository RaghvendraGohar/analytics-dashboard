import Tabs from "@/components/Tabs";
import Card from "@/components/Card";
import SkeletonLoader from "@/components/SkeletonLoader";

export default function Summary() {
  const handlePeriodChange = (period: string) => {
    console.log("Selected period:", period);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Dashboard Summary</h2>
      <Tabs onChange={handlePeriodChange} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        <Card title="User Growth" value="12,345" />
        <Card title="Revenue" value="$34,567" />
        <Card title="Engagement" value="78%" />
        <Card title="New Signups" value="1,234" />
      </div>
      <SkeletonLoader />
    </div>
  );
}
