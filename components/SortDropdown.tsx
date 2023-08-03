import { SortDropdownProps } from '@/types';

const SortDropdown: React.FC<SortDropdownProps> = ({
  sortType,
  setSortType,
}) => {
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortType(event.target.value);
  };

  return (
    <div>
      <select value={sortType} onChange={handleSortChange}>
        <option value='price'>Sort by Price</option>
        <option value='rating'>Sort by Rating</option>
      </select>
    </div>
  );
};

export default SortDropdown;
