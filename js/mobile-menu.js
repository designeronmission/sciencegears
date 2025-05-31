/* mobile menu */

        document.addEventListener('DOMContentLoaded', function () {
            const menuToggle = document.getElementById('menuToggle');
            const menuContainer = document.getElementById('menuContainer');

            // Toggle main menu visibility
            menuToggle.addEventListener('click', function (e) {
                e.stopPropagation();
                this.classList.toggle('active');
                menuContainer.classList.toggle('show');
            });

            // Close menu when clicking outside
            document.addEventListener('click', function (e) {
                if (!menuContainer.contains(e.target)) {
                    menuContainer.classList.remove('show');
                    menuToggle.classList.remove('active');
                }
            });

            // Handle menu headers (main categories)
            const menuHeaders = document.querySelectorAll('.menu-header');
            menuHeaders.forEach(header => {
                header.addEventListener('click', function (e) {
                    e.stopPropagation();

                    // Close other open menus if this one isn't active
                    if (!this.classList.contains('active')) {
                        document.querySelectorAll('.menu-header.active').forEach(activeHeader => {
                            activeHeader.classList.remove('active');
                            activeHeader.nextElementSibling.classList.remove('show');
                        });
                    }

                    // Toggle current menu
                    this.classList.toggle('active');
                    const submenu = this.nextElementSibling;
                    submenu.classList.toggle('show');

                    // Rotate chevron icon
                    const icon = this.querySelector('.toggle-icon');
                    icon.classList.toggle('fa-chevron-down');
                    icon.classList.toggle('fa-chevron-up');
                });
            });

            // Handle nested menu toggles
            const nestedToggles = document.querySelectorAll('.nested-toggle');
            nestedToggles.forEach(toggle => {
                toggle.addEventListener('click', function (e) {
                    e.stopPropagation();
                    const nestedSubmenu = this.nextElementSibling;
                    nestedSubmenu.classList.toggle('show');

                    // Rotate chevron icon
                    const icon = this.querySelector('.toggle-icon');
                    icon.classList.toggle('fa-chevron-down');
                    icon.classList.toggle('fa-chevron-up');
                });
            });

            // Handle second level deep nested menu toggles
            const deepNestedToggles = document.querySelectorAll('.deep-nested-toggle');
            deepNestedToggles.forEach(toggle => {
                toggle.addEventListener('click', function (e) {
                    e.stopPropagation();
                    const deepNestedSubmenu = this.nextElementSibling;
                    deepNestedSubmenu.classList.toggle('show');

                    // Rotate chevron icon
                    const icon = this.querySelector('.toggle-icon');
                    icon.classList.toggle('fa-chevron-down');
                    icon.classList.toggle('fa-chevron-up');
                });
            });


            // Close menu when a link is clicked (optional)
            const menuLinks = document.querySelectorAll('.submenu-item:not(.nested-toggle):not(.deep-nested-toggle), .nested-item:not(.deep-nested-toggle), .deep-nested-item');
            menuLinks.forEach(link => {
                if (link.getAttribute('href')) {
                    link.addEventListener('click', function () {
                        menuContainer.style.display = 'none';
                        menuTrigger.classList.remove('active');
                    });
                }
            });
        });

