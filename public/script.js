window.onload = function() {
    fetchStories();
};

function fetchStories() {
    fetch('/getTimeStories')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch stories');
            }
            return response.json();
        })
        .then(data => {
            displayStories(data);
        })
        .catch(error => {
            console.error('Error:', error.message);
        });
}

function displayStories(stories) {
    const storiesContainer = document.getElementById('stories');
    stories.forEach(story => {
        const storyElement = document.createElement('div');
        storyElement.classList.add('story');
        storyElement.innerHTML = `<a href="${story.link}" target="_blank">${story.title}</a>`;
        storiesContainer.appendChild(storyElement);
    });
}
