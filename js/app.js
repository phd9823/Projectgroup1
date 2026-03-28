// Simple Hash Router using globally available View objects
const routes = {
    '/': HomeView,
    '/splash': SplashView,
    '/onboarding': OnboardingView,
    '/auth': AuthView,
    '/map': MapView,
    '/map/detail': LocationDetailView,
    '/games': GamesView,
    '/events': EventsView,
    '/profile': ProfileView
};

const appContainer = document.getElementById('main-content');
const bottomNav = document.getElementById('bottom-nav');

// Handle Navigation Rendering
async function router() {
    let hash = window.location.hash.slice(1) || '/splash'; // Default to splash

    let path = hash;
    let id = null;
    if (hash.startsWith('/map/detail/')) {
        path = '/map/detail';
        id = hash.split('/')[3];
    } else if (hash === '/map/detail') {
        id = 'golden-temple'; // fallback
    }

    // Determine bottom nav visibility
    const hideNavRoutes = ['/splash', '/onboarding', '/auth', '/map/detail'];
    if (hideNavRoutes.includes(path)) {
        bottomNav.style.display = 'none';
    } else {
        bottomNav.style.display = 'flex';
        updateNavActiveState(path);
    }

    const view = routes[path] || HomeView;
    
    // Animate exit if needed (simple fade out could go here)
    if (view && view.render) {
        appContainer.innerHTML = await view.render(id);
        // Add animation class
        appContainer.firstElementChild?.classList.add('page-enter');
        if (view.afterRender) {
            await view.afterRender();
        }
    }
}

function updateNavActiveState(hash) {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-route') === hash) {
            item.classList.add('active');
        }
    });
}

// Global UI Navigation Method
window.navigateTo = (path) => {
    window.location.hash = path;
};

// Event Listeners
window.addEventListener('hashchange', router);
window.addEventListener('load', router);

// Handle back button specifically for Location details
window.goBack = () => {
    window.history.back();
}
