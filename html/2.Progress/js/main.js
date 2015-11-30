var progress = (function () {

	// Инициализируем наш модуль
	var init = function () {
		_progressPercent();
	};

	// Функция вставки текста с процентами
	var _progressPercent = function () {

		// Определяем все объекты, с которыми будем работать
		var bar = $('.progress-bar'),
			barSuccess = $('.progress-bar__success'),
			widthBar = bar.css('width').slice(0, -2),
			percent = barSuccess.css('width').slice(0, -2);
			percentBlock = $('.progress-bar__percent');

		// Вставляем в блок полученный процент
		percentBlock.text(percent * 100 / widthBar + '%');
	};

	//Возвращаем объект (Публичные методы)
	return {
		init: init
	}
})();

progress.init();