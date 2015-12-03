var stars = (function () {

	// Инициализируем наш модуль
	var init = function () {
		_setUpListners();
	};

	// Прослушиваем события 
	var _setUpListners = function () {
		$('.buttons__item_small').on('click', _downloadSmall);
		$('.buttons__item_big').on('click', _downloadBig);
	};

	// Инициализация загрузки и обработки малого кол-ва данных
	var _downloadSmall = function () {

		// Определяем все объекты, с которыми будем работать
		var table = $('.table-body'),
			urlServer = 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&adress={addressObject}&description={lorem|32}';
		
		// Загружаем данные с сервера
		base = _ajaxDownload(urlServer, table);
	};

	// Инициализация загрузки и обработки большого кол-ва данных
	var _downloadBig = function () {

		// Определяем все объекты, с которыми будем работать
		var table = $('.table-body'),
			urlServer = 'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&adress={addressObject}&description={lorem|32}';
	
		// Загружаем данные с сервера
		base = _ajaxDownload(urlServer, table);
	};

	// Функция загрузки данных с сервера
	var _ajaxDownload = function (urlServer,table) {
		// Инициализируем AJAX запрос на сервер 
		var result = $.ajax({
				// Адрес php файла обработчика
				url: urlServer,
				// Метод, с помощью которого отправляем
				type:'GET',
				// Тип передаваемых данных с сервера
				dataType: 'json'
			})
			// Функция выполняющаяся при ошибке на серверной стороне
			.fail(function(ans) {
				console.log('Проблемы на сервере');
			})
			// Функция выполняющаяся при удачном выполнении скрипта на сервере
			.done(function(ans) {
				// Если все прошло без ошибок
				_fillTable(ans, table);
				return ans;
			});
	}

	// Функция заполнения данными таблицы
	var _fillTable = function (data, table) {
		var $this = table;

		// Очищаем таблицу
		$this.empty();

		// Вводим данные массива
		data.forEach(function(item, i, data) {
			$this.append("<div class='table-row'><div class='table-row__item'>" + item.id + "</div><div class='table-row__item'>" + item.firstName + "</div><div class='table-row__item'>" + item.lastName + "</div><div class='table-row__item'>" + item.email + "</div><div class='table-row__item'>" + item.phone + "</div></div>");
		})
	}


	//Возвращаем объект (Публичные методы)
	return {
		init: init
	}
})();

stars.init();