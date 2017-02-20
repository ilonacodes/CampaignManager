export const ROUTER = {
    CHANGED: "ROUTER_CHANGED"
};

export const routeChanged = (change) => ({
    type: ROUTER.CHANGED,
    change
});