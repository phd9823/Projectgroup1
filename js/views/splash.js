const SplashView = {
    render: async () => {
        return `
            <div class="view-container splash-screen" style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; background-color: var(--soft-sand);">
                <div class="logo-container" style="text-align: center;">
                    <!-- Placeholder for logo. Assuming we use a CSS drawn lotus or direct image -->
                    <div style="font-size: 80px; color: var(--teal-blue); margin-bottom: 20px;">
                        <i class="ph ph-flower-lotus"></i>
                    </div>
                    <h1 style="color: var(--teal-blue); margin-bottom: 8px;">HarmonyMap</h1>
                    <p style="color: var(--warm-grey); font-size: 14px;">Explore. Learn. Unite.</p>
                </div>
                <div style="position: absolute; bottom: 50px; width: 60%; height: 4px; background: rgba(0,0,0,0.1); border-radius: 4px; overflow: hidden;">
                    <div style="height: 100%; width: 50%; background: var(--teal-blue); animation: load 2s infinite linear;"></div>
                </div>
                <style>
                    @keyframes load { 0% { transform: translateX(-100%); } 100% { transform: translateX(200%); } }
                </style>
            </div>
        `;
    },
    afterRender: async () => {
        // Automatically navigate to onboarding after 2 seconds
        setTimeout(() => {
            window.location.hash = '/onboarding';
        }, 2000);
    }
};

// UI module loaded
