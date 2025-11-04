document.addEventListener('DOMContentLoaded', () => {

    // --- Tool Database ---
    // This is our 'database' of tools.
    const toolsData = [
        {
            id: 'nmap',
            name: 'Nmap',
            category: 'Network Scanning',
            description: 'Nmap ("Network Mapper") is a free and open-source utility for network discovery and security auditing. It uses raw IP packets in novel ways to determine what hosts are available on the network, what services (application name and version) those hosts are offering, what operating systems (and OS versions) they are running, what type of packet filters/firewalls are in use, and dozens of other characteristics.',
            platforms: ['Windows', 'Linux', 'Mac'],
            link: 'https://nmap.org/',
            tags: ['Open-source', 'Beginner-friendly', 'Network'],
            pros: [
                'Extremely_powerful_and_versatile',
                'Industry_standard_for_network_mapping',
                'Strong_scripting_engine_(NSE)_for_custom_scans',
                'Excellent_documentation'
            ],
            cons: [
                'Scans_can_be_noisy_and_easily_detected',
                'Complex_syntax_can_be_intimidating_for_new_users',
                'Can_be_slow_on_very_large_networks'
            ]
        },
        {
            id: 'wireshark',
            name: 'Wireshark',
            category: 'Traffic Analysis',
            description: 'Wireshark is the world’s foremost and widely-used network protocol analyzer. It lets you see what’s happening on your network at a microscopic level. It is the de facto standard (and often de jure) across many industries and educational institutions.',
            platforms: ['Windows', 'Linux', 'Mac'],
            link: 'https://www.wireshark.org/',
            tags: ['Open-source', 'Beginner-friendly', 'Network', 'Forensics'],
            pros: [
                'Incredibly_detailed_packet_inspection',
                'Supports_a_vast_number_of_protocols',
                'Powerful_filtering_and_display_options',
                'Cross-platform_and_free'
            ],
            cons: [
                'Overwhelming_amount_of_data_for_beginners',
                'Cannot_analyze_encrypted_traffic_(without_keys)',
                'Can_be_resource-intensive_when_capturing_for_long_periods'
            ]
        },
        {
            id: 'burpsuite',
            name: 'Burp Suite',
            category: 'Web Security',
            description: 'Burp Suite is an integrated platform for performing security testing of web applications. Its various tools work seamlessly together to support the entire testing process, from initial mapping and analysis of an application\'s attack surface, through to finding and exploiting security vulnerabilities.',
            platforms: ['Windows', 'Linux', 'Mac'],
            link: 'https://portswigger.net/burp',
            tags: ['Paid', 'Free_Version', 'Web', 'Industry_Standard'],
            pros: [
                'All-in-one_toolset_for_web_pen-testing',
                'Powerful_and_intuitive_interception_proxy',
                'Excellent_extensibility_with_BApp_Store',
                'Scanner_is_highly_effective_(Pro_version)'
            ],
            cons: [
                'Pro_version_is_expensive',
                'Free_Community_Edition_is_heavily_limited',
                'Can_be_memory_intensive_(Java-based)'
            ]
        },
        {
            id: 'metasploit',
            name: 'Metasploit Framework',
            category: 'Exploitation',
            description: 'The Metasploit Framework is the world’s most used penetration testing framework. It provides information about security vulnerabilities and aids in penetration testing and IDS signature development. It comes with a massive database of exploits and payloads.',
            platforms: ['Windows', 'Linux', 'Mac'],
            link: 'https://www.metasploit.com/',
            tags: ['Open-source', 'Exploitation', 'Industry_Standard'],
            pros: [
                'Vast_library_of_exploits,_payloads,_and_modules',
                'Framework_structure_simplifies_complex_attacks',
                'Great_for_learning_exploitation_concepts',
                'Highly_extensible'
            ],
            cons: [
                'Can_be_complex_for_beginners_to_master',
                'Over-reliance_can_create_a_"script-kiddie"_mindset',
                'Pro_version_is_costly;_framework_requires_setup'
            ]
        },
        {
            id: 'owaspzap',
            name: 'OWASP ZAP',
            category: 'Web Security',
            description: 'The Zed Attack Proxy (ZAP) is one of the world’s most popular free security tools. It is an open-source web application security scanner that is actively maintained by a global community of volunteers. It can help you automatically find security vulnerabilities in your web applications while you are developing and testing your applications.',
            platforms: ['Windows', 'Linux', 'Mac'],
            link: 'https://www.zaproxy.org/',
            tags: ['Open-source', 'Beginner-friendly', 'Web'],
            pros: [
                'Completely_free_and_open-source',
                'Very_beginner-friendly_and_great_for_developers',
                'Powerful_automation_and_API_support',
                'Actively_maintained_by_OWASP'
            ],
            cons: [
                'Scanner_can_be_less_advanced_than_Burp_Pro',
                'UI_can_feel_a_bit_clunky_compared_to_Burp',
                'Can_generate_some_false_positives'
            ]
        },
        {
            id: 'hashcat',
            name: 'Hashcat',
            category: 'Password Tools',
            description: 'Hashcat is the world\'s fastest and most advanced password recovery utility. It supports five unique modes of attack for over 300 highly-optimized hashing algorithms. Hashcat supports a multitude of hashing algorithms, including MD5, SHA-1, SHA-256, NTLM, and many more.',
            platforms: ['Windows', 'Linux', 'Mac'],
            link: 'https://hashcat.net/hashcat/',
            tags: ['Open-source', 'Password_Cracking', 'GPU'],
            pros: [
                'Insanely_fast_due_to_GPU-based_cracking',
                'Supports_a_massive_list_of_hash_types',
                'Multiple_attack_modes_(dictionary,_brute-force,_mask,_etc.)',
                'Free_and_open-source'
            ],
            cons: [
                'Requires_a_powerful_GPU_for_best_results',
                'Steep_learning_curve_for_syntax_and_options',
                'Strictly_a_command-line_tool'
            ]
        },
        {
            id: 'john',
            name: 'John The Ripper',
            category: 'Password Tools',
            description: 'John the Ripper is a free and Open Source password security auditing and password recovery tool available for many operating systems. It\'s a very popular tool for password cracking and is often one of the first tools a security professional learns.',
            platforms: ['Windows', 'Linux', 'Mac'],
            link: 'https://www.openwall.com/john/',
            tags: ['Open-source', 'Beginner-friendly', 'Password_Cracking'],
            pros: [
                'Auto-detects_hash_types',
                'Cross-platform_and_widely_available',
                'Simpler_to_get_started_with_than_Hashcat',
                'Supports_many_hash_and_cipher_types'
            ],
            cons: [
                'Generally_slower_than_GPU-based_Hashcat',
                'Jumbo_version_(community-enhanced)_is_almost_required_for_modern_use',
                'Command-line_interface'
            ]
        },
        {
            id: 'shodan',
            name: 'Shodan',
            category: 'OSINT',
            description: 'Shodan is a search engine for Internet-connected devices. Unlike Google, which searches for web content, Shodan allows you to find specific types of devices (webcams, routers, servers, etc.) and services (like HTTP, SSH, FTP) running on them, often with default credentials.',
            platforms: ['Web'],
            link: 'https://www.shodan.io/',
            tags: ['Paid', 'Free_Tier', 'OSINT', 'Web'],
            pros: [
                'Invaluable_for_OSINT_and_reconnaissance',
                'Powerful_search_filters',
                'Provides_a_wealth_of_information_on_exposed_services',
                'API_access_for_automation'
            ],
            cons: [
                'Full_functionality_requires_a_paid_subscription',
                'Can_be_legally_grey_if_used_improperly',
                'Search_credits_on_free/low_tiers_are_limiting'
            ]
        },
        {
            id: 'ghidra',
            name: 'Ghidra',
            category: 'Reverse Engineering',
            description: 'Ghidra is a software reverse engineering (SRE) framework developed by the National Security Agency (NSA) of the United States. It was open-sourced in 2019 and includes a suite of full-featured, high-end software analysis tools that enable users to analyze compiled code on a variety of platforms.',
            platforms: ['Windows', 'Linux', 'Mac'],
            link: 'https://ghidra-sre.org/',
            tags: ['Open-source', 'Reverse_Engineering', 'NSA'],
            pros: [
                'Completely_free_and_open-source',
                'Extremely_powerful_decompiler_(rivals_IDA_Pro)',
                'Supports_a_wide_range_of_architectures',
                'Collaborative_project_features'
            ],
            cons: [
                'Steep_learning_curve',
                'Can_be_resource-intensive_(Java-based)',
                'UI_can_be_less_polished_than_commercial_alternatives'
            ]
        },
        {
            id: 'sqlmap',
            name: 'SQLmap',
            category: 'Exploitation',
            description: 'sqlmap is an open source penetration testing tool that automates the process of detecting and exploiting SQL injection flaws and taking over of database servers. It comes with a powerful detection engine, many niche features for the ultimate penetration tester, and a broad range of switches lasting from database fingerprinting, over data fetching from the database, to accessing the underlying file system and executing commands on the OS.',
            platforms: ['Windows', 'Linux', 'Mac'],
            link: 'http://sqlmap.org/',
            tags: ['Open-source', 'Web', 'Exploitation', 'Database'],
            pros: [
                'Automates_SQL_injection_detection_and_exploitation',
                'Supports_a_vast_range_of_database_systems',
                'Can_dump_databases,_tables,_and_even_get_a_shell',
                'Highly_effective_and_widely_used'
            ],
            cons: [
                'Strictly_a_command-line_tool',
                'Can_be_very_noisy_and_trigger_WAF/IDS',
                'Over-reliance_prevents_learning_manual_SQLi'
            ]
        }
    ];

    // --- DOM Element Selection ---
    const preloader = document.getElementById('preloader');
    const appContent = document.getElementById('app-content');
    const themeToggle = document.getElementById('theme-toggle');
    const toolsGrid = document.getElementById('tools-grid');
    const searchBar = document.getElementById('search-bar');
    const noResults = document.getElementById('no-results');
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');
    const modalClose = document.getElementById('modal-close');
    const modalBody = document.getElementById('modal-body');
    const fadeSections = document.querySelectorAll('.fade-in-section');

    // --- Theme Toggle Logic ---
    const lightIcon = '<i class="ri-sun-line"></i>';
    const darkIcon = '<i class="ri-moon-line"></i>';

    function applyTheme(theme) {
        if (theme === 'light') {
            document.documentElement.dataset.theme = 'light';
            document.documentElement.classList.remove('dark');
            themeToggle.innerHTML = darkIcon;
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.removeAttribute('data-theme');
            document.documentElement.classList.add('dark');
            themeToggle.innerHTML = lightIcon;
            localStorage.setItem('theme', 'dark');
        }
    }

    themeToggle.addEventListener('click', () => {
        const currentTheme = localStorage.getItem('theme') || 'dark';
        applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
    });

    // --- Preloader & Initial Theme ---
    window.addEventListener('load', () => {
        // Set initial theme
        const savedTheme = localStorage.getItem('theme') || 'dark';
        applyTheme(savedTheme);

        // Hide preloader
        preloader.classList.add('loaded');
        appContent.style.display = 'block';
        setTimeout(() => {
            preloader.style.display = 'none';
            // Trigger initial scroll check
            observeSections();
        }, 500);
    });

    // --- Tool Rendering Logic ---
    function renderTools(tools) {
        toolsGrid.innerHTML = '';
        if (tools.length === 0) {
            noResults.classList.remove('hidden');
            return;
        }
        noResults.classList.add('hidden');

        tools.forEach(tool => {
            const toolCard = document.createElement('div');
            toolCard.className = 'card p-6 cursor-pointer flex flex-col justify-between';
            toolCard.dataset.id = tool.id;

            const tagsHtml = tool.tags.map(tag => 
                `<span class="text-xs font-medium mr-2 px-2.5 py-0.5 rounded ${tag.toLowerCase() === 'open-source' ? 'bg-green-900 text-green-300' : tag.toLowerCase() === 'paid' ? 'bg-red-900 text-red-300' : 'bg-blue-900 text-blue-300'}">${tag.replace(/_/g, ' ')}</span>`
            ).join('');

            toolCard.innerHTML = `
                <div>
                    <h3 class="text-xl font-semibold mb-2">${tool.name}</h3>
                    <p class="text-[var(--text-secondary)] mb-4 text-sm">${tool.category}</p>
                    <div class="flex flex-wrap gap-1">
                        ${tagsHtml}
                    </div>
                </div>
            `;
            toolsGrid.appendChild(toolCard);
        });
    }

    // --- Search Filter Logic ---
    searchBar.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredTools = toolsData.filter(tool =>
            tool.name.toLowerCase().includes(searchTerm) ||
            tool.category.toLowerCase().includes(searchTerm) ||
            tool.tags.join(' ').toLowerCase().includes(searchTerm) ||
            tool.description.toLowerCase().includes(searchTerm)
        );
        renderTools(filteredTools);
    });

    // --- Modal Logic ---
    function openModal(toolId) {
        const tool = toolsData.find(t => t.id === toolId);
        if (!tool) return;

        const platformsHtml = tool.platforms.map(p => 
            `<span class="text-sm font-medium mr-2 px-2.5 py-0.5 rounded bg-[var(--border-color)] text-[var(--text-secondary)]">${p}</span>`
        ).join('');

        const prosHtml = tool.pros.map(pro => 
            `<li class="flex items-start"><i class="ri-check-line text-green-400 mr-2 mt-1 shrink-0"></i> ${pro.replace(/_/g, ' ')}</li>`
        ).join('');
        
        const consHtml = tool.cons.map(con => 
            `<li class="flex items-start"><i class="ri-close-line text-red-400 mr-2 mt-1 shrink-0"></i> ${con.replace(/_/g, ' ')}</li>`
        ).join('');

        modalBody.innerHTML = `
            <h2 id="modal-title" class="text-2xl font-bold mb-2">${tool.name}</h2>
            <p class="text-sm text-[var(--text-secondary)] mb-4">${tool.category}</p>
            <div class="flex flex-wrap gap-2 mb-4">${platformsHtml}</div>
            
            <h4 class="font-semibold mb-2 mt-4">Description</h4>
            <p class="text-[var(--text-secondary)] text-sm mb-4">${tool.description}</p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                    <h4 class="font-semibold mb-2 text-green-400">Pros</h4>
                    <ul class="text-sm text-[var(--text-secondary)] space-y-1">${prosHtml}</ul>
                </div>
                <div>
                    <h4 class="font-semibold mb-2 text-red-400">Cons</h4>
                    <ul class="text-sm text-[var(--text-secondary)] space-y-1">${consHtml}</ul>
                </div>
            </div>

            <a href="${tool.link}" target="_blank" rel="noopener noreferrer" class="btn-primary inline-flex items-center">
                Visit Official Website <i class="ri-external-link-line ml-2"></i>
            </a>
        `;

        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    function closeModal() {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }

    // Modal event listeners
    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        // Close if backdrop is clicked
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Event delegation for opening modal
    toolsGrid.addEventListener('click', (e) => {
        const card = e.target.closest('.card');
        if (card && card.dataset.id) {
            openModal(card.dataset.id);
        }
    });

    // --- Scroll Animation Observer ---
    function observeSections() {
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 }); // Trigger when 10% is visible

            fadeSections.forEach(section => {
                observer.observe(section);
            });
        } else {
            // Fallback for older browsers
            fadeSections.forEach(section => {
                section.classList.add('visible');
            });
        }
    }

    // --- Initial Call ---
    renderTools(toolsData);
    // Note: observeSections() is called on window.onload
});