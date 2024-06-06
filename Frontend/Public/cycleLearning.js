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
        console.log(nextIndex)
    }

}