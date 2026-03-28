const HomeView = {
    render: async () => {
        return `
            <div class="view-container home-screen" style="padding: 24px 20px; background-color: var(--light-bg); min-height: 100vh;">
                <!-- Target Header -->
                <header style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; padding-top: 10px;">
                    <div style="display: flex; align-items: center; gap: 12px;">
                        <div style="width: 40px; height: 40px; border-radius: 12px; background: var(--teal-blue); color: white; display: flex; align-items: center; justify-content: center; font-size: 24px;">
                            <i class="ph ph-flower-lotus"></i>
                        </div>
                        <h2 style="font-size: 20px; margin: 0; color: var(--teal-blue);">HARMONY MAP</h2>
                    </div>
                    <button style="background: transparent; border: none; font-size: 28px; color: var(--charcoal);"><i class="ph ph-bell"></i></button>
                </header>

                <!-- User Stats Card -->
                <div style="background: var(--white); border-radius: 20px; padding: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.03); margin-bottom: 24px; position: relative; overflow: hidden;">
                    <div style="position: absolute; right: -20px; top: -20px; font-size: 150px; color: var(--misty-mint); opacity: 0.2;">
                        <i class="ph ph-star"></i>
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 12px;">
                        <div>
                            <p style="color: var(--warm-grey); font-size: 13px; font-weight: 600; text-transform: uppercase;">Points: 1,240</p>
                            <h3 style="font-size: 24px; color: var(--charcoal); margin: 4px 0;">Lvl 5 Explorer</h3>
                        </div>
                        <div style="width: 48px; height: 48px; background: var(--warm-gold); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white;">
                             <i class="ph ph-medal" style="font-size: 24px;"></i>
                        </div>
                    </div>
                    <p style="font-size: 13px; color: var(--warm-grey); margin-bottom: 8px;">Harmony Level</p>
                    <div style="width: 100%; height: 8px; background: rgba(0,0,0,0.05); border-radius: 4px; overflow: hidden;">
                        <div style="width: 70%; height: 100%; background: var(--teal-blue); border-radius: 4px;"></div>
                    </div>
                </div>

                <!-- CTA -->
                <button class="btn-primary" style="margin-bottom: 32px; background: linear-gradient(135deg, var(--teal-blue), var(--soft-aqua)); box-shadow: 0 4px 12px rgba(47, 143, 139, 0.3);" onclick="window.navigateTo('/map')">
                    START YOUR JOURNEY <i class="ph ph-arrow-right"></i>
                </button>

                <!-- Activities -->
                <h3 style="font-size: 18px; margin-bottom: 16px; color: var(--charcoal);">Today's Activities</h3>
                <div style="display: flex; gap: 16px; margin-bottom: 24px;">
                    <!-- Quest Card -->
                    <div style="flex: 1; background: var(--white); border-radius: 16px; padding: 16px; border: 1.5px solid var(--soft-sand); cursor: pointer;" onclick="window.navigateTo('/games')">
                        <div style="width: 40px; height: 40px; border-radius: 10px; background: rgba(221, 184, 116, 0.15); color: var(--warm-gold); display: flex; align-items: center; justify-content: center; margin-bottom: 12px;">
                             <i class="ph ph-scroll" style="font-size: 20px;"></i>
                        </div>
                        <h4 style="font-size: 15px; margin-bottom: 4px;">Daily Quest</h4>
                        <p style="font-size: 13px; color: var(--warm-grey); margin: 0;">3 tasks remaining</p>
                    </div>

                    <!-- Festival Card -->
                    <div style="flex: 1; background: var(--white); border-radius: 16px; padding: 16px; border: 1.5px solid var(--soft-sand); cursor: pointer;" onclick="window.navigateTo('/events')">
                        <div style="width: 40px; height: 40px; border-radius: 10px; background: rgba(95, 175, 169, 0.15); color: var(--soft-aqua); display: flex; align-items: center; justify-content: center; margin-bottom: 12px;">
                             <i class="ph ph-confetti" style="font-size: 20px;"></i>
                        </div>
                        <h4 style="font-size: 15px; margin-bottom: 4px;">Festival</h4>
                        <p style="font-size: 13px; color: var(--warm-grey); margin: 0;">Diwali in 2d</p>
                    </div>
                </div>
            </div>
        `;
    },
    afterRender: async () => {}
};

// UI module loaded
