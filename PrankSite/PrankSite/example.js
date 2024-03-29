$(()=>{
    let js_main = document.querySelectorAll('.js-m');
    const types_1 = [
        'function', 'let',
        'const', 'var',
        'async', 'for',
        'while', 'do',
        'if', 'else'
    ];
    const types_2 = [
        'split', 'replace',
        'forEach', 'querySelectorAll',
        'querySelector',
        'getElementById', 'getElementbyClassName',
        'getElementByTagName', 'join', 'log'
    ];

    const code_area = document.querySelector('.code-area');
    let data = null;

    function trigger_syntax(){
        js_main.forEach(el => {
            for (let i = 0; i < el.children.length; i++){
                if (el.children[i].tagName = 'code'){
                    data = el.children[i].innerHTML;

                    if (code_area.classList.contains('fill-spaces')){
                        code_area.innerHTML = code_area.innerHTML.replace(/  /g, '<span class="token-empty-space">•</span>')
                    }

                    data = data.replace(/'(.*?)'/g, '<span class="token-string">&apos;$1&apos;</span>');

                    types_1.forEach(type1 =>{
                        
                        let reg = new RegExp(type1, 'g')
                        data = data.replace(reg, `<span class="token-tp1">${type1}</span>`);

                    });

                    types_2.forEach(type2 => {

                        let reg = new RegExp(type2, 'g')
                        data = data.replace(reg, `<span class="token-tp2">${type2}</span>`);

                    });

                    el.children[i].innerHTML = data;
                }
            }
        });

        let active_spacing = false;

        document.querySelector('#add-spacing-btn').addEventListener('click', e =>{
            let ev = e.event || window.event

            if (!active_spacing){
                if (ev.target.parentElement.parentElement.classList.contains('script-preview')
                &&
                ev.target.parentElement.parentElement.classList.contains('js-m')){

                code_area.classList.add('fill-spaces');

                trigger_syntax();

                active_spacing = !active_spacing;
            }
            }
        });

    }
    trigger_syntax();
})