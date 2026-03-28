const mapPlaces = [
    { id: 'golden-temple', name: 'Golden Temple', type: 'Gurudwara', img: 'assets/images/golden_temple.png', top: '45%', left: '65%', color: 'var(--warm-gold)', icon: 'ph-church', dist: '0.2' },
    { id: 'jama-masjid', name: 'Jama Masjid', type: 'Mosque', img: 'assets/images/jama_masjid.png', top: '60%', left: '25%', color: 'var(--sage-teal)', icon: 'ph-mosque', dist: '1.5' },
    { id: 'st-pauls', name: "St. Paul's Church", type: 'Church', img: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect width='100%25' height='100%25' fill='%232F8F8B'/%3E%3Ctext x='50%25' y='50%25' font-size='48' text-anchor='middle' alignment-baseline='middle' fill='%23ffffff' font-family='sans-serif'%3ESt. Paul's Church%3C/text%3E%3C/svg%3E", top: '30%', left: '40%', color: 'var(--teal-blue)', icon: 'ph-synagogue', dist: '2.1' }, 
    { id: 'kashi-vishwanath', name: 'Kashi Vishwanath', type: 'Temple', img: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect width='100%25' height='100%25' fill='%23DDB874'/%3E%3Ctext x='50%25' y='50%25' font-size='48' text-anchor='middle' alignment-baseline='middle' fill='%23ffffff' font-family='sans-serif'%3EKashi Vishwanath%3C/text%3E%3C/svg%3E", top: '70%', left: '75%', color: 'var(--misty-mint)', icon: 'ph-hands-praying', dist: '12.4' },
    { id: 'bangla-sahib', name: 'Bangla Sahib', type: 'Gurudwara', img: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect width='100%25' height='100%25' fill='%235FAFA9'/%3E%3Ctext x='50%25' y='50%25' font-size='48' text-anchor='middle' alignment-baseline='middle' fill='%23ffffff' font-family='sans-serif'%3EBangla Sahib%3C/text%3E%3C/svg%3E", top: '40%', left: '50%', color: 'var(--pale-champagne)', icon: 'ph-star-four', dist: '4.2' },
    { id: 'lotus-temple', name: 'Lotus Temple', type: 'Temple', img: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect width='100%25' height='100%25' fill='%23A9CFC9'/%3E%3Ctext x='50%25' y='50%25' font-size='48' text-anchor='middle' alignment-baseline='middle' fill='%23ffffff' font-family='sans-serif'%3ELotus Temple%3C/text%3E%3C/svg%3E", top: '20%', left: '70%', color: 'var(--dusty-teal)', icon: 'ph-flower-lotus', dist: '8.1' }
];

const MapView = {
    render: async () => {
        return `
            <div class="view-container map-screen" style="position: relative; height: 100vh; background-color: #EAE6DF;">
                
                <!-- Mock Map Background -->
                <div style="position: absolute; top:0; left:0; right:0; bottom:0; overflow:hidden; z-index:0;">
                    <!-- Grid Lines -->
                    <div style="width: 100%; height: 100%; background-image: linear-gradient(var(--soft-sand) 1px, transparent 1px), linear-gradient(90deg, var(--soft-sand) 1px, transparent 1px); background-size: 50px 50px;"></div>
                    
                    <!-- Map Markers Container -->
                    <div id="map-markers-container"></div>
                    
                    <!-- User Location -->
                    <div class="user-marker" style="top: 50%; left: 50%;">
                        <div class="pulse"></div>
                    </div>
                </div>

                <!-- Search UI overlaid -->
                <div style="position: absolute; top: 0; left: 0; width: 100%; padding: 24px 20px; z-index: 10;">
                    <div style="display: flex; align-items: center; background: var(--white); border-radius: 12px; padding: 12px 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
                        <i class="ph ph-magnifying-glass" style="color: var(--warm-grey); font-size: 20px;"></i>
                        <input type="text" placeholder="Search places, religions, events..." style="border: none; outline: none; flex: 1; margin-left: 12px; font-size: 14px; font-family: var(--font-main);">
                        <i class="ph ph-faders" style="color: var(--teal-blue); font-size: 20px;"></i>
                    </div>
                    
                    <div style="display: flex; gap: 8px; margin-top: 12px; overflow-x: auto; padding-bottom: 4px; scrollbar-width: none;">
                        <span class="filter-chip active">All</span>
                        <span class="filter-chip">Temple</span>
                        <span class="filter-chip">Mosque</span>
                        <span class="filter-chip">Church</span>
                        <span class="filter-chip">Gurudwara</span>
                    </div>
                </div>

                <!-- Bottom Sheet -->
                <div style="position: absolute; bottom: 70px; left: 0; width: 100%; background: var(--white); border-top-left-radius: 24px; border-top-right-radius: 24px; padding: 20px; z-index: 10; box-shadow: 0 -4px 20px rgba(0,0,0,0.05); transition: transform 0.3s ease-out;">
                    <div style="width: 40px; height: 4px; background: var(--soft-sand); border-radius: 2px; margin: 0 auto 16px auto;"></div>
                    <h3 style="font-size: 16px; margin-bottom: 12px; color: var(--charcoal);">Nearby Places</h3>
                    
                    <!-- Horizontal Scroll Cards Container -->
                    <div id="map-cards-container" style="display: flex; gap: 12px; overflow-x: auto; padding-bottom: 8px; scrollbar-width: none;">
                        <!-- Cards injected via JS -->
                    </div>
                </div>

                <style>
                    .filter-chip {
                        background: var(--white);
                        border: 1px solid var(--soft-sand);
                        padding: 6px 16px;
                        border-radius: 20px;
                        font-size: 13px;
                        color: var(--warm-grey);
                        white-space: nowrap;
                    }
                    .filter-chip.active {
                        background: var(--teal-blue);
                        color: var(--white);
                        border-color: var(--teal-blue);
                    }
                    .place-card {
                        min-width: 140px;
                        border: 1px solid rgba(0,0,0,0.05);
                        padding: 8px;
                        border-radius: 12px;
                        cursor: pointer;
                        transition: transform 0.2s;
                    }
                    .place-card:active {
                        transform: scale(0.96);
                    }
                    .map-marker {
                        position: absolute;
                        width: 32px; height: 32px;
                        border-radius: 50%;
                        display: flex; align-items: center; justify-content: center;
                        color: white; font-size: 16px;
                        box-shadow: 0 4px 8px rgba(0,0,0,0.2);
                        transform: translate(-50%, -50%);
                        cursor: pointer;
                        transition: transform 0.2s;
                    }
                    .map-marker:active {
                        transform: translate(-50%, -50%) scale(0.9);
                    }
                    .user-marker {
                        position: absolute;
                        width: 16px; height: 16px;
                        background: #007AFF; /* standard blue dot */
                        border: 3px solid white;
                        border-radius: 50%;
                        transform: translate(-50%, -50%);
                        box-shadow: 0 2px 4px rgba(0,0,0,0.2);
                        z-index: 5;
                    }
                    .pulse {
                        position: absolute;
                        top: -15px; left: -15px; bottom: -15px; right: -15px;
                        background: rgba(0, 122, 255, 0.3);
                        border-radius: 50%;
                        animation: pulsing 2s infinite ease-out;
                    }
                    @keyframes pulsing {
                        0% { transform: scale(0.3); opacity: 1; }
                        100% { transform: scale(1); opacity: 0; }
                    }
                </style>
            </div>
        `;
    },
    afterRender: async () => {
        const chips = document.querySelectorAll('.filter-chip');
        const markersContainer = document.getElementById('map-markers-container');
        const cardsContainer = document.getElementById('map-cards-container');

        const renderData = (filterType) => {
            const filtered = filterType === 'All' ? mapPlaces : mapPlaces.filter(p => p.type === filterType);
            
            markersContainer.innerHTML = filtered.map(p => `
                <div class="map-marker slide-in" style="top: ${p.top}; left: ${p.left}; background: ${p.color};" onclick="window.navigateTo('/map/detail/${p.id}')">
                    <i class="ph ${p.icon}"></i>
                </div>
            `).join('');

            cardsContainer.innerHTML = filtered.map(p => `
                <div class="place-card slide-in" onclick="window.navigateTo('/map/detail/${p.id}')">
                    <div style="height: 80px; background: url('${p.img}') center/cover; border-radius: 8px; margin-bottom: 8px;"></div>
                    <h4 style="font-size: 14px; margin: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${p.name}</h4>
                    <p style="font-size: 12px; color: var(--warm-grey); margin: 2px 0 0 0;">${p.dist} km away</p>
                </div>
            `).join('');
        };

        // Inject initial data
        renderData('All');

        // Setup filter system
        chips.forEach(chip => {
            chip.addEventListener('click', (e) => {
                // Remove active classes
                chips.forEach(c => c.classList.remove('active'));
                // Add to clicked
                e.target.classList.add('active');
                // Re-render
                renderData(e.target.innerText.trim());
            });
        });
    }
};

// UI module loaded
