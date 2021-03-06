class App {
    
    constructor (selector1) {
        this.section = document.querySelectorAll (selector1);

    }
    
    moreInfo () {
        this.section.forEach(function(section){
            const ul = section.childNodes[3];
            const li = ul.querySelectorAll ('li');
            li.forEach (function(li){
                const info = li.querySelectorAll('.alt');
                info.forEach(function(btn){
                    btn.addEventListener('click', function(){
                        let block = document.getElementsByTagName ('body');
                        let div = document.createElement ('div');
                        div.innerHTML = "<h4>Задание - " + li.id + "</h4>";
                        div.setAttribute('class', 'card');
                        document.body.append(div);
                    })
                })
                
            })
        })
    }
    activation () {
        this.section.forEach(function(section){
            const li = section.querySelectorAll ('li');
            li.forEach(function(elem) {
                const btn = elem.querySelectorAll('button')[1]; 
                btn.addEventListener ('click', function(){
                    let ul = elem.parentNode.parentNode;
                    if(ul.id == 'active-projects') {
                        const ulFinnaly = document.querySelector ('#finished-projects ul');                            
                        ulFinnaly.appendChild(elem);
                        btn.innerText = 'Activate';
                    } else {
                        const ulFinnaly = document.querySelector ('#active-projects ul');                            
                        ulFinnaly.appendChild(elem);
                        btn.innerText = 'Finish';
                    }                                    
                })                    
            })                    
        })
    }
}

class Project {
    
}

let aboutThisApp = new App("section");
aboutThisApp.moreInfo();
aboutThisApp.activation();

