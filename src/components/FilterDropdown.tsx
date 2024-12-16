export default function FilterDropdown({ options, onSelect }: { options: string[]; onSelect: (value: string) => void }) {
    return (
      <select
        className="p-2 border rounded bg-zinc-200"
        onChange={(e) => onSelect(e.target.value)}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  }
  