import {changeFilter} from "../../actions/Filter";
import {connect} from "react-redux";
import {Filter} from "../presentation/Filter";

const mapStateToProps = (state) => {
    return {
        filter: state.filter
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChange: (e) => dispatch(changeFilter(e.target.value))
    }
};

console.log(Filter);

export const FilterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Filter);
