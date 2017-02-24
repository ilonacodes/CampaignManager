export const FILTER = {
    CHANGE: "FILTER_CHANGE"
};

export const changeFilter = (newFilter) => ({
    type: FILTER.CHANGE,
    newFilter
});