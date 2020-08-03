const modal = $.modal({
    title: 'i1-kmv modal',
    closable: true,
    content: `
        <h4>Здесь должен быть заголовок контента</h4>
        <p>Здесь должен быть контент</p>
    `,
    width: '400px',
    footerButtons: [
        {text: 'Ok', type: 'primary', handler() {
            console.log('Вы нажали на кнопку "Ok"')
            modal.close()
        }},
        {text: 'Cancel', type: 'danger', handler() {
                console.log('Вы нажали на кнопку "Cancel"')
                modal.close()
            }},
    ]
})