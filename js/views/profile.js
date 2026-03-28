const ProfileView = {
    render: async () => {
        return `
            <div class="view-container profile-screen" style="padding: 24px 20px; background-color: var(--white); min-height: 100vh;">
                <header style="display: flex; justify-content: center; align-items: center; margin-bottom: 32px; padding-top: 10px; position: relative;">
                    <h2 style="font-size: 18px; margin: 0; color: var(--charcoal); letter-spacing: 1px;">MY PROFILE</h2>
                    <button style="position: absolute; right: 0; background: transparent; border: none; font-size: 24px; color: var(--charcoal);">
                        <i class="ph ph-gear"></i>
                    </button>
                </header>

                <!-- Avatar & Name -->
                <div style="display: flex; flex-direction: column; align-items: center; margin-bottom: 32px;">
                    <div style="width: 100px; height: 100px; border-radius: 50%; background: linear-gradient(135deg, var(--misty-mint), var(--soft-aqua)); border: 4px solid var(--white); box-shadow: 0 8px 20px rgba(0,0,0,0.1); margin-bottom: 16px; display: flex; align-items: center; justify-content: center; font-size: 40px; color: var(--white);">
                        <i class="ph ph-user"></i>
                    </div>
                    <h3 style="font-size: 24px; margin: 0 0 4px 0; color: var(--charcoal);">Arjun Sharma</h3>
                    <p style="color: var(--teal-blue); font-size: 14px; font-weight: 500; margin: 0;">Level 5 — Cultural Explorer</p>
                </div>

                <!-- Statistics Grid -->
                <h4 style="font-size: 14px; text-transform: uppercase; letter-spacing: 1px; color: var(--warm-grey); margin-bottom: 16px;">Statistics</h4>
                <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; margin-bottom: 32px;">
                    <div class="stat-card" style="background: var(--light-bg); border-radius: 16px; padding: 16px; text-align: center; border: 1px solid rgba(0,0,0,0.03);">
                        <h2 style="font-size: 22px; margin: 0 0 4px 0; color: var(--charcoal);">1,240</h2>
                        <p style="font-size: 12px; color: var(--warm-grey); margin: 0; font-weight: 500;">Points</p>
                    </div>
                    <div class="stat-card" style="background: var(--light-bg); border-radius: 16px; padding: 16px; text-align: center; border: 1px solid rgba(0,0,0,0.03);">
                        <h2 style="font-size: 22px; margin: 0 0 4px 0; color: var(--charcoal);">8</h2>
                        <p style="font-size: 12px; color: var(--warm-grey); margin: 0; font-weight: 500;">Badges</p>
                    </div>
                    <div class="stat-card" style="background: var(--light-bg); border-radius: 16px; padding: 16px; text-align: center; border: 1px solid rgba(0,0,0,0.03);">
                        <h2 style="font-size: 22px; margin: 0 0 4px 0; color: var(--charcoal);">12</h2>
                        <p style="font-size: 12px; color: var(--warm-grey); margin: 0; font-weight: 500;">Scrolls</p>
                    </div>
                </div>

                <!-- Harmony Level Progress -->
                <h4 style="font-size: 14px; text-transform: uppercase; letter-spacing: 1px; color: var(--warm-grey); margin-bottom: 16px;">Harmony Level Progress</h4>
                <div style="background: var(--light-bg); border-radius: 16px; padding: 20px; border: 1px solid rgba(0,0,0,0.03);">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 12px;">
                        <span style="font-size: 14px; font-weight: 600; color: var(--teal-blue);">Lvl 5</span>
                        <span style="font-size: 14px; font-weight: 600; color: var(--warm-grey);">Lvl 6</span>
                    </div>
                    <div style="width: 100%; height: 10px; background: rgba(0,0,0,0.05); border-radius: 5px; overflow: hidden; margin-bottom: 12px;">
                        <div style="width: 70%; height: 100%; background: linear-gradient(90deg, var(--teal-blue), var(--soft-aqua)); border-radius: 5px;"></div>
                    </div>
                    <p style="font-size: 12px; color: var(--warm-grey); margin: 0; text-align: center;">160 pts away from next level</p>
                </div>

            </div>
        `;
    },
    afterRender: async () => {}
};

// UI module loaded
