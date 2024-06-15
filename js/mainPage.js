fetch('data/publishTasks.json')
    .then(response => response.json())
    .then(tasksData => {
        const cardsContainer = document.getElementById('cards-container');

        tasksData.forEach(task => {
            const card = createCard(task);
            cardsContainer.appendChild(card);
        });
    });

function createCard(task) {
    const card = document.createElement('div');
    card.className = 'card';

    // Determine the lamp icon color based on the task status
    let lampIconClass;
    if (task.status === '1') {
        lampIconClass = 'lamp-icon-red';
    } else if (task.status === '2') {
        lampIconClass = 'lamp-icon-yellow';
    } else if (task.status === '3') {
        lampIconClass = 'lamp-icon-green';
    }

    card.innerHTML = `
        <div class="card-header">
            <i class="fas fa-lightbulb ${lampIconClass}"></i>
            <div class="coins-info">
                <span>${task.coins}</span>
                <i id="coins" class="fas fa-coins"></i>
            </div>
        </div>
        <div class="card-body">
            <h3>${task.name}</h3>
        </div>
        <div class="card-footer">
            <p>Assigned to: ${task.assignedTo}</p>
            <p>Deadline: ${task.deadline}</p>
        </div>
    `;

    return card;
}
