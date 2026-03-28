const OnboardingView = {
    render: async () => {
        return `
            <div class="view-container onboarding-screen" style="padding: 40px 24px; height: 100vh; display: flex; flex-direction: column; justify-content: space-between; background-color: var(--soft-sand);">
                
                <div style="flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center;">
                    <h2 class="text-center" style="margin-bottom: 24px; color: var(--charcoal);">Discover Sacred Places</h2>
                    <div style="width: 100%; height: 250px; background: rgba(43, 43, 43, 0.05); border-radius: 16px; display: flex; align-items: center; justify-content: center; margin-bottom: 30px; border: 2px dashed var(--sage-teal);">
                        <i class="ph ph-mask-happy" style="font-size: 64px; color: var(--soft-aqua);"></i>
                    </div>
                    
                    <p class="text-center" style="color: var(--warm-grey); line-height: 1.6; font-size: 15px; margin-bottom: 20px;">
                        Embark on a journey of cultural discovery. <br/><br/>
                        Visit temples, mosques, churches and more. <br/><br/>
                        Earn points and unlock wisdom scrolls.
                    </p>
                </div>

                <div class="actions" style="display: flex; justify-content: space-between; align-items: center; width: 100%; gap: 16px; margin-bottom: 20px;">
                    <button class="btn-secondary" style="flex: 1;" onclick="window.navigateTo('/auth')">SKIP</button>
                    <button class="btn-primary" style="flex: 1;" onclick="window.navigateTo('/auth')">NEXT -></button>
                </div>
            </div>
        `;
    },
    afterRender: async () => {}
};

// UI module loaded
