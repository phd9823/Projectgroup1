const GamesView = {
    render: async () => {
        return `
            <div class="view-container games-screen" style="padding: 24px 20px; background-color: var(--light-bg); min-height: 100vh;">
                <header style="display: flex; justify-content: center; align-items: center; margin-bottom: 24px; padding-top: 10px; position: relative;">
                    <button style="position: absolute; left: 0; background: transparent; border: none; font-size: 24px; color: var(--charcoal);" onclick="window.goBack()">
                        <i class="ph ph-caret-left"></i>
                    </button>
                    <h2 style="font-size: 18px; margin: 0; color: var(--charcoal); letter-spacing: 1px;">MINI GAMES</h2>
                </header>

                <div class="games-list" style="display: flex; flex-direction: column; gap: 16px;">
                    
                    <div class="game-card">
                        <div class="game-icon" style="background: rgba(47, 143, 139, 0.1); color: var(--teal-blue);">
                            <i class="ph ph-map-trifold"></i>
                        </div>
                        <div class="game-info">
                            <h4>Cultural Discovery Hunt</h4>
                            <p>+200 pts</p>
                        </div>
                        <button class="btn-play">PLAY</button>
                    </div>

                    <div class="game-card">
                        <div class="game-icon" style="background: rgba(95, 175, 169, 0.1); color: var(--soft-aqua);">
                            <i class="ph ph-puzzle-piece"></i>
                        </div>
                        <div class="game-info">
                            <h4>Symbol Match</h4>
                            <p>+150 pts</p>
                        </div>
                        <button class="btn-play">PLAY</button>
                    </div>

                    <div class="game-card">
                        <div class="game-icon" style="background: rgba(221, 184, 116, 0.1); color: var(--warm-gold);">
                            <i class="ph ph-soup"></i>
                        </div>
                        <div class="game-info">
                            <h4>Langar Challenge</h4>
                            <p>+300 pts</p>
                        </div>
                        <button class="btn-play">PLAY</button>
                    </div>

                    <div class="game-card">
                        <div class="game-icon" style="background: rgba(143, 183, 174, 0.1); color: var(--sage-teal);">
                            <i class="ph ph-handshake"></i>
                        </div>
                        <div class="game-info">
                            <h4>Peace Builder</h4>
                            <p>+100 pts</p>
                        </div>
                        <button class="btn-play">PLAY</button>
                    </div>
                </div>

                <style>
                    .game-card {
                        display: flex;
                        align-items: center;
                        background: var(--white);
                        padding: 16px;
                        border-radius: 16px;
                        box-shadow: 0 4px 12px rgba(0,0,0,0.03);
                        border: 1px solid rgba(0,0,0,0.02);
                    }
                    .game-icon {
                        width: 48px; height: 48px;
                        border-radius: 12px;
                        display: flex; align-items: center; justify-content: center;
                        font-size: 24px;
                        margin-right: 16px;
                    }
                    .game-info {
                        flex: 1;
                    }
                    .game-info h4 {
                        font-size: 15px; margin: 0 0 4px 0; color: var(--charcoal);
                    }
                    .game-info p {
                        font-size: 12px; color: var(--warm-gold); margin: 0; font-weight: 600;
                    }
                    .btn-play {
                        background: var(--charcoal);
                        color: white;
                        border: none;
                        padding: 8px 16px;
                        border-radius: 8px;
                        font-size: 12px; font-weight: 600;
                        cursor: pointer;
                    }
                </style>
            </div>
        `;
    },
    afterRender: async () => {}
};

// UI module loaded
