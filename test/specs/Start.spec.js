describe('Primeiro teste', () => {
    it('acessra o menu forms ', async () => {
     await $('~Forms').click()
     await $('~text-input').setValue('test')
     expect(await $('~text-input')).toBeDisplayed()
    });
});