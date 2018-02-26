const state = {
    menuItems: {
        1: {
            name: 'Margherita',
            description: 'A delcious margheritaaaa made by hands',
            options: [{
                    size: 9,
                    price: 7.96
                },
                {
                    size: 12,
                    price: 12.958768
                }
            ]
        },
        2: {
            name: 'Tedesca',
            description: 'A delcious margheritaaaa made with patatos',
            options: [{
                    size: 9,
                    price: 7.96
                },
                {
                    size: 12,
                    price: 12.95
                }
            ]
        },
        3: {
            name: '4 formaggi',
            description: 'A delcious margheritaaaa with 4 cheese',
            options: [{
                    size: 9,
                    price: 7.96
                },
                {
                    size: 12,
                    price: 12.95
                }
            ]
        }
    },
}
const getters = {
    getMenuItems: state => state.menuItems

}
const mutations = {

}
const actions = {

}

export default {
    state,
    mutations,
    getters,
    actions,
}