var stars = (function () {

	// Инициализируем наш модуль
	var init = function () {
		_setUpListners();
	};

	// Прослушиваем события 
	var _setUpListners = function () {
		$('.stars__item').on('click', _starsSelect);
	};

	// Функция выставления звезд
	var _starsSelect = function () {

		// Определяем все объекты, с которыми будем работать
		var $this = $(this),
			prevElements = $this.prevAll(),
			nextElements = $this.nextAll();

		// Изменяем кол-во звезд в зависимости от нажатия на тот или иной элемент
		$this.addClass('stars__item_active');
		prevElements.addClass('stars__item_active');
		nextElements.removeClass('stars__item_active');
	};

	//Возвращаем объект (Публичные методы)
	return {
		init: init
	}
})();

stars.init();