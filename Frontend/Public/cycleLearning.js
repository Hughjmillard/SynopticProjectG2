const nextPage = () => {
    console.log('next page');
    const current = document.querySelector('.edcontent.active');

    if (current) {
        current.classList.remove('active');

        let type = current.id.split('-')[0];
        let index = parseInt(current.id.split('-')[1]);

        let nextIndex = index + 1;
        let next = document.getElementById(`${type}-${nextIndex}`);

        if (nextIndex >= 4) {
            nextIndex = 1;
            next = document.getElementById(`${type}-${nextIndex}`);
        }

        if (next) {
            next.classList.add('active');
        }
        console.log(nextIndex);
    }
}

const openLearning = (id) => {
    let learning = document.getElementById(id);
    if (learning) {
        learning.classList.add('active');
        let firstChild = learning.querySelector('.edcontent');
        if (firstChild) {
            firstChild.classList.add('active');
        }
    }
};

const closeLearning = (id) => {
    const elements = document.querySelectorAll('.education');
    
    elements.forEach(element => {
        element.classList.remove('active');
        let allDescendants = element.querySelectorAll('*');
        allDescendants.forEach(descendant => {
            descendant.classList.remove('active');
        });
    });
};


// document.addEventListener('DOMContentLoaded', () => {
//     let vid1 = document.getElementById('vid1');
//     let vid2 = document.getElementById('vid2');

//     vid1.onpause();
