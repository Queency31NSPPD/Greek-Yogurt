document.querySelector('.btn').addEventListener('click', function() {
        let name=prompt('What is your name?');

        if (name.length) {
            alert('Thanks, ' + name + ' , we will be in touch. Meanwhile, have a lot of Ice-cream!')
        }

        else {
            alert('No name, no Ice-cream for you!')
        }
    });