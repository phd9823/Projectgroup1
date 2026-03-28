const EventsView = {
    render: async () => {
        return `
            <div class="view-container events-screen" style="padding: 24px 20px; background-color: var(--light-bg); min-height: 100vh;">
                <header style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; padding-top: 10px;">
                    <h2 style="font-size: 20px; margin: 0; color: var(--teal-blue);">FESTIVALS OF HARMONY</h2>
                    <button style="background: transparent; border: none; font-size: 24px; color: var(--charcoal);"><i class="ph ph-magnifying-glass"></i></button>
                </header>

                <div class="event-card" style="background: var(--white); border-radius: 20px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05); margin-bottom: 24px;">
                    <div style="height: 160px; background: linear-gradient(to right, rgba(221, 184, 116, 0.4), rgba(47, 143, 139, 0.4)), url('https://images.unsplash.com/photo-1543888796-03774618a803?q=80&w=600&auto=format&fit=crop') center/cover;">
                        <!-- Image placeholder for Diwali / Festival of Unity -->
                    </div>
                    
                    <div style="padding: 20px;">
                        <span style="background: rgba(95, 175, 169, 0.15); color: var(--soft-aqua); padding: 4px 10px; border-radius: 12px; font-size: 11px; font-weight: 700; text-transform: uppercase;">Global Event</span>
                        <h3 style="margin: 12px 0 8px 0; font-size: 20px; color: var(--charcoal);">Diwali of Unity 2026</h3>
                        <p style="color: var(--warm-grey); font-size: 14px; margin: 0 0 16px 0; display: flex; align-items: center; gap: 6px;">
                            <i class="ph ph-calendar-blank"></i> Oct 28 - Nov 5
                        </p>
                        <p style="color: var(--charcoal); font-size: 14px; line-height: 1.6; margin-bottom: 24px;">
                            Join millions celebrating the Festival of Lights across all faiths. Complete cultural missions, earn special badges, and spread harmony.
                        </p>
                        
                        <button class="btn-primary" style="width: 100%;">
                            JOIN EVENT <i class="ph ph-arrow-right"></i>
                        </button>
                    </div>
                </div>

                <div class="event-card" style="background: var(--white); border-radius: 20px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
                    <div style="height: 160px; background: linear-gradient(to right, rgba(95, 175, 169, 0.4), rgba(169, 207, 201, 0.4)), url('https://images.unsplash.com/photo-1563204990-2bf36271a396?q=80&w=600&auto=format&fit=crop') center/cover;">
                        <!-- Placeholder -->
                    </div>
                    <div style="padding: 20px;">
                        <span style="background: rgba(47, 143, 139, 0.15); color: var(--teal-blue); padding: 4px 10px; border-radius: 12px; font-size: 11px; font-weight: 700; text-transform: uppercase;">Upcoming</span>
                        <h3 style="margin: 12px 0 8px 0; font-size: 20px; color: var(--charcoal);">Christmas Peace Drive</h3>
                        <p style="color: var(--warm-grey); font-size: 14px; margin: 0 0 16px 0; display: flex; align-items: center; gap: 6px;">
                            <i class="ph ph-calendar-blank"></i> Dec 20 - Dec 26
                        </p>
                    </div>
                </div>
            </div>
        `;
    },
    afterRender: async () => {}
};

// UI module loaded
