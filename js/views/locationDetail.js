const locationsDb = {
    'golden-temple': {
        name: 'Golden Temple, Amritsar',
        religion: 'Sikhism',
        rating: 4.9,
        distance: '0.2 km away',
        image: 'assets/images/golden_temple.png',
        desc: "The Golden Temple (Harmandir Sahib) is the holiest Gurdwara of Sikhism, located in the city of Amritsar, Punjab, India. <br/><br/>It is culturally significant as a symbol of human brotherhood and equality. Everybody, irrespective of cast, creed or race can seek spiritual solace and religious fulfilment without any hindrance."
    },
    'jama-masjid': {
        name: 'Jama Masjid, Delhi',
        religion: 'Islam',
        rating: 4.8,
        distance: '1.5 km away',
        image: 'assets/images/jama_masjid.png',
        desc: "The Masjid-i Jehan-Numa, commonly known as the Jama Masjid of Delhi, is one of the largest mosques in India. <br/><br/>It was built by the Mughal Emperor Shah Jahan between 1650 and 1656, and inaugurated by its first Imam, Syed Abdul Ghafoor Shah Bukhari."
    },
    'st-pauls': {
        name: "St. Paul's Church",
        religion: 'Christianity',
        rating: 4.7,
        distance: '2.1 km away',
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect width='100%25' height='100%25' fill='%232F8F8B'/%3E%3Ctext x='50%25' y='50%25' font-size='48' text-anchor='middle' alignment-baseline='middle' fill='%23ffffff' font-family='sans-serif'%3ESt. Paul's Church%3C/text%3E%3C/svg%3E",
        desc: "St. Paul's Church stands as a serene beacon of peace, known for its majestic Gothic architecture and exquisite stained glass windows. <br/><br/>It serves as a cultural gathering place for community prayers, choirs, and spiritual contemplation."
    },
    'kashi-vishwanath': {
        name: "Kashi Vishwanath",
        religion: 'Hinduism',
        rating: 4.9,
        distance: '12.4 km away',
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect width='100%25' height='100%25' fill='%23DDB874'/%3E%3Ctext x='50%25' y='50%25' font-size='48' text-anchor='middle' alignment-baseline='middle' fill='%23ffffff' font-family='sans-serif'%3EKashi Vishwanath%3C/text%3E%3C/svg%3E",
        desc: "Kashi Vishwanath Temple is one of the most famous Hindu temples dedicated to Lord Shiva. It is located in Varanasi, Uttar Pradesh, India. <br/><br/>The temple stands on the western bank of the holy river Ganga, and is one of the twelve Jyotirlingas, the holiest of Shiva temples."
    },
    'bangla-sahib': {
        name: "Gurudwara Bangla Sahib",
        religion: 'Sikhism',
        rating: 4.9,
        distance: '4.2 km away',
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect width='100%25' height='100%25' fill='%235FAFA9'/%3E%3Ctext x='50%25' y='50%25' font-size='48' text-anchor='middle' alignment-baseline='middle' fill='%23ffffff' font-family='sans-serif'%3EBangla Sahib%3C/text%3E%3C/svg%3E", 
        desc: "Gurudwara Bangla Sahib is one of the most prominent Sikh gurdwara, or Sikh house of worship, in Delhi, India. <br/><br/>It is known for its association with the eighth Sikh Guru, Guru Har Krishan, as well as the holy pond inside its complex, known as the Sarovar, whose water is considered holy by Sikhs and is known as Amrit."
    },
    'lotus-temple': {
        name: "Lotus Temple, Delhi",
        religion: "Baha'i Faith",
        rating: 4.6,
        distance: '8.1 km away',
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect width='100%25' height='100%25' fill='%23A9CFC9'/%3E%3Ctext x='50%25' y='50%25' font-size='48' text-anchor='middle' alignment-baseline='middle' fill='%23ffffff' font-family='sans-serif'%3ELotus Temple%3C/text%3E%3C/svg%3E",
        desc: "The Lotus Temple, located in Delhi, India, is a Bahá'í House of Worship that was dedicated in December 1986. <br/><br/>Notable for its flowerlike shape, it has become a prominent attraction in the city. Like all Bahá'í Houses of Worship, the Lotus Temple is open to all, regardless of religion or any other qualification."
    }
};

const LocationDetailView = {
    render: async (id) => {
        const place = locationsDb[id] || locationsDb['golden-temple'];
        
        return `
            <div class="view-container location-detail" style="height: 100vh; display: flex; flex-direction: column; background-color: var(--white); overflow-y: auto;">
                
                <!-- Back Button & Action Bar Overlay -->
                <div style="position: absolute; top: 0; left: 0; width: 100%; padding: 24px 20px; display: flex; justify-content: space-between; z-index: 10;">
                    <button class="icon-btn" onclick="window.goBack()" style="background: rgba(255,255,255,0.9); border: none; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 20px; color: var(--charcoal); box-shadow: 0 4px 10px rgba(0,0,0,0.1); cursor: pointer;">
                        <i class="ph ph-arrow-left"></i>
                    </button>
                    <button class="icon-btn" style="background: rgba(255,255,255,0.9); border: none; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 20px; color: var(--charcoal); box-shadow: 0 4px 10px rgba(0,0,0,0.1); cursor: pointer;">
                        <i class="ph ph-heart"></i>
                    </button>
                </div>

                <!-- Image Banner -->
                <div style="width: 100%; height: 280px; background: linear-gradient(to bottom, transparent, rgba(0,0,0,0.6)), url('${place.image}') no-repeat center center; background-size: cover; position: relative;">
                   <div style="position: absolute; bottom: 20px; left: 20px; color: white;">
                        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
                            <span style="background: var(--warm-gold); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 600; display: inline-flex; align-items: center; gap: 4px;"><i class="ph ph-star-fill"></i> ${place.rating}</span>
                            <span style="font-size: 13px;">${place.religion}</span>
                            <span style="font-size: 13px; opacity: 0.8;">• ${place.distance}</span>
                        </div>
                   </div>
                </div>

                <div style="padding: 24px 20px; flex: 1;">
                    <h1 style="font-size: 28px; color: var(--charcoal); margin: 0 0 16px 0;">${place.name}</h1>
                    
                    <!-- Tabs -->
                    <div style="display: flex; gap: 8px; margin-bottom: 24px; overflow-x: auto; scrollbar-width: none;">
                        <span class="tab-chip active">Info</span>
                        <span class="tab-chip">Rituals</span>
                        <span class="tab-chip">Do's & Don'ts</span>
                        <span class="tab-chip">Games</span>
                    </div>

                    <!-- Content Area -->
                    <div id="tab-content" style="color: var(--warm-grey); font-size: 15px; line-height: 1.6;">
                        ${place.desc}
                    </div>

                    <!-- Actions -->
                    <div style="margin-top: 32px; display: flex; gap: 12px; margin-bottom: 24px;">
                        <button class="btn-secondary" style="flex: 1; padding: 14px 0;"><i class="ph ph-headphones" style="margin-right: 8px;"></i> AUDIO</button>
                        <button class="btn-primary" style="flex: 2; display: flex; justify-content: space-between; padding: 14px 20px;" onclick="window.navigateTo('/games')">
                            PLAY GAME <i class="ph ph-play-circle" style="font-size: 20px;"></i>
                        </button>
                    </div>
                </div>

                <style>
                    .tab-chip {
                        padding: 8px 16px;
                        border-radius: 8px;
                        font-size: 14px;
                        font-weight: 500;
                        color: var(--warm-grey);
                        background: var(--light-bg);
                        cursor: pointer;
                        white-space: nowrap;
                    }
                    .tab-chip.active {
                        background: var(--teal-blue);
                        color: white;
                    }
                </style>
            </div>
        `;
    },
    afterRender: async () => {}
};

// UI module loaded
