const menu = document.querySelector('#menu');
const sidebarBg  = document.querySelector('#sidebarBg');
const sidebar = document.querySelector('#sidebar');
const sidebarClose = document.querySelector('#sidebarClose');

const hideShowSidebar = (status) => {
    if (status === 'show')
    {
        sidebarBg.classList.remove('hidden');
        sidebarBg.classList.remove('opacity-0');
        sidebarBg.classList.add('opacity-10');
        sidebar.classList.remove('hidden');
        sidebar.classList.add('translate-x-[0px]');
        sidebar.classList.remove('translate-x-[400px]')
    } else {
        sidebar.classList.add('translate-x-${sidebar.offsetWidth}');
        sidebar.classList.remove('translate-x-[0px]');
        sidebar.classList.add('hidden');
        sidebarBg.classList.add('hidden');
        sidebarBg.classList.remove('opacity-10')
        sidebarBg.classList.add('opacity-0');
    }
}

menu.addEventListener('click', () => {
    if (sidebarBg.classList.contains('hidden'))
    {
        hideShowSidebar('show');
    }  
})

sidebarBg.addEventListener('click', () => {
    hideShowSidebar('hide');
})

sidebarClose.addEventListener('click', () => {
    hideShowSidebar('hide');
})

const modal = document.querySelector('.modal')
const modalBg = document.querySelector('.modal-bg')

const saibaBtn = document.querySelectorAll('.saiba')
saibaBtn.forEach(element => {
    element.addEventListener('click', ()=>{
        modal.innerHTML = ''
        modalBg.classList.toggle('hidden')
        modal.classList.toggle('hidden')
        var id = element.id
        casas.forEach(element => {
            if(element.id === id) {
                const htmlInsert = `
                    <div class="flex h-full flex-grow border-r justify-center items-center">
                        <div
                            class="w-3/4 bg-slate-900  h-[300px] rounded-xl bg-cover bg-center"
                            style="
                                background-image: url(${element.img});
                            "
                        ></div>
                    </div>
                    <div class="flex h-full flex-grow max-w-[50%] justify-center items-center">
                        <div class="flex flex-wrap px-5 py-5">
                            <div class="flex justify-between w-full py-3">
                                <h1 class="text-2xl font-bold">${element.casa}</h1>
                                <p>${element.estrelas}</p>
                            </div>
                            <div>
                                <p>
                                    ${element.descricao}
                                </p>
                            </div>
                            <div class="flex justify-center items-center w-full mt-5">
                                <button
                                class="text-xl flex justify-center items-center font-bold bg-blue-800 text-white px-6 py-2 rounded-full hover:scale-105 transition-all hover:scale-110 transition-all"
                                >
                                Saiba Mais
                                </button>
                            </div>
                            </div>
                    </div>
                `
                modal.innerHTML = htmlInsert
            }
        });
    })
});

modalBg.addEventListener('click', ()=> {
    modal.classList.toggle('hidden')
    modalBg.classList.toggle('hidden')
})