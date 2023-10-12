import { Wrapper, TextInput, ResetBtn } from "./Filter.styled";
import { setFilter, resetFilter } from "redux/filterSlice";
import { getFilter } from "redux/selectors";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";



export const Filter = () => {
    const filter = useSelector(getFilter).value;
    const dispatch = useDispatch();
    const filterChange = filter => dispatch(setFilter(filter));
    const resetHandFilter = () => dispatch(resetFilter());

    return (
        <Wrapper>
            <label>Find contacts by name</label>
            <TextInput
                type="text"
                name="Findname"
                value={filter}
                onChange={evt => filterChange(evt.target.value)}
            />
            <ResetBtn onClick={() => resetHandFilter()}>Reset</ResetBtn>
        </Wrapper>
    )
};