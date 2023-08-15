const router = async () => {
    const routes = [
        { path: "/", view: () => console.log("Viewing Dashboard") },
        { path: "/networth", view: () => console.log("Viewing Net Worth") },
        { path: "/settings", view: () => console.log("Viewing Settings") }
    ];

    // Test each route for potential match
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch:location.pathname === route.path
        }
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

    if(!match) {
        match = {
            route: routes[0],
            isMatch: true
        };
    }

    console.log(match);
};

document.addEventListener("DOMContentLoaded", () => {
    router();
});