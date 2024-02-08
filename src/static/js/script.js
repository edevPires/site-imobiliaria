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

