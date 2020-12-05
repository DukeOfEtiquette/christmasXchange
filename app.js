const USERS = {
    'kevin': {
        passwd: 'pass',
        xchange: 'Adam'
    },
    'shanna': {
        passwd: 'pass',
        xchange: 'Denae'
    },
    'kelsie': {
        passwd: 'pass',
        xchange: 'Shanna'
    },
    'austin': {
        passwd: 'pass',
        xchange: 'Kevin'
    },
    'denae': {
        passwd: 'pass',
        xchange: 'Shanna'
    },
    'adam': {
        passwd: 'pass',
        xchange: 'Kelsie'
    }
};


window.onload = () => {
    console.log('hello christmas');
    document.getElementById('user').focus();

    document.getElementById('login').addEventListener('keyup', (e) => {
        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
            // Cancel the default action, if needed
            event.preventDefault();
            // Trigger the button element with a click
            document.getElementById("button").click();
        }
    });

    document.getElementById('button').onclick = (e) => {
        e.preventDefault();
        console.log('button clicked!');

        var user = document.getElementById('user').value.toLowerCase();
        var passwd = document.getElementById('passwd').value;
        console.log(user);
        console.log(passwd);

        if(USERS[user]){
            if(USERS[user].passwd === passwd){
                console.log(`Your xchange partner is: ${USERS[user].xchange}`);
                document.getElementById('secret-santa').innerHTML = USERS[user].xchange;
            }else {
                console.log('invalid name and password combination!');
            }
        }
    }
}