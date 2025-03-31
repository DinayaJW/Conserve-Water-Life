document.addEventListener('DOMContentLoaded', function() {
    // Select all elements with the class 'node' 
    const nodes = document.querySelectorAll('.node');
    nodes.forEach(node => {
        // adding a click event listener to nodes.
        node.addEventListener('click', function() {
            // obtaining the id of the different nodes clicked 
            const id = this.id;
            // using switch to link each node to the specific webpage. 
            switch(id) {
                case 'home':
                    window.location.href = 'home.html';
                    break;
                case 'gallery':
                    window.location.href = 'gallery.html';
                    break;
                case 'shop':
                    window.location.href = 'shop.html';
                    break;
                case 'team':
                    window.location.href = 'team.html';
                    break;
                case 'user-profile':
                    window.location.href = 'userprofile.html';
                    break;
                case 'feedback':
                    window.location.href = 'feedback.html';
                    break;
                case 'content':
                    window.location.href = 'content.html';
                    break;
                case 'overfishing':
                    window.location.href = 'overfishing.html';
                    break;
                case 'sea-creatures':
                    window.location.href = 'sea-creatures.html';
                    break;
                case 'saving-corals':
                    window.location.href = 'saving-corals.html';
                    break;
                case 'ocean-pollution':
                    window.location.href = 'ocean-pollution.html';
                    break;
                case 'student1':
                    window.location.href = 'student1.html';
                    break;
                case 'student2':
                    window.location.href = 'student2.html';
                    break;
                case 'student3':
                    window.location.href = 'student3.html';
                    break;
                case 'student4':
                    window.location.href = 'student4.html';
                    break;
            }
        });
    });
});