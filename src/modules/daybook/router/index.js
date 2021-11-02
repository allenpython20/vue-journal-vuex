export default {
    name: 'daybook',
    component : () => import(/* webpackChunkName: "daybook" */ '@/modules/daybook/layouts/DayBookLayout.vue'),
    children :[
        {
            path: '',
            name: 'no-entry',
            component : () => import(/* webpackChunkName: "daybook-no-entry" */ '@/modules/daybook/viewvs/NoEntrySelected.vue'),
        },
        {
            path: ':id',
            name: 'entry',
            component : () => import(/* webpackChunkName: "daybook-entry" */ '@/modules/daybook/viewvs/EntryView.vue'),
        }
        
        
    ]
}