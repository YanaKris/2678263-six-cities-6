import { useState } from 'react';
import { SortType, SORT_OPTIONS } from '../../const';

type TypeSortProps = {
  activeSort: SortType;
  onSortChange: (sort: SortType) => void;
};

export default function PlacesSorting({
  activeSort,
  onSortChange,
}: TypeSortProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSortClick = (sort: SortType) => {
    setIsOpen(false);
    onSortChange(sort);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>

      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => setIsOpen(!isOpen)}
      >
        {activeSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>

      {isOpen && (
        <ul className="places__options places__options--custom places__options--opened">
          {SORT_OPTIONS.map((option) => (
            <li
              key={option}
              className={`places__option ${
                option === activeSort ? 'places__option--active' : ''
              }`}
              tabIndex={0}
              onClick={() => handleSortClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
}
