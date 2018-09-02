describe('sum', function() {
	it('Проверка sum на true', function() {
		assert.equal(sum(2, 2), true,);
	});
	it('Проверка num на рвенство 5', function() {
		assert.equal(num, 5);
	});

	it('Проверка each на массив', function() {
		assert.isArray(each(arr, myFunc));
	});
	it('Проверка each соответствие результату', function() {
		assert.deepEqual(each(arr, myFunc), [8, 7, 6, 5, 4]);
	});
	it('Проверка each соответствие длины', function() {
		assert.lengthOf(each(arr, myFunc), 5);
	});
});

