
export default () => ({
    isLoading:true,
    entries : [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Dolor adipisicing incididunt voluptate ad anim cillum veniam ullamco do voluptate laboris elit do laborum.',
            picture:null
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: 'Amet est excepteur laboris et id elit veniam.',
            picture:null
        },
        {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString(),
            text: 'Excepteur id eiusmod eu elit adipisicing mollit occaecat.',
            picture:null
        },
    ]
})