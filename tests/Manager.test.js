describe('Outer', () => {
    describe('Inner', () => {
      it('should be fun', () => {
        const fun = 'fun';
        expect(fun).toEqual('fun');
      });
      it('should not be fun', () => {
        const notFun = 'boring';
        expect(notFun).not.toEqual('fun');
      });
    });
  });