const AuthView = {
    render: async () => {
        return `
            <div class="view-container auth-screen" style="padding: 40px 24px; height: 100vh; display: flex; flex-direction: column; background-color: var(--soft-sand);">
                <div style="flex: 1; display: flex; flex-direction: column; align-items: center; margin-top: 40px;">
                    <h2 style="margin-bottom: 32px; color: var(--teal-blue);">Login / Sign Up</h2>
                    
                    <div style="width: 80px; height: 80px; border-radius: 20px; background: var(--misty-mint); display: flex; align-items: center; justify-content: center; margin-bottom: 40px; box-shadow: 0 4px 12px rgba(47, 143, 139, 0.2);">
                        <i class="ph ph-flower-lotus" style="font-size: 40px; color: var(--teal-blue);"></i>
                    </div>
                    
                    <form id="auth-form" class="w-100" style="display: flex; flex-direction: column; gap: 16px; margin-bottom: 24px;">
                        <div class="input-group" style="margin-bottom: 0;">
                            <input type="email" id="email" class="input-field" placeholder="Email address" required>
                        </div>
                        <div class="input-group" style="margin-bottom: 0;">
                            <input type="password" id="password" class="input-field" placeholder="Password" required>
                        </div>
                        
                        <button type="submit" class="btn-primary mt-2">LOG IN</button>
                    </form>

                    <div style="width: 100%; display: flex; justify-content: space-between; font-size: 13px;">
                        <a href="#" style="color: var(--dusty-teal); text-decoration: none;">Forgot password?</a>
                        <a href="#" style="color: var(--teal-blue); font-weight: 600; text-decoration: none;">Sign Up</a>
                    </div>

                    <div style="display: flex; align-items: center; width: 100%; margin: 32px 0;">
                        <div style="flex: 1; height: 1px; background: rgba(0,0,0,0.1);"></div>
                        <span style="padding: 0 16px; color: var(--warm-grey); font-size: 14px;">or continue with</span>
                        <div style="flex: 1; height: 1px; background: rgba(0,0,0,0.1);"></div>
                    </div>

                    <button type="button" class="btn-secondary" style="display: flex; align-items: center; justify-content: center; gap: 8px; border-color: rgba(0,0,0,0.1); color: var(--charcoal); background: var(--white);" onclick="window.navigateTo('/')">
                        <i class="ph ph-google-logo" style="font-size: 20px; color: #DB4437;"></i>
                        Google Sign-in
                    </button>
                </div>
            </div>
        `;
    },
    afterRender: async () => {
        const form = document.getElementById('auth-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Mock authentication, route to Home
            window.location.hash = '/';
        });
    }
};

// UI module loaded
