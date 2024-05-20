import { FilterTitle, FilterInput } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
    return (
        <div>
            <FilterTitle>Find contacts by name</FilterTitle>
            <FilterInput type="text" name="filter" value={value} onChange={onChange}></FilterInput>
        </div>
    )
};