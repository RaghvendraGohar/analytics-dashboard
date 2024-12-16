import FilterDropdown from "@/components/FilterDropdown";

export default function History() {
  const filters = ["Last 7 days", "Last 30 days", "This Year"];
  
  const handleFilterChange = (filter: string) => {
    console.log("Selected filter:", filter);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Dashboard History</h2>
      <FilterDropdown options={filters} onSelect={handleFilterChange} />
      <div className="mt-6">
        <p>History data will be displayed here...</p>
      </div>
    </div>
  );
}
